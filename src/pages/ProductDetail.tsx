import { useState } from "react"
import { useParams, Link } from "react-router-dom"
import { products } from "@/data/products"
import { Button } from "@/components/ui/Button"
import { ArrowLeft, CheckCircle2, Battery, Gauge, Zap, X } from "lucide-react"

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>()
  const product = products.find(p => p.id === id)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState({ name: "", phone: "", location: "" })

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!product) return;
    
    const message = `Hello, I want to know more about the ${product.name}.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nLocation: ${formData.location}`;
    const whatsappUrl = `https://wa.me/917013366819?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, "_blank");
    setIsModalOpen(false);
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24 bg-[#0B0B0B]">
        <div className="text-center">
          <h2 className="text-3xl text-white font-bold mb-4">Product Not Found</h2>
          <Link to="/products">
            <Button>Return to Products</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-24 pb-16 md:pt-32 md:pb-24 px-4 sm:px-6 md:px-12 bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto">
        <Link to="/products" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to all vehicles
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery Side */}
          <div className="relative rounded-2xl overflow-hidden glass aspect-square lg:aspect-auto min-h-[300px] sm:min-h-[400px] lg:min-h-[500px]">
            <img 
              src={product.image} 
              alt={product.name} 
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="inline-block px-3 py-1 bg-blue-600/80 text-white text-xs font-semibold rounded-full mb-3 backdrop-blur-md">
                {product.category}
              </span>
            </div>
          </div>

          {/* Details Side */}
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-glow">{product.name}</h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 md:mb-8">{product.shortSpecs}</p>

            {/* Key Specs Highlights */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 mb-8 md:mb-10">
              {product.specs.mileage && (
                <div className="glass p-4 rounded-xl flex items-center space-x-3">
                  <div className="p-2 bg-blue-500/20 rounded-lg"><Gauge className="text-blue-400 w-5 h-5" /></div>
                  <div>
                    <div className="text-sm text-gray-400">Mileage</div>
                    <div className="font-semibold text-white">{product.specs.mileage}</div>
                  </div>
                </div>
              )}
              {product.specs.battery && (
                <div className="glass p-4 rounded-xl flex items-center space-x-3">
                  <div className="p-2 bg-blue-500/20 rounded-lg"><Battery className="text-blue-400 w-5 h-5" /></div>
                  <div>
                    <div className="text-sm text-gray-400">Battery</div>
                    <div className="font-semibold text-white">{product.specs.battery}</div>
                  </div>
                </div>
              )}
              {product.specs.chargingTime && (
                <div className="glass p-4 rounded-xl flex items-center space-x-3">
                  <div className="p-2 bg-blue-500/20 rounded-lg"><Zap className="text-blue-400 w-5 h-5" /></div>
                  <div>
                    <div className="text-sm text-gray-400">Charging</div>
                    <div className="font-semibold text-white">{product.specs.chargingTime}</div>
                  </div>
                </div>
              )}
              {product.specs.loadCapacity && (
                <div className="glass p-4 rounded-xl flex items-center space-x-3">
                  <div className="p-2 bg-blue-500/20 rounded-lg"><CheckCircle2 className="text-blue-400 w-5 h-5" /></div>
                  <div>
                    <div className="text-sm text-gray-400">Capacity</div>
                    <div className="font-semibold text-white">{product.specs.loadCapacity}</div>
                  </div>
                </div>
              )}
            </div>

            {/* Full Specs List */}
            <h3 className="text-xl font-bold mb-4 border-b border-gray-800 pb-2">Technical Specifications</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mb-10">
              {Object.entries(product.specs).map(([key, value]) => (
                <div key={key} className="flex justify-between border-b border-gray-800/50 py-2">
                  <span className="text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                  <span className="text-white font-medium text-right">{value}</span>
                </div>
              ))}
            </div>

            {/* Features List */}
            {product.features && product.features.length > 0 && (
              <>
                <h3 className="text-xl font-bold mb-4 border-b border-gray-800 pb-2">Key Features</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-12">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-blue-500 mr-3 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </>
            )}

            <Button size="lg" onClick={() => setIsModalOpen(true)} className="w-full sm:w-auto self-start text-lg px-8 py-6">
              Enquire Now
            </Button>
          </div>
        </div>
      </div>

      {/* Enquiry Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto pt-20 pb-10">
          <div className="bg-[#111] border border-gray-800 rounded-2xl w-full max-w-md shadow-2xl my-auto flex-shrink-0">
            <div className="p-4 sm:p-6 border-b border-gray-800 flex justify-between items-center sticky top-0 bg-[#111] z-10 rounded-t-2xl">
              <h3 className="text-lg sm:text-xl font-bold text-white">Enquire About {product.name}</h3>
              <button type="button" onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-white transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>
            <form onSubmit={handleWhatsAppSubmit} className="p-4 sm:p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                <input 
                  required 
                  type="text" 
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-[#050505] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Phone Number</label>
                <input 
                  required 
                  type="tel" 
                  value={formData.phone}
                  onChange={e => setFormData({...formData, phone: e.target.value})}
                  className="w-full bg-[#050505] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  placeholder="Your Phone Number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Location</label>
                <input 
                  required 
                  type="text" 
                  value={formData.location}
                  onChange={e => setFormData({...formData, location: e.target.value})}
                  className="w-full bg-[#050505] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  placeholder="Your City / Address"
                />
              </div>
              <Button type="submit" className="w-full h-12 mt-6 bg-green-600 hover:bg-green-500 text-white shadow-[0_0_15px_rgba(34,197,94,0.4)] border-none">
                Send to WhatsApp
              </Button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
