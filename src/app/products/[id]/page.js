"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Star,
  Zap,
  Shield,
  Heart,
  ShoppingCart,
  Share2,
} from "lucide-react";

export default function ProductPage({ params }) {
  const [product, setProduct] = useState(null);
  const { id } = params;

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`/api/products?id=${id}`);
        setProduct(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) return <div className="text-center py-20">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-5">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden grid lg:grid-cols-2 gap-10 p-8">
       
        <div className="relative group">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover rounded-2xl transform transition-transform duration-500 group-hover:scale-105"
          />
         
          <div className="absolute top-5 left-5 flex flex-col gap-3">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-cyan-300 rounded-xl flex items-center justify-center shadow-lg border border-white/30 animate-pulse">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-lime-300 rounded-xl flex items-center justify-center shadow-lg border border-white/30">
              <Shield className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-yellow-400 fill-yellow-400"
                />
              ))}
              <span className="text-gray-500 ml-2 text-sm">4.9 (2,847 reviews)</span>
            </div>

            <p className="text-gray-700 mb-6">{product.description}</p>

            <div className="flex items-center gap-6 mb-6">
              <span className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                ${product.price}
              </span>
              
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                20% OFF
              </span>
            </div>

            <div className="flex gap-4 mb-8">
              <button className="flex-1 bg-blue-600 cursor-pointer hover:bg-blue-700 text-white px-6 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg flex items-center justify-center gap-2">
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </button>
              <button className="p-4 bg-white hover:bg-gray-100 rounded-2xl border border-gray-200 transition-all duration-300 shadow hover:shadow-lg flex items-center justify-center gap-2">
                <Heart className="w-5 h-5 text-red-500 cursor-pointer" />
              </button>
              <button className="p-4 bg-white hover:bg-gray-100 rounded-2xl border border-gray-200 transition-all duration-300 shadow hover:shadow-lg flex items-center justify-center gap-2">
                <Share2 className="w-5 h-5 text-gray-700 cursor-pointer" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <Shield className="w-6 h-6 text-green-500" />
              <span>Free shipping on orders over $100</span>
            </div>
            <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <Zap className="w-6 h-6 text-blue-500" />
              <span>Fast delivery in 2-3 business days</span>
            </div>
            <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <Heart className="w-6 h-6 text-red-400" />
              <span>30-day money back guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
