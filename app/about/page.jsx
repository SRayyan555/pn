import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <main className="min-h-screen flex flex-col">
      
      {/* Hero Section */}
      <div className="relative h-screen">
        
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/assets/about.png')", // put image in /public
          }}
        />

        {/* Dark Overlay (important for readability) */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10">
          <div className="flex items-center justify-center h-full pt-20">
            <h1 className="text-6xl font-black text-white uppercase italic">
              About Us
            </h1>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <section className="flex-grow py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-2xl leading-relaxed text-zinc-700">
            We are a team of dedicated professionals pushing the boundaries of
            what's possible in the digital space. Our approach is rooted in
            first principles thinking and a commitment to excellence.
          </p>
        </div>
      </section>

    </main>
  );
}