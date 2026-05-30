'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Mic, Send, Camera, ArrowLeft, Trash2, Plus } from 'lucide-react'
import Link from 'next/link'

type Message = {
    id: string;
    text: string;
    sender: 'user' | 'ai';
    time: string;
    type: 'text' | 'audio' | 'image' | 'error';
    status?: 'sent' | 'delivered' | 'read';
    mediaUrl?: string; // Base64 data URL for audio or image
}

export default function ChatInterface() {
    const [messages, setMessages] = useState<Message[]>([])
    const [inputText, setInputText] = useState('')
    const [isTyping, setIsTyping] = useState(false)
    const [isRecording, setIsRecording] = useState(false)
    const [recordingTime, setRecordingTime] = useState(0)

    const messagesEndRef = useRef<HTMLDivElement>(null)
    const mediaRecorderRef = useRef<MediaRecorder | null>(null)
    const audioChunksRef = useRef<Blob[]>([])
    const timerIntervalRef = useRef<NodeJS.Timeout | null>(null)

    const imageInputRef = useRef<HTMLInputElement>(null)
    const docInputRef = useRef<HTMLInputElement>(null)

    // Load from LocalStorage on mount
    useEffect(() => {
        const saved = localStorage.getItem('ventory_chat_history_v2')
        if (saved) {
            try {
                const parsed = JSON.parse(saved)
                if (parsed && parsed.length > 0) {
                    setMessages(parsed)
                } else {
                    initializeChat()
                }
            } catch {
                initializeChat()
            }
        } else {
            initializeChat()
        }
    }, [])

    const initializeChat = () => {
        setMessages([{
            id: Date.now().toString(),
            text: 'Hello! I am Ventory, your AI SME Assistant.',
            sender: 'ai',
            time: formatTime(),
            type: 'text'
        }])
    }

    const clearChat = () => {
        if (confirm("Are you sure you want to clear this chat history?")) {
            localStorage.removeItem('ventory_chat_history_v2')
            initializeChat()
        }
    }

    // Save to LocalStorage on messages change
    useEffect(() => {
        if (messages.length > 0) {
            localStorage.setItem('ventory_chat_history_v2', JSON.stringify(messages))
        }
        scrollToBottom()
    }, [messages])

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }

    const formatTime = () => {
        return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }

    const blobToBase64 = (blob: Blob): Promise<string> => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result as string);
            reader.onerror = reject;
            reader.readAsDataURL(blob);
        });
    }

    const sendMessage = async (text: string, mediaBlob?: Blob, mediaType?: 'audio' | 'image') => {
        if (!text.trim() && !mediaBlob) return;

        const newMessageId = Date.now().toString()
        let base64Url = undefined;

        if (mediaBlob) {
            base64Url = await blobToBase64(mediaBlob);
        }

        const newMsg: Message = {
            id: newMessageId,
            text: text,
            sender: 'user',
            time: formatTime(),
            type: mediaType || 'text',
            status: 'sent',
            mediaUrl: base64Url
        }

        setMessages(prev => [...prev, newMsg])
        setInputText('')
        setIsTyping(true)

        // Simulate read receipt
        setTimeout(() => {
            setMessages(prev => prev.map(m => m.id === newMessageId ? { ...m, status: 'read' } : m))
        }, 800)

        const formData = new FormData()
        if (text) formData.append('text', text)
        if (mediaBlob) {
            if (mediaType === 'audio') {
                formData.append('audio', mediaBlob, 'voicenote.webm')
            } else if (mediaType === 'image') {
                formData.append('image', mediaBlob, 'upload.jpg')
            }
        }

        try {
            const res = await fetch('/api/chat', {
                method: 'POST',
                body: formData
            })

            const data = await res.json()
            setIsTyping(false)

            if (data.success) {
                setMessages(prev => [...prev, {
                    id: Date.now().toString(),
                    text: data.reply,
                    sender: 'ai',
                    time: formatTime(),
                    type: 'text'
                }])
            } else {
                setMessages(prev => [...prev, {
                    id: Date.now().toString(),
                    text: data.error || "Connection failed.",
                    sender: 'ai',
                    time: formatTime(),
                    type: 'error'
                }])
            }
        } catch (error) {
            setIsTyping(false)
            setMessages(prev => [...prev, {
                id: Date.now().toString(),
                text: "Python backend connection failed. Is the server running on port 8000?",
                sender: 'ai',
                time: formatTime(),
                type: 'error'
            }])
        }
    }

    const startRecording = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
            const mediaRecorder = new MediaRecorder(stream)
            mediaRecorderRef.current = mediaRecorder
            audioChunksRef.current = []

            mediaRecorder.ondataavailable = (event) => {
                if (event.data.size > 0) {
                    audioChunksRef.current.push(event.data)
                }
            }

            mediaRecorder.onstop = async () => {
                const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' })
                await sendMessage('', audioBlob, 'audio')
                stream.getTracks().forEach(track => track.stop())
            }

            mediaRecorder.start()
            setIsRecording(true)
            setRecordingTime(0)

            timerIntervalRef.current = setInterval(() => {
                setRecordingTime(prev => prev + 1)
            }, 1000)

        } catch (err) {
            alert("Microphone access denied or unavailable.")
        }
    }

    const stopRecording = () => {
        if (mediaRecorderRef.current && isRecording) {
            mediaRecorderRef.current.stop()
            setIsRecording(false)
            if (timerIntervalRef.current) clearInterval(timerIntervalRef.current)
        }
    }

    const formatDuration = (seconds: number) => {
        const m = Math.floor(seconds / 60).toString().padStart(2, '0')
        const s = (seconds % 60).toString().padStart(2, '0')
        return `${m}:${s}`
    }

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0]
            sendMessage('', file, 'image')
        }
    }

    return (
        <div className="flex flex-col h-screen bg-[#E5DDD5] max-w-2xl mx-auto shadow-2xl relative overflow-hidden font-sans">
            {/* Hidden file inputs */}
            <input type="file" accept="image/*" ref={imageInputRef} onChange={handleImageUpload} className="hidden" />
            <input type="file" accept="*/*" ref={docInputRef} onChange={handleImageUpload} className="hidden" />

            {/* Header */}
            <header className="bg-[#075E54] text-white p-3 flex items-center justify-between z-10 shadow-md">
                <div className="flex items-center gap-2">
                    <Link href="/" className="p-1 hover:bg-white/10 rounded-full transition-colors flex items-center">
                        <ArrowLeft className="size-6" />
                        <div className="size-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-lg overflow-hidden ml-1">
                            <span className="text-white">V</span>
                        </div>
                    </Link>
                    <div className="flex flex-col ml-2 cursor-pointer">
                        <h1 className="font-semibold text-[17px] leading-tight">Ventory AI SME</h1>
                        <span className="text-[13px] text-white/80 font-medium">
                            {isTyping ? "typing..." : "online"}
                        </span>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <button onClick={clearChat} className="p-2 hover:bg-white/10 rounded-full transition-colors" title="Clear Chat">
                        <Trash2 className="size-5" />
                    </button>
                </div>
            </header>

            {/* Chat Area Background */}
            <div className="absolute inset-0 z-0 opacity-40 pointer-events-none"
                style={{ backgroundImage: 'url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png")', backgroundSize: 'contain' }}>
            </div>

            {/* Chat Messages */}
            <main className="flex-1 overflow-y-auto p-3 space-y-3 z-10 scroll-smooth">
                <div className="flex justify-center mb-4 mt-2">
                    <span className="bg-[#E1F3FB] text-[#4A4A4A] text-xs px-3 py-1.5 rounded-lg shadow-sm">
                        Today
                    </span>
                </div>

                <div className="flex justify-center mb-6">
                    <div className="bg-[#FFEEDB] text-[#8C6D4F] text-xs p-3 rounded-lg shadow-sm max-w-[85%] text-center">
                        <p>Your business uses a secure service from Ventory to manage this chat. Your messages may be used to train our model for better AI assistance.</p>
                    </div>
                </div>

                <AnimatePresence initial={false}>
                    {messages.map((msg) => (
                        <motion.div
                            key={msg.id}
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                            <div className={`max-w-[85%] rounded-lg p-1.5 shadow-sm relative group ${msg.sender === 'user'
                                    ? 'bg-[#DCF8C6] text-[#111111] rounded-tr-sm'
                                    : msg.type === 'error'
                                        ? 'bg-[#FFCCCC] text-[#990000] rounded-tl-sm border border-[#FF9999]'
                                        : 'bg-[#FFFFFF] text-[#111111] rounded-tl-sm'
                                }`}>
                                {msg.type === 'error' && <div className="font-bold text-[11px] px-1 mb-1 uppercase tracking-wider opacity-80">Connection Error</div>}

                                {msg.type === 'image' && msg.mediaUrl && (
                                    <div className="mb-4">
                                        <img src={msg.mediaUrl} alt="Uploaded" className="rounded-md max-w-[240px] max-h-[300px] object-cover" />
                                    </div>
                                )}

                                {msg.type === 'audio' && msg.mediaUrl ? (
                                    <div className="min-w-[200px] pb-3 px-1 mt-1">
                                        <div className="flex items-center gap-2">
                                            <div className="size-10 rounded-full bg-[#00A884] flex items-center justify-center text-white shrink-0 shadow-sm">
                                                <Mic className="size-5" />
                                            </div>
                                            <audio controls src={msg.mediaUrl} className="h-8 max-w-[180px]" />
                                        </div>
                                    </div>
                                ) : (
                                    msg.text && <p className="text-[14.5px] px-1 leading-[19px] whitespace-pre-wrap pr-14 pb-3">{msg.text}</p>
                                )}

                                <div className={`text-[10.5px] absolute bottom-1 right-2 flex items-center gap-1 ${msg.sender === 'user' ? 'text-[#000000]/40' : 'text-[#000000]/40'
                                    }`}>
                                    <span className="mt-[2px] bg-inherit/50 rounded-full px-1">{msg.time}</span>
                                    {msg.sender === 'user' && (
                                        <CheckCheck className={`size-4 ${msg.status === 'read' ? 'text-[#34B7F1]' : 'text-zinc-400'}`} />
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}

                    {isTyping && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="flex justify-start"
                        >
                            <div className="bg-[#FFFFFF] rounded-lg rounded-tl-sm px-4 py-3 shadow-sm flex items-center gap-1.5">
                                <div className="size-2 bg-[#075E54]/40 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                <div className="size-2 bg-[#075E54]/60 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                                <div className="size-2 bg-[#075E54]/80 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
                <div ref={messagesEndRef} className="h-2" />
            </main>

            {/* Input Area */}
            <div className="bg-[#f0f0f0] p-2 z-10 flex items-end gap-2 pb-4 sm:pb-2">
                <button
                    onClick={() => docInputRef.current?.click()}
                    className="p-2.5 text-[#54656f] hover:bg-[#d9d9d9] rounded-full transition-colors shrink-0"
                >
                    <Plus className="size-6" />
                </button>

                <div className="flex-1 bg-[#FFFFFF] rounded-2xl flex items-center shadow-sm relative min-h-[42px]">
                    {isRecording ? (
                        <div className="flex-1 flex items-center px-4 gap-3">
                            <div className="size-3 bg-[#e53935] rounded-full animate-pulse" />
                            <span className="text-[#e53935] font-mono flex-1 text-[15px]">{formatDuration(recordingTime)}</span>
                            <span className="text-xs text-muted-foreground animate-pulse pr-2">Recording...</span>
                        </div>
                    ) : (
                        <>
                            <textarea
                                value={inputText}
                                onChange={(e) => setInputText(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' && !e.shiftKey) {
                                        e.preventDefault()
                                        sendMessage(inputText)
                                    }
                                }}
                                placeholder="Type a message"
                                className="flex-1 bg-transparent border-0 focus:ring-0 resize-none py-[10px] pl-4 pr-10 max-h-32 min-h-[42px] scrollbar-hide text-[15px] placeholder:text-[#8696a0]"
                                rows={1}
                            />
                            <button
                                onClick={() => imageInputRef.current?.click()}
                                className="absolute right-2 p-2 text-[#8696a0] hover:text-[#54656f] transition-colors"
                                title="Attach Image"
                            >
                                <Camera className="size-[22px]" />
                            </button>
                        </>
                    )}
                </div>

                {inputText.trim() ? (
                    <button
                        onClick={() => sendMessage(inputText)}
                        className="bg-[#00A884] text-white size-[42px] rounded-full flex items-center justify-center shadow-sm hover:bg-[#008f6f] transition-colors shrink-0"
                    >
                        <Send className="size-5 ml-0.5" />
                    </button>
                ) : (
                    <button
                        onMouseDown={startRecording}
                        onMouseUp={stopRecording}
                        onMouseLeave={stopRecording}
                        onTouchStart={startRecording}
                        onTouchEnd={stopRecording}
                        className={`size-[42px] rounded-full flex items-center justify-center shadow-sm transition-all shrink-0 ${isRecording ? 'bg-[#e53935] text-white scale-110' : 'bg-[#00A884] text-white hover:bg-[#008f6f]'
                            }`}
                    >
                        <Mic className="size-[22px]" />
                    </button>
                )}
            </div>
        </div>
    )
}

function CheckCheck({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M18 6 7 17l-5-5" />
            <path d="m22 10-7.5 7.5L13 16" />
        </svg>
    )
}
