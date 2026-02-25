"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
    { text: "Francesinha transmontana top. Boa relação qualidade-preço. Atendimento muito simpático e rápido.", author: "Monica R." },
    { text: "Restaurante fantástico com a melhor comida, serviço e ambiente.", author: "Luis" },
    { text: "Boa comida e uma simpatia que faz a diferença.", author: "Vialar N." },
    { text: "Delicious “francesinhas”! Nice place to have lunch or dinner outside.", author: "Helena B." },
    { text: "Simpatia e profissionalismo. As francesinhas são ótimas. Vale a pena repetir.", author: "Alexandrino S." },
];

export default function ReviewMarquee() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 max-w-7xl mx-auto">
            {reviews.map((review, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                    className="flex flex-col space-y-4 text-white/80 font-sans tracking-wide px-8 py-8 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-md hover:border-alypios-accent/30 hover:-translate-y-1 transition-all duration-300 h-full"
                >
                    <div className="flex space-x-1 text-alypios-accent">
                        {[...Array(5)].map((_, j) => (
                            <Star key={j} size={16} fill="currentColor" />
                        ))}
                    </div>
                    <p className="text-lg italic flex-1">&quot;{review.text}&quot;</p>
                    <span className="text-alypios-accent/80 text-sm font-semibold uppercase tracking-wider">— {review.author}</span>
                </motion.div>
            ))}
        </div>
    );
}
