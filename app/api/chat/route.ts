import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

export async function POST(req: Request) {
    try {
        const apiKey = process.env.GEMINI_API_KEY;
        
        if (!apiKey) {
            return NextResponse.json(
                { success: false, error: "GEMINI_API_KEY is not configured on the server. Please add it to your .env.local file." },
                { status: 500 }
            );
        }

        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ 
            model: "gemini-2.5-flash",
            systemInstruction: "You are Ventory, a super-intelligent, incredibly friendly AI assistant for small businesses. You are highly conversational and act exactly like a knowledgeable human partner. \n1. You are happy to answer ANY question the user asks, whether it's about business strategy, history, general knowledge, or casual conversation.\n2. You are an expert at parsing voice notes. If a voice transcription is completely empty or just background noise (like 'um', 'ah'), politely say: 'I didn't quite catch that. Could you repeat it or type it out?'\n3. If the user tells you to log a sale or inventory, naturally acknowledge it (e.g., 'Got it! I've added 10 sachets of milk to your stock.') but AVOID repeating the exact same robotic phrases.\n4. You can analyze receipt images and extract data perfectly. Always maintain a warm, helpful, and natural human tone."
        });

        const formData = await req.formData();
        const text = formData.get('text') as string | null;
        const audio = formData.get('audio') as Blob | null;
        const image = formData.get('image') as Blob | null;

        const parts: any[] = [];

        // 1. Add Text
        if (text && text.trim().length > 0) {
            parts.push({ text: text });
        }

        // 2. Add Audio (if user sent voice note)
        if (audio) {
            const buffer = Buffer.from(await audio.arrayBuffer());
            parts.push({
                inlineData: {
                    data: buffer.toString('base64'),
                    mimeType: audio.type || 'audio/webm'
                }
            });
            if (!text) {
                parts.push({ text: "Please transcribe this voice note and respond to its request as the Ventory AI assistant."});
            }
        }

        // 3. Add Image (if user sent a receipt)
        if (image) {
            const buffer = Buffer.from(await image.arrayBuffer());
            parts.push({
                inlineData: {
                    data: buffer.toString('base64'),
                    mimeType: image.type || 'image/jpeg'
                }
            });
            if (!text && !audio) {
                parts.push({ text: "Please scan this receipt/image and let me know what inventory I should log."});
            }
        }

        if (parts.length === 0) {
            return NextResponse.json(
                { success: false, error: "No input provided." },
                { status: 400 }
            );
        }

        const result = await model.generateContent(parts);
        const responseText = result.response.text();

        return NextResponse.json({ 
            success: true, 
            reply: responseText 
        });

    } catch (error: any) {
        console.error("Gemini API Error:", error);
        return NextResponse.json(
            { success: false, error: error.message || "Failed to process the request via Gemini." },
            { status: 500 }
        );
    }
}
