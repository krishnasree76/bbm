import { motion } from "framer-motion"
import { Button } from "@/components/ui/Button"
import { Link } from "react-router-dom"
import { ShaderAnimation } from "@/components/ui/shader-animation"
import heroImage from "@/assets/image.png"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0A0A0A]">
      {/* Background Shader */}
      <ShaderAnimation />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10 pt-20 lg:pt-0">
        
        {/* LEFT SIDE: Animated Bike Image */}
        <div className="order-2 lg:order-1 relative h-[350px] sm:h-[450px] lg:h-[600px] flex items-center justify-center">
          {/* Subtle glow behind the scooter */}
          <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full w-3/4 h-3/4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          
          <motion.img 
            src={heroImage} 
            alt="BBM Electric Scooter"
            className="w-full h-auto object-contain max-h-[85%] relative z-10 drop-shadow-2xl"
            initial={{ x: "-150%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 40,
              damping: 15,
              duration: 2,
              delay: 0.2
            }}
          />
          {/* Floating effect happens after entry animation completes */}
          <motion.div
            className="absolute inset-0 z-20 pointer-events-none"
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2.5
            }}
          />
        </div>

        {/* RIGHT SIDE TEXT: Synchronized animations */}
        <div className="order-1 lg:order-2 flex flex-col justify-center text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mb-4"
          >
            <span className="text-blue-500 font-semibold tracking-widest text-sm uppercase">Bharathi Business Machines Int.</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-white text-glow leading-tight"
          >
            THE SOUND OF <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">FUTURE IS SILENCE</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="text-xl md:text-2xl text-gray-300 mb-4 font-medium"
          >
            100% Environment Friendly Electric Vehicles
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="text-gray-400 text-lg mb-10 max-w-lg mx-auto lg:mx-0"
          >
            For Over 10 Years We Have Been Serving To Build A Better World
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.1 }}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start"
          >
            <Link to="/products">
              <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-lg font-semibold">
                Explore Products
              </Button>
            </Link>
            <a href="#contact">
              <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-lg font-semibold border-gray-600 text-gray-300 hover:text-white">
                Contact Us
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
