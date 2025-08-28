"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  ArrowLeft,
  Star,
  Clock,
  Users,
  Calendar,
  Car,
  Home,
  Mountain,
  MapIcon,
} from "lucide-react";

export default function BookingPage() {
  const [activeTab, setActiveTab] = useState("tours");

  const tours = [
    {
      id: 1,
      title: "Mountain Peak Adventure",
      duration: "3 Days",
      price: 299,
      rating: 4.8,
      reviews: 124,
      image: "mountain hiking adventure with scenic views",
      features: [
        "Professional Guide",
        "Equipment Included",
        "Meals Provided",
        "Transportation",
      ],
    },
    {
      id: 2,
      title: "Cultural Heritage Tour",
      duration: "2 Days",
      price: 199,
      rating: 4.9,
      reviews: 89,
      image: "ancient temples and cultural sites tour",
      features: [
        "Expert Guide",
        "Museum Entries",
        "Traditional Lunch",
        "Photo Opportunities",
      ],
    },
    {
      id: 3,
      title: "Wildlife Safari Experience",
      duration: "4 Days",
      price: 449,
      rating: 4.7,
      reviews: 156,
      image: "wildlife safari with elephants and nature",
      features: [
        "Safari Vehicle",
        "Wildlife Expert",
        "All Meals",
        "Accommodation",
      ],
    },
  ];

  const accommodations = [
    {
      id: 1,
      title: "Mountain View Resort",
      type: "Luxury Resort",
      price: 150,
      rating: 4.9,
      reviews: 234,
      image: "luxury mountain resort with scenic views",
      features: ["Mountain Views", "Spa Services", "Restaurant", "Free WiFi"],
    },
    {
      id: 2,
      title: "Cultural Heritage Hotel",
      type: "Boutique Hotel",
      price: 89,
      rating: 4.6,
      reviews: 167,
      image: "traditional boutique hotel with cultural design",
      features: [
        "Traditional Design",
        "Cultural Activities",
        "Local Cuisine",
        "City Center",
      ],
    },
    {
      id: 3,
      title: "Eco Lodge Retreat",
      type: "Eco Lodge",
      price: 120,
      rating: 4.8,
      reviews: 98,
      image: "eco-friendly lodge in natural setting",
      features: [
        "Eco-Friendly",
        "Nature Walks",
        "Organic Meals",
        "Peaceful Setting",
      ],
    },
  ];

  const transport = [
    {
      id: 1,
      title: "Private Car with Driver",
      type: "Private Transport",
      price: 80,
      rating: 4.7,
      reviews: 89,
      image: "comfortable private car for tourism",
      features: [
        "Professional Driver",
        "AC Vehicle",
        "Flexible Schedule",
        "Local Knowledge",
      ],
    },
    {
      id: 2,
      title: "Group Bus Tour",
      type: "Group Transport",
      price: 25,
      rating: 4.4,
      reviews: 156,
      image: "comfortable tour bus for group travel",
      features: [
        "Comfortable Seating",
        "Tour Guide",
        "Fixed Schedule",
        "Cost Effective",
      ],
    },
    {
      id: 3,
      title: "Helicopter Tour",
      type: "Premium Transport",
      price: 299,
      rating: 5.0,
      reviews: 45,
      image: "helicopter tour over scenic landscapes",
      features: [
        "Aerial Views",
        "Professional Pilot",
        "Photo Opportunities",
        "Luxury Experience",
      ],
    },
  ];

  const getTabData = () => {
    switch (activeTab) {
      case "tours":
        return tours;
      case "accommodation":
        return accommodations;
      case "transport":
        return transport;
      default:
        return tours;
    }
  };

  const getTabIcon = (tab: string) => {
    switch (tab) {
      case "tours":
        return <Mountain className="w-5 h-5" />;
      case "accommodation":
        return <Home className="w-5 h-5" />;
      case "transport":
        return <Car className="w-5 h-5" />;
      default:
        return <Mountain className="w-5 h-5" />;
    }
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
                Book Your Experience
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Booking Tabs */}
        <motion.div
          className="bg-white rounded-2xl shadow-lg p-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex space-x-1 bg-slate-100 rounded-xl p-1 mb-6">
            {[
              { id: "tours", label: "Tours & Activities" },
              { id: "accommodation", label: "Accommodation" },
              { id: "transport", label: "Transport" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-lg font-medium transition-colors ${
                  activeTab === tab.id
                    ? "bg-white text-sky-600 shadow-sm"
                    : "text-slate-600 hover:text-slate-800"
                }`}
              >
                {getTabIcon(tab.id)}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Booking Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getTabData().map((item, index) => (
              <motion.div
                key={item.id}
                className="border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="relative h-48">
                  <Image
                    src={`/abstract-geometric-shapes.png?height=200&width=300&query=${item.image}`}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">{item.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold text-slate-800 text-lg">
                      {item.title}
                    </h3>
                    <span className="text-2xl font-bold text-sky-600">
                      ${item.price}
                    </span>
                  </div>

                  {activeTab === "tours" && (
                    <div className="flex items-center space-x-4 text-sm text-slate-600 mb-4">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{(item as any).duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{item.reviews} reviews</span>
                      </div>
                    </div>
                  )}

                  {activeTab === "accommodation" && (
                    <div className="flex items-center space-x-4 text-sm text-slate-600 mb-4">
                      <span className="bg-slate-100 px-2 py-1 rounded">
                        {(item as any).type}
                      </span>
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{item.reviews} reviews</span>
                      </div>
                    </div>
                  )}

                  {activeTab === "transport" && (
                    <div className="flex items-center space-x-4 text-sm text-slate-600 mb-4">
                      <span className="bg-slate-100 px-2 py-1 rounded">
                        {(item as any).type}
                      </span>
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{item.reviews} reviews</span>
                      </div>
                    </div>
                  )}

                  <div className="space-y-2 mb-4">
                    {item.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center space-x-2 text-sm text-slate-600"
                      >
                        <div className="w-1.5 h-1.5 bg-sky-500 rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className="w-full bg-sky-500 text-white py-3 rounded-lg font-semibold hover:bg-sky-600 transition-colors">
                    Book Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Booking Process Steps */}
        <motion.div
          className="bg-white rounded-2xl shadow-lg p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-slate-800 mb-6">
            How to Book
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Choose Service",
                description: "Select tours, accommodation, or transport",
                icon: <Mountain className="w-6 h-6" />,
              },
              {
                step: "2",
                title: "Pick Dates",
                description: "Choose your preferred travel dates",
                icon: <Calendar className="w-6 h-6" />,
              },
              {
                step: "3",
                title: "Confirm Details",
                description: "Review booking details and preferences",
                icon: <Users className="w-6 h-6" />,
              },
              {
                step: "4",
                title: "Secure Payment",
                description: "Complete booking with secure payment",
                icon: <Star className="w-6 h-6" />,
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-sky-600">{step.icon}</div>
                </div>
                <div className="w-8 h-8 bg-sky-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-bold">
                  {step.step}
                </div>
                <h4 className="font-semibold text-slate-800 mb-2">
                  {step.title}
                </h4>
                <p className="text-sm text-slate-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
