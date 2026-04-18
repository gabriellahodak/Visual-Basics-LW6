import Link from 'next/link';
import Image from 'next/image';
import AnalysisSection from '@/components/AnalysisSection';

export default function Amodei() {
  const strengths = [
    { text: "Serieuze en autoritaire uitstraling door het gebruik van een strakke, schreefloze typografie." },
    { text: "Gebruik van kwalitatieve portretfotografie die de menselijke kant van het ethische debat benadrukt." },
    { text: "Duidelijke scheiding tussen feitelijke berichtgeving en opiniërende kaders." },
    { text: "Goede contrasten tussen tekst en achtergrond, wat de leesbaarheid voor een breed publiek garandeert." },
    { text: "Responsive elementen die zich naadloos aanpassen aan verschillende schermformaten." }
  ];

  const improvements = [
    { text: "De navigatiebalk bovenin neemt te veel ruimte in beslag op kleinere schermen." },
    { text: "Lange lappen tekst zonder tussenkoppen maken het lastig om het artikel snel te scannen." },
    { text: "Links naar gerelateerde artikelen onderbreken de leesflow te abrupt." },
    { text: "Sommige grafieken zijn op mobiel niet goed leesbaar zonder in te zoomen." },
    { text: "Het kleuraccent (rood) wordt op te veel verschillende plaatsen gebruikt, wat afleidend werkt." }
  ];

  return (
    <article className="max-w-4xl mx-auto py-16 px-6">
      <Link href="/" className="inline-flex items-center text-sm font-bold text-red-600 mb-12 hover:underline group">
        <svg className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
        </svg>
        Terug naar Overzicht
      </Link>

      <header className="mb-12">
        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-gray-900 mb-6">
          Dario Amodei & Ethiek
        </h1>
        <p className="text-xl text-gray-500 leading-relaxed font-medium">
          De juridische en morele dilemma&apos;s van de man achter Anthropic en de strijd om verantwoorde AI.
        </p>
      </header>

      <div className="relative h-[400px] w-full rounded-[2.5rem] overflow-hidden mb-12 shadow-xl">
        <Image
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop"
          alt="Ethics and AI"
          fill
          className="object-cover"
        />
      </div>

      <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
        <p>
          Dario Amodei, CEO van Anthropic, staat in het centrum van de discussie over AI-veiligheid. Terwijl de technologie zich razendsnel ontwikkelt, waarschuwen Amodei en zijn team voor de existentiële risico&apos;s.
        </p>
        <p>
          Dit artikel van De Standaard belicht de complexe relatie tussen techbedrijven, de overheid en de ethische commissies die proberen de toekomst van de mensheid te waarborgen in een tijdperk van superintelligentie.
        </p>
      </div>

      <div className="my-20 border-t border-gray-100 pt-20">
        <h2 className="text-3xl font-black text-gray-900 mb-4">UX/UI Analyse</h2>
        <p className="text-gray-500 mb-10">Inzichten gebaseerd op de presentatie van de ethische vraagstukken.</p>

        <AnalysisSection strengths={strengths} improvements={improvements} />
      </div>

      <div className="flex justify-center mt-20">
        <Link href="/" className="bg-gray-900 text-white px-8 py-4 rounded-full font-bold hover:bg-red-600 transition-colors shadow-lg">
          Terug naar Home
        </Link>
      </div>
    </article>
  );
}
