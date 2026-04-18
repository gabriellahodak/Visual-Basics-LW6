import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const artikels = [
    {
      id: 'ai-slop',
      titel: 'AI-Slop & Sociale Media',
      beschrijving: 'Analyse van de impact van AI-gegenereerde content op onze online interacties.',
      kleur: 'from-blue-500 to-blue-700',
      afbeelding: 'https://images.unsplash.com/photo-1675271591211-126ad94e495d?q=80&w=500&auto=format&fit=crop', // Placeholder voor AI kat
      link: '/ai-slop'
    },
    {
      id: 'vibecoding',
      titel: 'Vibecoding',
      beschrijving: 'Hoe AI de drempel om zelf apps en games te bouwen volledig wegneemt.',
      kleur: 'from-purple-500 to-purple-700',
      afbeelding: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=500&auto=format&fit=crop', // Placeholder voor code
      link: '/vibecoding'
    },
    {
      id: 'amodei',
      titel: 'Dario Amodei & Ethiek',
      beschrijving: 'De juridische en ethische strijd tussen AI-pioniers en de overheid.',
      kleur: 'from-red-500 to-red-700',
      afbeelding: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop', // Placeholder voor portret
      link: '/amodei'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      {/* Hero Sectie */}
      <header className="py-20 px-6 text-center bg-white border-b border-gray-200">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 text-gray-900">
          UX/UI <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">RESEARCH</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
          Een interactieve analyse van moderne media-artikelen. Ontdek hoe designbeslissingen onze leeservaring beïnvloeden.
        </p>
      </header>

      {/* Artikelselectie Grid */}
      <main className="max-w-6xl mx-auto py-16 px-6">
        <div className="grid md:grid-cols-3 gap-10">
          {artikels.map((art) => (
            <Link href={art.link} key={art.id}>
              <div className="group cursor-pointer bg-white rounded-[2rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden transform hover:-translate-y-4">

                {/* Visuele Header van de Kaart */}
                <div className="relative h-48 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${art.kleur} opacity-90 group-hover:scale-110 transition-transform duration-500`}></div>
                  <Image
                    src={art.afbeelding}
                    alt={art.titel}
                    fill
                    className="w-full h-full object-cover mix-blend-overlay grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute bottom-4 left-6">
                    <span className="bg-white/20 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                      Analyse
                    </span>
                  </div>
                </div>

                {/* Inhoud van de Kaart */}
                <div className="p-8">
                  <h2 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {art.titel}
                  </h2>
                  <p className="text-gray-500 leading-relaxed mb-8 text-sm h-12 overflow-hidden">
                    {art.beschrijving}
                  </p>

                  <div className="flex items-center text-sm font-black uppercase tracking-widest text-blue-600">
                    Lees volledige analyse
                    <svg className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="py-10 text-center text-gray-400 text-sm border-t border-gray-100">
        <p>© 2026 UX/UI Opdracht - Reactiviteit & Next.js</p>
      </footer>
    </div>
  );
}
