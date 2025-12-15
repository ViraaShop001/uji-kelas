import { motion } from "framer-motion"

export default function StructureTree() {
  return (
    <section id="struktur" className="relative py-24 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-600/20 via-indigo-600/10 to-transparent blur-3xl" />

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center text-3xl font-bold mb-16"
      >
        <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
          Struktur Kelas
        </span>
      </motion.h2>

      <div className="flex justify-center">
        <div className="relative flex flex-col items-center">

          <AnimatedNode delay={0} role="Wali Kelas" name="Abdul Wahab S.Pdi" />
          <Line />

          <div className="flex flex-col md:flex-row gap-6 md:gap-16">
            <AnimatedNode delay={0.1} role="Ketua Kelas" name="Putry" />
            <AnimatedNode delay={0.2} role="Wakil Ketua" name="Jeriko" />
          </div>

          <Line />

          <div className="flex flex-col md:flex-row gap-6 md:gap-16">
            <AnimatedMultiNode delay={0.3} role="Sekretaris" names={["Pratiwi", "Paulista"]} />
            <AnimatedMultiNode delay={0.4} role="Bendahara" names={["Lista", "Davina"]} />
          </div>

          <Line />

          <div className="flex flex-col md:flex-row gap-6 md:gap-16">
            <AnimatedMultiNode delay={0.5} role="Keamanan" names={["Damar", "Windi"]} />
            <AnimatedMultiNode delay={0.6} role="Kebersihan" names={["Jeriko", "Raka"]} />
          </div>

          <Line />

          <div className="flex flex-col md:flex-row gap-6 md:gap-16">
            <AnimatedMultiNode delay={0.7} role="Kesehatan" names={["Eki"]} />
            <AnimatedMultiNode delay={0.8} role="Kesehatan" names={["Hendri"]} />
          </div>

          <Line />

          <div className="flex flex-col md:flex-row gap-6 md:gap-16">
            <AnimatedMultiNode delay={0.9} role="Peralatan" names={["Fajri"]} />
            <AnimatedMultiNode delay={1.0} role="Peralatan" names={["Windi"]} />
          </div>

          <Line />

          <AnimatedNode delay={1.1} role="Peralatan" name="Fadly" />
        </div>
      </div>
    </section>
  )
}

/* ===== ANIMATED COMPONENT ===== */

function AnimatedNode({ role, name, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="flex flex-col items-center"
    >
      <p className="text-sm text-gray-400 mb-2">{role}</p>
      <div className="px-6 py-2 rounded-full bg-white/90 backdrop-blur text-black font-semibold shadow-lg">
        {name}
      </div>
    </motion.div>
  )
}

function AnimatedMultiNode({ role, names, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="flex flex-col items-center gap-2"
    >
      <p className="text-sm text-gray-400">{role}</p>
      {names.map((name, i) => (
        <div
          key={i}
          className="px-6 py-2 rounded-full bg-white/90 backdrop-blur text-black font-semibold shadow-lg"
        >
          {name}
        </div>
      ))}
    </motion.div>
  )
}

function Line() {
  return <div className="w-px h-10 bg-white/40 my-2" />
      }
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
