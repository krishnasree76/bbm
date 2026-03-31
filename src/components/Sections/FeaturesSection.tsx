import { motion } from "framer-motion"
import { Wind, VolumeX, Wrench, PlugZap, Coins, Percent } from "lucide-react"

export default function FeaturesSection() {
  const features = [
    {
      title: "No Pollution",
      description: "0% emissions. Say goodbye to petrol, diesel, and CNG fumes.",
      icon: <Wind className="w-8 h-8 text-blue-400" />
    },
    {
      title: "Silent Operation",
      description: "Enjoy a peaceful ride without the combustion engine noise.",
      icon: <VolumeX className="w-8 h-8 text-blue-400" />
    },
    {
      title: "Low Maintenance",
      description: "Fewer moving parts means fewer repairs and significantly lower servicing costs.",
      icon: <Wrench className="w-8 h-8 text-blue-400" />
    },
    {
      title: "Easy Home Charging",
      description: "Conveniently charge from any standard home socket. No specialized stations required.",
      icon: <PlugZap className="w-8 h-8 text-blue-400" />
    },
    {
      title: "Low Running Cost",
      description: "Operate at roughly ₹0.35/km. Massively reduced daily fuel expenses.",
      icon: <Coins className="w-8 h-8 text-blue-400" />
    },
    {
      title: "5% GST & No Tolls",
      description: "Enjoy 5% tax bracket benefits alongside no toll and reduced parking charges.",
      icon: <Percent className="w-8 h-8 text-blue-400" />
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0, opacity: 1,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section id="features" className="py-24 px-6 md:px-12 bg-[#050505] border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-glow">Why Choose BBM?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Experience uncompromised quality matched with economic and environmental benefits.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass p-8 rounded-2xl bg-[#111] hover:bg-[#151515] transition-all border border-gray-800"
            >
              <div className="w-16 h-16 bg-blue-900/20 rounded-2xl flex items-center justify-center mb-6 border border-blue-500/10">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
