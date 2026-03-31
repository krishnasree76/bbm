import { motion } from "framer-motion"
import { Building2, Leaf, ShieldCheck, Factory } from "lucide-react"

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0, opacity: 1,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-[#0A0A0A] relative border-b border-gray-800/30">
      <div className="absolute right-0 top-0 w-1/3 h-full bg-blue-900/5 blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="space-y-8"
          >
            <div>
              <motion.span variants={itemVariants} className="text-blue-500 font-semibold tracking-wider text-sm mb-3 block uppercase">
                About The Company
              </motion.span>
              <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold text-white mb-6">
                Pioneering Eco-Friendly Mobility in India
              </motion.h2>
              <motion.p variants={itemVariants} className="text-gray-400 text-lg leading-relaxed mb-4">
                Based in Telangana, Bharathi Business Machines International (BBM) brings over 10+ years of manufacturing excellence to the electric vehicle sector. 
              </motion.p>
              <motion.p variants={itemVariants} className="text-gray-400 text-lg leading-relaxed">
                We focus on providing highly affordable and robust electric mobility solutions. Our vehicles are specially designed to empower micro-entrepreneurs, including vendors, delivery partners, and e-commerce professionals, bridging the gap between cost efficiency and performance.
              </motion.p>
            </div>

            <motion.div variants={containerVariants} className="grid grid-cols-2 gap-6 pt-6 border-t border-gray-800">
              <motion.div variants={itemVariants} className="flex flex-col">
                <span className="text-4xl font-extrabold text-blue-400 mb-2">10+</span>
                <span className="text-gray-400 font-medium">Years Experience</span>
              </motion.div>
              <motion.div variants={itemVariants} className="flex flex-col">
                <span className="text-4xl font-extrabold text-blue-400 mb-2">100%</span>
                <span className="text-gray-400 font-medium">Eco-Friendly</span>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="glass p-6 rounded-2xl bg-[#111] border border-gray-800 flex flex-col items-center text-center hover:bg-[#151515] transition-colors">
                  <div className="w-14 h-14 bg-blue-500/10 rounded-full flex items-center justify-center mb-4">
                    <Factory className="text-blue-500 w-7 h-7" />
                  </div>
                  <h4 className="text-white font-bold mb-2">In-House Mfg</h4>
                  <p className="text-sm text-gray-500">Premium quality control at our facility.</p>
                </div>
                <div className="glass p-6 rounded-2xl bg-[#111] border border-gray-800 flex flex-col items-center text-center hover:bg-[#151515] transition-colors">
                  <div className="w-14 h-14 bg-blue-500/10 rounded-full flex items-center justify-center mb-4">
                    <Leaf className="text-blue-500 w-7 h-7" />
                  </div>
                  <h4 className="text-white font-bold mb-2">Zero Emissions</h4>
                  <p className="text-sm text-gray-500">Clean energy for a better tomorrow.</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="glass p-6 rounded-2xl bg-[#111] border border-gray-800 flex flex-col items-center text-center hover:bg-[#151515] transition-colors">
                  <div className="w-14 h-14 bg-blue-500/10 rounded-full flex items-center justify-center mb-4">
                    <Building2 className="text-blue-500 w-7 h-7" />
                  </div>
                  <h4 className="text-white font-bold mb-2">Commercial Focus</h4>
                  <p className="text-sm text-gray-500">Supporting vendors & delivery partners.</p>
                </div>
                <div className="glass p-6 rounded-2xl bg-[#111] border border-gray-800 flex flex-col items-center text-center hover:bg-[#151515] transition-colors">
                  <div className="w-14 h-14 bg-blue-500/10 rounded-full flex items-center justify-center mb-4">
                    <ShieldCheck className="text-blue-500 w-7 h-7" />
                  </div>
                  <h4 className="text-white font-bold mb-2">ARAI Approved</h4>
                  <p className="text-sm text-gray-500">Certified vehicles with 1-year warranty.</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
