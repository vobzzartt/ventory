import { cn } from '@/lib/utils'

export const Logo = ({ className, uniColor }: { className?: string; uniColor?: boolean }) => {
    return (
        <div className={cn("flex items-center gap-2", className)}>
            <LogoIcon className="size-8" uniColor={uniColor} />
            <span className="text-xl font-bold tracking-tight text-foreground">
                Ventory<span className="text-primary">.</span>
            </span>
        </div>
    )
}

export const LogoIcon = ({ className, uniColor }: { className?: string; uniColor?: boolean }) => {
    return (
        <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={cn('size-8 text-primary', className)}>
            {/* Top Left: Square */}
            <rect x="2" y="2" width="13" height="13" rx="1" fill="currentColor" />
            
            {/* Top Right: Rounded TR */}
            <path d="M17 2H22C26.4183 2 30 5.58172 30 10V15H17V2Z" fill="currentColor" />
            
            {/* Bottom Left: Rounded BL */}
            <path d="M2 17H15V30H10C5.58172 30 2 26.4183 2 22V17Z" fill="currentColor" />
            
            {/* Bottom Right: Square */}
            <rect x="17" y="17" width="13" height="13" rx="1" fill="currentColor" />
        </svg>
    )
}

export const LogoStroke = ({ className }: { className?: string }) => {
    return (
        <LogoIcon className={className} uniColor />
    )
}
