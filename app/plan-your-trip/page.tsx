"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { MapPin, Plane, Calendar, Shield, CheckCircle, AlertCircle } from "lucide-react"

export default function PlanYourTrip() {
  const planningSteps = [
    {
      step: 1,
      title: "Choose Your Destination",
      description: "Select from our featured destinations based on your interests and travel style",
      icon: MapPin,
      color: "bg-blue-500",
    },
    {
      step: 2,
      title: "Plan Your Itinerary",
      description: "Decide on activities, duration, and create a day-by-day travel plan",
      icon: Calendar,
      color: "bg-green-500",
    },
    {
      step: 3,
      title: "Book Transportation",
      description: "Arrange flights, local transport, and airport transfers",
      icon: Plane,
      color: "bg-purple-500",
    },
    {
      step: 4,
      title: "Secure Your Trip",
      description: "Get travel insurance, permits, and necessary documentation",
      icon: Shield,
      color: "bg-orange-500",
    },
  ]

  const travelRequirements = [
    {
      title: "Visa Requirements",
      description: "Tourist visa available on arrival for most nationalities",
      details: ["Valid passport (6+ months)", "Visa fee: $30-50", "Passport photos required"],
      status: "required",
    },
    {
      title: "Health & Vaccinations",
      description: "Recommended vaccinations and health precautions",
      details: ["Hepatitis A & B", "Typhoid", "Japanese Encephalitis", "Altitude sickness medication"],
      status: "recommended",
    },
    {
      title: "Travel Insurance",
      description: "Comprehensive coverage including high-altitude activities",
      details: ["Medical coverage", "Emergency evacuation", "Adventure sports coverage", "Trip cancellation"],
      status: "essential",
    },
    {
      title: "Permits & Licenses",
      description: "Special permits for trekking and restricted areas",
      details: ["TIMS card for trekking", "National park permits", "Restricted area permits", "Guide requirements"],
      status: "conditional",
    },
  ]

  const budgetGuide = [
    {
      category: "Budget Traveler",
      dailyBudget: "$25-40",
      accommodation: "Guesthouses, hostels",
      meals: "Local restaurants, street food",
      transport: "Local buses, shared taxis",
      activities: "Self-guided tours, free attractions",
    },
    {
      category: "Mid-Range Traveler",
      dailyBudget: "$50-100",
      accommodation: "3-star hotels, boutique lodges",
      meals: "Mix of local and international cuisine",
      transport: "Private taxis, domestic flights",
      activities: "Guided tours, adventure activities",
    },
    {
      category: "Luxury Traveler",
      dailyBudget: "$150-300+",
      accommodation: "5-star hotels, luxury resorts",
      meals: "Fine dining, hotel restaurants",
      transport: "Private vehicles, helicopter transfers",
      activities: "Premium experiences, private guides",
    },
  ]

  const packingEssentials = [
    {
      category: "Clothing",
      items: [
        "Layered clothing system",
        "Waterproof jacket",
        "Warm hat and gloves",
        "Comfortable hiking boots",
        "Quick-dry pants",
      ],
    },
    {
      category: "Health & Safety",
      items: [
        "First aid kit",
        "Altitude sickness medication",
        "Sunscreen (high SPF)",
        "Water purification tablets",
        "Personal medications",
      ],
    },
    {
      category: "Electronics",
      items: [
        "Power bank",
        "Universal adapter",
        "Camera with extra batteries",
        "Headlamp/flashlight",
        "Phone with offline maps",
      ],
    },
    {
      category: "Documents",
      items: [
        "Passport copies",
        "Travel insurance documents",
        "Permit copies",
        "Emergency contact list",
        "Hotel confirmations",
      ],
    },
  ]

  const bestTimeToVisit = [
    {
      season: "Spring (March-May)",
      weather: "Clear skies, mild temperatures",
      pros: ["Best mountain views", "Rhododendron blooms", "Perfect for trekking"],
      cons: ["Peak season crowds", "Higher prices"],
      activities: ["High altitude treks", "Photography", "Cultural tours"],
    },
    {
      season: "Autumn (September-November)",
      weather: "Stable weather, clear visibility",
      pros: ["Excellent visibility", "Comfortable temperatures", "Festival season"],
      cons: ["Tourist crowds", "Booking challenges"],
      activities: ["All outdoor activities", "Festivals", "Wildlife viewing"],
    },
    {
      season: "Winter (December-February)",
      weather: "Cold at altitude, clear skies",
      pros: ["Fewer crowds", "Lower prices", "Clear mountain views"],
      cons: ["Cold temperatures", "Some high passes closed"],
      activities: ["Lower altitude treks", "Cultural experiences", "Wildlife safaris"],
    },
    {
      season: "Summer (June-August)",
      weather: "Monsoon season, cloudy",
      pros: ["Lush green landscapes", "Fewer tourists", "Cultural activities"],
      cons: ["Limited mountain views", "Muddy trails", "Flight delays"],
      activities: ["Cultural tours", "Lower region exploration", "Meditation retreats"],
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
              <Link href="/plan-your-trip" className="text-sky-600 font-medium">
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
      <section className="relative bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Plan Your Trip</h1>
            <p className="text-xl md:text-2xl text-orange-100 mb-8 max-w-3xl mx-auto">
              Everything you need to know for an amazing journey - from planning to packing
            </p>
          </motion.div>
        </div>
      </section>

      {/* Planning Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Planning Steps</h2>
            <p className="text-xl text-slate-600">Follow these steps for a smooth travel experience</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {planningSteps.map((step, index) => {
              const IconComponent = step.icon
              return (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="bg-slate-100 rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4 text-sm font-bold text-slate-600">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">{step.title}</h3>
                  <p className="text-slate-600">{step.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Travel Requirements */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Travel Requirements</h2>
            <p className="text-xl text-slate-600">Important information for your trip preparation</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {travelRequirements.map((requirement, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-slate-800">{requirement.title}</h3>
                  <div
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      requirement.status === "required"
                        ? "bg-red-100 text-red-800"
                        : requirement.status === "essential"
                          ? "bg-orange-100 text-orange-800"
                          : requirement.status === "recommended"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {requirement.status}
                  </div>
                </div>
                <p className="text-slate-600 mb-4">{requirement.description}</p>
                <ul className="space-y-2">
                  {requirement.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Budget Guide */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Budget Planning</h2>
            <p className="text-xl text-slate-600">Estimate your travel costs based on your style</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {budgetGuide.map((budget, index) => (
              <motion.div
                key={index}
                className={`rounded-2xl p-6 ${index === 1 ? "bg-orange-500 text-white" : "bg-slate-50"} hover:shadow-lg transition-shadow`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className={`text-xl font-bold mb-2 ${index === 1 ? "text-white" : "text-slate-800"}`}>
                  {budget.category}
                </h3>
                <div className={`text-3xl font-bold mb-4 ${index === 1 ? "text-white" : "text-orange-600"}`}>
                  {budget.dailyBudget}
                  <span className="text-sm font-normal">/day</span>
                </div>
                <div className="space-y-3">
                  <div>
                    <h4 className={`font-semibold mb-1 ${index === 1 ? "text-orange-100" : "text-slate-700"}`}>
                      Accommodation
                    </h4>
                    <p className={`text-sm ${index === 1 ? "text-orange-100" : "text-slate-600"}`}>
                      {budget.accommodation}
                    </p>
                  </div>
                  <div>
                    <h4 className={`font-semibold mb-1 ${index === 1 ? "text-orange-100" : "text-slate-700"}`}>
                      Meals
                    </h4>
                    <p className={`text-sm ${index === 1 ? "text-orange-100" : "text-slate-600"}`}>{budget.meals}</p>
                  </div>
                  <div>
                    <h4 className={`font-semibold mb-1 ${index === 1 ? "text-orange-100" : "text-slate-700"}`}>
                      Transport
                    </h4>
                    <p className={`text-sm ${index === 1 ? "text-orange-100" : "text-slate-600"}`}>
                      {budget.transport}
                    </p>
                  </div>
                  <div>
                    <h4 className={`font-semibold mb-1 ${index === 1 ? "text-orange-100" : "text-slate-700"}`}>
                      Activities
                    </h4>
                    <p className={`text-sm ${index === 1 ? "text-orange-100" : "text-slate-600"}`}>
                      {budget.activities}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Time to Visit */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Best Time to Visit</h2>
            <p className="text-xl text-slate-600">Choose the perfect season for your adventure</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestTimeToVisit.map((season, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-bold text-slate-800 mb-2">{season.season}</h3>
                <p className="text-slate-600 text-sm mb-4">{season.weather}</p>

                <div className="mb-4">
                  <h4 className="font-semibold text-green-700 mb-2">Pros:</h4>
                  <ul className="space-y-1">
                    {season.pros.map((pro, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-slate-600">
                        <CheckCircle className="w-3 h-3 text-green-500" />
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-red-700 mb-2">Cons:</h4>
                  <ul className="space-y-1">
                    {season.cons.map((con, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-slate-600">
                        <AlertCircle className="w-3 h-3 text-red-500" />
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-700 mb-2">Best For:</h4>
                  <ul className="space-y-1">
                    {season.activities.map((activity, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-slate-600">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packing Guide */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Packing Essentials</h2>
            <p className="text-xl text-slate-600">Don't forget these important items for your journey</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packingEssentials.map((category, index) => (
              <motion.div
                key={index}
                className="bg-slate-50 rounded-2xl p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-bold text-slate-800 mb-4">{category.category}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-orange-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Start Planning?</h2>
            <p className="text-xl text-orange-100 mb-8">
              Get personalized recommendations and expert guidance for your perfect trip
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/places-to-go">
                <motion.button
                  className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-slate-100 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Choose Destination
                </motion.button>
              </Link>
              <Link href="/things-to-do">
                <motion.button
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-orange-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Browse Activities
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
