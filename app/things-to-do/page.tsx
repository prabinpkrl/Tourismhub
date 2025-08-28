"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Star, Clock, Users, MapIcon } from "lucide-react";

export default function ThingsToDoPage() {
  const activities = [
    {
      id: 1,
      category: "Adventure Sports",
      title: "Mountain Trekking",
      description:
        "Multi-day trekking adventures through pristine mountain trails",
      duration: "3-14 days",
      price: "From $199",
      rating: 4.8,
      reviews: 234,
      image: "mountain trekking adventure with backpackers",
      highlights: [
        "Professional guides",
        "Equipment provided",
        "Scenic routes",
        "Cultural encounters",
      ],
    },
    {
      id: 2,
      category: "Cultural Experiences",
      title: "Traditional Cooking Class",
      description: "Learn authentic local recipes from expert chefs",
      duration: "4 hours",
      price: "From $89",
      rating: 4.9,
      reviews: 156,
      image: "traditional cooking class with local chef",
      highlights: [
        "Hands-on experience",
        "Local ingredients",
        "Recipe booklet",
        "Market visit",
      ],
    },
    {
      id: 3,
      category: "Nature & Wildlife",
      title: "Wildlife Photography Tour",
      description: "Capture stunning wildlife photos with expert photographers",
      duration: "Full day",
      price: "From $149",
      rating: 4.7,
      reviews: 89,
      image: "wildlife photography tour with animals",
      highlights: [
        "Professional guidance",
        "Equipment rental",
        "Best locations",
        "Photo editing tips",
      ],
    },
    {
      id: 4,
      category: "Adventure Sports",
      title: "Paragliding Experience",
      description:
        "Soar above breathtaking landscapes with certified instructors",
      duration: "Half day",
      price: "From $299",
      rating: 4.9,
      reviews: 167,
      image: "paragliding over scenic mountain landscape",
      highlights: [
        "Certified instructors",
        "Safety equipment",
        "Video recording",
        "Certificate",
      ],
    },
    {
      id: 5,
      category: "Cultural Experiences",
      title: "Temple & Monastery Tour",
      description: "Explore ancient spiritual sites with cultural insights",
      duration: "6 hours",
      price: "From $79",
      rating: 4.8,
      reviews: 203,
      image: "ancient temples and monasteries tour",
      highlights: [
        "Expert guide",
        "Historical insights",
        "Meditation session",
        "Cultural immersion",
      ],
    },
    {
      id: 6,
      category: "Photography Tours",
      title: "Sunrise Photography Workshop",
      description: "Capture magical sunrise moments at iconic locations",
      duration: "4 hours",
      price: "From $129",
      rating: 4.6,
      reviews: 98,
      image: "sunrise photography workshop in mountains",
      highlights: [
        "Early morning start",
        "Prime locations",
        "Technical guidance",
        "Post-processing tips",
      ],
    },
  ];

  const categories = [
    { name: "Adventure Sports", count: 12, color: "from-red-400 to-red-600" },
    {
      name: "Cultural Experiences",
      count: 8,
      color: "from-purple-400 to-purple-600",
    },
    {
      name: "Nature & Wildlife",
      count: 15,
      color: "from-green-400 to-green-600",
    },
    { name: "Photography Tours", count: 6, color: "from-blue-400 to-blue-600" },
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
                Things to Do
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
      <section className="bg-gradient-to-br from-emerald-400 to-emerald-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Unforgettable Experiences Await
            </h2>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              From thrilling adventures to cultural immersion, discover
              activities that will create lasting memories
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Categories */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-slate-800 mb-8 text-center">
            Activity Categories
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                className={`bg-gradient-to-br ${category.color} text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all cursor-pointer`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <h4 className="text-xl font-bold mb-2">{category.name}</h4>
                <p className="text-white/90">
                  {category.count} activities available
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Activities Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold text-slate-800 mb-8 text-center">
            Popular Activities
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <motion.div
                key={activity.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="relative h-48">
                  <Image
                    src={`/abstract-geometric-shapes.png?height=200&width=300&query=${activity.image}`}
                    alt={activity.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-white rounded-full px-3 py-1">
                    <span className="text-xs font-medium text-slate-600">
                      {activity.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">
                        {activity.rating}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-xl font-bold text-slate-800">
                      {activity.title}
                    </h4>
                    <span className="text-lg font-bold text-emerald-600">
                      {activity.price}
                    </span>
                  </div>

                  <p className="text-slate-600 mb-4">{activity.description}</p>

                  <div className="flex items-center space-x-4 text-sm text-slate-600 mb-4">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{activity.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{activity.reviews} reviews</span>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    {activity.highlights.map((highlight, idx) => (
                      <div
                        key={idx}
                        className="flex items-center space-x-2 text-sm text-slate-600"
                      >
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <button className="w-full bg-emerald-500 text-white py-3 rounded-lg font-semibold hover:bg-emerald-600 transition-colors">
                    Book Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Seasonal Activities */}
        <motion.div
          className="mt-16 bg-white rounded-2xl shadow-lg p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">
            Seasonal Recommendations
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                season: "Spring",
                activity: "Mountain Trekking",
                reason: "Perfect weather and blooming rhododendrons",
                color: "bg-green-100 text-green-800",
              },
              {
                season: "Summer",
                activity: "Cultural Tours",
                reason: "Clear skies and festival season",
                color: "bg-yellow-100 text-yellow-800",
              },
              {
                season: "Autumn",
                activity: "Photography Tours",
                reason: "Crystal clear mountain views",
                color: "bg-orange-100 text-orange-800",
              },
              {
                season: "Winter",
                activity: "Cultural Experiences",
                reason: "Indoor activities and local traditions",
                color: "bg-blue-100 text-blue-800",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center p-4 bg-slate-50 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div
                  className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 ${item.color}`}
                >
                  {item.season}
                </div>
                <h4 className="font-semibold text-slate-800 mb-2">
                  {item.activity}
                </h4>
                <p className="text-sm text-slate-600">{item.reason}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
