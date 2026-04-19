import Link from 'next/link';

export default function AISlop() {
  const sections = [
    {
      title: 'Context',
      content: 'We bevinden ons in de nasleep van de grote video-AI-doorbraak (Sora, Veo). Wat eerst "magisch" was, is nu gedevalueerd tot digitale ruis. De term "slop" (naar analogie met spam) staat centraal: content die eruitziet als een video, maar geen menselijke intentie of ziel bevat.'
    },
    {
      title: 'Gebruiker',
      content: 'De gebruiker wordt hier neergezet als een "slachtoffer" van algoritmische luiheid. Deckmyn beschrijft de paradox: we krijgen precies wat we (volgens de data) willen zien — schattige katjes, spectaculaire stunts — maar we voelen ons er sneller door verzadigd en zelfs misleid.'
    },
    {
      title: 'Medium',
      content: 'De tekst fungeert als een cultuurkritisch essay. Het gebruikt de krant om een spiegel voor te houden aan platformen als TikTok en Instagram, die hun "sociale" karakter verliezen aan een eindeloze, door machines gegenereerde feed.'
    },
    {
      title: 'Ontwerpkeuze',
      content: 'De afbeelding van de kat op de driewieler is cruciaal. Het is hyper-esthetisch maar absurd. De keuze om deze "perfecte" maar inhoudloze beelden te tonen, versterkt de tekstuele boodschap: het is visueel snoepgoed zonder voedingswaarde.'
    },
    {
      title: 'Reflectie',
      content: 'Deckmyn maakt het persoonlijk door te stellen dat hij stopt met kijken zodra hij AI herkent. Hij reflecteert op een fundamentele breuk in het sociale contract: kijken naar content was vroeger een vorm van menselijke verbinding; nu is het kijken naar een spiegelbeeld van een algoritme.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 pb-20">
      <nav className="p-6">
        <Link href="/" className="inline-flex items-center text-blue-600 font-bold hover:underline">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          Terug naar overzicht
        </Link>
      </nav>

      <header className="max-w-4xl mx-auto py-12 px-6">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
          De Dood van Sociale Media door <span className="text-blue-600">&quot;AI-slop&quot;</span>
        </h1>
        <p className="text-xl text-gray-500">UX/UI Research Analyse</p>
      </header>

      <main className="max-w-4xl mx-auto px-6 space-y-12">
        {sections.map((section, index) => (
          <section key={index} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <h2 className="text-sm font-black uppercase tracking-widest text-blue-600 mb-4">
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
