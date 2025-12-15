import { gallery } from "../data/gallery"

export default function Gallery() {
  return (
    <section
      id="galeri"
      className="py-20 scroll-mt-24"
    >
      <h2 className="text-center text-3xl font-bold mb-10">
        Galeri Kelas
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
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

            {/* overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition" />
          </div>
        ))}
      </div>
    </section>
  )
}
