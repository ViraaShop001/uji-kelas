export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black/40 backdrop-blur border-b border-white/10 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="font-bold text-white">Astrogenix MIPA 2</h1>

        <ul className="flex gap-6 text-sm text-gray-300">
          <li>
            <a href="#home" className="hover:text-cyan-400 transition">
              Home
            </a>
          </li>
          <li>
            <a href="#struktur" className="hover:text-cyan-400 transition">
              Struktur
            </a>
          </li>
          <li>
            <a href="#jadwal" className="hover:text-cyan-400 transition">
              Jadwal
            </a>
          </li>
          <li>
            <a href="#galeri" className="hover:text-cyan-400 transition">
              Galeri
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
