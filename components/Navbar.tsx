import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <ul className="flex space-x-8 text-sm font-bold uppercase tracking-widest text-gray-500">
        <li>
          <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
        </li>
        <li>
          <Link href="/ai-slop" className="hover:text-blue-600 transition-colors">AI-Slop</Link>
        </li>
        <li>
          <Link href="/vibecoding" className="hover:text-blue-600 transition-colors">Vibecoding</Link>
        </li>
        <li>
          <Link href="/amodei" className="hover:text-blue-600 transition-colors">Amodei</Link>
        </li>
      </ul>
    </nav>
  );
}
