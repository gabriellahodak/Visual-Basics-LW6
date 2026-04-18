import Link from 'next/link';
import Image from 'next/image';

export default function AISlop() {
  return (
    <div className="min-h-screen bg-[#f9f7f1] text-[#1a1a1a] font-serif p-4 md:p-8">
      {/* Article Header */}
      <header className="max-w-4xl mx-auto border-b-2 border-black pb-4 mb-8">
        <Link href="/" className="text-sm font-bold uppercase tracking-widest hover:underline mb-8 block">&larr; Terug naar de voorpagina</Link>
        <div className="text-center">
          <h1 className="text-4xl md:text-7xl font-black mb-4 leading-none">De Vloedgolf van AI Slop</h1>
          <p className="text-xl md:text-2xl italic text-gray-700 mb-6">Hoe zielloze content het fundament van het internet ondermijnt.</p>
          <div className="flex justify-center gap-4 text-sm font-bold uppercase tracking-widest border-t border-b border-black py-2">
            <span>Door Technologie Redactie</span>
            <span>•</span>
            <span>12 Oktober 2024</span>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <main className="max-w-4xl mx-auto">
        <div className="relative h-[300px] md:h-[500px] mb-8 border border-black">
          <Image
            src="https://images.unsplash.com/photo-1675271591211-126ad94e495d?q=80&w=1200&auto=format&fit=crop"
            alt="AI Slop Representation"
            fill
            className="object-cover grayscale"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg leading-relaxed text-justify">
          <div className="first-letter:text-7xl first-letter:font-black first-letter:float-left first-letter:mr-3 first-letter:leading-none">
            <p className="mb-6">
              De term &quot;AI Slop&quot; wint aan terrein als verzamelnaam voor de enorme hoeveelheid lage-kwaliteit, door AI gegenereerde content die sociale media en zoekmachines overspoelt. Van vreemde Facebook-plaatjes van Jezus gemaakt van garnalen tot eindeloze, nietszeggende blogposts; de digitale vervuiling neemt schrikbarende vormen aan.
            </p>
            <h2 className="text-2xl font-black uppercase mb-4 border-b border-black">Erosie van Vertrouwen</h2>
            <p className="mb-6">
              Het grootste gevaar van &quot;slop&quot; is niet dat het vervelend is, maar dat het het vertrouwen in online informatie uitholt. Wanneer gebruikers niet meer kunnen onderscheiden of een tekst door een mens met expertise of door een algoritme zonder begrip is geschreven, verliest het internet zijn waarde als bron van kennis.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black uppercase mb-4 border-b border-black">Algoritmische Echo&apos;s</h2>
            <p className="mb-6">
              Sociale media algoritmes zijn getraind op interactie, niet op kwaliteit. AI-slop wordt vaak specifiek ontworpen om deze algoritmes te triggeren, wat leidt tot een vicieuze cirkel waarin betekenisvolle content wordt verdrongen door kunstmatige ruis die alleen bestaat om advertentie-inkomsten te genereren.
            </p>
            <blockquote className="text-2xl italic font-black leading-tight my-8 border-l-8 border-black pl-6">
              &quot;We bouwen een digitale bibliotheek waarin de helft van de boeken wartaal bevat.&quot;
            </blockquote>
            <h2 className="text-2xl font-black uppercase mb-4 border-b border-black">De Weg Voorwaarts</h2>
            <p className="mb-6">
              Het bestrijden van AI-slop vereist een combinatie van betere detectietools, strengere moderatie door platforms en een kritische houding van de consument. Alleen door kwaliteit boven kwantiteit te verkiezen, kunnen we de menselijke kern van ons digitale ecosysteem beschermen.
            </p>
          </div>
        </div>
      </main>

      <footer className="max-w-4xl mx-auto border-t-2 border-black mt-12 pt-8 text-center text-sm font-bold uppercase tracking-widest">
        <Link href="/" className="hover:underline">Terug naar de voorpagina</Link>
      </footer>
    </div>
  );
}
