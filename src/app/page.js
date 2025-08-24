"use client";
import Link from "next/link";
import { Dumbbell, Trophy, Shield, Truck, Headphones } from "lucide-react";

export default function LandingPage() {
  const handleWhyUs = () => {
    const go = document.getElementById("whyUs");
    go.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-[url('/sports-bg.jpg')] bg-cover bg-center h-[90vh] flex flex-col justify-center items-center relative">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
            Welcome to <span className="text-yellow-400">Powerplay Store</span>
          </h1>
          <p className="text-lg md:text-2xl mb-8 text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Your one-stop shop for premium sports accessories. From gym to game
            day, gear up like a pro!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products">
              <button className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold text-lg hover:bg-yellow-300 transition duration-200 shadow-md hover:shadow-xl transform hover:scale-105">
                Shop Now
              </button>
            </Link>
            <button
              onClick={handleWhyUs}
              className="text-white border border-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition duration-200 transform hover:scale-105"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section id="whyUs" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Powerplay?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            We provide sports gear that keeps you at the top of your game.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Truck className="h-12 w-12 text-blue-600" />,
                title: "Fast Delivery",
                description:
                  "Get your gear quickly with our reliable shipping service.",
              },
              {
                icon: <Shield className="h-12 w-12 text-green-600" />,
                title: "Durable & Reliable",
                description: "We offer only high-quality gear tested by athletes.",
              },
              {
                icon: <Trophy className="h-12 w-12 text-yellow-500" />,
                title: "Performance Boost",
                description:
                  "Accessories designed to improve your performance in every sport.",
              },
              {
                icon: <Headphones className="h-12 w-12 text-purple-600" />,
                title: "24/7 Support",
                description:
                  "Our team is always ready to help you choose the best gear.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-gray-100 hover:shadow-md transition duration-300"
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-6">
          <Dumbbell className="h-16 w-16 text-blue-600 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Level Up Your Game?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join athletes across the globe and get the accessories that fuel
            your success.
          </p>
          <Link href="/products">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors duration-200 shadow-md hover:shadow-xl">
              Explore Products
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
