import { products } from "@/data/products"
import ProductCard from "@/components/ui/ProductCard"

export default function Products() {
  const scooters = products.filter(p => p.category === "Scooter");
  const threeWheelers = products.filter(p => p.category === "3-Wheeler");

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 md:px-12 bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-glow">Electric Vehicles</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Choose from our premium selection of electric scooters and commercial 3-wheelers. 100% environment friendly.
          </p>
        </div>

        <div className="space-y-20">
          <section>
            <h2 className="text-3xl font-bold mb-8 border-b border-gray-800 pb-4">Electric Scooters</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {scooters.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-8 border-b border-gray-800 pb-4">Electric 3-Wheelers</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {threeWheelers.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
