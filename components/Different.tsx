export default function Different() {
  return (
    <section id="different" className="bg-white py-[100px]">
      <div className="flex flex-col items-center">

        <div className="w-full flex flex-col">
          {/* First Principles Row */}
          <div className="w-full border-b border-zinc-100 flex justify-center">
            <div className="w-full px-8 grid md:grid-cols-2 items-start">
              {/* Left Side: Title */}
              <div className="flex justify-center md:justify-end items-center w-[308px] border border-black">
                <span className="font-serif italic text-[32px] md:text-[45px] text-[#A3A3A3] leading-none">
                  First
                </span>
                <span className="font-serif font-bold text-[32px] md:text-[45px] text-[#E31E24] leading-none">
                  Principles
                </span>
              </div>

              {/* Right Side: Content */}
              <div className="flex flex-col gap-8 items-start max-w-[650px] border border-black w-[650px]">
                <p className="font-inter italic text-[32px] leading-[160%] text-black  border border-black">
                  A series of <span className="font-bold italic">problem solving</span> workshops held by the worlds best professors
                </p>

                <div className="flex items-center gap-4 text-[#A3A3A3]">
                  <div className="bg-[#FEE2E2] p-3 rounded-lg text-[#E31E24]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zM7 12h5v5H7v-5z" />
                    </svg>
                  </div>
                  <span className="font-sans font-bold leading-[120%] tracking-[0px] text-[24px] md:text-[28px]">
                    <span className="text-[#666666] font-bold">#6</span>/year
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Additional features can be added as similar rows here */}
        </div>
      </div>
    </section>
  );
}
