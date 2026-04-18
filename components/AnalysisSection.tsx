interface Point {
  text: string;
}

interface AnalysisSectionProps {
  strengths: Point[];
  improvements: Point[];
}

export default function AnalysisSection({ strengths, improvements }: AnalysisSectionProps) {
  return (
    <section className="my-16 grid md:grid-cols-2 gap-8">
      <div className="bg-green-50 rounded-[2rem] p-10 border border-green-100">
        <h3 className="text-xl font-black text-green-900 mb-6 flex items-center">
          <span className="w-8 h-8 rounded-full bg-green-200 flex items-center justify-center mr-3 text-sm">✓</span>
          Sterke Punten (UX/UI)
        </h3>
        <ul className="space-y-4">
          {strengths.map((point, index) => (
            <li key={index} className="flex items-start text-green-800 text-sm leading-relaxed">
              <span className="font-bold mr-3 opacity-50">{index + 1}.</span>
              {point.text}
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-orange-50 rounded-[2rem] p-10 border border-orange-100">
        <h3 className="text-xl font-black text-orange-900 mb-6 flex items-center">
          <span className="w-8 h-8 rounded-full bg-orange-200 flex items-center justify-center mr-3 text-sm">!</span>
          Verbeterpunten (UX/UI)
        </h3>
        <ul className="space-y-4">
          {improvements.map((point, index) => (
            <li key={index} className="flex items-start text-orange-800 text-sm leading-relaxed">
              <span className="font-bold mr-3 opacity-50">{index + 1}.</span>
              {point.text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
