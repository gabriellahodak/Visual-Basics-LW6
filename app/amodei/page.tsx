import Link from 'next/link';

export default function Amodei() {
  const sections = [
    {
      title: 'Context',
      content: 'Dit artikel plaatst AI in een geopolitiek en juridisch kader. De context is de spanning tussen de Amerikaanse overheid (onder een conservatiever bewind met figuren als Hegseth) en de ethische beloften van AI-labs zoals Anthropic. Het gaat over censuur, vrije meningsuiting en de veiligheid van de toeleveringsketen.'
    },
    {
      title: 'Gebruiker',
      content: 'De doelgroep is hier de hoogopgeleide burger die begrijpt dat AI niet alleen een leuke tool is, maar een machtsfactor in de wereldorde. Het spreekt mensen aan die zich zorgen maken over de "militarisering" of politieke inkleuring van technologie.'
    },
    {
      title: 'Medium',
      content: 'Een politiek-economische analyse. De toon is zakelijk maar scherp, met historische parallellen (zoals de Spartacus-verwijzing) om de ernst van de situatie te duiden.'
    },
    {
      title: 'Ontwerpkeuze',
      content: 'De foto van Amodei — met opgeheven handen, in een defensieve of verklarende pose — typeert de rol van de tech-CEO als de nieuwe "diplomaat". De lay-out met de "Lees ook"-kaders over boycots stuurt de lezer direct naar de bredere maatschappelijke discussie.'
    },
    {
      title: 'Reflectie',
      content: 'De auteur vraagt zich hardop af of Silicon Valley écht een ruggengraat heeft gekregen. Hij reflecteert op de verschuiving van macht: van de werkvloer (die vroeger protesteerde tegen defensiecontracten) naar de absolute top van de "AI-adel". Het is een reflectie op de ethische verantwoordelijkheid van de weinige mensen die begrijpen hoe de krachtigste modellen werken.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 pb-20">
      <nav className="p-6">
        <Link href="/" className="inline-flex items-center text-red-600 font-bold hover:underline">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          Terug naar overzicht
        </Link>
      </nav>

      <header className="max-w-4xl mx-auto py-12 px-6">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
          Dario Amodei vs. <span className="text-red-600">de Overheid</span>
        </h1>
        <p className="text-xl text-gray-500">UX/UI Research Analyse</p>
      </header>

      <main className="max-w-4xl mx-auto px-6 space-y-12">
        {sections.map((section, index) => (
          <section key={index} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <h2 className="text-sm font-black uppercase tracking-widest text-red-600 mb-4">
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
