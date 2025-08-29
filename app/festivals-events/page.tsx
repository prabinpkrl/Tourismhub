"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  MapPin,
  Users,
  Star,
  Clock,
  Ticket,
  Heart,
} from "lucide-react";
import { festivalsApi, type Festival } from "@/lib/api";
import { useApi } from "@/hooks/useApi";

export default function FestivalsEventsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [festivals, setFestivals] = useState<Festival[]>([]);

  const { data: festivalsData, loading } = useApi(() => festivalsApi.getAll());

  useEffect(() => {
    if (festivalsData?.data) {
      const festivalsArray: Festival[] = Array.isArray(festivalsData.data)
        ? festivalsData.data
        : [];
      setFestivals(festivalsArray);
    }
  }, [festivalsData]);

  const categories = [
    { id: "all", label: "All Festivals", color: "slate" },
    { id: "Religious", label: "Religious", color: "purple" },
    { id: "Cultural", label: "Cultural", color: "amber" },
    { id: "Traditional", label: "Traditional", color: "green" },
    { id: "Seasonal", label: "Seasonal", color: "blue" },
  ];

  const filteredFestivals =
    selectedCategory === "all"
      ? festivals
      : festivals.filter((festival) => festival.category === selectedCategory);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
        <div className="container mx-auto px-4 py-8">
          <div className="animate-pulse">
            <div className="h-8 bg-slate-200 rounded w-64 mb-4"></div>
            <div className="h-4 bg-slate-200 rounded w-96 mb-8"></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-white rounded-xl p-6">
                  <div className="h-48 bg-slate-200 rounded-lg mb-4"></div>
                  <div className="h-6 bg-slate-200 rounded mb-2"></div>
                  <div className="h-4 bg-slate-200 rounded w-3/4"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Festivals & Events
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Experience the vibrant culture and traditions of Nepal through its
            colorful festivals and celebrations
          </motion.p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-colors ${
                  selectedCategory === category.id
                    ? "bg-purple-500 text-white"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Festivals Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFestivals.map((festival, index) => (
              <motion.div
                key={festival._id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="relative h-64">
                  <img
                    src={`/ceholder-svg-height-256-width-400-text-.png?height=256&width=400&text=${encodeURIComponent(
                      festival.image
                    )}`}
                    alt={festival.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm font-semibold text-slate-800">
                      {festival.ticketPrice}
                    </span>
                  </div>
                  {festival.featured && (
                    <div className="absolute top-4 left-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </div>
                  )}
                  <div className="absolute bottom-4 left-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {festival.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-slate-800">
                      {festival.title}
                    </h3>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-amber-400 fill-current" />
                      <span className="text-sm font-semibold text-slate-700">
                        {festival.rating}
                      </span>
                    </div>
                  </div>

                  <p className="text-slate-600 mb-4 line-clamp-3">
                    {festival.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2 text-sm text-slate-600">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(festival.date)}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-slate-600">
                      <MapPin className="w-4 h-4" />
                      <span>{festival.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-slate-600">
                      <Clock className="w-4 h-4" />
                      <span>{festival.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-slate-600">
                      <Users className="w-4 h-4" />
                      <span>{festival.attendees} expected</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-slate-800 mb-2">
                      Highlights:
                    </h4>
                    <div className="space-y-1">
                      {festival.highlights.slice(0, 3).map((highlight, idx) => (
                        <div
                          key={idx}
                          className="flex items-center text-sm text-slate-600"
                        >
                          <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></div>
                          {highlight}
                        </div>
                      ))}
                      {festival.highlights.length > 3 && (
                        <div className="text-sm text-slate-500 italic">
                          +{festival.highlights.length - 3} more highlights
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div className="flex items-center space-x-2">
                      <Heart className="w-4 h-4 text-red-500" />
                      <span className="text-sm text-slate-600">
                        Cultural Experience
                      </span>
                    </div>
                    <button className="bg-purple-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-purple-600 transition-colors flex items-center space-x-2">
                      <Ticket className="w-4 h-4" />
                      <span>Learn More</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredFestivals.length === 0 && !loading && (
            <div className="text-center py-16">
              <Calendar className="w-16 h-16 text-slate-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-600 mb-2">
                No festivals found
              </h3>
              <p className="text-slate-500">
                Try selecting a different category or check back later.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Upcoming Major Festivals
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Don't miss these spectacular celebrations that showcase Nepal's
              rich cultural heritage
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {festivals
              .filter((f) => f.featured)
              .slice(0, 4)
              .map((festival, index) => (
                <motion.div
                  key={festival._id}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-6 text-white"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold">{festival.title}</h3>
                    <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-sm font-semibold">
                        {formatDate(festival.date)}
                      </span>
                    </div>
                  </div>
                  <p className="text-purple-100 mb-4">{festival.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm">
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{festival.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{festival.duration}</span>
                      </div>
                    </div>
                    <button className="bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
                      Details
                    </button>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
