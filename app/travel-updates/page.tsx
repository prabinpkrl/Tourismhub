"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  AlertTriangle,
  Info,
  CheckCircle,
  Calendar,
  MapPin,
  MapIcon,
} from "lucide-react";

export default function TravelUpdatesPage() {
  const updates = [
    {
      id: 1,
      type: "advisory",
      title: "Weather Advisory: Mountain Regions",
      date: "January 28, 2024",
      location: "Mountain Region",
      priority: "high",
      content:
        "Heavy snowfall expected in mountain regions from January 30-February 2. Trekking activities may be affected. Travelers are advised to check weather conditions and carry appropriate gear.",
      icon: <AlertTriangle className="w-5 h-5" />,
    },
    {
      id: 2,
      type: "info",
      title: "New Cultural Site Opening",
      date: "January 25, 2024",
      location: "Cultural District",
      priority: "medium",
      content:
        "The newly restored Heritage Museum will open to public on February 1st. Special guided tours available for the first week. Advance booking recommended.",
      icon: <Info className="w-5 h-5" />,
    },
    {
      id: 3,
      type: "success",
      title: "Road Repairs Completed",
      date: "January 22, 2024",
      location: "Valley Region",
      priority: "low",
      content:
        "Major road repairs on the Valley Highway have been completed. Normal traffic flow has resumed. Travel time to popular destinations reduced by 30 minutes.",
      icon: <CheckCircle className="w-5 h-5" />,
    },
    {
      id: 4,
      type: "advisory",
      title: "Festival Season Traffic",
      date: "January 20, 2024",
      location: "All Regions",
      priority: "medium",
      content:
        "Increased traffic expected during upcoming festival season (March 15-April 15). Book transportation early and allow extra travel time.",
      icon: <AlertTriangle className="w-5 h-5" />,
    },
  ];

  const safetyGuidelines = [
    {
      title: "Mountain Safety",
      guidelines: [
        "Always inform someone about your trekking plans",
        "Carry emergency communication devices",
        "Check weather conditions before departure",
        "Travel with experienced guides in remote areas",
      ],
    },
    {
      title: "Cultural Respect",
      guidelines: [
        "Dress modestly when visiting religious sites",
        "Ask permission before photographing people",
        "Remove shoes when entering temples",
        "Respect local customs and traditions",
      ],
    },
    {
      title: "Health Precautions",
      guidelines: [
        "Drink bottled or purified water",
        "Carry basic first aid supplies",
        "Be aware of altitude sickness symptoms",
        "Have travel insurance with medical coverage",
      ],
    },
  ];

  const emergencyContacts = [
    { service: "Tourist Police", number: "+1-555-TOURIST", available: "24/7" },
    {
      service: "Medical Emergency",
      number: "+1-555-MEDICAL",
      available: "24/7",
    },
    {
      service: "Tourist Information",
      number: "+1-555-INFO",
      available: "8 AM - 8 PM",
    },
    {
      service: "Embassy Services",
      number: "+1-555-EMBASSY",
      available: "9 AM - 5 PM",
    },
  ];

  const getUpdateStyle = (type: string, priority: string) => {
    const baseStyle = "p-4 rounded-lg border-l-4";

    if (type === "advisory" && priority === "high") {
      return `${baseStyle} bg-red-50 border-red-500 text-red-800`;
    } else if (type === "advisory") {
      return `${baseStyle} bg-yellow-50 border-yellow-500 text-yellow-800`;
    } else if (type === "success") {
      return `${baseStyle} bg-green-50 border-green-500 text-green-800`;
    } else {
      return `${baseStyle} bg-blue-50 border-blue-500 text-blue-800`;
    }
  };

  const getIconColor = (type: string, priority: string) => {
    if (type === "advisory" && priority === "high") return "text-red-600";
    if (type === "advisory") return "text-yellow-600";
    if (type === "success") return "text-green-600";
    return "text-blue-600";
  };

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
                Travel Updates
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
      <section className="bg-gradient-to-br from-red-400 to-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Stay Informed & Travel Safe
            </h2>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              Get the latest travel advisories, safety updates, and important
              information for your journey
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Latest Updates */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-slate-800 mb-8 text-center">
            Latest Updates
          </h3>
          <div className="space-y-6">
            {updates.map((update, index) => (
              <motion.div
                key={update.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="p-6">
                  <div className={getUpdateStyle(update.type, update.priority)}>
                    <div className="flex items-start space-x-3">
                      <div
                        className={`flex-shrink-0 ${getIconColor(
                          update.type,
                          update.priority
                        )}`}
                      >
                        {update.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-lg font-bold">{update.title}</h4>
                          <span className="text-xs uppercase font-medium px-2 py-1 rounded-full bg-white/50">
                            {update.priority} priority
                          </span>
                        </div>
                        <div className="flex items-center space-x-4 text-sm mb-3">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{update.date}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span>{update.location}</span>
                          </div>
                        </div>
                        <p className="text-sm leading-relaxed">
                          {update.content}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Safety Guidelines */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold text-slate-800 mb-8 text-center">
            Safety Guidelines
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {safetyGuidelines.map((category, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h4 className="text-xl font-bold text-slate-800 mb-4">
                  {category.title}
                </h4>
                <div className="space-y-3">
                  {category.guidelines.map((guideline, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600 text-sm">
                        {guideline}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Emergency Contacts */}
        <motion.div
          className="bg-white rounded-2xl shadow-lg p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">
            Emergency Contacts
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {emergencyContacts.map((contact, index) => (
              <motion.div
                key={index}
                className="p-4 bg-slate-50 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-slate-800">
                      {contact.service}
                    </h4>
                    <p className="text-lg font-bold text-red-600">
                      {contact.number}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-slate-600">Available</p>
                    <p className="text-sm font-medium text-slate-800">
                      {contact.available}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-xl">
            <p className="text-sm text-red-800">
              <strong>Important:</strong> In case of immediate emergency,
              contact local emergency services (911) first, then notify the
              relevant tourist services listed above.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
