import Link from 'next/link';

export default function Vibecoding() {
  const sections = [
    {
      title: 'Context',
      content: 'Dit is het meest optimistische/technische stuk. Het beschrijft een paradigmaverschuiving in arbeid. Coderen verandert van "grammatica kennen" (syntax) naar "visie hebben" (intentie). De "vibe" van de maker bepaalt het resultaat, niet de typevaardigheid.'
    },
    {
      title: 'Gebruiker',
      content: 'De "bouwer" van de toekomst. Dit artikel spreekt de creatieve klasse aan die voorheen werd afgeschrikt door de complexiteit van technologie. Het gaat over de democratisering van creativiteit.'
    },
    {
      title: 'Medium',
      content: 'Een educatieve feature. Het medium dient hier als gids voor de lezer om een nieuwe trend te begrijpen die hun eigen baan of hobby kan veranderen.'
    },
    {
      title: 'Ontwerpkeuze',
      content: 'De vele visuele elementen (zoals de interface van Replit en de retro-game) dienen als bewijsvoering. Het laat zien: "Kijk, dit heb ik in vijf minuten gemaakt zonder een regel code te typen." Dit verlaagt de drempel voor de lezer.'
    },
    {
      title: 'Reflectie',
      content: 'Deckmyn reflecteert op de definitie van expertise. Als iedereen kan bouwen, wat is dan nog de waarde van een programmeur? Hij concludeert dat de focus verschuift naar smaak en oordeelsvermogen. De mens wordt de curator van de output van de machine, in plaats van de arbeider die de stenen legt.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 pb-20">
      <nav className="p-6">
        <Link href="/" className="inline-flex items-center text-purple-600 font-bold hover:underline">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          Terug naar overzicht
        </Link>
      </nav>

      <header className="max-w-4xl mx-auto py-12 px-6">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
          De Opkomst van <span className="text-purple-600">Vibecoding</span>
        </h1>
        <p className="text-xl text-gray-500">UX/UI Research Analyse</p>
      </header>

      <main className="max-w-4xl mx-auto px-6 space-y-12">
        {sections.map((section, index) => (
          <section key={index} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <h2 className="text-sm font-black uppercase tracking-widest text-purple-600 mb-4">
              {section.title}
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              {section.content}
            </p>
          </section>
        ))}
      </main>
    </div>
  );
}
