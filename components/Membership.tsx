export default function Membership() {
  return (
    <section className="py-24 bg-red-600 text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">JOIN THE ELITE.</h2>
        <p className="text-xl md:text-2xl mb-12 font-light opacity-90 max-w-3xl mx-auto">
          Membership is limited to those who are ready to redefine their industry. Apply now to secure your spot in our upcoming cohort.
        </p>
        <button className="bg-white text-red-600 px-12 py-5 rounded-full font-black text-lg hover:scale-105 transition-transform shadow-2xl">
          APPLY FOR MEMBERSHIP
        </button>
      </div>
      {/* Decorative background text */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-10 pointer-events-none">
        <span className="text-[20vw] font-black leading-none whitespace-nowrap">MEMBERSHIP</span>
      </div>
    </section>
  );
}
