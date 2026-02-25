"use client";

export default function PrivacidadePage() {
    return (
        <main className="min-h-screen bg-alypios-bg pt-32 pb-24 px-6 relative overflow-hidden">
            {/* Background glow effects */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-alypios-accent/5 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2" />

            <div className="max-w-4xl mx-auto relative z-10">

                {/* Header */}
                <div className="text-center mb-16 border-b border-white/10 pb-12">
                    <span className="text-alypios-accent font-sans text-sm md:text-base tracking-[0.2em] uppercase block mb-4">Informação Legal</span>
                    <h1 className="font-serif text-5xl md:text-6xl text-white/90">Política de Privacidade</h1>
                </div>

                {/* Content */}
                <div className="prose prose-invert prose-lg max-w-none font-sans text-white/70 leading-relaxed">
                    <p>
                        A sua privacidade é importante para nós. É política da Cervejaria Alypios respeitar a sua privacidade relativamente a qualquer informação pessoal que possamos recolher no site Cervejaria Alypios, bem como noutros sites que possuímos e operamos.
                    </p>

                    <p>
                        Solicitamos informações pessoais apenas quando realmente são necessárias para lhe prestar um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Informamos igualmente a finalidade da recolha e a forma como os dados serão utilizados.
                    </p>

                    <p>
                        Apenas conservamos as informações recolhidas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemo-los através de meios comercialmente aceitáveis para evitar perdas, roubos, bem como acesso, divulgação, cópia, utilização ou modificação não autorizados.
                    </p>

                    <p>
                        Não partilhamos publicamente informações de identificação pessoal nem as fornecemos a terceiros, exceto quando exigido por lei.
                    </p>

                    <p>
                        O nosso site pode conter ligações para sites externos que não são operados por nós. Alertamos que não temos controlo sobre o conteúdo e as práticas desses sites e não podemos assumir responsabilidade pelas respetivas políticas de privacidade.
                    </p>

                    <p>
                        O utilizador é livre de recusar o fornecimento de informações pessoais, compreendendo que, nesse caso, poderemos não conseguir disponibilizar alguns dos serviços pretendidos.
                    </p>

                    <p>
                        A utilização continuada do nosso site será considerada como aceitação das nossas práticas relativas à privacidade e à proteção de dados pessoais. Caso tenha alguma questão sobre a forma como tratamos os dados dos utilizadores, entre em contacto connosco.
                    </p>

                    <ul className="list-disc pl-6 space-y-3 mt-8 mb-8 text-white/60">
                        <li>O serviço Google AdSense, utilizado para apresentação de publicidade, usa o cookie DoubleClick para apresentar anúncios mais relevantes em toda a Web e limitar o número de vezes que um anúncio específico é exibido ao utilizador.</li>
                        <li>Para mais informações sobre o Google AdSense, consulte as FAQs oficiais sobre privacidade do Google AdSense.</li>
                        <li>Utilizamos publicidade para ajudar a suportar os custos de funcionamento deste site e permitir o financiamento de futuros desenvolvimentos. Os cookies de publicidade comportamental utilizados destinam-se a garantir a apresentação de anúncios relevantes, através do rastreio anónimo dos interesses do utilizador.</li>
                        <li>Vários parceiros anunciam em nosso nome. Os cookies de rastreio de afiliados permitem-nos identificar se os utilizadores acederam ao site através de um parceiro, possibilitando o respetivo crédito e, quando aplicável, o acesso a promoções associadas.</li>
                    </ul>

                    <h3 className="font-serif text-2xl text-alypios-accent mt-12 mb-6">Compromisso do Utilizador</h3>

                    <p>
                        O utilizador compromete-se a fazer um uso adequado dos conteúdos e da informação que a Cervejaria Alypios disponibiliza no site, nomeadamente:
                    </p>

                    <ul className="list-none space-y-3 mt-4 mb-8 text-white/60">
                        <li><strong className="text-white/80">A)</strong> Não praticar atividades ilegais ou contrárias à boa-fé e à ordem pública;</li>
                        <li><strong className="text-white/80">B)</strong> Não difundir conteúdos de natureza racista, xenófoba, relacionados com jogos de fortuna ou azar, pornografia ilegal, apologia ao terrorismo ou que atentem contra os direitos humanos;</li>
                        <li><strong className="text-white/80">C)</strong> Não causar danos aos sistemas físicos (hardware) e lógicos (software) da Cervejaria Alypios, dos seus fornecedores ou de terceiros, nem introduzir ou disseminar vírus informáticos ou outros sistemas suscetíveis de causar danos.</li>
                    </ul>

                    <h3 className="font-serif text-2xl text-alypios-accent mt-12 mb-6">Mais informações</h3>

                    <p>
                        Esperamos que este esclarecimento seja suficiente. Caso subsista alguma dúvida sobre a necessidade de determinados cookies, recomenda-se que os mantenha ativos, especialmente se interagir com funcionalidades do nosso site.
                    </p>

                </div>
            </div>
        </main>
    );
}
