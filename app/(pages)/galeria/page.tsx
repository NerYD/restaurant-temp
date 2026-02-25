"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Images extracted from site2.megatic.pt/galeria/ via Firecrawl scrape
const GALLERY_IMAGES = [
    { src: "https://site2.megatic.pt/wp-content/uploads/2026/01/8.webp", alt: "Mashed Potato", aspect: "aspect-[4/3]" },
    { src: "https://site2.megatic.pt/wp-content/uploads/2026/01/fransesinha.webp", alt: "Francesinha Authentic", aspect: "aspect-square" },
    { src: "https://site2.megatic.pt/wp-content/uploads/2026/01/cashorrinho.webp", alt: "Primo Meats Pizza / Cachorrinho", aspect: "aspect-[3/4]" },
    { src: "https://site2.megatic.pt/wp-content/uploads/2026/01/ovos.webp", alt: "Steak And Ham Pie / Ovos Rotos", aspect: "aspect-[4/3]" },
    { src: "https://site2.megatic.pt/wp-content/uploads/2026/01/hamburguer_prato.webp", alt: "Fried Prawn Roll / Hambúrguer no Prato", aspect: "aspect-square" },
    { src: "https://site2.megatic.pt/wp-content/uploads/2026/01/tropical.webp", alt: "Pollock Wheat Curry / Bife Tropical", aspect: "aspect-[3/4]" },
    { src: "https://site2.megatic.pt/wp-content/uploads/2026/01/hamburguer.webp", alt: "Hambúrguer", aspect: "aspect-[4/3]" },
    { src: "https://site2.megatic.pt/wp-content/uploads/2026/01/7.webp", alt: "Dish 7", aspect: "aspect-square" },
];

export default function GaleriaPage() {
    return (
        <main className="min-h-screen bg-alypios-bg pt-32 pb-24 px-4 md:px-8 relative overflow-hidden">
            {/* Background glow effects */}
            <div className="absolute top-0 left-1/2 w-[800px] h-[800px] bg-alypios-accent/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Header */}
                <div className="text-center mb-20">
                    <span className="text-alypios-accent font-sans text-sm md:text-base tracking-[0.2em] uppercase block mb-4">Bons Momentos</span>
                    <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white/90 mb-6 drop-shadow-lg">Sabores, amigos e histórias</h1>
                    <p className="font-sans text-white/60 text-lg max-w-2xl mx-auto">
                        A essência da Cervejaria Alypios capturada em momentos únicos. Pura tradição, em cada detalhe.
                    </p>
                </div>

                {/* Masonry / Bento Grid Layout */}
                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    {GALLERY_IMAGES.map((image, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, delay: (i % 3) * 0.1, ease: "easeOut" }}
                            className={`relative w-full ${image.aspect} overflow-hidden rounded-2xl group border border-white/5 bg-white/5`}
                        >
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />

                            {/* Note: Using unoptimized img tag due to Next.js strict remotePatterns for next/image unless configured in next.config.mjs */}
                            {/* For production, next.config.mjs requires the hostname site2.megatic.pt */}
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                                loading="lazy"
                            />

                            {/* Optional Hover Overlay Text */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex flex-col justify-end p-6">
                                <span className="text-alypios-accent font-sans text-sm tracking-widest uppercase mb-1">Cervejaria Alypios</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </main>
    );
}
