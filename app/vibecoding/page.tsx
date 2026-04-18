import Link from 'next/link';
import Image from 'next/image';

export default function Vibecoding() {
  return (
    <div className="min-h-screen text-[#1a1a1a] font-serif">
      <header className="border-b border-[#1a1a1a] py-6 px-6 max-w-4xl mx-auto flex justify-between items-center">
        <Link href="/" className="font-serif italic text-2xl font-black">THE AI GAZETTE</Link>
        <nav className="font-sans text-xs font-bold uppercase tracking-widest">
          <Link href="/" className="hover:underline">Terug naar Home</Link>
        </nav>
      </header>

      <main className="max-w-3xl mx-auto py-16 px-6">
        <article>
          <header className="mb-12">
            <span className="text-red-700 font-sans font-bold uppercase text-sm tracking-widest block mb-4">Ontwikkeling</span>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Vibe Coding: Programmeren op Gevoel
            </h1>
            <p className="text-2xl italic text-gray-700 leading-relaxed border-l-4 border-[#1a1a1a] pl-6 py-2">
              Hoe AI de drempel voor softwareontwikkeling verlaagt en wat dit betekent voor de toekomst van de &apos;developer&apos;.
            </p>
          </header>

          <div className="relative h-96 mb-12 border border-gray-200">
            <Image
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop"
              alt="Vibe Coding Visual"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-cover"
            />
          </div>

          <div className="prose prose-lg prose-stone max-w-none leading-relaxed space-y-8 text-xl font-serif">
            <p>
              Er waait een nieuwe wind door de wereld van software development: &quot;Vibe Coding&quot;. In plaats van urenlang te worstelen met complexe syntaxis en debuggen, gebruiken ontwikkelaars nu AI-tools om applicaties te bouwen door simpelweg te beschrijven wat ze willen – de &apos;vibe&apos; van het project.
            </p>

            <h2 className="text-3xl font-bold font-serif pt-4">De Democratisering van Creatie</h2>
            <p>
              Tools zoals Cursor, Replit en Windsurf maken het mogelijk voor mensen zonder diepgaande technische kennis om functionele software te creëren. Dit verschuift de focus van *hoe* iets gebouwd moet worden naar *wat* er gebouwd moet worden. De creativiteit en visie van de maker worden belangrijker dan hun vermogen om code te schrijven.
            </p>

            <h2 className="text-3xl font-bold font-serif pt-4">Itereren in Real-time</h2>
            <p>
              Vibe coding draait om snelle feedbackloops. Je geeft een prompt, ziet het resultaat, en past de &apos;vibe&apos; aan tot het perfect is. Het is een bijna artistiek proces waarbij de barrière tussen idee en executie vrijwel verdwijnt.
            </p>

            <p className="bg-gray-100 p-8 italic border-y-2 border-gray-300 my-12">
              &quot;We gaan van een tijdperk van &apos;technische expertise&apos; naar een tijdperk van &apos;creatieve regie&apos;. De AI is de orkestratie, de mens is de dirigent.&quot;
            </p>

            <h2 className="text-3xl font-bold font-serif pt-4">De Rol van de Traditionele Developer</h2>
            <p>
              Betekent dit het einde van de programmeur? Waarschijnlijk niet. Het betekent wel dat hun rol verandert. De nadruk komt te liggen op systeemarchitectuur, kwaliteitscontrole en het oplossen van de werkelijk unieke, complexe problemen waar AI nog niet bij kan.
            </p>

            <h2 className="text-3xl font-bold font-serif pt-4">Conclusie</h2>
            <p>
              Vibe coding is geen vervanging, maar een krachtige uitbreiding van onze mogelijkheden. Het nodigt een geheel nieuwe groep makers uit in de wereld van software, wat ongetwijfeld zal leiden tot een explosie van innovatie en creativiteit.
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
