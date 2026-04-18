import Link from 'next/link';
import Image from 'next/image';
import AnalysisSection from '@/components/AnalysisSection';

export default function Vibecoding() {
  const strengths = [
    { text: "Inspirerend beeldgebruik dat de creatieve mogelijkheden van vibecoding direct zichtbaar maakt." },
    { text: "Heldere uitleg van complexe termen door middel van contextuele aanwijzingen." },
    { text: "Sterk gebruik van typografie om de 'vibe' en moderne invalshoek van het onderwerp te versterken." },
    { text: "Consistente spacing en marges die rust brengen in de lay-out." },
    { text: "Goede mobiele optimalisatie van de leeservaring." }
  ];

  const improvements = [
    { text: "Sommige interactieve elementen zijn niet intuïtief genoeg voor niet-technische gebruikers." },
    { text: "Het kleurgebruik is soms te subtiel, waardoor de hiërarchie tussen koppen vervaagt." },
    { text: "Er ontbreken visuele indicatoren voor lange citaten, waardoor ze opgaan in de tekst." },
    { text: "De laadtijd van grote afbeeldingen kan de initiële ervaring vertragen op tragere verbindingen." },
    { text: "De footer-informatie is te compact en moeilijk leesbaar." }
  ];

  return (
    <article className="max-w-4xl mx-auto py-16 px-6">
      <Link href="/" className="inline-flex items-center text-sm font-bold text-purple-600 mb-12 hover:underline group">
        <svg className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
        </svg>
        Terug naar Overzicht
      </Link>

      <header className="mb-12">
        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-gray-900 mb-6">
          Vibecoding
        </h1>
        <p className="text-xl text-gray-500 leading-relaxed font-medium">
          Hoe we apps bouwen zonder één regel code te schrijven, puur op gevoel en natuurlijke taal.
        </p>
      </header>

      <div className="relative h-[400px] w-full rounded-[2.5rem] overflow-hidden mb-12 shadow-xl">
        <Image
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop"
          alt="Vibecoding Concept"
          fill
          className="object-cover"
        />
      </div>

      <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
        <p>
          Vibecoding is de nieuwste trend in de techwereld. Het idee is simpel: in plaats van uren te zwoegen op syntax en logica, vertel je de AI wat je wilt bouwen en &apos;vibe&apos; je mee met de resultaten tot het goed voelt.
        </p>
        <p>
          De Standaard verkent in dit artikel hoe deze nieuwe manier van werken de drempel voor softwareontwikkeling volledig wegneemt. Iedereen met een goed idee kan nu een functionele app bouwen, mits ze de juiste instructies kunnen geven aan de AI-modellen.
        </p>
      </div>

      <div className="my-20 border-t border-gray-100 pt-20">
        <h2 className="text-3xl font-black text-gray-900 mb-4">UX/UI Analyse</h2>
        <p className="text-gray-500 mb-10">Analyse van de presentatie en structuur van het artikel.</p>

        <AnalysisSection strengths={strengths} improvements={improvements} />
      </div>

      <div className="flex justify-center mt-20">
        <Link href="/" className="bg-gray-900 text-white px-8 py-4 rounded-full font-bold hover:bg-purple-600 transition-colors shadow-lg">
          Terug naar Home
        </Link>
      </div>
    </article>
  );
}
