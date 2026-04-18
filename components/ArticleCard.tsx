import Link from 'next/link';
import Image from 'next/image';

interface ArticleCardProps {
  id: string;
  titel: string;
  beschrijving: string;
  kleur: string;
  afbeelding: string;
  link: string;
}

export default function ArticleCard({ titel, beschrijving, kleur, afbeelding, link }: ArticleCardProps) {
  return (
    <Link href={link}>
      <div className="group cursor-pointer bg-white rounded-[2rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden transform hover:-translate-y-4 h-full flex flex-col">
        <div className="relative h-56 overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-br ${kleur} opacity-90 group-hover:scale-110 transition-transform duration-500`}></div>
          <Image
            src={afbeelding}
            alt={titel}
            fill
            className="w-full h-full object-cover mix-blend-overlay grayscale group-hover:grayscale-0 transition-all duration-500"
          />
          <div className="absolute bottom-4 left-6">
            <span className="bg-white/20 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
              Analyse
            </span>
          </div>
        </div>
        <div className="p-8 flex flex-col flex-grow">
          <h2 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition-colors duration-300">
            {titel}
          </h2>
          <p className="text-gray-500 leading-relaxed mb-8 text-sm line-clamp-2">
            {beschrijving}
          </p>
          <div className="mt-auto flex items-center text-xs font-black uppercase tracking-widest text-blue-600">
            Bekijk Analyse
            <svg className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
