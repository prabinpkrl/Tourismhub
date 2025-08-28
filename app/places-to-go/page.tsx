"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Star,
  MapPin,
  Clock,
  Users,
  Camera,
  MapIcon,
} from "lucide-react";

export default function PlacesToGoPage() {
  const regions = [
    {
      id: 1,
      title: "Mountain Region",
      description:
        "Explore towering peaks, pristine valleys, and breathtaking alpine landscapes",
      image: "majestic mountain peaks with snow and hiking trails",
      destinations: 15,
      rating: 4.8,
      difficulty: "Moderate to Challenging",
    },
    {
      id: 2,
      title: "Cultural Heritage Sites",
      description:
        "Discover ancient temples, historic monuments, and traditional architecture",
      image: "ancient temples and cultural heritage sites",
      destinations: 12,
      rating: 4.9,
      difficulty: "Easy to Moderate",
    },
    {
      id: 3,
      title: "National Parks",
      description:
        "Experience diverse wildlife, pristine forests, and natural wonders",
      image: "national park with wildlife and forest landscapes",
      destinations: 8,
      rating: 4.7,
      difficulty: "Easy to Moderate",
    },
    {
      id: 4,
      title: "Lakes & Rivers",
      description:
        "Enjoy serene waters, water sports, and scenic riverside experiences",
      image: "pristine lakes and rivers with scenic views",
      destinations: 10,
      rating: 4.6,
      difficulty: "Easy",
    },
  ];

  const featuredDestinations = [
    {
      id: 1,
      title: "Everest Base Camp",
      location: "Mountain Region",
      duration: "14 days",
      price: 1299,
      rating: 4.9,
      reviews: 234,
      image: "everest base camp with mountain views",
      highlights: [
        "World's highest peak",
        "Sherpa culture",
        "Stunning views",
        "Adventure of a lifetime",
      ],
    },
    {
      id: 2,
      title: "Ancient Temple Complex",
      location: "Cultural Heritage",
      duration: "3 days",
      price: 299,
      rating: 4.8,
      reviews: 189,
      image: "ancient temple complex with intricate architecture",
      highlights: [
        "UNESCO World Heritage",
        "Ancient architecture",
        "Spiritual experience",
        "Cultural immersion",
      ],
    },
    {
      id: 3,
      title: "Wildlife Safari Park",
      location: "National Parks",
      duration: "5 days",
      price: 599,
      rating: 4.7,
      reviews: 156,
      image: "wildlife safari with elephants and nature",
      highlights: [
        "Rare wildlife",
        "Expert guides",
        "Photography tours",
        "Conservation efforts",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                  <ArrowLeft className="w-5 h-5 text-slate-600" />
                </button>
              </Link>
              <h1 className="text-2xl font-bold text-slate-800">
                Places to Go
              </h1>
            </div>
            <Link href="/">
              <div className="w-8 h-8 bg-sky-500 rounded-lg flex items-center justify-center">
                <MapIcon className="w-4 h-4 text-white" />
              </div>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-400 to-sky-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Discover Incredible Destinations
            </h2>
            <p className="text-xl text-sky-100 max-w-3xl mx-auto">
              From towering mountain peaks to ancient cultural sites, explore
              the world's most breathtaking destinations
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Regions Grid */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-slate-800 mb-8 text-center">
            Explore by Region
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {regions.map((region, index) => (
              <motion.div
                key={region.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="relative h-64">
                  <Image
                    src={`/abstract-geometric-shapes.png?height=300&width=500&query=${region.image}`}
                    alt={region.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">
                        {region.rating}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h4 className="text-2xl font-bold text-slate-800 mb-3">
                    {region.title}
                  </h4>
                  <p className="text-slate-600 mb-4">{region.description}</p>

                  <div className="flex items-center justify-between text-sm text-slate-600 mb-4">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{region.destinations} destinations</span>
                    </div>
                    <span className="bg-slate-100 px-2 py-1 rounded">
                      {region.difficulty}
                    </span>
                  </div>

                  <button className="w-full bg-sky-500 text-white py-3 rounded-lg font-semibold hover:bg-sky-600 transition-colors">
                    Explore Region
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Featured Destinations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold text-slate-800 mb-8 text-center">
            Featured Destinations
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredDestinations.map((destination, index) => (
              <motion.div
                key={destination.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="relative h-48">
                  <Image
                    src={`/abstract-geometric-shapes.png?height=200&width=300&query=${destination.image}`}
                    alt={destination.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">
                        {destination.rating}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-xl font-bold text-slate-800">
                      {destination.title}
                    </h4>
                    <span className="text-2xl font-bold text-sky-600">
                      ${destination.price}
                    </span>
                  </div>

                  <div className="flex items-center space-x-4 text-sm text-slate-600 mb-4">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{destination.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{destination.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{destination.reviews} reviews</span>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    {destination.highlights.map((highlight, idx) => (
                      <div
                        key={idx}
                        className="flex items-center space-x-2 text-sm text-slate-600"
                      >
                        <div className="w-1.5 h-1.5 bg-sky-500 rounded-full"></div>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <button className="w-full bg-sky-500 text-white py-3 rounded-lg font-semibold hover:bg-sky-600 transition-colors">
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Travel Tips */}
        <motion.div
          className="mt-16 bg-white rounded-2xl shadow-lg p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">
            Travel Tips
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Camera className="w-6 h-6" />,
                title: "Best Photography Times",
                tip: "Golden hour (sunrise/sunset) provides the most stunning lighting for landscape photography.",
              },
              {
                icon: <Clock className="w-6 h-6" />,
                title: "Seasonal Planning",
                tip: "Visit mountain regions in spring/autumn for clear weather and comfortable temperatures.",
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "Local Guides",
                tip: "Hire local guides for cultural sites to gain deeper insights into history and traditions.",
              },
              {
                icon: <MapPin className="w-6 h-6" />,
                title: "Off-Peak Benefits",
                tip: "Travel during shoulder seasons for fewer crowds and better accommodation rates.",
              },
            ].map((tip, index) => (
              <motion.div
                key={index}
                className="text-center p-4 bg-slate-50 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mx-auto mb-3 text-sky-600">
                  {tip.icon}
                </div>
                <h4 className="font-semibold text-slate-800 mb-2">
                  {tip.title}
                </h4>
                <p className="text-sm text-slate-600">{tip.tip}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
