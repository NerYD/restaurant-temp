"use client";

import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative z-20 w-full bg-[#030303] border-t border-white/5 py-12 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">

                {/* Brand & Left Info */}
                <div className="flex flex-col items-center md:items-start space-y-4">
                    <Link href="/" className="font-serif text-3xl tracking-widest text-alypios-accent hover:opacity-80 transition-opacity">
                        ALYPIOS
                    </Link>
                    <p className="font-sans text-white/50 text-sm max-w-xs text-center md:text-left">
                        A tradition poured with intention. The pure expression of Francesinha in Bragança and Viseu.
                    </p>
                </div>

                {/* Legal & Compliance Links */}
                <div className="flex flex-col items-center gap-3 font-sans text-sm text-white/60">
                    <Link href="/legal/privacidade" className="hover:text-alypios-accent transition-colors duration-300">
                        Política de Privacidade
                    </Link>
                    <Link href="/legal/litigios" className="hover:text-alypios-accent transition-colors duration-300">
                        Resolução de Litígios Online
                    </Link>
                    <a
                        href="https://www.livroreclamacoes.pt/inicio/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-alypios-accent transition-colors duration-300"
                    >
                        Livro de Reclamações
                    </a>
                </div>

                {/* Socials & Copyright */}
                <div className="flex flex-col items-center md:items-end space-y-5">
                    <div className="flex space-x-6">
                        <a
                            href="https://www.facebook.com/profile.php?id=100071647071601"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/60 hover:text-alypios-accent transform hover:scale-110 transition-all duration-300 pointer-events-auto cursor-pointer"
                        >
                            <Facebook size={24} />
                        </a>
                        <a
                            href="https://www.instagram.com/cervejaria.alypios/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/60 hover:text-alypios-accent transform hover:scale-110 transition-all duration-300 pointer-events-auto cursor-pointer"
                        >
                            <Instagram size={24} />
                        </a>
                    </div>
                    <p className="font-sans text-white/40 text-xs">
                        © {new Date().getFullYear()} Cervejaria Alypios. Todos os Direitos Reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
}
