export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black/40 backdrop-blur border-b border-white/10 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="font-bold">Astrogenix MIPA 2</h1>
        <ul className="flex gap-6 text-sm text-gray-300">
          <li>Home</li>
          <li>Struktur</li>
          <li>Jadwal</li>
          <li>Galeri</li>
        </ul>
      </div>
    </nav>
  )
}
