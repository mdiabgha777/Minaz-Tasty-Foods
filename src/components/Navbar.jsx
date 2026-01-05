import { Phone, Menu } from 'lucide-react'
import { useState } from 'react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  // 👉 CHANGE THIS NUMBER ONLY (country code + number, no +, no spaces)
  const whatsappNumber = '2203473005'
  const message = encodeURIComponent(
    'Hello Minaz Tasty Food, I would like to place an order.'
  )
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`

  return (
    <nav className="bg-[#5C2671] text-[#FFF6E6] shadow-md py-4 px-4 md:px-24">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-white">
          Minaz Tasty Food.
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10 font-bold">
          <a
            href="#home"
            className="hover:text-[#C1272D] transition-colors duration-200"
          >
            Home
          </a>
          <a
            href="#menu"
            className="hover:text-[#C1272D] transition-colors duration-200"
          >
            Menu
          </a>
          <a
            href="#about"
            className="hover:text-[#C1272D] transition-colors duration-200"
          >
            About
          </a>
          <a
            href="#contact"
            className="hover:text-[#C1272D] transition-colors duration-200"
          >
            Contact
          </a>

          {/* WhatsApp CTA */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white bg-[#C1272D] hover:bg-[#a32025]
              rounded-lg shadow-md px-6 py-2 text-md font-bold transition-colors"
          >
            WhatsApp Us
            <Phone size={18} />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mt-4 flex flex-col space-y-4 md:hidden font-bold">
          <a
            href="#home"
            className="hover:text-[#C1272D]"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a
            href="#menu"
            className="hover:text-[#C1272D]"
            onClick={() => setIsOpen(false)}
          >
            Menu
          </a>
          <a
            href="#about"
            className="hover:text-[#C1272D]"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a
            href="#contact"
            className="hover:text-[#C1272D]"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>

          {/* WhatsApp CTA (Mobile) */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white bg-[#25D366] hover:bg-[#1EBE5D]
              rounded-lg shadow-md px-6 py-2 text-md font-bold transition-colors"
          >
            WhatsApp Us
            <Phone size={18} />
          </a>
        </div>
      )}
    </nav>
  )
}

export default Navbar