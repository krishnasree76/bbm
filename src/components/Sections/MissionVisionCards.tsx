import { motion } from "framer-motion"
import { Target, Eye } from "lucide-react"

export default function MissionVisionCards() {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#0B0B0B] relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5 }}
            className="glass rounded-3xl p-10 lg:p-14 relative overflow-hidden bg-gradient-to-br from-[#111] to-[#0a0a0a] border border-gray-800"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px]" />
            <div className="relative z-10">
              <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-8 border border-blue-500/20">
                <Target className="text-blue-400 w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-6">Our Mission</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-4 shrink-0" />
                  <p className="text-gray-300 text-lg md:text-xl">Deliver premium, stylish, and comfortable EVs for the modern commuter.</p>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-4 shrink-0" />
                  <p className="text-gray-300 text-lg md:text-xl">Provide highly cost-effective and low-maintenance mobility solutions.</p>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-4 shrink-0" />
                  <p className="text-gray-300 text-lg md:text-xl">Meet and exceed customer expectations efficiently and sustainably.</p>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -5 }}
            className="glass rounded-3xl p-10 lg:p-14 relative overflow-hidden bg-gradient-to-bl from-[#151515] to-[#0a0a0a] border border-gray-800"
          >
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-600/10 rounded-full blur-[80px]" />
            <div className="relative z-10">
              <div className="w-16 h-16 bg-cyan-500/10 rounded-2xl flex items-center justify-center mb-8 border border-cyan-500/20">
                <Eye className="text-cyan-400 w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-6">Our Vision</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-cyan-500 mt-2 mr-4 shrink-0" />
                  <p className="text-gray-300 text-lg md:text-xl">Become a globally recognized pioneer in Electric Vehicles.</p>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-cyan-500 mt-2 mr-4 shrink-0" />
                  <p className="text-gray-300 text-lg md:text-xl">Vast expansion across Andhra Pradesh and nationwide coverage.</p>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-cyan-500 mt-2 mr-4 shrink-0" />
                  <p className="text-gray-300 text-lg md:text-xl">Relentlessly innovate and stay updated with next-gen EV technology.</p>
                </li>
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
