"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, MapPin, Phone, Mail, MapIcon } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              className="flex items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/" className="flex items-center">
                <div className="w-10 h-10 bg-sky-500 rounded-lg flex items-center justify-center">
                  <MapIcon className="w-6 h-6 text-white" />
                </div>
                <span className="ml-3 text-xl font-bold text-slate-800">TourismHub</span>
              </Link>
            </motion.div>

            <motion.div
              className="hidden lg:flex space-x-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link href="/" className="text-slate-700 hover:text-sky-600 transition-colors font-medium">
                Home
              </Link>
              <Link href="/places-to-go" className="text-slate-700 hover:text-sky-600 transition-colors font-medium">
                Places to Go
              </Link>
              <Link href="/things-to-do" className="text-slate-700 hover:text-sky-600 transition-colors font-medium">
                Things to Do
              </Link>
              <Link
                href="/festivals-events"
                className="text-slate-700 hover:text-sky-600 transition-colors font-medium"
              >
                Festivals & Events
              </Link>
              <Link href="/plan-your-trip" className="text-slate-700 hover:text-sky-600 transition-colors font-medium">
                Plan Your Trip
              </Link>
              <Link href="/travel-updates" className="text-slate-700 hover:text-sky-600 transition-colors font-medium">
                Travel Updates
              </Link>
            </motion.div>

            <motion.button
              className="lg:hidden p-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <div className="w-full h-0.5 bg-slate-700"></div>
                <div className="w-full h-0.5 bg-slate-700"></div>
                <div className="w-full h-0.5 bg-slate-700"></div>
              </div>
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-sky-400 via-sky-500 to-sky-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Discover Amazing
                <span className="block text-slate-100">Destinations</span>
              </h1>
              <p className="text-xl md:text-2xl text-sky-100 mb-8 leading-relaxed">
                Explore breathtaking landscapes, rich cultures, and unforgettable experiences that await you around the
                world.
              </p>
              <motion.div className="flex flex-col sm:flex-row gap-4">
                <Link href="/places-to-go">
                  <motion.button
                    className="bg-white text-sky-600 px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center space-x-2 hover:bg-slate-100 transition-colors shadow-lg w-full sm:w-auto"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Explore Places</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>
                <Link href="/plan-your-trip">
                  <motion.button
                    className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-sky-600 transition-colors w-full sm:w-auto"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Plan Your Trip
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/placeholder.svg?height=500&width=600"
                  alt="Beautiful mountain landscape"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Start Your Journey</h2>
            <p className="text-xl text-slate-600">Choose what interests you most</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Places to Go",
                description: "Discover stunning destinations and hidden gems",
                icon: "🏔️",
                href: "/places-to-go",
                color: "from-sky-400 to-sky-600",
              },
              {
                title: "Things to Do",
                description: "Adventure activities and cultural experiences",
                icon: "🎯",
                href: "/things-to-do",
                color: "from-emerald-400 to-emerald-600",
              },
              {
                title: "Festivals & Events",
                description: "Cultural celebrations and traditional festivals",
                icon: "🎭",
                href: "/festivals-events",
                color: "from-purple-400 to-purple-600",
              },
              {
                title: "Plan Your Trip",
                description: "Essential travel information and guides",
                icon: "📋",
                href: "/plan-your-trip",
                color: "from-orange-400 to-orange-600",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={item.href}>
                  <motion.div
                    className={`bg-gradient-to-br ${item.color} text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all cursor-pointer h-full`}
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-white/90 text-sm">{item.description}</p>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Featured Destinations</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Discover our handpicked selection of breathtaking destinations that offer unique experiences.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Mountain Peaks",
                description: "Experience breathtaking views and challenging adventures in pristine mountain ranges.",
                image: "majestic snow-capped mountain peaks with hiking trails",
              },
              {
                title: "Cultural Heritage",
                description: "Explore ancient temples, historic sites, and rich cultural traditions.",
                image: "ancient temple architecture with intricate cultural details",
              },
              {
                title: "Adventure Sports",
                description: "Get your adrenaline pumping with exciting outdoor activities and sports.",
                image: "adventure sports like paragliding over scenic mountains",
              },
            ].map((destination, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="relative h-48">
                  <Image
                    src={`/placeholder.svg?height=200&width=300&query=${destination.image}`}
                    alt={destination.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-3">{destination.title}</h3>
                  <p className="text-slate-600 mb-4">{destination.description}</p>
                  <Link href="/places-to-go">
                    <button className="text-sky-600 font-semibold flex items-center space-x-1 hover:text-sky-700 transition-colors">
                      <span>Explore More</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-sky-500 rounded-lg flex items-center justify-center">
                  <MapIcon className="w-5 h-5 text-white" />
                </div>
                <span className="ml-2 text-lg font-bold">TourismHub</span>
              </div>
              <p className="text-slate-300 mb-4">
                Your trusted partner for discovering amazing destinations and creating unforgettable travel experiences.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-bold mb-4">Explore</h3>
              <ul className="space-y-2 text-slate-300">
                <li>
                  <Link href="/places-to-go" className="hover:text-sky-400 transition-colors">
                    Places to Go
                  </Link>
                </li>
                <li>
                  <Link href="/things-to-do" className="hover:text-sky-400 transition-colors">
                    Things to Do
                  </Link>
                </li>
                <li>
                  <Link href="/festivals-events" className="hover:text-sky-400 transition-colors">
                    Festivals & Events
                  </Link>
                </li>
                <li>
                  <Link href="/plan-your-trip" className="hover:text-sky-400 transition-colors">
                    Plan Your Trip
                  </Link>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-bold mb-4">Information</h3>
              <ul className="space-y-2 text-slate-300">
                <li>
                  <Link href="/travel-updates" className="hover:text-sky-400 transition-colors">
                    Travel Updates
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-sky-400 transition-colors">
                    Travel Guidelines
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-sky-400 transition-colors">
                    Safety Information
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-sky-400 transition-colors">
                    Contact Us
                  </a>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-bold mb-4">Contact Info</h3>
              <div className="space-y-3 text-slate-300">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>info@tourismhub.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>123 Travel Street, City, Country</span>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="border-t border-slate-700 mt-12 pt-8 text-center text-slate-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p>&copy; 2024 TourismHub. All rights reserved. Built with passion for travel and exploration.</p>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}
