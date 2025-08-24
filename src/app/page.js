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
      <section className="bg_1 bg-cover bg-center h-[90vh] flex flex-col justify-center items-center relative">
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
              <button className="bg-yellow-400 cursor-pointer text-black px-8 py-3 rounded-lg font-semibold text-lg hover:bg-yellow-300 transition duration-200 shadow-md hover:shadow-xl transform hover:scale-105">
                Shop Now
              </button>
            </Link>
            <button
              onClick={handleWhyUs}
              className="text-white border cursor-pointer border-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition duration-200 transform hover:scale-105"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section id="whyUs" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          {/* Header */}
          <h2 className="text-4xl md:text-5xl font-bold mb-3 bg-clip-text">
            Why Athletes Love Powerplay
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-16">
            Powerplay delivers premium sports gear and accessories to help you perform at your peak. Experience quality, speed, and support like never before.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                icon: <Truck className="h-14 w-14 text-cyan-500 animate-bounce" />,
                title: "Lightning Fast Delivery",
                description:
                  "Receive your sports gear in record time with our priority shipping.",
                bg: "from-cyan-50 to-cyan-100",
              },
              {
                icon: <Shield className="h-14 w-14 text-green-500 animate-pulse" />,
                title: "Built to Last",
                description:
                  "Durable and reliable equipment, tested for peak performance and endurance.",
                bg: "from-green-50 to-green-100",
              },
              {
                icon: <Trophy className="h-14 w-14 text-yellow-400 animate-bounce" />,
                title: "Enhance Performance",
                description:
                  "Gear designed to boost your skills and keep you ahead in every game.",
                bg: "from-yellow-50 to-yellow-100",
              },
              {
                icon: <Headphones className="h-14 w-14 text-purple-500 animate-pulse" />,
                title: "Expert Support 24/7",
                description:
                  "Our team is always available to guide you in choosing the right equipment.",
                bg: "from-purple-50 to-purple-100",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className={`p-8 rounded-3xl bg-gradient-to-br ${feature.bg} shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105`}
              >
                <div className="flex justify-center mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-700">{feature.description}</p>
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
            <button className="bg-blue-600 hover:bg-blue-700 cursor-pointer text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors duration-200 shadow-md hover:shadow-xl">
              Explore Products
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
