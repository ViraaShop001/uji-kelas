import { schedule } from "../data/schedule"

export default function ScheduleTable() {
  return (
    <section
      id="jadwal"
      className="py-20 px-6 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">
          Jadwal Pelajaran
        </h2>

        <table className="w-full border border-white/10 rounded-lg overflow-hidden">
          <thead className="bg-white/10">
            <tr>
              <th className="p-3 text-left">Hari</th>
              <th className="p-3 text-left">Mapel</th>
            </tr>
          </thead>
          <tbody>
            {schedule.map((item, i) => (
              <tr
                key={i}
                className="border-t border-white/10 hover:bg-white/5 transition"
              >
                <td className="p-3">{item.day}</td>
                <td className="p-3">{item.subject}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
