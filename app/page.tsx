import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const artikels = [
    {
      id: 'ai-slop',
      titel: 'De Opkomst van AI-Slop',
      ondertitel: 'Hoe gegenereerde ruis de sociale media overspoelt',
      categorie: 'Technologie & Cultuur',
      afbeelding: 'https://images.unsplash.com/photo-1675271591211-126ad94e495d?q=80&w=800&auto=format&fit=crop',
      link: '/ai-slop'
    },
    {
      id: 'amodei',
      titel: 'Machines of Loving Grace',
      ondertitel: 'Dario Amodei over de optimistische toekomst van AI',
      categorie: 'Filosofie & Ethiek',
      afbeelding: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?q=80&w=800&auto=format&fit=crop',
      link: '/amodei'
    },
    {
      id: 'vibecoding',
      titel: 'Het Tijdperk van Vibe Coding',
      ondertitel: 'Bouwen op gevoel in plaats van syntaxis',
      categorie: 'Ontwikkeling',
      afbeelding: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop',
      link: '/vibecoding'
    }
  ];

  return (
    <div className="min-h-screen bg-[#f9f7f2] text-[#1a1a1a] font-serif">
      {/* Masthead */}
      <header className="border-b-4 border-double border-[#1a1a1a] py-8 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-6">
          <p className="text-sm uppercase tracking-widest font-sans font-bold">Zaterdag 22 Februari 2025</p>
          <h1 className="text-6xl md:text-8xl font-black tracking-tight my-4 font-serif italic border-y border-[#1a1a1a] py-4 inline-block px-12">
            THE AI GAZETTE
          </h1>
          <p className="text-lg italic font-medium">Analyse, Inzicht en de Toekomst van Technologie</p>
        </div>
        <nav className="flex justify-center gap-8 border-t border-[#1a1a1a] pt-4 font-sans text-sm font-bold uppercase tracking-wider">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/ai-slop" className="hover:underline">AI Slop</Link>
          <Link href="/amodei" className="hover:underline">Amodei</Link>
          <Link href="/vibecoding" className="hover:underline">Vibe Coding</Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

          {/* Main Feature */}
          <section className="md:col-span-8 border-r border-gray-300 pr-8">
            <Link href={artikels[0].link} className="group">
              <div className="relative h-[400px] mb-6 overflow-hidden border border-gray-200">
                <Image
                  src={artikels[0].afbeelding}
                  alt={artikels[0].titel}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <span className="text-red-700 font-sans font-bold uppercase text-xs tracking-widest">{artikels[0].categorie}</span>
              <h2 className="text-4xl font-bold mt-2 mb-4 group-hover:underline underline-offset-4">
                {artikels[0].titel}
              </h2>
              <p className="text-xl leading-relaxed text-gray-700">
                {artikels[0].ondertitel}. Een diepe duik in hoe de wildgroei aan AI-content de structuur van onze digitale sociale ruimtes fundamenteel verandert en waarom we waakzaam moeten zijn voor de &apos;slop&apos; die ons bereikt.
              </p>
            </Link>
          </section>

          {/* Sidebar Features */}
          <aside className="md:col-span-4 space-y-8">
            {artikels.slice(1).map((art) => (
              <Link href={art.link} key={art.id} className="block group border-b border-gray-300 pb-8 last:border-0">
                <div className="relative h-48 mb-4 overflow-hidden border border-gray-200">
                  <Image
                    src={art.afbeelding}
                    alt={art.titel}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <span className="text-red-700 font-sans font-bold uppercase text-xs tracking-widest">{art.categorie}</span>
                <h3 className="text-2xl font-bold mt-2 mb-2 group-hover:underline underline-offset-2">
                  {art.titel}
                </h3>
                <p className="text-gray-700 leading-snug">
                  {art.ondertitel}. Ontdek de nieuwste perspectieven op deze technologische verschuiving.
                </p>
              </Link>
            ))}
          </aside>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] text-[#f9f7f2] mt-16 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-serif italic mb-4">THE AI GAZETTE</h2>
          <p className="font-sans text-sm tracking-widest opacity-70">© 2025 EDITORIAL ANALYSIS PROJECT</p>
        </div>
      </footer>
    </div>
  );
}
