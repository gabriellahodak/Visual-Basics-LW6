import Link from 'next/link';
import Image from 'next/image';

export default function Vibecoding() {
  return (
    <div className="min-h-screen bg-[#f9f7f1] text-[#1a1a1a] font-serif p-4 md:p-8">
      {/* Article Header */}
      <header className="max-w-4xl mx-auto border-b-2 border-black pb-4 mb-8">
        <Link href="/" className="text-sm font-bold uppercase tracking-widest hover:underline mb-8 block">&larr; Terug naar de voorpagina</Link>
        <div className="text-center">
          <h1 className="text-4xl md:text-7xl font-black mb-4 leading-none">Vibecoding: De Toekomst?</h1>
          <p className="text-xl md:text-2xl italic text-gray-700 mb-6">Waarom syntax niet langer de barrière is voor softwarecreatie.</p>
          <div className="flex justify-center gap-4 text-sm font-bold uppercase tracking-widest border-t border-b border-black py-2">
            <span>Door Innovation Labs</span>
            <span>•</span>
            <span>10 Oktober 2024</span>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <main className="max-w-4xl mx-auto">
        <div className="relative h-[300px] md:h-[500px] mb-8 border border-black">
          <Image
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop"
            alt="Vibecoding Concept"
            fill
            className="object-cover grayscale"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg leading-relaxed text-justify">
          <div className="first-letter:text-7xl first-letter:font-black first-letter:float-left first-letter:mr-3 first-letter:leading-none">
            <p className="mb-6">
              &quot;Vibecoding&quot; is de nieuwste trend in de tech-wereld. Het beschrijft een manier van software ontwikkelen waarbij de nadruk niet ligt op het schrijven van code, maar op het communiceren van een visie of een &quot;vibe&quot; aan een AI-model. Met tools als Cursor en Replit Agent kunnen mensen nu complexe applicaties bouwen zonder ooit een programmeertaal te hebben geleerd.
            </p>
            <h2 className="text-2xl font-black uppercase mb-4 border-b border-black">Intentie boven Syntax</h2>
            <p className="mb-6">
              Bij traditioneel programmeren moet je precies weten hoe je de computer instructies geeft. Bij vibecoding leg je uit wat je wilt bereiken. De AI vertaalt die intentie naar werkende code. Dit verlegt de focus van de &quot;hoe&quot; naar de &quot;wat&quot;, waardoor creativiteit de belangrijkste beperkende factor wordt in plaats van technische kennis.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black uppercase mb-4 border-b border-black">De Rol van de Architect</h2>
            <p className="mb-6">
              Dit betekent niet dat programmeurs overbodig worden. Hun rol verandert echter van een &quot;metselaar&quot; die elke steen zelf legt naar een &quot;architect&quot; die het grote geheel overziet. Het begrijpen van systeemontwerp, gebruikerservaring en logica blijft essentieel, zelfs als de AI de zware taak van het typen overneemt.
            </p>
            <p className="mb-6 font-bold italic border-y-2 border-black py-4 text-center">
              &quot;Iedereen is nu een software engineer, ze weten het alleen nog niet.&quot;
            </p>
            <h2 className="text-2xl font-black uppercase mb-4 border-b border-black">Democratisering</h2>
            <p className="mb-6">
              Vibecoding democratiseert de toegang tot technologie. Ondernemers, kunstenaars en wetenschappers kunnen hun eigen tools bouwen zonder afhankelijk te zijn van grote IT-afdelingen. Dit zal leiden tot een explosie van niche-applicaties die specifiek zijn afgestemd op individuele behoeften.
            </p>
            <p>
              Hoewel we nog aan het begin staan, is de impact van vibecoding onmiskenbaar. Het is de ultieme expressie van AI als co-piloot voor menselijke creativiteit.
            </p>
          </div>
        </div>
      </main>

      <footer className="max-w-4xl mx-auto border-t-2 border-black mt-12 pt-8 text-center text-sm font-bold uppercase tracking-widest">
        <Link href="/" className="hover:underline">Terug naar de voorpagina</Link>
      </footer>
    </div>
  );
}
