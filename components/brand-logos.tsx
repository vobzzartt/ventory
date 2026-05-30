import React from 'react'

export const PaystackLogo = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 120 28" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M11.6 15.6H4.4V21.6H11.6C13.2 21.6 14.4 20.4 14.4 18.8V18.4C14.4 16.8 13.2 15.6 11.6 15.6Z" fill="currentColor"/>
        <path d="M11.6 6.4H4.4V12.4H11.6C13.2 12.4 14.4 11.2 14.4 9.6V9.2C14.4 7.6 13.2 6.4 11.6 6.4Z" fill="currentColor"/>
        <path d="M0 0V28H11.6C16.8 28 21.2 23.6 21.2 18.4V9.6C21.2 4.4 16.8 0 11.6 0H0ZM18.4 18.4C18.4 22.1 15.3 25.2 11.6 25.2H2.8V2.8H11.6C15.3 2.8 18.4 5.9 18.4 9.6V18.4Z" fill="currentColor"/>
        <path d="M35.6 12.4H28.4V18.4C28.4 20.1 29.8 21.5 31.5 21.5C33.2 21.5 34.6 20.1 34.6 18.4V12.4H35.6ZM38.4 9.2V21.6C38.4 25.1 35.5 28 32 28C28.5 28 25.6 25.1 25.6 21.6V9.2H28.4V21.5C28.4 23.5 30 25.1 32 25.1C34 25.1 35.6 23.5 35.6 21.5V9.2H38.4Z" fill="currentColor"/>
        <path d="M52.8 12.4H45.6V18.4C45.6 20.1 47 21.5 48.7 21.5C50.4 21.5 51.8 20.1 51.8 18.4V12.4H52.8ZM55.6 9.2V21.6C55.6 25.1 52.7 28 49.2 28C45.7 28 42.8 25.1 42.8 21.6V9.2H45.6V21.5C45.6 23.5 47.2 25.1 49.2 25.1C51.2 25.1 52.8 23.5 52.8 21.5V9.2H55.6Z" fill="currentColor"/>
        <path d="M70 12.4H62.8V18.4C62.8 20.1 64.2 21.5 65.9 21.5C67.6 21.5 69 20.1 69 18.4V12.4H70ZM72.8 9.2V21.6C72.8 25.1 69.9 28 66.4 28C62.9 28 60 25.1 60 21.6V9.2H62.8V21.5C62.8 23.5 64.4 25.1 66.4 25.1C68.4 25.1 70 23.5 70 21.5V9.2H72.8Z" fill="currentColor"/>
    </svg>
)

export const FlutterwaveLogo = ({ className }: { className?: string }) => (
    <div className={`flex items-center font-bold text-orange-500 ${className}`}>
        <span className="text-2xl tracking-tighter">Flutterwave</span>
    </div>
)

export const MoniepointLogo = ({ className }: { className?: string }) => (
    <div className={`flex items-center font-black text-blue-600 italic ${className}`}>
        <span className="text-xl tracking-tight">Moniepoint</span>
    </div>
)

export const KudaLogo = ({ className }: { className?: string }) => (
    <div className={`flex items-center font-extrabold text-[#40196d] ${className}`}>
        <span className="text-2xl tracking-tighter uppercase">kuda.</span>
    </div>
)
