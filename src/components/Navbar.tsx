import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"
import logoImage from "@/assets/logo.png"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location.pathname])

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-[#0B0B0B]/90 backdrop-blur-md border-b border-gray-800/50 py-3" : "bg-transparent py-5"}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 group">
          <img
            src={logoImage}
            alt="BBM Logo"
            className="h-16 w-auto object-contain transition-transform group-hover:scale-110 drop-shadow-[0_0_15px_rgba(0,170,255,0.4)]"
          />
          <span className="font-bold text-xl tracking-wide hidden sm:block">BHARATHI BUSINESS MACHINES</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className={`text-sm font-medium hover:text-blue-400 transition-colors ${location.pathname === '/' ? 'text-blue-500' : 'text-gray-300'}`}>Home</Link>
          <Link to="/products" className={`text-sm font-medium hover:text-blue-400 transition-colors ${location.pathname.startsWith('/products') ? 'text-blue-500' : 'text-gray-300'}`}>Products</Link>
          <a href="#about" className="text-sm font-medium text-gray-300 hover:text-blue-400 transition-colors">About</a>
          <a href="#contact" className="text-sm font-medium text-gray-300 hover:text-blue-400 transition-colors">Contact</a>
          <Link to="/partnership" className={`text-sm font-medium hover:text-blue-400 transition-colors ${location.pathname === '/partnership' ? 'text-blue-500' : 'text-gray-300'}`}>Partnership</Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-300 hover:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#111] border-b border-gray-800 shadow-xl py-4 flex flex-col px-6 space-y-4">
          <Link to="/" className="text-white hover:text-blue-400 text-lg py-2 border-b border-gray-800">Home</Link>
          <Link to="/products" className="text-white hover:text-blue-400 text-lg py-2 border-b border-gray-800">Products</Link>
          <a href="#about" className="text-white hover:text-blue-400 text-lg py-2 border-b border-gray-800">About</a>
          <a href="#contact" className="text-white hover:text-blue-400 text-lg py-2">Contact</a>
        </div>
      )}
    </nav>
  )
}
