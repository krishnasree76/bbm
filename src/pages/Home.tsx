import Hero from "@/components/Sections/Hero"
import AboutSection from "@/components/Sections/AboutSection"
import MissionVisionCards from "@/components/Sections/MissionVisionCards"
import FeaturesSection from "@/components/Sections/FeaturesSection"
import ProductCard from "@/components/ui/ProductCard"
import { products } from "@/data/products"
import { Button } from "@/components/ui/Button"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

export default function Home() {
  const featuredProducts = products.slice(0, 4); // First 4 scooters

  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <AboutSection />
      <MissionVisionCards />
      <FeaturesSection />
      
      {/* Product List Section Placeholder */}
      <section className="py-24 px-6 md:px-12 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-glow">
                Our Fleet
              </h2>
              <p className="text-gray-400 max-w-2xl">
                Discover our range of eco-friendly electric vehicles designed for performance, efficiency, and sustainability.
              </p>
            </div>
            <Link to="/products" className="mt-6 md:mt-0">
              <Button variant="outline" className="group">
                View All Vehicles
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
