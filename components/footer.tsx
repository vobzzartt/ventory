import Link from 'next/link'

const navLinks = [
    { title: 'Home', href: '/' },
    { title: 'Features', href: '/features' },
    { title: 'Integrations', href: '/integrations' },
    { title: 'Pricing', href: '/pricing' },
    { title: 'Blog', href: '/blog' },
    { title: 'Careers', href: '/careers' },
    { title: 'Contact', href: '/contact' }
]

const productLinks = [
    { title: 'Ventory Voice', href: '#chat' },
    { title: 'Stock Manager', href: '#chat' },
    { title: 'Sales Insights', href: '#chat' }
]

const solutionLinks = [
    { title: 'Voice Logging', href: '#chat' },
    { title: 'Google STT', href: '#chat' },
    { title: 'SME Co-Pilot', href: '#chat' }
]

const legalLinks = [
    { title: 'Privacy Policy', href: '/privacy' },
    { title: 'Terms of Service', href: '/terms' },
    { title: 'Acceptable Use', href: '/acceptable-use' },
    { title: 'Security', href: '/security' }
]

const socialLinks = [
    {
        name: "X",
        href: "https://x.com/ventoryapp",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor" className="size-5"><path d="M14.6009 2H17.0544L11.6943 8.35385L18 17H13.0627L9.19566 11.7562L4.77087 17H2.31595L8.04904 10.2038L2 2H7.06262L10.5581 6.79308L14.6009 2ZM13.7399 15.4769H15.0993L6.32392 3.44308H4.86506L13.7399 15.4769Z"></path></svg>
        ),
    },
    {
        name: "GitHub",
        href: "https://github.com/ventoryapp",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor" className="size-5"><path fillRule="evenodd" clipRule="evenodd" d="M10 0.257812C4.5 0.257812 0 4.75781 0 10.2578C0 14.6328 2.875 18.3828 6.875 19.7578C7.375 19.8828 7.5 19.5078 7.5 19.2578C7.5 19.0078 7.5 18.3828 7.5 17.5078C4.75 18.1328 4.125 16.2578 4.125 16.2578C3.625 15.1328 3 14.7578 3 14.7578C2.125 14.1328 3.125 14.1328 3.125 14.1328C4.125 14.2578 4.625 15.1328 4.625 15.1328C5.5 16.7578 7 16.2578 7.5 16.0078C7.625 15.3828 7.875 14.8828 8.125 14.6328C5.875 14.3828 3.625 13.5078 3.625 9.63281C3.625 8.50781 4 7.63281 4.625 7.00781C4.5 6.75781 4.125 5.75781 4.75 4.38281C4.75 4.38281 5.625 4.13281 7.5 5.38281C8.25 5.13281 9.125 5.00781 10 5.00781C10.875 5.00781 11.75 5.13281 12.5 5.38281C14.375 4.13281 15.25 4.38281 15.25 4.38281C15.75 5.75781 15.5 6.75781 15.375 7.00781C16 7.75781 16.375 8.63281 16.375 9.63281C16.375 13.5078 14 14.2578 11.75 14.5078C12.125 15.0078 12.5 15.6328 12.5 16.5078C12.5 17.8828 12.5 18.8828 12.5 19.2578C12.5 19.5078 12.625 19.8828 13.25 19.7578C17.25 18.3828 20.125 14.6328 20.125 10.2578C20 4.75781 15.5 0.257812 10 0.257812Z"></path></svg>
        ),
    },
    {
        name: "LinkedIn",
        href: "https://linkedin.com/company/ventoryapp",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="size-5"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
        ),
    }
]

export default function FooterSection() {
    return (
        <footer className="relative z-10 border-t bg-white py-12 dark:bg-transparent">
            <div className="mx-auto max-w-5xl px-6 flex flex-col items-center gap-8">
                <nav className="flex flex-wrap justify-center gap-7 text-sm font-medium">
                    {navLinks.map((link, i) => (
                        <Link
                            key={i}
                            href={link.href}
                            className="relative z-10 text-muted-foreground hover:text-primary duration-150"
                        >
                            {link.title}
                        </Link>
                    ))}
                </nav>
                
                <div className="flex flex-col items-center gap-4 border-t border-b py-8 w-full max-w-4xl">
                    <p className="text-sm text-muted-foreground font-medium uppercase tracking-widest">Contact Ventory Support</p>
                    <a href="mailto:hello@ventory.app" className="text-xl md:text-2xl font-bold hover:text-primary transition-colors">
                        hello@ventory.app
                    </a>
                </div>

                <div className="flex items-center justify-center gap-6 mt-2">
                    {socialLinks.map(({ name, href, icon }) => (
                        <a
                            key={name}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={name}
                            className="relative z-10 text-muted-foreground hover:text-primary duration-150"
                        >
                            {icon}
                        </a>
                    ))}
                </div>
                
                <div className="w-full mt-8 flex flex-col gap-4">
                    <span className="block text-center text-sm text-muted-foreground">
                        © {new Date().getFullYear()} Ventory. Talk to Your Shop. Track Your Sales.
                    </span>
                </div>
            </div>
        </footer>
    )
}
