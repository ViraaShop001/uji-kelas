export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full h-16 bg-red-600 z-[99999] flex items-center justify-center">
      <p className="text-white font-bold">NAVBAR TEST</p>
    </div>
  )
}      </div>
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
