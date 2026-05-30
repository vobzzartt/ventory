'use client';

import React from 'react';
import { MessageSquare } from 'lucide-react';
import Link from 'next/link';

export default function ChatbotWidget() {
  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      <Link
        href="/chat"
        className="w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 hover:scale-105 active:scale-95 shadow-xl shadow-blue-600/30 text-white flex items-center justify-center transition-all duration-200"
      >
        <MessageSquare className="w-6 h-6" />
      </Link>
    </div>
  );
}
