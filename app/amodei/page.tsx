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
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Machines of Loving Grace: Dario Amodei&apos;s Optimistische Visie
            </h1>
            <p className="text-2xl italic text-gray-700 leading-relaxed border-l-4 border-[#1a1a1a] pl-6 py-2">
              Een diepgaande blik op hoe krachtige AI de mensheid kan helpen in plaats van bedreigen, volgens de CEO van Anthropic.
            </p>
          </header>

          <div className="relative h-96 mb-12 border border-gray-200">
            <Image
              src="https://images.unsplash.com/photo-1507146426996-ef05306b995a?q=80&w=800&auto=format&fit=crop"
              alt="Dario Amodei Vision"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-cover"
            />
          </div>

          <div className="prose prose-lg prose-gray max-w-none leading-relaxed space-y-8 text-xl">
            <p>
              Terwijl veel discussies over AI zich concentreren op existentiële risico&apos;s en doemscenario&apos;s, biedt Dario Amodei, CEO van Anthropic, een verfrissend en diepgaand optimistisch tegenwicht. In zijn essay &quot;Machines of Loving Grace&quot; schetst hij een toekomst waarin AI fungeert als een katalysator voor menselijke bloei.
            </p>

            <h2 className="text-3xl font-bold font-serif pt-4">De Grote Transformatie</h2>
            <p>
              Amodei suggereert dat we aan de vooravond staan van doorbraken in de biologie en geneeskunde die normaal honderden jaren zouden duren. AI kan ons helpen bij het oplossen van complexe ziektes, het stabiliseren van het klimaat en het bevorderen van economische rechtvaardigheid.
            </p>

            <h2 className="text-3xl font-bold font-serif pt-4">Menselijke Autonomie</h2>
            <p>
              Een cruciaal punt in zijn betoog is dat AI de menselijke autonomie niet moet vervangen, maar juist moet versterken. Hij ziet een wereld voor zich waarin AI ons helpt om beter te worden in wat we doen, zonder onze fundamentele menselijkheid of keuzevrijheid weg te nemen.
            </p>

            <p className="bg-gray-100 p-8 italic border-y-2 border-gray-300 my-12">
              &quot;AI is geen god of een demon; het is een gereedschap van ongekende kracht dat, mits goed gestuurd, de meest hardnekkige problemen van de mensheid kan oplossen.&quot;
            </p>

            <h2 className="text-3xl font-bold font-serif pt-4">Verantwoordelijkheid en Sturing</h2>
            <p>
              Ondanks zijn optimisme is Amodei zich zeer bewust van de risico&apos;s. Hij benadrukt dat deze positieve toekomst niet vanzelfsprekend is. Het vereist bewuste keuzes op het gebied van ethiek, veiligheid en democratische controle om ervoor te zorgen dat de voordelen van AI ten goede komen aan de gehele wereldbevolking.
            </p>

            <h2 className="text-3xl font-bold font-serif pt-4">Conclusie</h2>
            <p>
              Dario Amodei nodigt ons uit om niet alleen bang te zijn voor wat er mis kan gaan, maar om actief vorm te geven aan wat er goed kan gaan. &quot;Machines of Loving Grace&quot; is een oproep tot actie en een visioen van hoop in een onzeker tijdperk.
            </p>
          </div>
        </article>
      </main>

      <footer className="bg-[#1a1a1a] text-[#f9f7f2] py-12 px-6 mt-20">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-sans text-xs tracking-widest opacity-70">© 2025 THE AI GAZETTE - EDITORIAL ANALYSIS</p>
        </div>
      </footer>
    </div>
  );
}
