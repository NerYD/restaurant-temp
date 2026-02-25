"use client";

import { motion } from "framer-motion";

const MEALS = {
    entradas: [
        { name: "Asas de frango", desc: "Asas de frango (4un)", price: "6,50€" },
        { name: "Sopa da Casa", desc: "", price: "2,80€" },
        { name: "Gratinado à Alypios", desc: "Pão, Queijo, Chouriça e Oregãos", price: "1,80€" },
        { name: "Cachorrinho", desc: "Baguete; Salsicha; Batata Frita", price: "6,50€" },
        { name: "Pão de Alho", desc: "Pão de Alho", price: "6,50€" },
    ],
    francesinhas: [
        { name: "Francesinha Tradicional", desc: "Pão, bife, fiambre, queijo, paio, chouriça, batata frita", price: "13,50€ (c/ ovo) | 12,70€ (s/ ovo)" },
        { name: "Francesinha de Marisco com Abacaxi", desc: "Pão, camarão, lagosta, delicias, abacaxi, queijo, batata", price: "13,50€ (c/ ovo) | 14,30€ (s/ ovo)" },
        { name: "Francesinha de Legumes e Cogumelos", desc: "Pão, legumes salteados, cogumelos frescos, queijo, batata", price: "18,50€ (c/ ovo) | 19,30€ (s/ ovo)" },
        { name: "Francesinha Tradicional XXL", desc: "Pão, bife, fiambre, queijo, paio, chouriça, batata frita", price: "18,50€ (c/ ovo) | 19,30€ (s/ ovo)" },
        { name: "Francesinha à Trenga", desc: "Pão, fiambre, pimento assado, queijo, fiambre e batata", price: "12,70€ (c/ ovo) | 13,50€ (s/ ovo)" },
        { name: "Francesinha Transmontana", desc: "Alheira, maçã, bacon, queijo, fiambre e chouriça", price: "13,50€ (c/ ovo) | 14,30€ (s/ ovo)" },
        { name: "Francesinha Judia", desc: "Alheira, maçã, bacon, queijo, fiambre e chouriça", price: "13,50€ (c/ ovo) | 14,30€ (s/ ovo)" },
        { name: "Longal", desc: "Pão; queijo; courgete; carne de porco; castanha e batata", price: "13,50€ (c/ ovo) | 14,30€ (s/ ovo)" },
    ],
    infantil: [
        { name: "Menu Bing", desc: "Bife; batata frita; arroz; ovo; fiambre; queijo", price: "8,50€" },
        { name: "Menu Coco", desc: "Nuggets (5x); batata Frita; Arroz", price: "6,50€" },
        { name: "Menu Charlie", desc: "Batata frita; Ovo; Arroz", price: "4,00€" },
        { name: "Menu Flop", desc: "Salsicha; Ovo; Fiambre; Batata Frita; Arroz", price: "6,00€" },
    ],
    outros: [
        { name: "Omelete Mista", desc: "Queijo, fiambre, chouriça, batata, alface, tomate", price: "10,50€" },
        { name: "Prego no Prato", desc: "Bife, batata frita e ovo", price: "10,50€" },
        { name: "Cachorro Especial com Molho de Francesinha", desc: "Batata frita, Ovo e Arroz", price: "10,80€" },
        { name: "Ovos Rotos", desc: "Ovos; kebab; Batata", price: "9,80€" },
        { name: "Bife Tropical à Alypios", desc: "Abacaxi, manga, kiwi, queijo, fiambre, tomate, alface", price: "13,00€" },
        { name: "Hambúrguer no Prato à Alypios", desc: "Abacaxi, manga, kiwi, queijo, fiambre, tomate, alface", price: "10,50€" },
        { name: "Prego no Pão à Alypios", desc: "Pão baguete, bife, queijo, fiambre, batata frita", price: "8,50€" },
        { name: "Hambúrguer no Pão à Alypios", desc: "Queijo, fiambre, bacon, ovo, alface, tomate; Batata Frita", price: "10,50€" },
        { name: "Bife na Caçarola à Alypios", desc: "Queijo, fiambre, chouriça, paio, batata com queijo gratinado", price: "12,50€" },
        { name: "Cachorro Transmontano", desc: "Baguete, alheira, bacon, maçã, fiambre, queijo e chouriça", price: "11,80€" },
        { name: "Omelete de Camarão", desc: "Camarão, queijo, batata, alface, tomate", price: "13,00€" },
    ],
    extras: [
        { name: "Ovo Estrelado", desc: "", price: "0,80€" },
        { name: "Torrada", desc: "", price: "1,70€" },
        { name: "Cachorro Especial com Molho de Francesinha", desc: "", price: "2,20€" },
    ]
};

const SectionHeader = ({ title, subtitle }: { title: string, subtitle: string }) => (
    <div className="text-center mb-12">
        <span className="text-alypios-accent font-sans text-sm md:text-base tracking-[0.2em] uppercase block mb-2">{subtitle}</span>
        <h2 className="font-serif text-4xl md:text-5xl text-white/90">{title}</h2>
    </div>
);

const MenuItem = ({ item }: { item: { name: string, desc: string, price: string } }) => (
    <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        className="flex flex-col border-b border-white/5 pb-4 group"
    >
        <div className="flex justify-between items-end gap-4">
            <h4 className="font-serif text-xl md:text-2xl text-white/90 group-hover:text-alypios-accent transition-colors">{item.name}</h4>
            <span className="font-sans text-lg md:text-xl text-alypios-accent whitespace-nowrap">{item.price}</span>
        </div>
        {item.desc && (
            <p className="font-sans text-white/60 text-sm md:text-base mt-2 max-w-[85%]">{item.desc}</p>
        )}
    </motion.div>
);

export default function MenuPage() {
    return (
        <main className="min-h-screen bg-alypios-bg pt-32 pb-24 px-6 relative overflow-hidden">
            {/* Background glow effects */}
            <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-alypios-accent/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-alypios-accent/5 rounded-full blur-[120px] pointer-events-none translate-x-1/2 translate-y-1/2" />

            <div className="max-w-4xl mx-auto relative z-10 space-y-24">

                {/* Entradas */}
                <section>
                    <SectionHeader title="Entradas" subtitle="Conheça as nossas" />
                    <div className="flex flex-col gap-6">
                        {MEALS.entradas.map((item, i) => <MenuItem key={i} item={item} />)}
                    </div>
                </section>

                {/* Francesinhas */}
                <section>
                    <SectionHeader title="Francesinhas" subtitle="A Nossa Especialidade" />
                    <div className="flex flex-col gap-8">
                        {MEALS.francesinhas.map((item, i) => <MenuItem key={i} item={item} />)}
                    </div>
                </section>

                {/* Menu Infantil */}
                <section>
                    <SectionHeader title="Menu Infantil" subtitle="Para os mais Pequenos" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                        {MEALS.infantil.map((item, i) => <MenuItem key={i} item={item} />)}
                    </div>
                </section>

                {/* Outros Pratos */}
                <section>
                    <SectionHeader title="Outros Pratos" subtitle="Alternativas Saborosas" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                        {MEALS.outros.map((item, i) => <MenuItem key={i} item={item} />)}
                    </div>
                </section>

                {/* Extras */}
                <section>
                    <SectionHeader title="Extras" subtitle="Os Nossos Adicionais" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                        {MEALS.extras.map((item, i) => <MenuItem key={i} item={item} />)}
                    </div>
                </section>

            </div>
        </main>
    );
}
