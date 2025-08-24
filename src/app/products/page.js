"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { Star, Zap } from "lucide-react";

export default function ProductsPage() {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        const data = await axios.get("/api/products");
        setProducts(data.data);
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-5">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
                    Our Products
                </h1>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {products.map((product) => (
                        <div
                            key={product._id}
                            className="group border border-gray-200 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
                        >
                            <div className="p-5 flex flex-col h-full">
                                {/* Category & Rating */}
                                <div className="flex justify-between items-center mb-4">
                                    <span className="px-3 py-1 border border-gray-300 rounded-full text-xs font-medium">
                                        {product.category}
                                    </span>
                                    <div className="flex items-center gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className="w-3 h-3 fill-yellow-400 text-yellow-400"
                                            />
                                        ))}
                                    </div>
                                </div>

                                {/* Product Image */}
                                <div className="relative mb-4 rounded-xl overflow-hidden border border-gray-100">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-56 object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-md">
                                        <Zap className="w-4 h-4 text-white" />
                                    </div>
                                </div>

                                {/* Product Info */}
                                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                                <p className="text-sm text-gray-600 line-clamp-3 mb-4">
                                    {product.description}
                                </p>

                                {/* Price & Details */}
                                <div className="mt-auto flex items-center justify-between">
                                    <span className="text-2xl font-bold text-gray-900">
                                        ${product.price}
                                    </span>
                                    <Link href={`/products/${product._id}`}>
                                        <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors duration-200">
                                            Details
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
