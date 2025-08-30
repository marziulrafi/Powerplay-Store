"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { Star, Zap, Shield, ArrowRight, Eye, Loader } from "lucide-react";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get("/api/products");
      setProducts(res.data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
      
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black text-gray-900 mb-4">
            Premium Sports Gear
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our curated collection of high-performance sports equipment
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product._id}
              className="group relative bg-gray-50 rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-500 hover:scale-105"
            >
         
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute top-4 left-4 flex flex-col gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center shadow-md">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-md">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="w-12 h-12 bg-white/70 rounded-full flex items-center justify-center border border-gray-300">
                    <Eye className="w-5 h-5 text-gray-800" />
                  </div>
                </div>
              </div>

            
              <div className="p-6 space-y-4">
                
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-gray-200 border border-gray-300 text-gray-700">
                    {product.category}
                  </span>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                    <span className="text-xs text-gray-500 ml-1">5.0</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900">
                  {product.name}
                </h3>

               
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                  {product.description}
                </p>

               
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold text-gray-900">
                      ${product.price}
                    </span>
                    <span className="text-xs text-gray-500">Best Price</span>
                  </div>

                  <Link href={`/products/${product._id}`}>
                    <button className="px-5 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-semibold shadow-md transition-all duration-300 cursor-pointer">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {products.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <Loader className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Loading Products...
            </h3>
            <p className="text-gray-500">
              Please wait while we fetch the latest sports gear
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
