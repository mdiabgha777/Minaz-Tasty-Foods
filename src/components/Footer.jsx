import { FaFacebookF, FaTiktok, FaWhatsapp } from 'react-icons/fa'
import { ArrowUpCircle } from 'lucide-react'

function Footer() {
  return (
    <footer className="bg-[#5C2671] text-white py-10 px-4 md:px-24">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left: Brand and Year */}
        <div className="text-center md:text-left text-sm">
          <p className="font-semibold text-lg">Minaz Tasty Foods</p>
          <p className="text-gray-300">&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>

        {/* Middle: Social Links */}
        <div className="flex gap-6">
          <a
            href="https://facebook.com/minaztastyfoods"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-gray-200"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="https://tiktok.com/@minaztastyfoods"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="hover:text-gray-200"
          >
            <FaTiktok size={20} />
          </a>
          <a
            href="https://wa.me/2203473005"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="hover:text-gray-200"
          >
            <FaWhatsapp size={20} />
          </a>
        </div>

        {/* Right: Back to top */}
        <div>
          <a
            href="#"
            className="flex items-center gap-1 text-sm hover:underline hover:text-gray-200"
          >
            <ArrowUpCircle size={20} />
            Back to Top
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
