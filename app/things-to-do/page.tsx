"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, MapPin, Star, Clock, Users, Mountain, Waves, Camera, Heart } from "lucide-react"

export default function ThingsToDo() {
  const categories = [
    {
      name: "Adventure Sports",
      description: "Thrilling activities for adrenaline seekers",
      icon: Mountain,
      color: "from-red-400 to-red-600",
      activities: 25,
    },
    {
      name: "Cultural Experiences",
      description: "Immerse yourself in local traditions",
      icon: Heart,
      color: "from-purple-400 to-purple-600",
      activities: 18,
    },
    {
      name: "Nature & Wildlife",
      description: "Connect with pristine natural environments",
      icon: Waves,
      color: "from-green-400 to-green-600",
      activities: 22,
    },
    {
      name: "Photography Tours",
      description: "Capture stunning landscapes and moments",
      icon: Camera,
      color: "from-blue-400 to-blue-600",
      activities: 15,
    },
  ]

  const activities = [
    {
      name: "Everest Base Camp Trek",
      category: "Adventure Sports",
      description: "Epic journey to the base of the world's highest mountain with stunning Himalayan views",
      image: "everest base camp trekking with mountain views",
      rating: 4.9,
      duration: "14 days",
      difficulty: "Challenging",
      price: "$1,299",
      groupSize: "8-12 people",
      highlights: ["Sherpa culture", "Kala Patthar viewpoint", "Tengboche Monastery"],
    },
    {
      name: "Paragliding in Pokhara",
      category: "Adventure Sports",
      description: "Soar above the beautiful Pokhara valley with panoramic mountain and lake views",
      image: "paragliding over pokhara valley with mountains",
      rating: 4.8,
      duration: "Half day",
      difficulty: "Beginner friendly",
      price: "$89",
      groupSize: "1-2 people",
      highlights: ["Annapurna views", "Phewa Lake", "Professional pilots"],
    },
    {
      name: "Cultural Village Tour",
      category: "Cultural Experiences",
      description: "Experience authentic village life and traditional customs in remote mountain communities",
      image: "traditional mountain village with local culture",
      rating: 4.7,
      duration: "3-5 days",
      difficulty: "Easy",
      price: "$299",
      groupSize: "6-10 people",
      highlights: ["Homestay experience", "Traditional crafts", "Local cuisine"],
    },
    {
      name: "Jungle Safari in Chitwan",
      category: "Nature & Wildlife",
      description: "Spot rhinos, tigers, and exotic birds in one of Asia's premier wildlife destinations",
      image: "jungle safari with rhinos and wildlife in chitwan",
      rating: 4.6,
      duration: "2-3 days",
      difficulty: "Easy",
      price: "$199",
      groupSize: "4-8 people",
      highlights: ["One-horned rhino", "Bengal tigers", "Bird watching"],
    },
    {
      name: "Photography Workshop",
      category: "Photography Tours",
      description: "Learn landscape photography techniques while capturing stunning Himalayan scenery",
      image: "photography workshop in himalayan landscapes",
      rating: 4.8,
      duration: "7 days",
      difficulty: "All levels",
      price: "$799",
      groupSize: "6-8 people",
      highlights: ["Professional guidance", "Sunrise shoots", "Post-processing tips"],
    },
    {
      name: "White Water Rafting",
      category: "Adventure Sports",
      description: "Navigate thrilling rapids on pristine mountain rivers with experienced guides",
      image: "white water rafting on mountain rivers",
      rating: 4.7,
      duration: "1-3 days",
      difficulty: "Moderate",
      price: "$149",
      groupSize: "6-12 people",
      highlights: ["Grade III-IV rapids", "Scenic valleys", "Camping option"],
    },
  ]

  const seasonalActivities = [
    {
      season: "Spring (Mar-May)",
      description: "Perfect for trekking with clear mountain views and blooming rhododendrons",
      activities: ["High altitude treks", "Photography tours", "Cultural festivals"],
      image: "spring mountain landscape with blooming flowers",
    },
    {
      season: "Autumn (Sep-Nov)",
      description: "Ideal weather for all activities with crystal clear skies",
      activities: ["Peak trekking season", "Wildlife safaris", "Adventure sports"],
      image: "autumn mountain views with clear skies",
    },
    {
      season: "Winter (Dec-Feb)",
      description: "Lower altitude activities and cultural experiences",
      activities: ["Cultural tours", "Wildlife viewing", "Photography"],
      image: "winter mountain landscape with snow",
    },
    {
      season: "Summer (Jun-Aug)",
      description: "Monsoon season perfect for cultural activities and lower regions",
      activities: ["Cultural immersion", "Meditation retreats", "Indoor experiences"],
      image: "lush green monsoon landscape",
    },
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
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
              <Link href="/places-to-go" className="text-slate-700 hover:text-sky-600 transition-colors font-medium">
                Places to Go
              </Link>
              <Link href="/things-to-do" className="text-sky-600 font-medium">
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
      <section className="relative bg-gradient-to-br from-emerald-400 via-emerald-500 to-emerald-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Things to Do</h1>
            <p className="text-xl md:text-2xl text-emerald-100 mb-8 max-w-3xl mx-auto">
              From thrilling adventures to cultural immersion - discover activities that create lasting memories
            </p>
          </motion.div>
        </div>
      </section>

      {/* Activity Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Activity Categories</h2>
            <p className="text-xl text-slate-600">Choose your adventure style</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => {
              const IconComponent = category.icon
              return (
                <motion.div
                  key={index}
                  className={`bg-gradient-to-br ${category.color} text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all cursor-pointer`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <IconComponent className="w-12 h-12 mb-4" />
                  <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                  <p className="text-white/90 text-sm mb-4">{category.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-white/80 text-sm">{category.activities} activities</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Activities */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Featured Activities</h2>
            <p className="text-xl text-slate-600">Popular experiences chosen by travelers</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
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
                    src={`/placeholder.svg?height=240&width=400&query=${activity.image}`}
                    alt={activity.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-semibold">{activity.rating}</span>
                  </div>
                  <div className="absolute top-4 left-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {activity.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-slate-800">{activity.name}</h3>
                    <span className="text-lg font-bold text-emerald-600">{activity.price}</span>
                  </div>

                  <p className="text-slate-600 text-sm mb-4">{activity.description}</p>

                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-slate-500">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{activity.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{activity.groupSize}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                        activity.difficulty === "Challenging"
                          ? "bg-red-100 text-red-800"
                          : activity.difficulty === "Moderate"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-green-100 text-green-800"
                      }`}
                    >
                      {activity.difficulty}
                    </span>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-slate-800 mb-2">Highlights:</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      {activity.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="w-full bg-emerald-500 text-white py-3 rounded-lg font-semibold hover:bg-emerald-600 transition-colors">
                    Book Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Activities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Best Time for Activities</h2>
            <p className="text-xl text-slate-600">Plan your visit based on seasonal highlights</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {seasonalActivities.map((season, index) => (
              <motion.div
                key={index}
                className="bg-slate-50 rounded-2xl p-6 hover:bg-slate-100 transition-colors"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative h-32 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=120&width=200&query=${season.image}`}
                    alt={season.season}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">{season.season}</h3>
                <p className="text-slate-600 text-sm mb-4">{season.description}</p>
                <ul className="space-y-2">
                  {season.activities.map((activity, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                      <span>{activity}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-emerald-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready for Your Next Adventure?</h2>
            <p className="text-xl text-emerald-100 mb-8">Book your activities now and create unforgettable memories</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/plan-your-trip">
                <motion.button
                  className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-slate-100 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Plan Your Trip
                </motion.button>
              </Link>
              <Link href="/places-to-go">
                <motion.button
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-emerald-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Destinations
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
