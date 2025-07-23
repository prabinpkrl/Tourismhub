"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, MapPin, Star, Clock, Users } from "lucide-react"

export default function PlacesToGo() {
  const regions = [
    {
      name: "Mountain Region",
      description: "Explore towering peaks, pristine valleys, and ancient mountain cultures",
      image: "mountain region with snow peaks and valleys",
      destinations: 15,
      featured: true,
    },
    {
      name: "Cultural Heritage Sites",
      description: "Discover ancient temples, palaces, and UNESCO World Heritage sites",
      image: "ancient cultural heritage temples and monuments",
      destinations: 12,
      featured: true,
    },
    {
      name: "National Parks",
      description: "Experience diverse wildlife and pristine natural environments",
      image: "national park with wildlife and forest landscapes",
      destinations: 8,
      featured: false,
    },
    {
      name: "Lakes & Rivers",
      description: "Serene lakes and flowing rivers perfect for relaxation and adventure",
      image: "beautiful lakes and rivers with scenic surroundings",
      destinations: 10,
      featured: false,
    },
  ]

  const featuredDestinations = [
    {
      name: "Everest Base Camp",
      region: "Mountain Region",
      description: "The ultimate trekking destination offering breathtaking views of the world's highest peak",
      image: "everest base camp with mountain views",
      rating: 4.9,
      duration: "12-16 days",
      difficulty: "Challenging",
      highlights: ["World's highest peak views", "Sherpa culture", "Stunning glaciers"],
    },
    {
      name: "Annapurna Circuit",
      region: "Mountain Region",
      description: "Classic trek through diverse landscapes and traditional mountain villages",
      image: "annapurna circuit trek with mountain villages",
      rating: 4.8,
      duration: "15-20 days",
      difficulty: "Moderate to Challenging",
      highlights: ["Diverse landscapes", "Cultural villages", "Thorong La Pass"],
    },
    {
      name: "Kathmandu Valley",
      region: "Cultural Heritage",
      description: "Historic valley with ancient temples, palaces, and vibrant local culture",
      image: "kathmandu valley with ancient temples and architecture",
      rating: 4.7,
      duration: "3-5 days",
      difficulty: "Easy",
      highlights: ["UNESCO sites", "Ancient architecture", "Local markets"],
    },
    {
      name: "Chitwan National Park",
      region: "National Parks",
      description: "Premier wildlife destination with rhinos, tigers, and diverse bird species",
      image: "chitwan national park with wildlife and jungle",
      rating: 4.6,
      duration: "2-4 days",
      difficulty: "Easy",
      highlights: ["Wildlife safari", "Jungle activities", "Cultural programs"],
    },
    {
      name: "Pokhara Valley",
      region: "Lakes & Rivers",
      description: "Scenic lakeside city with stunning mountain reflections and adventure activities",
      image: "pokhara valley with lake and mountain reflections",
      rating: 4.8,
      duration: "3-7 days",
      difficulty: "Easy to Moderate",
      highlights: ["Phewa Lake", "Mountain views", "Adventure sports"],
    },
    {
      name: "Lumbini",
      region: "Cultural Heritage",
      description: "Birthplace of Buddha and important pilgrimage site with ancient monasteries",
      image: "lumbini buddhist temples and monasteries",
      rating: 4.5,
      duration: "1-2 days",
      difficulty: "Easy",
      highlights: ["Buddha's birthplace", "Ancient monasteries", "Peace pagoda"],
    },
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation - Same as homepage */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center">
              <div className="w-10 h-10 bg-sky-500 rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <span className="ml-3 text-xl font-bold text-slate-800">TourismHub</span>
            </Link>

            <div className="hidden lg:flex space-x-8">
              <Link href="/" className="text-slate-700 hover:text-sky-600 transition-colors font-medium">
                Home
              </Link>
              <Link href="/places-to-go" className="text-sky-600 font-medium">
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
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-sky-400 via-sky-500 to-sky-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Places to Go</h1>
            <p className="text-xl md:text-2xl text-sky-100 mb-8 max-w-3xl mx-auto">
              Discover incredible destinations from towering mountain peaks to ancient cultural sites
            </p>
          </motion.div>
        </div>
      </section>

      {/* Regions Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Explore by Region</h2>
            <p className="text-xl text-slate-600">Choose your preferred type of destination</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {regions.map((region, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="relative h-48">
                  <Image
                    src={`/placeholder.svg?height=200&width=300&query=${region.image}`}
                    alt={region.name}
                    fill
                    className="object-cover"
                  />
                  {region.featured && (
                    <div className="absolute top-4 left-4 bg-sky-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{region.name}</h3>
                  <p className="text-slate-600 text-sm mb-4">{region.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sky-600 font-semibold">{region.destinations} destinations</span>
                    <ArrowRight className="w-4 h-4 text-sky-600" />
                  </div>
                </div>
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
            <p className="text-xl text-slate-600">Must-visit places that offer extraordinary experiences</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDestinations.map((destination, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="relative h-56">
                  <Image
                    src={`/placeholder.svg?height=240&width=400&query=${destination.image}`}
                    alt={destination.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-semibold">{destination.rating}</span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-slate-800">{destination.name}</h3>
                    <span className="text-sm text-sky-600 font-medium">{destination.region}</span>
                  </div>

                  <p className="text-slate-600 text-sm mb-4">{destination.description}</p>

                  <div className="flex items-center space-x-4 mb-4 text-sm text-slate-500">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{destination.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{destination.difficulty}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-slate-800 mb-2">Highlights:</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      {destination.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-sky-500 rounded-full"></div>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="w-full bg-sky-500 text-white py-3 rounded-lg font-semibold hover:bg-sky-600 transition-colors">
                    Learn More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-sky-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Start Your Adventure?</h2>
            <p className="text-xl text-sky-100 mb-8">
              Get personalized recommendations and start planning your perfect trip
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/plan-your-trip">
                <motion.button
                  className="bg-white text-sky-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-slate-100 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Plan Your Trip
                </motion.button>
              </Link>
              <Link href="/things-to-do">
                <motion.button
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-sky-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Activities
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
