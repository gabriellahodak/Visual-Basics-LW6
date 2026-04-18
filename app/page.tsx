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
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#1a1a1a]">
          {artikels.map((art, index) => (
            <Link
              key={art.id}
              href={art.link}
              className={`group relative flex flex-col p-8 transition-all duration-300 hover:bg-[#1a1a1a] hover:text-[#f9f7f2] border-[#1a1a1a] ${
                index !== artikels.length - 1 ? 'md:border-r border-b md:border-b-0' : ''
              }`}
            >
              <div className="flex-grow">
                <span className="text-red-700 font-sans font-bold uppercase text-xs tracking-widest group-hover:text-red-400">
                  {art.categorie}
                </span>
                <h2 className="text-3xl font-bold mt-4 mb-6 leading-tight group-hover:italic transition-all">
                  {art.titel}
                </h2>
                <div className="relative h-64 mb-6 overflow-hidden border border-[#1a1a1a]">
                  <Image
                    src={art.afbeelding}
                    alt={art.titel}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0"
                  />
                </div>
                <p className="text-lg leading-relaxed opacity-80 mb-8">
                  {art.ondertitel}. Klik hier voor de volledige analyse van dit artikel.
                </p>
              </div>

              <div className="mt-auto pt-6 border-t border-[#1a1a1a] group-hover:border-[#f9f7f2]">
                <span className="inline-block px-6 py-3 border border-[#1a1a1a] group-hover:border-[#f9f7f2] font-sans font-bold uppercase text-xs tracking-widest">
                  Lees Analyse &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 border-t-2 border-[#1a1a1a] pt-8 grid grid-cols-1 md:grid-cols-2 gap-8 italic text-sm opacity-70">
          <p>
            Onze missie is het bieden van helderheid in een wereld die razendsnel wordt getransformeerd door kunstmatige intelligentie. We analyseren de trends die er werkelijk toe doen.
          </p>
          <p className="md:text-right">
            Gepubliceerd door de Redactie van de AI Gazette. Geen downloads nodig, alleen pure analyse.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] text-[#f9f7f2] mt-24 py-16 px-6 border-t-8 border-double border-[#f9f7f2]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-serif italic mb-6">THE AI GAZETTE</h2>
          <div className="w-24 h-1 bg-red-700 mx-auto mb-8"></div>
          <p className="font-sans text-sm tracking-widest opacity-70">© 2025 EDITORIAL ANALYSIS PROJECT | AMSTERDAM</p>
        </div>
      </footer>
    </div>
  );
}
