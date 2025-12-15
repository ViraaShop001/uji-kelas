import { useState } from "react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-black/40 backdrop-blur border-b border-white/10 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <h1 className="font-bold text-white">
          Astrogenix MIPA 2
        </h1>

        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="w-10 h-10 flex items-center justify-center
                       rounded-full bg-white/10
                       hover:bg-white/20
                       transition
                       text-white text-xl"
          >
            ☰
          </button>

          {open && (
            <div className="absolute right-0 mt-3 w-40 rounded-xl
                            bg-black/60 backdrop-blur
                            border border-white/10 shadow-lg">
              <MenuItem href="#home" label="Home" setOpen={setOpen} />
              <MenuItem href="#struktur" label="Struktur" setOpen={setOpen} />
              <MenuItem href="#jadwal" label="Jadwal" setOpen={setOpen} />
              <MenuItem href="#galeri" label="Galeri" setOpen={setOpen} />
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

function MenuItem({ href, label, setOpen }) {
  return (
    <a
      href={href}
      onClick={() => setOpen(false)}
      className="block px-4 py-3 text-sm text-gray-200 hover:bg-white/20 transition"
    >
      {label}
    </a>
  )
}
