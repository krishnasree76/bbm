import { Mail, Phone, MapPin } from "lucide-react";
import logoImage from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-[#050505] border-t border-gray-800/60 pt-20 pb-10"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">

              {/* ✅ FIXED: removed rounded-full */}
              <img
                src={logoImage}
                alt="BBM Logo"
                className="h-14 w-auto object-contain drop-shadow-[0_0_15px_rgba(0,170,255,0.4)]"
              />

              <span className="font-bold text-lg leading-tight">
                BHARATHI BUSINESS <br /> MACHINES INT.
              </span>
            </div>

            <p className="text-gray-400 text-sm mb-6 max-w-xs">
              "THE SOUND OF FUTURE IS SILENCE" - Leading manufacturer of eco-friendly electric vehicles in India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/products" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                  Our Products
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#features" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                  EV Features
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-semibold mb-6">Categories</h4>
            <ul className="space-y-3">
              <li>
                <a href="/products" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                  Electric Scooters
                </a>
              </li>
              <li>
                <a href="/products" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                  Commercial 3-Wheelers
                </a>
              </li>
              <li>
                <a href="/products" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                  Passenger Autos
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6">Get In Touch</h4>
            <ul className="space-y-4">

              <li className="flex items-start space-x-3 group">
                <MapPin className="text-blue-500 mt-1 shrink-0" size={18} />
                <span className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                  <span className="font-semibold text-white">Factory:</span> BBM INTERNATIONAL PVT LTD, Ibrahimpalli, Chevella -501503
                </span>
              </li>

              <li className="flex items-start space-x-3 group">
                <MapPin className="text-blue-500 mt-1 shrink-0" size={18} />
                <span className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                  <span className="font-semibold text-white">BBM EV EXPERIENCE:</span> A V V Raju estates, Brindavan estates, Nizampet road, Hyderabad
                </span>
              </li>

              <li className="flex items-center space-x-3 group">
                <Phone className="text-blue-500 shrink-0" size={18} />
                <span className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                  +91 70133 66819
                </span>
              </li>

              <li className="flex items-center space-x-3 group">
                <Mail className="text-blue-500 shrink-0" size={18} />
                <div className="flex flex-col">
                  <a href="mailto:info.bbmi9@gmail.com" className="text-gray-400 text-sm hover:text-blue-400 transition-colors">
                    info.bbmi9@gmail.com
                  </a>
                  <a href="mailto:info@bbmi.in" className="text-gray-400 text-sm hover:text-blue-400 transition-colors">
                    info@bbmi.in
                  </a>
                </div>
              </li>

            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800/50 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Bharathi Business Machines International. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;