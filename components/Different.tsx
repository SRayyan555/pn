export default function Different() {
  const features = [
    { title: "Radical Transparency", desc: "No hidden agendas, just honest conversations and clear results." },
    { title: "Hyper-Growth Focus", desc: "Every decision is weighed against its impact on your bottom line." },
    { title: "Human-Centric Tech", desc: "Technology should serve people, not the other way around." }
  ];

  return (
    <section className="py-24 bg-zinc-50 text-foreground">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-sm font-bold uppercase tracking-widest text-red-600 mb-4 text-center">What Makes Us Different</h3>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">The Edge You Need</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((f, i) => (
            <div key={i} className="bg-white p-10 rounded-2xl shadow-sm border border-zinc-100 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-6 text-red-600 font-bold">0{i+1}</div>
              <h4 className="text-2xl font-bold mb-4">{f.title}</h4>
              <p className="opacity-80 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
