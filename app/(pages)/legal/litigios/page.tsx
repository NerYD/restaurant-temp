"use client";

export default function LitigiosPage() {
    return (
        <main className="min-h-screen bg-alypios-bg pt-32 pb-24 px-6 relative overflow-hidden">
            {/* Background glow effects */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-alypios-accent/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />

            <div className="max-w-4xl mx-auto relative z-10">

                {/* Header */}
                <div className="text-center mb-16 border-b border-white/10 pb-12">
                    <span className="text-alypios-accent font-sans text-sm md:text-base tracking-[0.2em] uppercase block mb-4">Informação Legal</span>
                    <h1 className="font-serif text-5xl md:text-6xl text-white/90">Resolução de Litígios Online</h1>
                </div>

                {/* Content */}
                <div className="prose prose-invert prose-lg max-w-none font-sans text-white/70 leading-relaxed">
                    <p>Caro cliente,</p>
                    <p>
                        A União Europeia criou um site para apoiar os consumidores a apresentarem as suas reclamações sobre qualquer litígio em que estejam envolvidos. Neste âmbito, a Cervejaria Alypios disponibiliza toda a informação para que possa exercer o seu direito de reclamação junto de uma entidade oficial, terceira e imparcial ao processo («entidade de resolução de litígios») que o ajudará a resolver o litígio em questão.
                    </p>
                    <p>
                        Assim, se ficou insatisfeito com a aquisição de um bem ou serviço no nosso site, ou com a solução por nós apresentada para resolver a situação, pode aceder a este site oficial e expôr a sua contestação:
                    </p>
                    <p className="mt-4 mb-8">
                        <a href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=PT" target="_blank" rel="noopener noreferrer" className="text-alypios-accent hover:underline break-all">
                            https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=PT
                        </a>
                    </p>

                    <h3 className="font-serif text-2xl text-alypios-accent mt-12 mb-6">O que é a resolução alternativa de litígios?</h3>
                    <p>
                        A resolução alternativa de litígios é a possibilidade que todos os consumidores têm ao seu dispôr de recorrer a entidades oficiais que os ajudem na resolução, ou orientação de algum conflito, antes de abrirem processos litigiosos nos Tribunais.
                    </p>
                    <p>
                        Regra geral, o procedimento é o seguinte: o cliente pede a um terceiro imparcial que intervenha como intermediário entre si e o comerciante que é o alvo da sua reclamação. O intermediário pode sugerir uma solução para a sua reclamação, impor uma solução a ambas as partes ou reunir as partes para encontrar uma solução.
                    </p>
                    <p>
                        Talvez conheça o conceito de resolução alternativa de litígios por outro nome: ‘mediação’, ‘conciliação’, ‘arbitragem’ ou ‘comissão competente no âmbito dos litígios de consumo’.
                    </p>
                    <p>
                        A resolução alternativa de litígios é, por norma, menos dispendiosa, menos formal e mais rápida do que a via judicial.
                    </p>
                    <p>
                        A Cervejaria Alypios disponibiliza os sites de algumas dessas entidades que poderão ajudá-lo a apresentar os seus argumentos:
                    </p>

                    <h3 className="font-serif text-2xl text-alypios-accent mt-12 mb-6">Sugestões de Entidades de Resolução Alternativa de Litígio</h3>

                    <div className="space-y-6 mt-8">
                        <div>
                            <strong className="text-white block mb-1">CNIACC – Centro Nacional de Informação e Arbitragem de Conflitos de Consumo</strong>
                            <a href="https://www.cniacc.pt/" target="_blank" rel="noopener noreferrer" className="text-alypios-accent/80 hover:text-alypios-accent transition-colors">https://www.cniacc.pt</a>
                        </div>

                        <div>
                            <strong className="text-white block mb-1">Centro de Arbitragem de Conflitos de Consumo de Lisboa</strong>
                            <a href="https://www.centroarbitragemlisboa.pt/" target="_blank" rel="noopener noreferrer" className="text-alypios-accent/80 hover:text-alypios-accent transition-colors">https://www.centroarbitragemlisboa.pt/</a>
                        </div>

                        <div>
                            <strong className="text-white block mb-1">Centro de Arbitragem de Conflitos de Consumo do Vale do Ave/Tribunal Arbitral</strong>
                            <a href="https://www.triave.pt/" target="_blank" rel="noopener noreferrer" className="text-alypios-accent/80 hover:text-alypios-accent transition-colors">https://www.triave.pt/</a>
                        </div>

                        <div>
                            <strong className="text-white block mb-1">CIAB – Centro de Informação, Mediação e Arbitragem de Consumo (Tribunal Arbitral de Consumo)</strong>
                            <a href="https://www.ciab.pt/pt/" target="_blank" rel="noopener noreferrer" className="text-alypios-accent/80 hover:text-alypios-accent transition-colors">https://www.ciab.pt/pt/</a>
                        </div>

                        <div>
                            <strong className="text-white block mb-1">CIMPAS – Centro de Informação, Mediação e Provedoria de Seguros</strong>
                            <a href="https://www.cimpas.pt/" target="_blank" rel="noopener noreferrer" className="text-alypios-accent/80 hover:text-alypios-accent transition-colors">https://www.cimpas.pt/</a>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}
