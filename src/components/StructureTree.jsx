export default function StructureTree() {
  return (
    <section id="struktur" className="relative py-24">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-600/20 via-indigo-600/10 to-transparent blur-3xl" />

      <h2 className="text-center text-3xl font-bold mb-16">
        <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
          Struktur Kelas
        </span>
      </h2>

      <div className="flex justify-center">
        <div className="relative flex flex-col items-center">

          <Node role="Wali Kelas" name="Abdul Wahab S.Pdi" />
          <Line />

          <div className="flex gap-16">
            <Node role="Ketua Kelas" name="Putry" />
            <Node role="Wakil Ketua" name="Jeriko" />
          </div>

          <Line />

          <div className="flex gap-16">
            <MultiNode role="Sekretaris" names={["Pratiwi", "Paulista"]} />
            <MultiNode role="Bendahara" names={["Lista", "Davina"]} />
          </div>

          <Line />

          <div className="flex gap-16">
            <MultiNode role="Keamanan" names={["Damar", "Windi"]} />
            <MultiNode role="Kebersihan" names={["Jeriko", "Raka"]} />
          </div>

          <Line />

          <div className="flex gap-16">
            <MultiNode role="Kesehatan" names={["Eki"]} />
            <MultiNode role="Kesehatan" names={["Hendri"]} />
          </div>

          <Line />

          <div className="flex gap-16">
            <MultiNode role="Peralatan" names={["Fajri"]} />
            <MultiNode role="Peralatan" names={["Windi"]} />
          </div>

          <Line />

          <Node role="Peralatan" name="Fadly" />
        </div>
      </div>
    </section>
  )
}

/* ===== KOMPONEN ===== */

function Node({ role, name }) {
  return (
    <div className="flex flex-col items-center">
      <p className="text-sm text-gray-400 mb-2">{role}</p>
      <div className="px-6 py-2 rounded-full bg-white text-black font-semibold shadow-md">
        {name}
      </div>
    </div>
  )
}

function MultiNode({ role, names }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <p className="text-sm text-gray-400">{role}</p>
      {names.map((name, i) => (
        <div
          key={i}
          className="px-6 py-2 rounded-full bg-white text-black font-semibold shadow-md"
        >
          {name}
        </div>
      ))}
    </div>
  )
}

function Line() {
  return <div className="w-px h-10 bg-white/40 my-2" />
            }
