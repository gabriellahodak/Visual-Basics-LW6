import Link from 'next/link';
import Image from 'next/image';

export default function AISlop() {
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
            <span className="text-red-700 font-sans font-bold uppercase text-sm tracking-widest block mb-4">Technologie & Cultuur</span>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 italic">
              AI-Slop: De Stille Verdrinking van het Internet
            </h1>
            <p className="text-2xl italic text-gray-700 leading-relaxed border-l-4 border-[#1a1a1a] pl-6 py-2">
              Onze digitale leefomgeving wordt overspoeld door een vloedgolf van inhoudsloze, door AI gegenereerde &apos;slop&apos;. Wat betekent dit voor de toekomst van informatie en menselijke connectie?
            </p>
          </header>

          <div className="relative h-96 mb-12 border border-[#1a1a1a]">
            <Image
              src="https://images.unsplash.com/photo-1675271591211-126ad94e495d?q=80&w=800&auto=format&fit=crop"
              alt="AI Slop Visual"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </div>

          <div className="prose prose-lg prose-gray max-w-none leading-relaxed space-y-8 text-xl">
            <h2 className="text-3xl font-bold font-serif pt-4 border-b border-gray-300 pb-2">Wat is AI-Slop?</h2>
            <p>
              &quot;Slop&quot; is de nieuwe term voor de eindeloze stroom aan laagwaardige, AI-gegenereerde content die sociale media overspoelt. Denk aan surrealistische beelden op Facebook van Jezus-garnalen, vreemde interieurs of hartverscheurende (maar neppe) verhalen over weeskinderen. Het doel is simpel: interactie uitlokken, algoritmes manipuleren en uiteindelijk advertentie-inkomsten genereren.
            </p>

            <h2 className="text-3xl font-bold font-serif pt-4 border-b border-gray-300 pb-2">De &apos;Dead Internet Theory&apos; Wordt Werkelijkheid</h2>
            <p>
              We naderen een punt waarop het internet een feedbackloop wordt: AI-bots die content maken voor andere AI-bots, terwijl menselijke gebruikers verdwalen in de ruis. Dit fenomeen vervuilt niet alleen onze feeds, maar erodeert ook het vertrouwen in wat we online zien. Als alles &apos;slop&apos; kan zijn, wordt echte, authentieke menselijke expressie steeds moeilijker vindbaar.
            </p>

            <div className="bg-[#1a1a1a] text-[#f9f7f2] p-10 italic my-12 relative">
              <span className="text-6xl absolute top-2 left-4 opacity-20">&quot;</span>
              <p className="relative z-10 text-2xl leading-relaxed">
                Het gevaar is niet dat AI te slim wordt, maar dat we genoegen nemen met een digitale wereld die door AI is dommer gemaakt.
              </p>
              <p className="text-right mt-4 font-sans text-sm tracking-widest">— Redactionele Analyse</p>
            </div>

            <h2 className="text-3xl font-bold font-serif pt-4 border-b border-gray-300 pb-2">De Impact op de Samenleving</h2>
            <p>
              AI-slop richt zich vaak op kwetsbare groepen die minder digitaal geletterd zijn. Het creëert een voedingsbodem voor oplichting en desinformatie. Bovendien verbruikt de productie van deze zinloze content enorme hoeveelheden energie en rekenkracht, wat een ecologische prijs met zich meebrengt voor niets anders dan digitale vervuiling.
            </p>

            <h2 className="text-3xl font-bold font-serif pt-4 border-b border-gray-300 pb-2">Hoe te Reageren?</h2>
            <p>
              Platformen dragen een grote verantwoordelijkheid om deze &apos;slop&apos; te filteren, maar als gebruikers moeten we onze kritische blik aanscherpen. We moeten waarde hechten aan bronvermelding, menselijke creativiteit en diepgang. Het is tijd om de &apos;slop&apos; te negeren en te eisen dat onze digitale ruimtes weer bedoeld zijn voor echte interactie.
            </p>
          </div>
        </article>
      </main>

      <footer className="bg-[#1a1a1a] text-[#f9f7f2] py-16 px-6 mt-20 border-t border-gray-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-serif italic mb-4">THE AI GAZETTE</h2>
          <p className="font-sans text-xs tracking-widest opacity-70">© 2025 ONDERZOEKSREDACTIE - DIGITALE ETHIEK</p>
        </div>
      </footer>
    </div>
  );
}
