"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Mail } from "lucide-react";

export default function ContactosPage() {
    return (
        <main className="min-h-screen bg-alypios-bg pt-32 pb-24 px-6 relative overflow-hidden">
            {/* Background glow effects */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-alypios-accent/5 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-alypios-accent/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 translate-y-1/2" />

            <div className="max-w-6xl mx-auto relative z-10">

                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-alypios-accent font-sans text-sm md:text-base tracking-[0.2em] uppercase block mb-2">Fale Connosco</span>
                    <h1 className="font-serif text-5xl md:text-6xl text-white/90 mb-6">Estamos à distância de uma mensagem</h1>
                    <p className="font-sans text-white/60 text-lg max-w-2xl mx-auto">
                        Gosta de boa comida, boa cerveja ou tem alguma questão para nos colocar?
                        Fale connosco! Estamos sempre disponíveis para receber, esclarecer dúvidas ou ouvir sugestões.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

                    {/* Contact Form Container (Placeholder for visual structure) */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="card-glass p-8 md:p-12 flex flex-col justify-center"
                    >
                        <h3 className="font-serif text-3xl text-alypios-accent mb-6">Entre em contacto connosco</h3>
                        <p className="font-sans text-white/70 mb-8">
                            Caso pretenda esclarecer alguma questão, obter mais informações ou enviar uma sugestão.
                        </p>
                        <form className="flex flex-col gap-6">
                            <input type="text" placeholder="Nome" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-alypios-accent transition-colors" />
                            <input type="email" placeholder="Email" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-alypios-accent transition-colors" />
                            <textarea placeholder="Mensagem" rows={5} className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-alypios-accent transition-colors resize-none" />
                            <div className="flex items-center gap-3">
                                <input type="checkbox" id="privacy" className="accent-alypios-accent w-4 h-4 cursor-pointer" />
                                <label htmlFor="privacy" className="text-white/50 text-sm cursor-pointer hover:text-white/80 transition-colors">
                                    Declaro que li e aceito as políticas de privacidade.
                                </label>
                            </div>
                            <button type="button" className="btn-primary font-sans uppercase tracking-widest text-sm py-4 mt-2">
                                Enviar Mensagem
                            </button>
                        </form>
                    </motion.div>

                    {/* Locations */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col gap-12"
                    >
                        {/* Bragança 1 */}
                        <div className="flex gap-6 items-start group">
                            <div className="p-4 rounded-full bg-white/5 border border-white/10 group-hover:border-alypios-accent/50 group-hover:bg-alypios-accent/10 transition-colors">
                                <MapPin className="text-alypios-accent" size={28} />
                            </div>
                            <div>
                                <h4 className="font-serif text-2xl text-white mb-2 group-hover:text-alypios-accent transition-colors">Bragança</h4>
                                <p className="font-sans text-white/60 mb-4">R. Combatentes da Grande Guerra 209,<br />5300-106 Bragança</p>
                                <div className="flex items-start gap-3 mt-4">
                                    <Clock className="text-white/40 mt-1 shrink-0" size={18} />
                                    <div className="font-sans text-sm text-white/50">
                                        <p><strong className="text-white/70 font-medium">Terça - Sábado:</strong> 12:00-14:30 | 19:00-22:30</p>
                                        <p><strong className="text-white/70 font-medium">Domingo:</strong> 12:00-14:30 | 19:00-22:30</p>
                                        <p className="text-alypios-accent/80 mt-1">Encerra à Segunda-Feira</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bragança 2 */}
                        <div className="flex gap-6 items-start group">
                            <div className="p-4 rounded-full bg-white/5 border border-white/10 group-hover:border-alypios-accent/50 group-hover:bg-alypios-accent/10 transition-colors">
                                <MapPin className="text-alypios-accent" size={28} />
                            </div>
                            <div>
                                <h4 className="font-serif text-2xl text-white mb-2 group-hover:text-alypios-accent transition-colors">Bragança (Polo 2)</h4>
                                <p className="font-sans text-white/60 mb-4">R. Cmte. Sacadura Cabral 163 A,<br />5300-106 Bragança</p>
                                <div className="flex items-start gap-3 mt-4">
                                    <Clock className="text-white/40 mt-1 shrink-0" size={18} />
                                    <div className="font-sans text-sm text-white/50">
                                        <p><strong className="text-white/70 font-medium">Terça - Sábado:</strong> 12:00-14:30 | 19:00-22:30</p>
                                        <p><strong className="text-white/70 font-medium">Domingo:</strong> 12:00-14:30</p>
                                        <p className="text-alypios-accent/80 mt-1">Encerra à Segunda-Feira</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Viseu */}
                        <div className="flex gap-6 items-start group">
                            <div className="p-4 rounded-full bg-white/5 border border-white/10 group-hover:border-alypios-accent/50 group-hover:bg-alypios-accent/10 transition-colors">
                                <MapPin className="text-alypios-accent" size={28} />
                            </div>
                            <div>
                                <h4 className="font-serif text-2xl text-white mb-2 group-hover:text-alypios-accent transition-colors">Viseu</h4>
                                <p className="font-sans text-white/60 mb-4">R. Prebenda 37,<br />3500-173 Viseu</p>
                                <div className="flex items-start gap-3 mt-4">
                                    <Clock className="text-white/40 mt-1 shrink-0" size={18} />
                                    <div className="font-sans text-sm text-white/50">
                                        <p><strong className="text-white/70 font-medium">Segunda - Domingo:</strong></p>
                                        <p>12:00-14:30 | 19:00-22:30</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </motion.div>
                </div>

            </div>
        </main>
    );
}
