import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Home from "@/pages/Home"
import Products from "@/pages/Products"
import ProductDetail from "@/pages/ProductDetail"
import ScrollToTop from "@/components/ScrollToTop"
import ScrollToTopButton from "@/components/ui/ScrollToTopButton"

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#0B0B0B] text-white selection:bg-blue-500/30 font-sans">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTopButton />
      </div>
    </Router>
  )
}

export default App
