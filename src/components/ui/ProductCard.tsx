import { Link } from "react-router-dom"
import { Button } from "./Button"
import { motion } from "framer-motion"

interface ProductProps {
  product: {
    id: string;
    name: string;
    category: string;
    image: string;
    shortSpecs: string;
  }
}

export default function ProductCard({ product }: ProductProps) {
  return (
    <motion.div 
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="glass rounded-xl overflow-hidden flex flex-col h-full bg-[#111] transition-colors hover:bg-[#151515] border border-gray-800/60"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-900 flex-shrink-0">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-xs text-blue-400 border border-blue-900/50">
          {product.category}
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
        <p className="text-gray-400 text-sm mb-6 flex-1">{product.shortSpecs}</p>
        
        <Link to={`/products/${product.id}`} className="mt-auto block">
          <Button variant="outline" className="w-full text-blue-400 border-blue-900/50 hover:bg-blue-600/10">
            Know More
          </Button>
        </Link>
      </div>
    </motion.div>
  )
}
