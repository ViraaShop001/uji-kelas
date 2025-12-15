export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden scroll-mt-24"
    >
      {/* glow background */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2
                w-[600px] h-[600px]
                bg-astro-primary/30 blur-[120px]
                pointer-events-none -z-10" />
      
      <div className="relative z-10 mt-16 text-center px-6">
        <h1 className="text-6xl md:text-7xl font-black tracking-tight bg-gradient-to-r from-white to-astro-glow bg-clip-text text-transparent">
          ASTROGENIX
        </h1>

        <p className="mt-6 text-gray-400 max-w-xl mx-auto">
          Kelas XI MIPA 2 • Solid • Aktif • Berprestasi
        </p>

        <a
          href="#struktur"
          className="inline-block mt-10 px-8 py-3 rounded-full bg-astro-primary text-white font-semibold shadow-glow hover:scale-105 transition"
        >
          Jelajahi Kelas
        </a>
      </div>
    </section>
  )
}
