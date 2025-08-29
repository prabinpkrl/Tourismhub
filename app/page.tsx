"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  MapIcon,
  MessageCircle,
} from "lucide-react";
import { useApi } from "@/hooks/useApi";
import {
  destinationsApi,
  categoriesApi,
  type Destination,
  type Category,
} from "@/lib/api";

export default function HomePage() {
  // Fetch featured destinations
  const { data: featuredDestinationsResponse, loading: destinationsLoading } =
    useApi(() => destinationsApi.getAll({ featured: true, limit: 3 }), []);

  // Fetch categories
  const { data: categoriesResponse, loading: categoriesLoading } = useApi(
    () => categoriesApi.getAll(),
    []
  );

  const categories: Category[] = categoriesResponse?.data || [];
  const destinations: Destination[] = featuredDestinationsResponse?.data || [];

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
                <span className="ml-3 text-xl font-bold text-slate-800">
                  TourismHub
                </span>
              </Link>
            </motion.div>

            <motion.div
              className="hidden lg:flex space-x-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link
                href="/"
                className="text-slate-700 hover:text-sky-600 transition-colors font-medium"
              >
                Home
              </Link>
              <Link
                href="/places-to-go"
                className="text-slate-700 hover:text-sky-600 transition-colors font-medium"
              >
                Places to Go
              </Link>
              <Link
                href="/things-to-do"
                className="text-slate-700 hover:text-sky-600 transition-colors font-medium"
              >
                Things to Do
              </Link>
              <Link
                href="/festivals-events"
                className="text-slate-700 hover:text-sky-600 transition-colors font-medium"
              >
                Festivals & Events
              </Link>
              <Link
                href="/plan-your-trip"
                className="text-slate-700 hover:text-sky-600 transition-colors font-medium"
              >
                Plan Your Trip
              </Link>
              <Link
                href="/travel-updates"
                className="text-slate-700 hover:text-sky-600 transition-colors font-medium"
              >
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
      <section
        id="home"
        className="relative bg-gradient-to-br from-sky-400 via-sky-500 to-sky-600 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Discover Amazing
                <span className="block text-slate-100">Destinations</span>
              </h1>
              <p className="text-xl md:text-2xl text-sky-100 mb-8 leading-relaxed">
                Explore breathtaking landscapes, rich cultures, and
                unforgettable experiences that await you around the world.
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Start Your Journey
            </h2>
            <p className="text-xl text-slate-600">
              Choose what interests you most
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categoriesLoading
              ? // Loading skeleton
                Array.from({ length: 4 }).map((_, index) => (
                  <div
                    key={index}
                    className="bg-slate-200 animate-pulse rounded-2xl h-48"
                  ></div>
                ))
              : categories.slice(1, 5).map((category, index) => (
                  <motion.div
                    key={category._id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Link href={`/places-to-go?category=${category.id}`}>
                      <motion.div
                        className={`bg-gradient-to-br ${category.color} text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all cursor-pointer h-full`}
                        whileHover={{ scale: 1.05, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div className="text-4xl mb-4">{category.icon}</div>
                        <h3 className="text-xl font-bold mb-2">
                          {category.label}
                        </h3>
                        <p className="text-white/90 text-sm">
                          {category.description}
                        </p>
                        {category.count && (
                          <p className="text-white/80 text-xs mt-2">
                            {category.count} destinations
                          </p>
                        )}
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Featured Destinations
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Discover our handpicked selection of breathtaking destinations
              that offer unique experiences.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinationsLoading
              ? // Loading skeleton
                Array.from({ length: 3 }).map((_, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden"
                  >
                    <div className="h-48 bg-slate-200 animate-pulse"></div>
                    <div className="p-6">
                      <div className="h-6 bg-slate-200 animate-pulse rounded mb-2"></div>
                      <div className="h-4 bg-slate-200 animate-pulse rounded mb-4"></div>
                      <div className="h-4 bg-slate-200 animate-pulse rounded"></div>
                    </div>
                  </div>
                ))
              : destinations.map((destination, index) => (
                  <motion.div
                    key={destination._id}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="relative h-48">
                      <Image
                        src={`/abstract-geometric-shapes.png?height=200&width=300&query=${destination.image}`}
                        alt={destination.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-slate-800 mb-3">
                        {destination.title}
                      </h3>
                      <p className="text-slate-600 mb-4">
                        {destination.overview}
                      </p>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-lg font-bold text-sky-600">
                          {destination.price}
                        </span>
                        <span className="text-sm text-slate-500">
                          {destination.reviews} reviews
                        </span>
                      </div>
                      <Link href={`/places-to-go/${destination._id}`}>
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

      {/* AI Travel Assistant Section */}
      <section className="py-20 bg-gradient-to-br from-sky-400 to-sky-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center text-white mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need Travel Assistance?
            </h2>
            <p className="text-xl text-sky-100 mb-8 max-w-3xl mx-auto">
              Chat with our AI travel assistant for instant help with
              destinations, weather updates, travel advisories, and personalized
              recommendations
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800">
                      AI Travel Assistant
                    </h3>
                    <p className="text-sm text-green-600">● Online</p>
                  </div>
                </div>

                <div className="space-y-4 mb-4 max-h-64 overflow-y-auto">
                  <div className="flex space-x-3">
                    <div className="w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-slate-100 rounded-lg p-3 max-w-xs">
                      <p className="text-sm text-slate-800">
                        Hello! I'm your AI travel assistant. How can I help you
                        plan your perfect trip today?
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <div className="bg-sky-500 text-white rounded-lg p-3 max-w-xs">
                      <p className="text-sm">
                        What's the weather like in the mountains this week?
                      </p>
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <div className="w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-slate-100 rounded-lg p-3 max-w-xs">
                      <p className="text-sm text-slate-800">
                        The mountain regions are experiencing clear skies with
                        temperatures ranging from 15-22°C. Perfect for hiking
                        and outdoor activities! Would you like specific trail
                        recommendations?
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <input
                    type="text"
                    placeholder="Ask me anything about travel..."
                    className="flex-1 px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                    disabled
                  />
                  <button className="bg-sky-500 text-white px-4 py-2 rounded-lg hover:bg-sky-600 transition-colors">
                    Send
                  </button>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-3">
                    🌤️ Real-time Weather Updates
                  </h3>
                  <p className="text-sky-100">
                    Get current weather conditions and forecasts for any
                    destination
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-3">
                    📍 Personalized Recommendations
                  </h3>
                  <p className="text-sky-100">
                    Discover places and activities tailored to your interests
                    and preferences
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-3">
                    🚨 Travel Advisories
                  </h3>
                  <p className="text-sky-100">
                    Stay informed about safety updates and travel restrictions
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-3">
                    🎯 Smart Trip Planning
                  </h3>
                  <p className="text-sky-100">
                    Get help with itineraries, bookings, and travel logistics
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link href="/chat-assistant">
              <motion.button
                className="bg-white text-sky-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-slate-100 transition-colors shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Chatting with AI Assistant
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Quick Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Quick Services
            </h2>
            <p className="text-xl text-slate-600">
              Everything you need for your perfect trip
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Weather Forecast",
                description: "5-day weather predictions for all destinations",
                icon: "🌤️",
                href: "/weather",
                color: "from-blue-400 to-blue-600",
              },
              {
                title: "Book Tours",
                description: "Reserve guided tours and experiences",
                icon: "🎫",
                href: "/booking",
                color: "from-green-400 to-green-600",
              },
              {
                title: "Photo Gallery",
                description: "Browse stunning destination photography",
                icon: "📸",
                href: "/gallery",
                color: "from-pink-400 to-pink-600",
              },
              {
                title: "Travel Maps",
                description: "Interactive maps with points of interest",
                icon: "🗺️",
                href: "/maps",
                color: "from-indigo-400 to-indigo-600",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={service.href}>
                  <motion.div
                    className={`bg-gradient-to-br ${service.color} text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all cursor-pointer h-full`}
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-white/90 text-sm">
                      {service.description}
                    </p>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Stay Updated
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Get the latest travel updates, destination guides, and exclusive
              offers delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
              <button className="bg-sky-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-sky-600 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-slate-500 mt-4">
              Join 10,000+ travelers who trust us for the latest updates
            </p>
          </motion.div>
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
                Your trusted partner for discovering amazing destinations and
                creating unforgettable travel experiences.
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
                  <Link
                    href="/places-to-go"
                    className="hover:text-sky-400 transition-colors"
                  >
                    Places to Go
                  </Link>
                </li>
                <li>
                  <Link
                    href="/things-to-do"
                    className="hover:text-sky-400 transition-colors"
                  >
                    Things to Do
                  </Link>
                </li>
                <li>
                  <Link
                    href="/festivals-events"
                    className="hover:text-sky-400 transition-colors"
                  >
                    Festivals & Events
                  </Link>
                </li>
                <li>
                  <Link
                    href="/plan-your-trip"
                    className="hover:text-sky-400 transition-colors"
                  >
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
              <h3 className="text-lg font-bold mb-4">Services</h3>
              <ul className="space-y-2 text-slate-300">
                <li>
                  <Link
                    href="/chat-assistant"
                    className="hover:text-sky-400 transition-colors"
                  >
                    AI Travel Assistant
                  </Link>
                </li>
                <li>
                  <Link
                    href="/weather"
                    className="hover:text-sky-400 transition-colors"
                  >
                    Weather Forecast
                  </Link>
                </li>
                <li>
                  <Link
                    href="/booking"
                    className="hover:text-sky-400 transition-colors"
                  >
                    Book Tours
                  </Link>
                </li>
                <li>
                  <Link
                    href="/gallery"
                    className="hover:text-sky-400 transition-colors"
                  >
                    Photo Gallery
                  </Link>
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
            <p>
              &copy; 2024 TourismHub. All rights reserved. Built with passion
              for travel and exploration.
            </p>
          </motion.div>
        </div>
      </footer>

      {/* Floating Chatbot Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
      >
        <Link href="/chat-assistant">
          <motion.button
            className="bg-sky-500 text-white p-4 rounded-full shadow-lg hover:bg-sky-600 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <MessageCircle className="w-6 h-6" />
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
}
