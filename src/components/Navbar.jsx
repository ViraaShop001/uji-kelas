import { useState } from "react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-black/40 backdrop-blur border-b border-white/10 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="font-bold text-white">
          Astrogenix MIPA 2
        </h1>

        {/* Menu Button */}
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition text-white"
          >
            ☰
          </button>

          {/* Dropdown */}
          {open && (
            <div className="absolute right-0 mt-3 w-40 rounded-xl bg-black/60 backdrop-blur border border-white/10 shadow-lg overflow-hidden">
              <MenuItem label="Home" href="#home" setOpen={setOpen} />
              <MenuItem label="Struktur" href="#struktur" setOpen={setOpen} />
              <MenuItem label="Jadwal" href="#jadwal" setOpen={setOpen} />
              <MenuItem label="Galeri" href="#galeri" setOpen={setOpen} />
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

function MenuItem({ label, href, setOpen }) {
  return (
    <a
      href={href}
      onClick={() => setOpen(false)}
      className="block px-4 py-3 text-sm text-gray-200 hover:bg-white/10 transition"
    >
      {label}
    </a>
  )
                }
