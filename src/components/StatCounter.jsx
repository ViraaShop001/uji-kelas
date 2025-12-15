import { stats } from "../data/stats"

export default function StatCounter() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-6">
        {stats.map((item, i) => (
          <div
            key={i}
            className="
              glass p-6 rounded-2xl text-center
              shadow-glass
              hover:shadow-glow transition
            "
          >
            <h3 className="
              text-4xl font-extrabold
              bg-gradient-to-r from-astro-cyan to-astro-pink
              bg-clip-text text-transparent
            ">
              {item.value}
            </h3>

            <p className="text-gray-400 text-sm mt-1">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
