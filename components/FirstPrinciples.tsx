export default function FirstPrinciples() {
  const principles = [
    "Question Every Assumption",
    "Boil Down to Absolute Truths",
    "Build Up from Fundamental Truths",
    "Iterate with Purpose"
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-16 tracking-tighter uppercase italic">First Principles</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {principles.map((p, i) => (
            <div key={i} className="px-10 py-16 bg-zinc-900 text-white rounded-xl flex-1 min-w-[280px] text-center transform hover:-translate-y-2 transition-transform shadow-lg">
              <div className="text-red-600 text-5xl font-black mb-6 opacity-50">#0{i+1}</div>
              <h4 className="text-xl font-bold tracking-wide">{p}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
