import Link from 'next/link';
import Navbar from './Navbar';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50 backdrop-blur-md bg-white/80">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-black tracking-tighter text-gray-900 group">
          UX/UI <span className="text-blue-600 group-hover:text-purple-600 transition-colors duration-300">LAB</span>
        </Link>
        <Navbar />
      </div>
    </header>
  );
}
