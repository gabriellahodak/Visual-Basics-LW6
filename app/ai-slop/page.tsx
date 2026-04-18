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
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              De Opkomst van AI-Slop: Een Analyse van Digitale Vervuiling
            </h1>
            <p className="text-2xl italic text-gray-700 leading-relaxed border-l-4 border-[#1a1a1a] pl-6 py-2">
              Hoe de massale productie van AI-gegenereerde content onze sociale media transformeert in een &apos;dead internet&apos;.
            </p>
          </header>

          <div className="relative h-96 mb-12 border border-gray-200">
            <Image
              src="https://images.unsplash.com/photo-1675271591211-126ad94e495d?q=80&w=800&auto=format&fit=crop"
              alt="AI Slop Visual"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-cover"
            />
          </div>

          <div className="prose prose-lg prose-gray max-w-none leading-relaxed space-y-8 text-xl">
            <p>
              In het huidige digitale landschap zien we een verontrustende trend: de opkomst van zogenaamde &quot;AI-slop&quot;. Dit zijn beelden, teksten en video&apos;s die met minimale menselijke tussenkomst door kunstmatige intelligentie worden geproduceerd, puur om aandacht en clicks te trekken op platforms zoals Facebook en Instagram.
            </p>

            <h2 className="text-3xl font-bold font-serif pt-4">De Psychologie van de &apos;Like&apos;</h2>
            <p>
              Veel van deze content richt zich op een specifiek publiek, vaak oudere gebruikers of mensen die minder kritisch zijn op wat ze online zien. Beelden van &quot;Gezegende&quot; kinderen, gigantische zandsculpturen of onmogelijke interieurs worden massaal gedeeld. Dit creëert een feedbackloop waarbij algoritmes nog meer van deze inhoud pushen, wat de weg vrijmaakt voor oplichting en desinformatie.
            </p>

            <h2 className="text-3xl font-bold font-serif pt-4">Gevolgen voor de Gebruikerservaring</h2>
            <p>
              De overvloed aan deze &apos;slop&apos; vervuilt de authentieke menselijke interactie. Waar sociale media ooit bedoeld waren voor verbinding tussen personen, worden ze nu overspoeld door een &quot;Dead Internet&quot; scenario waarin bots content maken voor andere bots, terwijl echte gebruikers verdrinken in de ruis.
            </p>

            <p className="bg-gray-100 p-8 italic border-y-2 border-gray-300 my-12">
              &quot;Het gevaar is niet dat AI de wereld overneemt, maar dat het de kwaliteit van onze informatievoorziening tot een kritiek punt degradeert.&quot;
            </p>

            <h2 className="text-3xl font-bold font-serif pt-4">Conclusie</h2>
            <p>
              Het herkennen van AI-slop is de eerste stap in het terugwinnen van onze digitale ruimte. Platformen moeten betere filters implementeren, maar als gebruikers is een kritische blik noodzakelijker dan ooit.
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
