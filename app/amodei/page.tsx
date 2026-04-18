import Link from 'next/link';
import Image from 'next/image';

export default function Amodei() {
  return (
    <div className="min-h-screen bg-[#f9f7f2] text-[#1a1a1a] font-serif">
      <header className="border-b border-[#1a1a1a] py-6 px-6 max-w-4xl mx-auto flex justify-between items-center">
        <Link href="/" className="font-serif italic text-2xl font-black">THE AI GAZETTE</Link>
        <nav className="font-sans text-xs font-bold uppercase tracking-widest">
          <Link href="/" className="hover:underline">Terug naar Home</Link>
        </nav>
      </header>

      <main className="max-w-3xl mx-auto py-16 px-6">
        <article>
          <header className="mb-12">
            <span className="text-red-700 font-sans font-bold uppercase text-sm tracking-widest block mb-4">Filosofie & Ethiek</span>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 italic">
              Machines of Loving Grace: Een Nieuw Tijdperk van Optimisme
            </h1>
            <p className="text-2xl italic text-gray-700 leading-relaxed border-l-4 border-[#1a1a1a] pl-6 py-2">
              Dario Amodei, CEO van Anthropic, breekt met de trend van AI-doemscenario&apos;s en schetst een toekomst waarin technologie de mensheid naar ongekende hoogten tilt.
            </p>
          </header>

          <div className="relative h-96 mb-12 border border-[#1a1a1a]">
            <Image
              src="https://images.unsplash.com/photo-1507146426996-ef05306b995a?q=80&w=800&auto=format&fit=crop"
              alt="Dario Amodei Vision"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </div>

          <div className="prose prose-lg prose-gray max-w-none leading-relaxed space-y-8 text-xl">
            <h2 className="text-3xl font-bold font-serif pt-4 border-b border-gray-300 pb-2">De Biologische Revolutie</h2>
            <p>
              Een van de meest opvallende punten in Amodei&apos;s analyse is de impact van AI op de biologie. Hij stelt dat we door AI-ondersteunde ontdekkingen de vooruitgang in de geneeskunde met een factor tien of zelfs honderd kunnen versnellen. Dit betekent niet alleen het genezen van ziektes zoals kanker en Alzheimer, maar ook een fundamenteel begrip van hoe we het menselijk leven kunnen verlengen en verbeteren.
            </p>

            <h2 className="text-3xl font-bold font-serif pt-4 border-b border-gray-300 pb-2">Economie en Rechtvaardigheid</h2>
            <p>
              Amodei ziet AI als een instrument voor radicale economische inclusie. In plaats van banenverlies, benadrukt hij het potentieel om complexe vaardigheden te democratiseren. AI kan fungeren als een universele mentor en assistent, waardoor de productiviteit in ontwikkelingslanden spectaculair kan stijgen en de kloof tussen rijk en arm wereldwijd kan verkleinen.
            </p>

            <div className="bg-[#1a1a1a] text-[#f9f7f2] p-10 italic my-12 relative">
              <span className="text-6xl absolute top-2 left-4 opacity-20">&quot;</span>
              <p className="relative z-10 text-2xl leading-relaxed">
                We moeten durven dromen over een wereld waarin AI niet onze vijand is, maar de &apos;loving grace&apos; die onze grootste uitdagingen helpt op te lossen.
              </p>
              <p className="text-right mt-4 font-sans text-sm tracking-widest">— Dario Amodei</p>
            </div>

            <h2 className="text-3xl font-bold font-serif pt-4 border-b border-gray-300 pb-2">Vrede en Bestuur</h2>
            <p>
              Zelfs op het gebied van geopolitiek en bestuur is Amodei hoopvol. Hij suggereert dat AI kan helpen bij het nemen van meer rationele, datagestuurde beslissingen die conflicten kunnen verminderen en democratische instellingen kunnen versterken door transparantie en efficiëntie te verhogen.
            </p>

            <h2 className="text-3xl font-bold font-serif pt-4 border-b border-gray-300 pb-2">Conclusie van de Redactie</h2>
            <p>
              &quot;Machines of Loving Grace&quot; is een noodzakelijk tegengif voor de huidige sfeer van angst rondom AI. Hoewel de risico&apos;s reëel blijven, herinnert Amodei ons eraan dat het einddoel — een drastische verbetering van de menselijke conditie — de moeite waard is om voor te vechten. Het is geen garantie, maar een visie die we actief moeten nastreven door verantwoorde ontwikkeling en ethische sturing.
            </p>
          </div>
        </article>
      </main>

      <footer className="bg-[#1a1a1a] text-[#f9f7f2] py-16 px-6 mt-20 border-t border-gray-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-serif italic mb-4">THE AI GAZETTE</h2>
          <p className="font-sans text-xs tracking-widest opacity-70">© 2025 EDITORIAL ANALYSIS - GEEN RECHTEN ONTLEEND</p>
        </div>
      </footer>
    </div>
  );
}
