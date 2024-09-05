import { ProductBanner } from "../../components/ProductBanner"
import ProductGrid from "../../components/ProductGrid"
import ProductSlider from "../../components/ProductSlider"

const Home = () => {
  return (
    <div>
      {/* Main Banner SlideShow */}
      <ProductBanner/>
      {/* Trending Product Slider */}
      <ProductSlider/>
      {/* All Products */}
      <ProductGrid/>
    </div>
  )
}

export default Home
