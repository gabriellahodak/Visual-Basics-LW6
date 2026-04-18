import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const artikels = [
    {
      id: 'amodei',
      titel: 'Machines of Loving Grace',
      subtitel: 'De optimistische visie van Dario Amodei op de toekomst van AI.',
      auteur: 'Dario Amodei',
      datum: '14 Oct 2024',
      link: '/amodei',
      afbeelding: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 'ai-slop',
      titel: 'De Opkomst van AI Slop',
      subtitel: 'Hoe de vloedgolf aan AI-content het internet dreigt te overspoelen.',
      beschrijving: "Het internet wordt overspoeld met zielloze, door AI gegenereerde content. Wat betekent deze 'slop' voor de kwaliteit van onze digitale informatievoorziening?",
      auteur: 'Technologie Redactie',
      datum: '12 Oct 2024',
      link: '/ai-slop',
      afbeelding: 'https://images.unsplash.com/photo-1675271591211-126ad94e495d?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 'vibecoding',
      titel: 'De Revolutie van Vibecoding',
      subtitel: 'Programmeren zonder code: De drempel naar creativiteit verdwijnt.',
      beschrijving: "Dankzij nieuwe AI-tools kunnen creatievelingen nu apps bouwen door simpelweg hun visie te beschrijven. Is de tijd van handmatig coderen voorbij?",
      auteur: 'Innovation Labs',
      datum: '10 Oct 2024',
      link: '/vibecoding',
      afbeelding: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen bg-[#f9f7f1] text-[#1a1a1a] font-serif p-4 md:p-8">
      {/* Masthead */}
      <header className="max-w-7xl mx-auto border-b-4 border-black pb-4 mb-8">
        <div className="flex justify-between items-end border-b border-black pb-2 mb-2">
          <div className="text-sm font-bold uppercase tracking-widest">Vol. CXII ... No. 59,834</div>
          <div className="text-3xl font-black uppercase tracking-tighter">De AI Courant</div>
          <div className="text-sm font-bold uppercase tracking-widest text-right">Maandag, 21 Oktober 2024</div>
        </div>
        <h1 className="text-6xl md:text-9xl text-center font-black uppercase tracking-tighter py-4 border-b-2 border-black">
          THE AI CHRONICLE
        </h1>
        <div className="flex justify-center gap-8 py-2 text-sm font-bold uppercase tracking-widest border-b border-black">
          <span>Technologie</span>
          <span>Ethiek</span>
          <span>Toekomst</span>
          <span>Analyse</span>
        </div>
      </header>

      {/* Main Content Grid */}
      <main className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

          {/* Main Article (Amodei) */}
          <article className="md:col-span-8 border-b md:border-b-0 md:border-r border-black pr-0 md:pr-8 pb-8 md:pb-0">
            <Link href={artikels[0].link} className="group">
              <div className="relative h-[400px] mb-6 overflow-hidden border border-black">
                <Image
                  src={artikels[0].afbeelding}
                  alt={artikels[0].titel}
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
              </div>
              <h2 className="text-4xl md:text-6xl font-black mb-4 leading-none group-hover:underline">
                {artikels[0].titel}
              </h2>
              <p className="text-xl mb-4 italic text-gray-700">
                {artikels[0].subtitel}
              </p>
              <div className="columns-1 md:columns-2 gap-6 text-lg leading-relaxed text-justify">
                <p>
                  In een uitgebreid essay schetst Dario Amodei, CEO van Anthropic, een toekomstbeeld waarin kunstmatige intelligentie niet als een dreiging, maar als een katalysator voor menselijke bloei fungeert. Hij spreekt over &quot;Machines of Loving Grace&quot;, een term geleend van Richard Brautigan, om een wereld te beschrijven waarin AI de grootste uitdagingen van de mensheid helpt op te lossen.
                </p>
                <p className="mt-4 md:mt-0">
                  Van het genezen van ziektes tot het stabiliseren van democratieën; de potentie is volgens Amodei grenzeloos, mits we de risico&apos;s beheersen. Deze diepgaande analyse verkent de ethische en praktische implicaties van zijn visie op een door AI versterkte samenleving.
                </p>
              </div>
              <div className="mt-6 flex justify-between items-center border-t border-black pt-4">
                <span className="font-bold uppercase tracking-widest text-sm">Door {artikels[0].auteur}</span>
                <span className="font-bold text-sm underline decoration-2 underline-offset-4">Lees Verder &rarr;</span>
              </div>
            </Link>
          </article>

          {/* Side Articles */}
          <aside className="md:col-span-4 flex flex-col gap-8">
            {artikels.slice(1).map((art) => (
              <article key={art.id} className="border-b border-black pb-8 last:border-0">
                <Link href={art.link} className="group">
                  <div className="relative h-48 mb-4 overflow-hidden border border-black">
                    <Image
                      src={art.afbeelding}
                      alt={art.titel}
                      fill
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-2xl font-black mb-2 leading-tight group-hover:underline">
                    {art.titel}
                  </h3>
                  <p className="text-sm italic mb-4 text-gray-700">
                    {art.subtitel}
                  </p>
                  <p className="text-base leading-relaxed mb-4 text-justify">
                    {art.beschrijving}
                  </p>
                  <div className="flex justify-between items-center border-t border-black pt-2">
                    <span className="font-bold uppercase tracking-widest text-[10px]">{art.datum}</span>
                    <span className="font-bold text-xs underline decoration-2 underline-offset-2 italic">Analyse &rarr;</span>
                  </div>
                </Link>
              </article>
            ))}

            {/* Quote of the Day / Opinion section */}
            <div className="bg-black text-white p-6 mt-auto">
              <h4 className="font-bold uppercase tracking-widest text-xs mb-4 border-b border-white/30 pb-2">Opinie</h4>
              <blockquote className="text-xl italic leading-tight mb-4">
                &quot;AI is niet het einde van creativiteit, maar het begin van een nieuwe taal.&quot;
              </blockquote>
              <cite className="block text-right font-bold uppercase tracking-widest text-[10px]">-- Anonieme Ontwikkelaar</cite>
            </div>
          </aside>

        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto border-t-4 border-black mt-16 py-8 text-center">
        <p className="font-black uppercase tracking-widest text-sm">
          © 2024 THE AI CHRONICLE - ALLE RECHTEN VOORBEHOUDEN
        </p>
        <div className="flex justify-center gap-4 mt-4 text-xs font-bold underline underline-offset-4 decoration-1">
          <Link href="#">Abonnementen</Link>
          <Link href="#">Archief</Link>
          <Link href="#">Contact</Link>
        </div>
      </footer>
    </div>
  );
}
