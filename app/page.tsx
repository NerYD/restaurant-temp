"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import PourAnimation from "@/components/PourAnimation";
import ReviewMarquee from "@/components/ReviewMarquee";

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end end"],
  });

  // Hero Animations (0-100% of the 150vh hero section)
  const opacityTitle = useTransform(heroProgress, [0, 0.4, 0.8, 1], [1, 1, 0, 0]);
  const yTitle = useTransform(heroProgress, [0, 0.8], ["0vh", "-30vh"]);

  return (
    <main className="relative w-full bg-alypios-bg">

      {/* --- HERO SECTION (Scrollytelling Pour) --- */}
      <section ref={heroRef} id="hero" className="relative w-full" style={{ height: "350vh" }}>

        {/* Fixed Canvas Background */}
        <PourAnimation progress={heroProgress} />

        {/* Hero Title Overlay */}
        <div className="sticky top-0 h-screen w-full flex items-center justify-center pointer-events-none">
          <motion.div
            style={{ opacity: opacityTitle, y: yTitle }}
            className="flex flex-col items-center justify-center -mt-32"
          >
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight text-white/90 drop-shadow-2xl">
              O SEGREDO DE <span className="text-alypios-accent italic pr-2">ALYPIOS</span>
            </h1>
            <p className="mt-6 text-xl md:text-2xl font-sans text-white/60 font-light tracking-wide max-w-xl text-center">
              A tradition poured with intention.
            </p>
          </motion.div>
        </div>

      </section>

      {/* --- FEATURES SECTION (The Three Pillars) --- */}
      <section id="features" className="relative w-full min-h-screen z-20 bg-alypios-bg py-32 px-4 md:px-12 lg:px-24">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-24">
            <h2 className="font-serif text-4xl md:text-6xl text-alypios-accent mb-6">A Nossa Essência</h2>
            <p className="font-sans text-white/70 text-lg md:text-xl max-w-2xl mx-auto">
              Three pillars that elevate the Francesinha from a meal to a ritual.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-30">
            {/* Pillar 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="card-glass w-full h-full flex flex-col"
            >
              <h3 className="font-serif text-3xl text-alypios-accent mb-4">O Molho d&apos;Ouro</h3>
              <p className="font-sans text-white/80 leading-relaxed text-lg flex-1">
                Our secret recipe, perfected over decades, with the perfect balance of spice. A slow infusion that delivers pure flavor.
              </p>
            </motion.div>

            {/* Pillar 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="card-glass w-full h-full flex flex-col mt-0"
            >
              <h3 className="font-serif text-3xl text-alypios-accent mb-4">Talho Regional</h3>
              <p className="font-sans text-white/80 leading-relaxed text-lg flex-1">
                Hand-selected meats from Trás-os-Montes, ensuring an authentic bite. We wait, so you can pause.
              </p>
            </motion.div>

            {/* Pillar 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="card-glass w-full h-full flex flex-col mt-0"
            >
              <h3 className="font-serif text-3xl text-alypios-accent mb-4">Forno de Pedra</h3>
              <p className="font-sans text-white/80 leading-relaxed text-lg flex-1">
                Gratinated to perfection until the cheese reaches the golden peak. No distractions, just focus.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS SECTION --- */}
      <section id="testimonials" className="relative w-full py-32 bg-alypios-bg/95 z-20 border-y border-white/5 overflow-hidden">
        <div className="flex flex-col items-center justify-center">
          <h3 className="font-serif text-2xl md:text-4xl text-white/90 mb-16 tracking-widest uppercase text-center">
            Stories from the Stillness
          </h3>
          <div className="w-full">
            <ReviewMarquee />
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section id="cta" className="relative w-full py-32 flex flex-col items-center justify-center bg-alypios-bg z-20 px-4 md:px-12 overflow-hidden border-t border-white/5">

        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-alypios-accent/5 rounded-full blur-[120px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 w-full max-w-6xl mx-auto"
        >
          <div className="card-glass flex flex-col md:flex-row items-center justify-between p-10 md:p-16 gap-12 bg-white/[0.02]">
            <div className="flex-1 text-center md:text-left">
              <span className="text-alypios-accent font-sans text-sm tracking-[0.2em] mb-4 block uppercase font-semibold">Begin the Ritual</span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white/90 drop-shadow-md mb-6 leading-tight">
                Ready to taste the true Francesinha?
              </h2>
              <p className="text-white/60 font-sans text-lg mb-0 max-w-lg mx-auto md:mx-0">
                Join us at Cervejaria Alypios for an unforgettable culinary experience baked in a stone oven.
              </p>
            </div>
            <div className="flex flex-col gap-4 w-full md:w-auto shrink-0">
              <Link href="/menu" className="btn-primary font-sans tracking-widest text-sm uppercase px-12 py-5 w-full text-center">
                Ver Menu
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

    </main>
  );
}
