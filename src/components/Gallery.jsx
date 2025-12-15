import { gallery } from "../data/gallery"

export default function Gallery() {
  return (
    <section className="py-20">
      <h2 className="text-center text-3xl font-bold mb-10">Galeri Kelas</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto px-6">
        {gallery.map((img, i) => (
          <img key={i} src={img} className="rounded-xl" />
        ))}
      </div>
    </section>
  )
}
