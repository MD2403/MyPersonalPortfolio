import ProductCard from "./ProductCard";
import productsCatalog from "../lib/dummyProduct/productsCatalog";
import { Link } from "react-router-dom";

function ProductGrid() {
  return (
    <div className="mt-10">
      <div className="flex justify-between items-center mb-8 px-6">
        <h1 className="text-xl sm:text-3xl font-semibold text-gray-900">
          All Products
        </h1>
        <Link to="/products" className="text-white bg-gradient-to-r from-indigo-500 to-purple-500 px-4 py-2 rounded-full hover:opacity-90">
          View All
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
        {/* Mapping Product Data For Each Item */}
        {productsCatalog.map((item) => (
          <div key={item.id} className="group relative">
            <ProductCard item={item} />
            <div className="absolute inset-0 bg-gradient-to-t from-black opacity-0 group-hover:opacity-80 transition-opacity duration-300">
              <div className="flex justify-center items-center h-full">
                <Link
                  to={`/product/${item.id}`}
                  className="text-white font-medium bg-purple-500 hover:bg-purple-600 px-4 py-2 rounded-full transition-colors duration-300"
                >
                  View Product
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductGrid;
