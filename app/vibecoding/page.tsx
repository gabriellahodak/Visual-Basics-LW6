import Link from 'next/link';
import Image from 'next/image';

export default function Vibecoding() {
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
            <span className="text-red-700 font-sans font-bold uppercase text-sm tracking-widest block mb-4">Ontwikkeling</span>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 italic">
              Vibe Coding: Wanneer Visie Belangrijker Wordt Dan Syntaxis
            </h1>
            <p className="text-2xl italic text-gray-700 leading-relaxed border-l-4 border-[#1a1a1a] pl-6 py-2">
              De barrière tussen idee en executie brokkelt af. Met de opkomst van &apos;Vibe Coding&apos; verschuift de rol van de programmeur van een technicus naar een creatief regisseur.
            </p>
          </header>

          <div className="relative h-96 mb-12 border border-[#1a1a1a]">
            <Image
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop"
              alt="Vibe Coding Visual"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </div>

          <div className="prose prose-lg prose-gray max-w-none leading-relaxed space-y-8 text-xl">
            <h2 className="text-3xl font-bold font-serif pt-4 border-b border-gray-300 pb-2">De Dood van de Programmeertalen?</h2>
            <p>
              Vibe Coding draait niet om het beheersen van Python, JavaScript of Rust. Het draait om het vermogen om de &apos;vibe&apos; of de essentie van een applicatie over te brengen aan een AI-assistent. Tools zoals Cursor, Windsurf en Replit maken het mogelijk om door middel van natuurlijke taal en iteratieve feedback volledige systemen te bouwen. De code zelf wordt een abstractie, een detail waar de menselijke maker zich steeds minder mee bezig hoeft te houden.
            </p>

            <h2 className="text-3xl font-bold font-serif pt-4 border-b border-gray-300 pb-2">Itereren op Snelheid van de Gedachte</h2>
            <p>
              Wat voorheen weken aan architectuur en debuggen kostte, kan nu in minuten worden gerealiseerd. Deze versnelling verandert hoe we over innovatie denken. De drempel om een idee te testen is bijna nul geworden. Dit nodigt een nieuwe klasse makers uit: ontwerpers, ondernemers en creatieven die voorheen werden afgeschrikt door de technische complexiteit van softwareontwikkeling.
            </p>

            <div className="bg-[#1a1a1a] text-[#f9f7f2] p-10 italic my-12 relative">
              <span className="text-6xl absolute top-2 left-4 opacity-20">&quot;</span>
              <p className="relative z-10 text-2xl leading-relaxed">
                De toekomst van coderen is niet het schrijven van regels, maar het orkestreren van intenties. De vibe is de nieuwe broncode.
              </p>
              <p className="text-right mt-4 font-sans text-sm tracking-widest">— Tech Analyse Sectie</p>
            </div>

            <h2 className="text-3xl font-bold font-serif pt-4 border-b border-gray-300 pb-2">De Nieuwe Rol van de Developer</h2>
            <p>
              Dit betekent niet dat technische kennis waardeloos is geworden. Integendeel: de rol van de &apos;traditionele&apos; developer evolueert naar die van een systeemarchitect en kwaliteitscontroleur. Juist omdat AI zo snel code kan produceren, is menselijke regie nodig om te zorgen dat de architectuur robuust is, de beveiliging op orde is en de gebruikerservaring logisch blijft.
            </p>

            <h2 className="text-3xl font-bold font-serif pt-4 border-b border-gray-300 pb-2">Conclusie: Een Explosie van Creativiteit</h2>
            <p>
              Vibe Coding is de democratisering van softwarecreatie. Het stelt ons in staat om de focus terug te leggen op waar het om gaat: het oplossen van problemen en het creëren van waarde. We staan aan het begin van een tijdperk waarin de enige beperking voor wat we kunnen bouwen, onze eigen verbeelding is.
            </p>
          </div>
        </article>
      </main>

      <footer className="bg-[#1a1a1a] text-[#f9f7f2] py-16 px-6 mt-20 border-t border-gray-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-serif italic mb-4">THE AI GAZETTE</h2>
          <p className="font-sans text-xs tracking-widest opacity-70">© 2025 TECHNOLOGIE & INNOVATIE RAPPORTERING</p>
        </div>
      </footer>
    </div>
  );
}
