export default function Membership() {
  return (
    <section id="membership" className="py-32 md:py-48 bg-white flex flex-col items-center text-center">
      <div className="max-w-[1280px] px-8 flex flex-col gap-10 md:gap-14">
        {/* Label */}
        <span className="font-display font-medium text-[24px] md:text-[32px] text-[#A3A3A3] tracking-[-0.5px]">
          Membership
        </span>

        {/* Main Heading */}
        <h2 className="font-display font-semibold text-[42px] md:text-[72px] leading-[110%] tracking-[-1.5px] md:tracking-[-2.6px] text-[#333333] max-w-[1100px] mx-auto">
          A network of those professionals,<br className="hidden md:block" /> restless & eager to learn
        </h2>

        {/* Price and Note */}
        <div className="mt-8 md:mt-16 flex flex-col gap-4 md:gap-6">
          <h3 className="font-display font-semibold text-[36px] md:text-[54px] leading-[120%] tracking-[-1px] md:tracking-[-1.5px] text-[#333333]">
            INR 2 lakhs + tax
          </h3>
          <p className="font-sans font-medium text-[20px] md:text-[32px] leading-[130%] text-[#808080] max-w-[850px] mx-auto">
            Invoice can be issued to enterprise or individual, as preferred
          </p>
        </div>

        {/* Footer info */}
        <div className="mt-16 md:mt-24">
          <p className="font-sans font-medium text-[16px] md:text-[20px] text-[#333333] tracking-[0.2px] opacity-80">
            Most events will be held in Mumbai <span className="mx-2 md:mx-4 text-[#A3A3A3]">|</span> The year is 1st April to 31st March
          </p>
        </div>
      </div>
    </section>
  );
}
