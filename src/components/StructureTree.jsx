import { structure } from "../data/structure"

export default function StructureTree() {
  return (
    <section className="py-20">
      <h2 className="text-center text-3xl font-bold mb-10">Struktur Kelas</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
        {structure.map((item, i) => (
          <div key={i} className="bg-white/5 p-4 rounded-xl text-center">
            <h3 className="font-semibold">{item.role}</h3>
            <p className="text-gray-400 text-sm">{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
