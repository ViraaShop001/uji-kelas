import { stats } from "../data/stats"

export default function StatCounter() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-6">
        {stats.map((item, i) => (
          <div key={i} className="bg-white/5 p-6 rounded-xl text-center">
            <h3 className="text-3xl font-bold">{item.value}</h3>
            <p className="text-gray-400 text-sm">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
      }
