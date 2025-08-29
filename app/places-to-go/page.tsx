"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  ArrowLeft,
  Star,
  MapPin,
  Clock,
  MapIcon,
  ChevronDown,
  ChevronUp,
  Mountain,
  Calendar,
  AlertTriangle,
  Shield,
  FileText,
  Heart,
  Share2,
} from "lucide-react";
import { useApi } from "@/hooks/useApi";
import { destinationsApi, categoriesApi } from "@/lib/api";

export default function PlacesToGoPage() {
  const [expandedDestination, setExpandedDestination] = useState<string | null>(
    null
  );
  const [activeFilter, setActiveFilter] = useState("all");

  // Fetch categories
  const { data: categoriesData, loading: categoriesLoading } = useApi(
    () => categoriesApi.getAll(),
    []
  );

  // Fetch destinations based on active filter
  const { data: destinationsData, loading: destinationsLoading } = useApi(
    () =>
      destinationsApi.getAll({
        category: activeFilter === "all" ? undefined : activeFilter,
        limit: 20,
      }),
    [activeFilter]
  );

  const categories = categoriesData?.data || [];
  const destinations = destinationsData?.data || [];

  const toggleExpanded = (id: string) => {
    setExpandedDestination(expandedDestination === id ? null : id);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case "easy":
        return "bg-green-100 text-green-800";
      case "moderate":
        return "bg-yellow-100 text-yellow-800";
      case "challenging":
        return "bg-orange-100 text-orange-800";
      case "very challenging":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
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
              detailed information about Nepal's most breathtaking destinations
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filter Categories */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-wrap gap-3 justify-center">
            {categoriesLoading
              ? // Loading skeleton for categories
                Array.from({ length: 5 }).map((_, index) => (
                  <div
                    key={index}
                    className="h-12 w-32 bg-slate-200 animate-pulse rounded-full"
                  ></div>
                ))
              : categories.map((category) => (
                  <button
                    key={category._id}
                    onClick={() => setActiveFilter(category.id)}
                    className={`px-6 py-3 rounded-full font-medium transition-all ${
                      activeFilter === category.id
                        ? "bg-sky-500 text-white shadow-lg"
                        : "bg-white text-slate-600 hover:bg-sky-50 hover:text-sky-600 shadow-sm"
                    }`}
                  >
                    {category.label} ({category.count || 0})
                  </button>
                ))}
          </div>
        </motion.div>

        {/* Destinations Grid */}
        <div className="space-y-8">
          {destinationsLoading ? (
            // Loading skeleton for destinations
            Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="h-64 lg:h-auto bg-slate-200 animate-pulse"></div>
                  <div className="p-8">
                    <div className="h-8 bg-slate-200 animate-pulse rounded mb-4"></div>
                    <div className="h-4 bg-slate-200 animate-pulse rounded mb-2"></div>
                    <div className="h-4 bg-slate-200 animate-pulse rounded mb-6"></div>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {Array.from({ length: 4 }).map((_, i) => (
                        <div
                          key={i}
                          className="h-4 bg-slate-200 animate-pulse rounded"
                        ></div>
                      ))}
                    </div>
                    <div className="h-12 bg-slate-200 animate-pulse rounded"></div>
                  </div>
                </div>
              </div>
            ))
          ) : destinations.length === 0 ? (
            <div className="text-center py-16">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                No destinations found
              </h3>
              <p className="text-slate-600">
                Try selecting a different category or check back later.
              </p>
            </div>
          ) : (
            destinations.map((destination, index) => (
              <motion.div
                key={destination._id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Overview Section */}
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-auto">
                    <Image
                      src={`/abstract-geometric-shapes.png?height=400&width=600&query=${destination.image}`}
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
                    <div className="absolute bottom-4 left-4 flex space-x-2">
                      <button className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors">
                        <Heart className="w-4 h-4 text-slate-600" />
                      </button>
                      <button className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors">
                        <Share2 className="w-4 h-4 text-slate-600" />
                      </button>
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-slate-800 mb-2">
                          {destination.title}
                        </h3>
                        <div className="flex items-center space-x-2 text-slate-600 mb-3">
                          <MapPin className="w-4 h-4" />
                          <span>{destination.region}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-sky-600">
                          {destination.price}
                        </div>
                        <div className="text-sm text-slate-500">
                          {destination.reviews} reviews
                        </div>
                      </div>
                    </div>

                    <p className="text-slate-600 mb-6">
                      {destination.overview}
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center space-x-2 text-sm">
                        <Clock className="w-4 h-4 text-slate-500" />
                        <span className="text-slate-600">
                          {destination.duration}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <Mountain className="w-4 h-4 text-slate-500" />
                        <span className="text-slate-600">
                          {destination.maxAltitude}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <Calendar className="w-4 h-4 text-slate-500" />
                        <span className="text-slate-600">
                          {destination.bestTime}
                        </span>
                      </div>
                      <div>
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(
                            destination.difficulty
                          )}`}
                        >
                          {destination.difficulty}
                        </span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-slate-800 mb-3">
                        Key Highlights:
                      </h4>
                      <div className="grid grid-cols-1 gap-2">
                        {destination.highlights
                          .slice(0, 3)
                          .map((highlight, idx) => (
                            <div
                              key={idx}
                              className="flex items-center space-x-2 text-sm text-slate-600"
                            >
                              <div className="w-1.5 h-1.5 bg-sky-500 rounded-full"></div>
                              <span>{highlight}</span>
                            </div>
                          ))}
                        {destination.highlights.length > 3 && (
                          <div className="text-sm text-slate-500">
                            +{destination.highlights.length - 3} more highlights
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex space-x-3">
                      <button
                        onClick={() => toggleExpanded(destination._id)}
                        className="flex-1 bg-sky-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-sky-600 transition-colors flex items-center justify-center space-x-2"
                      >
                        <span>View Details</span>
                        {expandedDestination === destination._id ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </button>
                      <button className="bg-slate-100 text-slate-700 py-3 px-6 rounded-lg font-semibold hover:bg-slate-200 transition-colors">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>

                {/* Detailed Information Section */}
                <AnimatePresence>
                  {expandedDestination === destination._id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-slate-200 bg-slate-50"
                    >
                      <div className="p-6">
                        <div className="bg-white rounded-xl p-6 shadow-sm">
                          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* Quick Overview */}
                            <div>
                              <h4 className="text-lg font-bold text-slate-800 mb-3 flex items-center">
                                <FileText className="w-4 h-4 mr-2 text-sky-600" />
                                Overview
                              </h4>
                              <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                                {destination.detailedInfo.description.substring(
                                  0,
                                  200
                                )}
                                ...
                              </p>
                              <div className="space-y-2">
                                <div className="flex items-center text-sm">
                                  <Clock className="w-4 h-4 text-slate-500 mr-2" />
                                  <span className="text-slate-600">
                                    Duration: {destination.duration}
                                  </span>
                                </div>
                                <div className="flex items-center text-sm">
                                  <Mountain className="w-4 h-4 text-slate-500 mr-2" />
                                  <span className="text-slate-600">
                                    Max Altitude: {destination.maxAltitude}
                                  </span>
                                </div>
                                <div className="flex items-center text-sm">
                                  <Calendar className="w-4 h-4 text-slate-500 mr-2" />
                                  <span className="text-slate-600">
                                    Best Time: {destination.bestTime}
                                  </span>
                                </div>
                              </div>
                            </div>

                            {/* Key Information */}
                            <div>
                              <h4 className="text-lg font-bold text-slate-800 mb-3 flex items-center">
                                <Shield className="w-4 h-4 mr-2 text-sky-600" />
                                Key Information
                              </h4>
                              <div className="space-y-3">
                                <div>
                                  <span className="text-xs font-semibold text-slate-700 uppercase tracking-wide">
                                    Difficulty
                                  </span>
                                  <div className="mt-1">
                                    <span
                                      className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(
                                        destination.difficulty
                                      )}`}
                                    >
                                      {destination.difficulty}
                                    </span>
                                  </div>
                                </div>
                                <div>
                                  <span className="text-xs font-semibold text-slate-700 uppercase tracking-wide">
                                    Permits Required
                                  </span>
                                  <div className="mt-1 space-y-1">
                                    {destination.detailedInfo.permits
                                      .slice(0, 2)
                                      .map((permit, idx) => (
                                        <div
                                          key={idx}
                                          className="text-xs text-slate-600"
                                        >
                                          • {permit}
                                        </div>
                                      ))}
                                  </div>
                                </div>
                                <div>
                                  <span className="text-xs font-semibold text-slate-700 uppercase tracking-wide">
                                    Cost Range
                                  </span>
                                  <div className="mt-1 text-sm font-semibold text-sky-600">
                                    {destination.detailedInfo.cost}
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Highlights & Safety */}
                            <div>
                              <h4 className="text-lg font-bold text-slate-800 mb-3 flex items-center">
                                <AlertTriangle className="w-4 h-4 mr-2 text-sky-600" />
                                Highlights & Safety
                              </h4>
                              <div className="space-y-3">
                                <div>
                                  <span className="text-xs font-semibold text-slate-700 uppercase tracking-wide">
                                    Top Highlights
                                  </span>
                                  <div className="mt-1 space-y-1">
                                    {destination.highlights
                                      .slice(0, 3)
                                      .map((highlight, idx) => (
                                        <div
                                          key={idx}
                                          className="flex items-center text-xs text-slate-600"
                                        >
                                          <div className="w-1 h-1 bg-sky-500 rounded-full mr-2"></div>
                                          {highlight}
                                        </div>
                                      ))}
                                  </div>
                                </div>
                                <div>
                                  <span className="text-xs font-semibold text-slate-700 uppercase tracking-wide">
                                    Key Safety Tips
                                  </span>
                                  <div className="mt-1 space-y-1">
                                    {destination.detailedInfo.safetyTips
                                      .slice(0, 2)
                                      .map((tip, idx) => (
                                        <div
                                          key={idx}
                                          className="flex items-start text-xs text-slate-600"
                                        >
                                          <AlertTriangle className="w-3 h-3 text-orange-500 mr-1 mt-0.5 flex-shrink-0" />
                                          {tip.substring(0, 60)}...
                                        </div>
                                      ))}
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Essential Info Bar */}
                            <div className="mt-6 pt-4 border-t border-slate-200">
                              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                                <div className="bg-slate-50 p-3 rounded-lg">
                                  <div className="text-xs text-slate-500 uppercase tracking-wide">
                                    Accommodation
                                  </div>
                                  <div className="text-sm font-medium text-slate-800 mt-1">
                                    {destination.detailedInfo.accommodation
                                      .split(" ")
                                      .slice(0, 3)
                                      .join(" ")}
                                  </div>
                                </div>
                                <div className="bg-slate-50 p-3 rounded-lg">
                                  <div className="text-xs text-slate-500 uppercase tracking-wide">
                                    Transportation
                                  </div>
                                  <div className="text-sm font-medium text-slate-800 mt-1">
                                    {destination.detailedInfo.transportation
                                      .split(" ")
                                      .slice(0, 3)
                                      .join(" ")}
                                  </div>
                                </div>
                                <div className="bg-slate-50 p-3 rounded-lg">
                                  <div className="text-xs text-slate-500 uppercase tracking-wide">
                                    Group Size
                                  </div>
                                  <div className="text-sm font-medium text-slate-800 mt-1">
                                    2-12 people
                                  </div>
                                </div>
                                <div className="bg-slate-50 p-3 rounded-lg">
                                  <div className="text-xs text-slate-500 uppercase tracking-wide">
                                    Rating
                                  </div>
                                  <div className="text-sm font-medium text-slate-800 mt-1 flex items-center justify-center">
                                    <Star className="w-3 h-3 text-yellow-400 fill-current mr-1" />
                                    {destination.rating}
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="mt-6 flex flex-col sm:flex-row gap-3">
                              <button className="flex-1 bg-sky-500 text-white py-2.5 px-4 rounded-lg font-semibold hover:bg-sky-600 transition-colors text-sm">
                                Book This Trip
                              </button>
                              <button className="flex-1 bg-green-500 text-white py-2.5 px-4 rounded-lg font-semibold hover:bg-green-600 transition-colors text-sm">
                                Get Quote
                              </button>
                              <button className="bg-slate-100 text-slate-700 py-2.5 px-4 rounded-lg font-semibold hover:bg-slate-200 transition-colors text-sm">
                                Full Details
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))
          )}
        </div>

        {/* Call to Action */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-sky-500 to-sky-600 text-white rounded-2xl p-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-4">
            Need Help Planning Your Adventure?
          </h3>
          <p className="text-sky-100 mb-6 max-w-2xl mx-auto">
            Our expert travel consultants can help you customize any of these
            destinations to match your preferences, fitness level, and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/chat-assistant">
              <button className="bg-white text-sky-600 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors">
                Chat with AI Assistant
              </button>
            </Link>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-sky-600 transition-colors">
              Speak with Expert
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
