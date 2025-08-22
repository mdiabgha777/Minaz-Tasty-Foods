import { Menu } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import { useState } from "react"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  // Replace with your actual WhatsApp number (include country code, no + or spaces)
  const whatsappNumber = "2203473005" 

  return (
    <nav className="bg-[#5C2671] text-[#FFF6E6] shadow-md py-4 px-4 md:px-24">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-white">
          Minaz Tasty Food.
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10 font-bold">
          <a href="#home" className="hover:text-[#C1272D] transition-colors duration-200">Home</a>
          <a href="#menu" className="hover:text-[#C1272D] transition-colors duration-200">Menu</a>
          <a href="#about" className="hover:text-[#C1272D] transition-colors duration-200">About</a>
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white bg-[#C1272D] hover:bg-[#A21B24]
              rounded-lg shadow-md px-6 py-2 text-md font-bold cursor-pointer"
          >
            WhatsApp
            <FaWhatsapp size={18} />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mt-4 flex flex-col space-y-4 md:hidden font-bold">
          <a href="#home" className="hover:text-[#C1272D]">Home</a>
          <a href="#menu" className="hover:text-[#C1272D]">Menu</a>
          <a href="#about" className="hover:text-[#C1272D]">About</a>
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white bg-[#C1272D] hover:bg-[#A21B24]
              rounded-lg shadow-md px-6 py-2 text-md font-bold cursor-pointer"
          >
            WhatsApp
            <FaWhatsapp size={18} />
          </a>
        </div>
      )}
    </nav>
  )
}

export default Navbar