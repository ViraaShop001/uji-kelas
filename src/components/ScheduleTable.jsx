import { schedule } from "../data/schedule"

export default function ScheduleTable() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Jadwal Pelajaran</h2>
        <table className="w-full border border-white/10">
          <thead className="bg-white/10">
            <tr>
              <th className="p-2">Hari</th>
              <th className="p-2">Mapel</th>
            </tr>
          </thead>
          <tbody>
            {schedule.map((item, i) => (
              <tr key={i} className="border-t border-white/10">
                <td className="p-2">{item.day}</td>
                <td className="p-2">{item.subject}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
