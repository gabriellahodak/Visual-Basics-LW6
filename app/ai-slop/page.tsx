import Link from 'next/link';
import Image from 'next/image';
import AnalysisSection from '@/components/AnalysisSection';

export default function AISlop() {
  const strengths = [
    { text: "Duidelijke en prikkelende hoofdtitel die onmiddellijk de aandacht trekt en het onderwerp 'AI-slop' introduceert." },
    { text: "Gebruik van relevante afbeeldingen die het concept van AI-gegenereerde 'rommel' visueel ondersteunen." },
    { text: "Goede opbouw van het artikel met korte alinea's, wat de leesbaarheid op digitale schermen bevordert." },
    { text: "Duidelijke visuele hiërarchie tussen koppen, subkoppen en broodtekst." },
    { text: "Interactieve elementen of links naar bronnen die de diepgang van het artikel vergroten." }
  ];

  const improvements = [
    { text: "De witruimte tussen verschillende secties kan consistenter, om een betere flow te creëren." },
    { text: "Sommige tekstblokken zijn nog te breed op grote schermen, wat vermoeiend kan zijn voor de ogen." },
    { text: "Contrastverhouding van sommige bijschriften kan worden verhoogd voor betere toegankelijkheid." },
    { text: "Navigatie binnen het artikel (bijv. een inhoudsopgave) ontbreekt bij langere stukken." },
    { text: "Call-to-action knoppen onderaan het artikel zijn niet opvallend genoeg." }
  ];

  return (
    <article className="max-w-4xl mx-auto py-16 px-6">
      <Link href="/" className="inline-flex items-center text-sm font-bold text-blue-600 mb-12 hover:underline group">
        <svg className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
        </svg>
        Terug naar Overzicht
      </Link>

      <header className="mb-12">
        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-gray-900 mb-6">
          AI-Slop & Sociale Media
        </h1>
        <p className="text-xl text-gray-500 leading-relaxed font-medium">
          Hoe AI-gegenereerde content onze feeds vervuilt en wat we daaraan kunnen doen. Een analyse van de digitale wildgroei.
        </p>
      </header>

      <div className="relative h-[400px] w-full rounded-[2.5rem] overflow-hidden mb-12 shadow-xl">
        <Image
          src="https://images.unsplash.com/photo-1675271591211-126ad94e495d?q=80&w=1200&auto=format&fit=crop"
          alt="AI Generated Content"
          fill
          className="object-cover"
        />
      </div>

      <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
        <p>
          De term &apos;AI-slop&apos; duikt steeds vaker op in discussies over de kwaliteit van content op sociale media. Het verwijst naar de eindeloze stroom van middelmatige, vaak zinloze afbeeldingen en teksten die door algoritmen worden gegenereerd en verspreid.
        </p>
        <p>
          In dit artikel van De Standaard wordt dieper ingegaan op hoe deze trend de gebruikerservaring van platformen zoals Facebook en X (voorheen Twitter) fundamenteel verandert. Gebruikers moeten steeds meer moeite doen om authentieke menselijke connectie te vinden tussen de door AI gegenereerde ruis.
        </p>
      </div>

      <div className="my-20 border-t border-gray-100 pt-20">
        <h2 className="text-3xl font-black text-gray-900 mb-4">UX/UI Analyse</h2>
        <p className="text-gray-500 mb-10">Op basis van de analyse van het originele artikel hebben we de volgende inzichten verzameld.</p>

        <AnalysisSection strengths={strengths} improvements={improvements} />
      </div>

      <div className="flex justify-center mt-20">
        <Link href="/" className="bg-gray-900 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-600 transition-colors shadow-lg">
          Terug naar Home
        </Link>
      </div>
    </article>
  );
}
