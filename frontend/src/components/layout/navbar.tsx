import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <Link href="/" className="flex items-center space-x-2">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/logo.png" alt="Acelab" className="h-8 w-auto object-contain" />
                    <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent hidden sm:inline-block">
                        Acelab Tutors
                    </span>
                </Link>
                <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
                    <Link href="#features" className="transition-colors hover:text-primary">
                        Why Us?
                    </Link>
                    <Link href="#how-it-works" className="transition-colors hover:text-primary">
                        How It Works
                    </Link>
                    <Link href="#testimonials" className="transition-colors hover:text-primary">
                        Success Stories
                    </Link>
                </nav>
                <div className="flex items-center space-x-4">
                    <Link href="/login" className="text-sm font-medium hover:underline underline-offset-4 hidden sm:block">
                        Log in
                    </Link>
                    <Link href="/register" className="hidden sm:inline-flex">
                        <Button size="sm">Get Started</Button>
                    </Link>
                </div>
            </div>
        </header>
    );
}
