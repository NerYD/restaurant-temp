"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
    { name: "Home", href: "/" },
    { name: "Galeria", href: "/galeria" },
    { name: "Contactos", href: "/contactos" },
];

export default function NavBar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    // Detect scroll to add glass effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-alypios-bg/80 backdrop-blur-md border-b border-white/10 py-4 shadow-xl" : "bg-transparent py-6"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative w-32 h-12 md:w-40 md:h-16 transition-transform duration-300 group-hover:scale-105">
                            <Image
                                src="/alypios_logo.webp"
                                alt="Cervejaria Alypios Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-sm font-sans tracking-widest uppercase transition-colors duration-300 hover:text-alypios-accent ${pathname === link.href ? "text-alypios-accent font-semibold" : "text-white/80"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="/menu"
                            className="px-6 py-2 rounded-full border border-alypios-accent text-alypios-accent font-sans text-sm tracking-widest uppercase hover:bg-alypios-accent hover:text-white transition-all duration-300 scale-100 hover:scale-[1.02]"
                        >
                            Menu
                        </Link>
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-white hover:text-alypios-accent transition-colors"
                        onClick={() => setMobileMenuOpen(true)}
                        aria-label="Open menu"
                    >
                        <Menu size={28} />
                    </button>
                </div>
            </header>

            {/* Mobile Navigation Sheet */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-[60] bg-alypios-bg/95 backdrop-blur-xl border-l border-white/10 flex flex-col"
                    >
                        <div className="flex justify-end p-6">
                            <button
                                className="text-white hover:text-alypios-accent transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                                aria-label="Close menu"
                            >
                                <X size={32} />
                            </button>
                        </div>

                        <nav className="flex flex-col items-center justify-center flex-1 gap-8">
                            {NAV_LINKS.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`text-2xl font-serif tracking-widest transition-colors duration-300 ${pathname === link.href ? "text-alypios-accent" : "text-white"
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                href="/menu"
                                onClick={() => setMobileMenuOpen(false)}
                                className="mt-8 px-8 py-3 rounded-full bg-alypios-accent text-white font-sans text-lg tracking-widest uppercase hover:opacity-90 transition-all duration-300"
                            >
                                Ver Menu
                            </Link>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
