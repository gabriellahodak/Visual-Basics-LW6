import ArticleCard from '@/components/ArticleCard';

export default function Home() {
  const artikels = [
    {
      id: 'ai-slop',
      titel: 'AI-Slop & Sociale Media',
      beschrijving: 'Analyse van de impact van AI-gegenereerde content op onze online interacties en de vervuiling van het digitale ecosysteem.',
      kleur: 'from-blue-500 to-blue-700',
      afbeelding: 'https://images.unsplash.com/photo-1675271591211-126ad94e495d?q=80&w=500&auto=format&fit=crop',
      link: '/ai-slop'
    },
    {
      id: 'vibecoding',
      titel: 'Vibecoding',
      beschrijving: 'Hoe AI de drempel om zelf apps en games te bouwen volledig wegneemt door te coderen op gevoel en natuurlijke taal.',
      kleur: 'from-purple-500 to-purple-700',
      afbeelding: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=500&auto=format&fit=crop',
      link: '/vibecoding'
    },
    {
      id: 'amodei',
      titel: 'Dario Amodei & Ethiek',
      beschrijving: 'De juridische en ethische strijd tussen AI-pioniers en de overheid over de toekomst van kunstmatige intelligentie.',
      kleur: 'from-red-500 to-red-700',
      afbeelding: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop',
      link: '/amodei'
    }
  ];

  return (
    <div className="flex-grow bg-gray-50/50">
      {/* Hero Sectie */}
      <section className="py-24 px-6 text-center bg-white relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 text-gray-900">
            UX/UI <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">RESEARCH</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto font-medium leading-relaxed mb-10">
            Een diepgaande analyse van moderne media-artikelen van <span className="text-gray-900 font-bold underline decoration-blue-500 decoration-4 underline-offset-4">De Standaard</span>.
          </p>
          <div className="flex justify-center gap-4">
            <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
            <div className="h-1 w-20 bg-purple-600 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Artikelselectie Grid */}
      <main className="max-w-7xl mx-auto py-20 px-6">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-black text-gray-900 tracking-tight">Geselecteerde Artikelen</h2>
            <p className="text-gray-500 mt-2">Kies een artikel om de volledige UX/UI analyse te bekijken.</p>
          </div>
          <div className="hidden md:block text-xs font-bold uppercase tracking-widest text-gray-300">
            3 Artikelen Beschikbaar
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {artikels.map((art) => (
            <ArticleCard key={art.id} {...art} />
          ))}
        </div>
      </main>

      {/* Info Sectie */}
      <section className="max-w-4xl mx-auto pb-24 px-6">
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-[3rem] p-12 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-6">Over dit Project</h3>
            <p className="text-gray-300 leading-relaxed mb-8 text-lg">
              In dit project onderzoeken we hoe designbeslissingen in digitale journalistiek de leeservaring en informatieoverdracht beïnvloeden. We passen principes van visuele hiërarchie, typografie en witruimte toe om de content toegankelijker te maken.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-blue-400 font-black text-2xl mb-1">UX</div>
                <div className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Experience</div>
              </div>
              <div className="text-center p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-purple-400 font-black text-2xl mb-1">UI</div>
                <div className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Interface</div>
              </div>
              <div className="text-center p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-green-400 font-black text-2xl mb-1">Next.js</div>
                <div className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Framework</div>
              </div>
              <div className="text-center p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-orange-400 font-black text-2xl mb-1">Tailwind</div>
                <div className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Styling</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
