"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { MapPin, Calendar } from "lucide-react"

export default function FestivalsEvents() {
  const upcomingFestivals = [
    {
      name: "Dashain Festival",
      date: "October 15-24, 2024",
      location: "Nationwide",
      description: "The biggest and most important festival celebrating the victory of good over evil",
      image: "dashain festival celebration with traditional decorations",
      type: "Religious",
      duration: "10 days",
      highlights: ["Family reunions", "Traditional feasts", "Cultural performances", "Kite flying"],
    },
    {
      name: "Tihar Festival of Lights",
      date: "November 1-5, 2024",
      location: "Nationwide",
      description: "Beautiful festival of lights honoring different animals and celebrating prosperity",
      image: "tihar festival with oil lamps and decorations",
      type: "Religious",
      duration: "5 days",
      highlights: ["Oil lamp lighting", "Rangoli decorations", "Traditional songs", "Brother-sister celebrations"],
    },
    {
      name: "Holi Festival of Colors",
      date: "March 13, 2025",
      location: "Kathmandu Valley",
      description: "Vibrant spring festival celebrating colors, joy, and the triumph of good over evil",
      image: "holi festival with colorful powder and celebrations",
      type: "Religious",
      duration: "1 day",
      highlights: ["Color throwing", "Water balloons", "Traditional sweets", "Community celebrations"],
    },
    {
      name: "Buddha Jayanti",
      date: "May 12, 2025",
      location: "Lumbini & Buddhist sites",
      description: "Sacred celebration of Buddha's birth, enlightenment, and death",
      image: "buddha jayanti celebration at lumbini with prayer flags",
      type: "Religious",
      duration: "1 day",
      highlights: ["Prayer ceremonies", "Meditation sessions", "Cultural programs", "Peace marches"],
    },
    {
      name: "Indra Jatra",
      date: "September 17-25, 2024",
      location: "Kathmandu",
      description: "Ancient festival honoring Indra with masked dances and chariot processions",
      image: "indra jatra festival with traditional masks and chariots",
      type: "Cultural",
      duration: "8 days",
      highlights: ["Masked dances", "Chariot processions", "Living goddess appearance", "Traditional music"],
    },
    {
      name: "Teej Festival",
      date: "September 6, 2024",
      location: "Nationwide",
      description: "Women's festival celebrating marital bliss and devotion with fasting and prayers",
      image: "teej festival with women in red saris celebrating",
      type: "Religious",
      duration: "3 days",
      highlights: ["Traditional dances", "Red sari processions", "Fasting rituals", "Cultural performances"],
    },
  ]

  const culturalEvents = [
    {
      name: "Mountain Film Festival",
      date: "December 10-15, 2024",
      location: "Kathmandu",
      description: "International film festival showcasing mountain culture and adventure documentaries",
      image: "mountain film festival screening with audience",
      category: "Arts & Culture",
    },
    {
      name: "Traditional Music Concert",
      date: "November 20, 2024",
      location: "Patan Durbar Square",
      description: "Evening of classical music featuring traditional instruments and folk songs",
      image: "traditional music concert with local instruments",
      category: "Music",
    },
    {
      name: "Handicraft Fair",
      date: "January 15-30, 2025",
      location: "Bhaktapur",
      description: "Showcase of traditional crafts, pottery, and handmade textiles by local artisans",
      image: "handicraft fair with traditional pottery and textiles",
      category: "Arts & Crafts",
    },
    {
      name: "Food Festival",
      date: "February 5-10, 2025",
      location: "Pokhara",
      description: "Celebration of local cuisine featuring traditional dishes and cooking demonstrations",
      image: "food festival with traditional dishes and cooking",
      category: "Culinary",
    },
  ]

  const monthlyCalendar = [
    { month: "January", festivals: ["Maghe Sankranti", "Basant Panchami"] },
    { month: "February", festivals: ["Maha Shivaratri", "Losar (Tibetan New Year)"] },
    { month: "March", festivals: ["Holi", "Chaite Dashain"] },
    { month: "April", festivals: ["Bisket Jatra", "Ram Navami"] },
    { month: "May", festivals: ["Buddha Jayanti", "Mata Tirtha Aunshi"] },
    { month: "June", festivals: ["Rato Machindranath Jatra", "Sithi Nakha"] },
    { month: "July", festivals: ["Janai Purnima", "Ghanta Karna"] },
    { month: "August", festivals: ["Gai Jatra", "Krishna Janmashtami"] },
    { month: "September", festivals: ["Teej", "Indra Jatra"] },
    { month: "October", festivals: ["Dashain", "Kojagrat Purnima"] },
    { month: "November", festivals: ["Tihar", "Chhath Puja"] },
    { month: "December", festivals: ["Yomari Punhi", "Tamu Lhosar"] },
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
              <Link href="/things-to-do" className="text-slate-700 hover:text-sky-600 transition-colors font-medium">
                Things to Do
              </Link>
              <Link href="/festivals-events" className="text-sky-600 font-medium">
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
      <section className="relative bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Festivals & Events</h1>
            <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Experience vibrant cultural celebrations, traditional festivals, and unique events throughout the year
            </p>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Festivals */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Upcoming Festivals</h2>
            <p className="text-xl text-slate-600">Don't miss these spectacular cultural celebrations</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingFestivals.map((festival, index) => (
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
                    src={`/placeholder.svg?height=240&width=400&query=${festival.image}`}
                    alt={festival.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {festival.type}
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center space-x-1">
                    <Calendar className="w-4 h-4 text-purple-600" />
                    <span className="text-sm font-semibold text-slate-800">{festival.duration}</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{festival.name}</h3>
                  <div className="flex items-center space-x-4 mb-3 text-sm text-slate-500">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{festival.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{festival.location}</span>
                    </div>
                  </div>

                  <p className="text-slate-600 text-sm mb-4">{festival.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-slate-800 mb-2">Festival Highlights:</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      {festival.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="w-full bg-purple-500 text-white py-3 rounded-lg font-semibold hover:bg-purple-600 transition-colors">
                    Learn More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Events */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Cultural Events</h2>
            <p className="text-xl text-slate-600">Special events celebrating arts, music, and local culture</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {culturalEvents.map((event, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="relative h-40">
                  <Image
                    src={`/placeholder.svg?height=160&width=300&query=${event.image}`}
                    alt={event.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-semibold text-slate-800">
                    {event.category}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-slate-800 mb-2">{event.name}</h3>
                  <div className="flex items-center space-x-2 mb-2 text-sm text-slate-500">
                    <Calendar className="w-4 h-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center space-x-2 mb-3 text-sm text-slate-500">
                    <MapPin className="w-4 h-4" />
                    <span>{event.location}</span>
                  </div>
                  <p className="text-slate-600 text-sm">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Festival Calendar */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Festival Calendar</h2>
            <p className="text-xl text-slate-600">Plan your visit around these amazing celebrations</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {monthlyCalendar.map((month, index) => (
              <motion.div
                key={index}
                className="bg-slate-50 rounded-xl p-6 hover:bg-slate-100 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-bold text-slate-800 mb-4">{month.month}</h3>
                <ul className="space-y-2">
                  {month.festivals.map((festival, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm text-slate-600">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span>{festival}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Festival Tips */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Festival Experience Tips</h2>
            <p className="text-xl text-slate-600">Make the most of your cultural celebrations</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "🎭",
                title: "Respect Local Customs",
                description: "Learn about festival traditions and dress codes before participating",
              },
              {
                icon: "📸",
                title: "Photography Etiquette",
                description: "Ask permission before photographing people during religious ceremonies",
              },
              {
                icon: "🎁",
                title: "Bring Offerings",
                description: "Small gifts or flowers are appreciated at religious festivals",
              },
              {
                icon: "👥",
                title: "Join the Community",
                description: "Participate respectfully and enjoy the warm hospitality of locals",
              },
            ].map((tip, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-4">{tip.icon}</div>
                <h3 className="text-lg font-bold text-slate-800 mb-3">{tip.title}</h3>
                <p className="text-slate-600 text-sm">{tip.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-purple-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Experience Cultural Magic</h2>
            <p className="text-xl text-purple-100 mb-8">
              Plan your visit around these incredible festivals and create unforgettable memories
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/plan-your-trip">
                <motion.button
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-slate-100 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Plan Your Visit
                </motion.button>
              </Link>
              <Link href="/places-to-go">
                <motion.button
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition-colors"
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
