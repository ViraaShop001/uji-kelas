import { useEffect, useState } from "react"
import { gallery } from "../data/gallery"

export default function Gallery() {
  const [index, setIndex] = useState(0)
  const [showAll, setShowAll] = useState(false)

  // auto slide
  useEffect(() => {
    if (showAll) return

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % gallery.length)
    }, 3000)

    return () => clearInterval(timer)
  }, [showAll])

  return (
    <section id="galeri" className="py-24 scroll-mt-24 text-center">
      <h2 className="text-3xl font-bold mb-10">
        Galeri Kelas
      </h2>

      {/* SLIDER */}
      {!showAll && (
        <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-lg">
          <img
            src={gallery[index]}
            alt="Galeri"
            className="w-full h-[320px] object-cover transition duration-700"
          />

          {/* dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {gallery.map((_, i) => (
              <span
                key={i}
                className={`w-2 h-2 rounded-full ${
                  i === index ? "bg-white" : "bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      )}

      {/* BUTTON */}
      {!showAll && (
        <button
          onClick={() => setShowAll(true)}
          className="inline-block mt-10 px-8 py-3 rounded-full
                     bg-astro-primary text-white font-semibold
                     shadow-glow hover:scale-105 transition"
        >
          Lihat Semua Galeri
        </button>
      )}

      {/* GRID GALERI (KODE LAMA KAMU) */}
      {showAll && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6 mt-10">
          {gallery.map((img, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-xl"
            >
              <img
                src={img}
                alt={`Galeri ${i + 1}`}
                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition" />
            </div>
          ))}
        </div>
      )}
    </section>
  )
          }
