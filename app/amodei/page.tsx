import Link from 'next/link';
import Image from 'next/image';

export default function Amodei() {
  return (
    <div className="min-h-screen bg-[#f9f7f1] text-[#1a1a1a] font-serif p-4 md:p-8">
      {/* Article Header */}
      <header className="max-w-4xl mx-auto border-b-2 border-black pb-4 mb-8">
        <Link href="/" className="text-sm font-bold uppercase tracking-widest hover:underline mb-8 block">&larr; Terug naar de voorpagina</Link>
        <div className="text-center">
          <h1 className="text-4xl md:text-7xl font-black mb-4 leading-none">Machines of Loving Grace</h1>
          <p className="text-xl md:text-2xl italic text-gray-700 mb-6">Een diepgaande analyse van Dario Amodei&apos;s optimistische visie op AI.</p>
          <div className="flex justify-center gap-4 text-sm font-bold uppercase tracking-widest border-t border-b border-black py-2">
            <span>Door Dario Amodei</span>
            <span>•</span>
            <span>14 Oktober 2024</span>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <main className="max-w-4xl mx-auto">
        <div className="relative h-[300px] md:h-[500px] mb-8 border border-black">
          <Image
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop"
            alt="Dario Amodei Portrait"
            fill
            className="object-cover grayscale"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg leading-relaxed text-justify">
          <div className="first-letter:text-7xl first-letter:font-black first-letter:float-left first-letter:mr-3 first-letter:leading-none">
            <p className="mb-6">
              In zijn recente essay &quot;Machines of Loving Grace&quot; schetst Dario Amodei, de CEO van Anthropic, een opvallend positief toekomstbeeld voor kunstmatige intelligentie. Terwijl veel debatten zich concentreren op de existentiële risico&apos;s, nodigt Amodei ons uit om na te denken over de enorme voordelen die AI kan bieden als we de ontwikkeling ervan op de juiste manier sturen.
            </p>
            <p className="mb-6 font-bold italic">
              &quot;AI is niet slechts een tool, maar een mogelijke katalysator voor een nieuwe gouden eeuw van menselijke vooruitgang.&quot;
            </p>
            <h2 className="text-2xl font-black uppercase mb-4 border-b border-black">Biologie en Gezondheid</h2>
            <p className="mb-6">
              Een van de meest veelbelovende gebieden die Amodei noemt, is de biologie. Hij voorspelt dat AI de ontdekking van medicijnen en het begrip van complexe ziekten decennia kan versnellen. De mogelijkheid om biologische processen te simuleren en te optimaliseren zou kunnen leiden tot het uitroeien van vele chronische aandoeningen binnen onze levensduur.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black uppercase mb-4 border-b border-black">Neurowetenschap</h2>
            <p className="mb-6">
              Amodei ziet ook een revolutie in de neurowetenschap. AI zou ons kunnen helpen de werking van het menselijk brein te ontcijferen, wat niet alleen medische voordelen heeft voor de behandeling van mentale ziektes, maar ook onze fundamentele kennis over bewustzijn en leren kan vergroten.
            </p>
            <h2 className="text-2xl font-black uppercase mb-4 border-b border-black">Economie en Bestuur</h2>
            <p className="mb-6">
              Op maatschappelijk vlak suggereert hij dat AI kan helpen bij het oplossen van complexe economische problemen en het verbeteren van overheidsdiensten. Door data-gedreven inzichten zouden we effectievere beleidsmaatregelen kunnen nemen die de ongelijkheid verminderen en de algemene welvaart verhogen.
            </p>
            <p className="mb-6 border-l-4 border-black pl-4 italic">
              De uitdaging ligt echter in de &quot;alignment&quot;: ervoor zorgen dat deze krachtige systemen handelen in overeenstemming met menselijke waarden en ethiek.
            </p>
            <p>
              Amodei&apos;s visie is een krachtig tegenwicht voor de doemscenario&apos;s. Het herinnert ons eraan dat de toekomst van AI niet alleen gaat over wat we moeten vrezen, maar ook over wat we kunnen bereiken.
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
