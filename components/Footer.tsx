export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <span className="text-xl font-black tracking-tighter text-gray-900">
            UX/UI <span className="text-blue-600">LAB</span>
          </span>
          <p className="text-sm text-gray-500 mt-2">Reactiviteit & Next.js Project 2026</p>
        </div>
        <div className="text-gray-400 text-xs uppercase tracking-widest font-bold">
          © 2026 De Standaard Analyse Opdracht
        </div>
      </div>
    </footer>
  );
}
