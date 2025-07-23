"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { MapPin, Calendar, AlertTriangle, Info, CheckCircle, Clock, Users } from "lucide-react"

export default function TravelUpdates() {
  const latestUpdates = [
    {
      date: "January 20, 2024",
      title: "New Trekking Permits System Launched",
      category: "Permits & Regulations",
      priority: "high",
      description: "Digital permit system now available for all major trekking routes. Online applications accepted.",
      details: [
        "Online application process streamlined",
        "Digital permits available on mobile",
        "Reduced processing time to 24 hours",
        "Integration with guide booking system",
      ],
      impact: "All trekkers",
      status: "active",
    },
    {
      date: "January 18, 2024",
      title: "Weather Advisory: Clear Skies Expected",
      category: "Weather",
      priority: "medium",
      description: "Excellent weather conditions forecasted for the next two weeks. Perfect for mountain activities.",
      details: [
        "Clear visibility above 3000m",
        "Stable weather patterns",
        "Minimal precipitation expected",
        "Ideal conditions for photography",
      ],
      impact: "Mountain regions",
      status: "active",
    },
    {
      date: "January 15, 2024",
      title: "Festival Season Travel Guidelines",
      category: "Events",
      priority: "medium",
      description: "Special guidelines for travelers during major festival periods. Advance booking recommended.",
      details: [
        "Increased accommodation demand",
        "Modified transport schedules",
        "Cultural sensitivity guidelines",
        "Photography restrictions in some areas",
      ],
      impact: "All travelers",
      status: "active",
    },
    {
      date: "January 12, 2024",
      title: "New Adventure Activity Safety Standards",
      category: "Safety",
      priority: "high",
      description: "Enhanced safety protocols for adventure sports and high-altitude activities.",
      details: [
        "Mandatory safety briefings",
        "Updated equipment standards",
        "Certified guide requirements",
        "Emergency response protocols",
      ],
      impact: "Adventure travelers",
      status: "active",
    },
  ]

  const travelAdvisories = [
    {
      region: "High Altitude Areas (Above 3500m)",
      level: "Caution",
      description: "Take proper acclimatization measures and carry altitude sickness medication",
      recommendations: [
        "Gradual ascent recommended",
        "Stay hydrated",
        "Recognize altitude sickness symptoms",
        "Carry emergency medication",
      ],
      validUntil: "Ongoing",
    },
    {
      region: "Remote Trekking Routes",
      level: "Advisory",
      description: "Inform local authorities of your trekking plans and carry emergency communication devices",
      recommendations: [
        "Register with local authorities",
        "Carry satellite communication device",
        "Travel with experienced guides",
        "Share itinerary with contacts",
      ],
      validUntil: "Ongoing",
    },
    {
      region: "Monsoon-Affected Areas",
      level: "Seasonal",
      description: "Exercise caution during monsoon season (June-September) due to landslide risks",
      recommendations: [
        "Check weather forecasts",
        "Avoid steep terrain during heavy rain",
        "Use reliable transportation",
        "Have flexible itinerary",
      ],
      validUntil: "September 2024",
    },
  ]

  const healthUpdates = [
    {
      title: "Vaccination Recommendations Updated",
      date: "January 10, 2024",
      description: "Latest health guidelines for international travelers",
      recommendations: [
        "Hepatitis A & B vaccination recommended",
        "Typhoid vaccination for rural areas",
        "Japanese Encephalitis for extended stays",
        "Routine vaccinations up to date",
      ],
    },
    {
      title: "High Altitude Health Guidelines",
      date: "January 8, 2024",
      description: "Important information for travelers going above 2500m",
      recommendations: [
        "Gradual ascent above 2500m",
        "Recognize AMS symptoms",
        "Carry Diamox if recommended",
        "Descend if symptoms worsen",
      ],
    },
    {
      title: "Water Safety Recommendations",
      date: "January 5, 2024",
      description: "Guidelines for safe drinking water during travel",
      recommendations: [
        "Use bottled or purified water",
        "Avoid ice in drinks",
        "Use water purification tablets",
        "Boil water for 3+ minutes if needed",
      ],
    },
  ]

  const transportUpdates = [
    {
      mode: "Domestic Flights",
      status: "Normal Operations",
      updates: [
        "Regular schedules maintained",
        "Weather-dependent cancellations possible",
        "Book in advance during peak season",
        "Flexible booking policies available",
      ],
      lastUpdated: "January 20, 2024",
    },
    {
      mode: "Road Transport",
      status: "Seasonal Restrictions",
      updates: [
        "Some high-altitude roads closed in winter",
        "Landslide risks during monsoon",
        "4WD vehicles recommended for remote areas",
        "Check road conditions before travel",
      ],
      lastUpdated: "January 18, 2024",
    },
    {
      mode: "Local Transport",
      status: "Normal Operations",
      updates: [
        "Bus services running regularly",
        "Taxi services available in major cities",
        "Ride-sharing apps operational",
        "Negotiate fares in advance",
      ],
      lastUpdated: "January 15, 2024",
    },
  ]

  const emergencyContacts = [
    {
      service: "Tourist Police",
      number: "+977-1-4247041",
      description: "24/7 assistance for tourists",
      languages: ["English", "Hindi", "Local languages"],
    },
    {
      service: "Emergency Medical",
      number: "102",
      description: "Medical emergency services",
      languages: ["Local languages", "Basic English"],
    },
    {
      service: "Tourist Helpline",
      number: "+977-1-4247041",
      description: "General tourist assistance and information",
      languages: ["English", "Hindi", "Local languages"],
    },
    {
      service: "Embassy Services",
      number: "Contact your embassy",
      description: "Consular services for foreign nationals",
      languages: ["Various"],
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
              <Link href="/travel-updates" className="text-sky-600 font-medium">
                Travel Updates
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-400 via-red-500 to-red-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Travel Updates</h1>
            <p className="text-xl md:text-2xl text-red-100 mb-8 max-w-3xl mx-auto">
              Stay informed with the latest travel advisories, safety updates, and important information
            </p>
          </motion.div>
        </div>
      </section>

      {/* Latest Updates */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Latest Updates</h2>
            <p className="text-xl text-slate-600">Recent announcements and important information</p>
          </motion.div>

          <div className="space-y-6">
            {latestUpdates.map((update, index) => (
              <motion.div
                key={index}
                className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div
                      className={`p-2 rounded-lg ${
                        update.priority === "high"
                          ? "bg-red-100"
                          : update.priority === "medium"
                            ? "bg-yellow-100"
                            : "bg-blue-100"
                      }`}
                    >
                      {update.priority === "high" ? (
                        <AlertTriangle
                          className={`w-5 h-5 ${update.priority === "high" ? "text-red-600" : "text-yellow-600"}`}
                        />
                      ) : (
                        <Info
                          className={`w-5 h-5 ${update.priority === "medium" ? "text-yellow-600" : "text-blue-600"}`}
                        />
                      )}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800">{update.title}</h3>
                      <div className="flex items-center space-x-4 text-sm text-slate-500 mt-1">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{update.date}</span>
                        </div>
                        <span className="px-2 py-1 bg-slate-100 rounded-full text-xs font-medium">
                          {update.category}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      update.priority === "high"
                        ? "bg-red-100 text-red-800"
                        : update.priority === "medium"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {update.priority} priority
                  </div>
                </div>

                <p className="text-slate-600 mb-4">{update.description}</p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">Key Details:</h4>
                    <ul className="space-y-1">
                      {update.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm text-slate-600">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="flex items-center space-x-4 text-sm">
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4 text-slate-500" />
                        <span className="text-slate-600">Affects: {update.impact}</span>
                      </div>
                      <div
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          update.status === "active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {update.status}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Advisories */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Travel Advisories</h2>
            <p className="text-xl text-slate-600">Important safety information by region</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {travelAdvisories.map((advisory, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-slate-800">{advisory.region}</h3>
                  <div
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      advisory.level === "Caution"
                        ? "bg-yellow-100 text-yellow-800"
                        : advisory.level === "Advisory"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-green-100 text-green-800"
                    }`}
                  >
                    {advisory.level}
                  </div>
                </div>

                <p className="text-slate-600 text-sm mb-4">{advisory.description}</p>

                <div className="mb-4">
                  <h4 className="font-semibold text-slate-800 mb-2">Recommendations:</h4>
                  <ul className="space-y-1">
                    {advisory.recommendations.map((rec, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-slate-600">
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                        <span>{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-sm text-slate-500">
                  <strong>Valid until:</strong> {advisory.validUntil}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Health Updates */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Health & Safety Updates</h2>
            <p className="text-xl text-slate-600">Important health information for travelers</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {healthUpdates.map((health, index) => (
              <motion.div
                key={index}
                className="bg-slate-50 rounded-2xl p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-slate-500">{health.date}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-3">{health.title}</h3>
                <p className="text-slate-600 text-sm mb-4">{health.description}</p>
                <ul className="space-y-2">
                  {health.recommendations.map((rec, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Transport Updates */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Transportation Updates</h2>
            <p className="text-xl text-slate-600">Current status of transportation services</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {transportUpdates.map((transport, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-slate-800">{transport.mode}</h3>
                  <div
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      transport.status === "Normal Operations"
                        ? "bg-green-100 text-green-800"
                        : transport.status === "Seasonal Restrictions"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                    }`}
                  >
                    {transport.status}
                  </div>
                </div>

                <ul className="space-y-2 mb-4">
                  {transport.updates.map((update, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                      <span>{update}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center space-x-1 text-sm text-slate-500">
                  <Clock className="w-4 h-4" />
                  <span>Updated: {transport.lastUpdated}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contacts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Emergency Contacts</h2>
            <p className="text-xl text-slate-600">Important numbers to keep handy during your trip</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {emergencyContacts.map((contact, index) => (
              <motion.div
                key={index}
                className="bg-red-50 border border-red-200 rounded-2xl p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <h3 className="text-lg font-bold text-slate-800">{contact.service}</h3>
                </div>
                <div className="text-2xl font-bold text-red-600 mb-2">{contact.number}</div>
                <p className="text-slate-600 text-sm mb-3">{contact.description}</p>
                <div className="text-sm text-slate-500">
                  <strong>Languages:</strong> {contact.languages.join(", ")}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-red-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Stay Informed, Travel Safe</h2>
            <p className="text-xl text-red-100 mb-8">
              Subscribe to our updates for the latest travel information and safety advisories
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/plan-your-trip">
                <motion.button
                  className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-slate-100 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Plan Your Trip
                </motion.button>
              </Link>
              <motion.button
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-red-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe to Updates
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
