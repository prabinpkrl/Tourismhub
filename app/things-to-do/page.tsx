"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Clock,
  Star,
  Users,
  Calendar,
  Mountain,
  Building,
  Zap,
  TreePine,
  Heart,
} from "lucide-react";
import {
  destinationsApi,
  categoriesApi,
  type Destination,
  type Category,
} from "@/lib/api";
import { useApi } from "@/hooks/useApi";

const categoryIcons = {
  trekking: Mountain,
  cultural: Building,
  adventure: Zap,
  wildlife: TreePine,
  spiritual: Heart,
};

export default function ThingsToDoPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  const { data: destinationsData, loading: destinationsLoading } = useApi(() =>
    destinationsApi.getAll()
  );
  const { data: categoriesData, loading: categoriesLoading } = useApi(() =>
    categoriesApi.getAll()
  );

  useEffect(() => {
    if (destinationsData?.data) {
      const destinationsArray: Destination[] = Array.isArray(
        destinationsData.data
      )
        ? destinationsData.data
        : [];
      setDestinations(destinationsArray);
    }
  }, [destinationsData]);

  useEffect(() => {
    if (categoriesData?.data) {
      const categoriesArray: Category[] = Array.isArray(categoriesData.data)
        ? categoriesData.data
        : [];
      setCategories(categoriesArray);
    }
  }, [categoriesData]);

  useEffect(() => {
    setLoading(destinationsLoading || categoriesLoading);
  }, [destinationsLoading, categoriesLoading]);

  const filteredDestinations =
    selectedCategory === "all"
      ? destinations
      : destinations.filter((dest) => dest.category === selectedCategory);

  const groupedDestinations = categories.reduce((acc, category) => {
    const categoryDestinations = destinations.filter(
      (dest) => dest.category === category.id
    );
    if (categoryDestinations.length > 0) {
      acc[category.id] = {
        category,
        destinations: categoryDestinations,
      };
    }
    return acc;
  }, {} as Record<string, { category: Category; destinations: Destination[] }>);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-sky-50 to-indigo-100">
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
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-sky-600 to-indigo-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Things to Do in Nepal
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-sky-100 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover incredible destinations and experiences across the
            beautiful landscapes of Nepal
          </motion.p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-6 py-3 rounded-full font-semibold transition-colors ${
                selectedCategory === "all"
                  ? "bg-sky-500 text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              All Activities
            </button>
            {categories.map((category) => {
              const IconComponent =
                categoryIcons[category.id as keyof typeof categoryIcons] ||
                Mountain;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-colors flex items-center space-x-2 ${
                    selectedCategory === category.id
                      ? "bg-sky-500 text-white"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  <span>{category.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Destinations by Category */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {selectedCategory === "all" ? (
            // Show all categories with their destinations
            <div className="space-y-16">
              {Object.values(groupedDestinations).map(
                ({ category, destinations }) => {
                  const IconComponent =
                    categoryIcons[category.id as keyof typeof categoryIcons] ||
                    Mountain;
                  return (
                    <motion.div
                      key={category.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className="flex items-center space-x-3 mb-8">
                        <div
                          className={`p-3 rounded-full bg-${category.color}-100`}
                        >
                          <IconComponent
                            className={`w-6 h-6 text-${category.color}-600`}
                          />
                        </div>
                        <div>
                          <h2 className="text-3xl font-bold text-slate-800">
                            {category.label}
                          </h2>
                          <p className="text-slate-600">
                            {category.description}
                          </p>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {destinations.map((destination, index) => (
                          <motion.div
                            key={destination._id}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                          >
                            <div className="relative h-64">
                              <img
                                src={`/ceholder-svg-height-256-width-400-text-.png?height=256&width=400&text=${encodeURIComponent(
                                  destination.image
                                )}`}
                                alt={destination.title}
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                                <span className="text-sm font-semibold text-slate-800">
                                  {destination.price}
                                </span>
                              </div>
                              {destination.featured && (
                                <div className="absolute top-4 left-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                  Featured
                                </div>
                              )}
                            </div>

                            <div className="p-6">
                              <div className="flex items-center justify-between mb-3">
                                <h3 className="text-xl font-bold text-slate-800">
                                  {destination.title}
                                </h3>
                                <div className="flex items-center space-x-1">
                                  <Star className="w-4 h-4 text-amber-400 fill-current" />
                                  <span className="text-sm font-semibold text-slate-700">
                                    {destination.rating}
                                  </span>
                                  <span className="text-sm text-slate-500">
                                    ({destination.reviews})
                                  </span>
                                </div>
                              </div>

                              <p className="text-slate-600 mb-4 line-clamp-3">
                                {destination.overview}
                              </p>

                              <div className="space-y-2 mb-4">
                                <div className="flex items-center space-x-2 text-sm text-slate-600">
                                  <MapPin className="w-4 h-4" />
                                  <span>{destination.region}</span>
                                </div>
                                <div className="flex items-center space-x-2 text-sm text-slate-600">
                                  <Clock className="w-4 h-4" />
                                  <span>{destination.duration}</span>
                                </div>
                                <div className="flex items-center space-x-2 text-sm text-slate-600">
                                  <Mountain className="w-4 h-4" />
                                  <span>{destination.difficulty}</span>
                                </div>
                                {destination.maxAltitude && (
                                  <div className="flex items-center space-x-2 text-sm text-slate-600">
                                    <Users className="w-4 h-4" />
                                    <span>
                                      Max altitude: {destination.maxAltitude}
                                    </span>
                                  </div>
                                )}
                              </div>

                              <div className="mb-4">
                                <h4 className="font-semibold text-slate-800 mb-2">
                                  Highlights:
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                  {destination.highlights
                                    .slice(0, 3)
                                    .map((highlight, idx) => (
                                      <span
                                        key={idx}
                                        className="px-2 py-1 bg-sky-100 text-sky-700 text-xs rounded-full"
                                      >
                                        {highlight}
                                      </span>
                                    ))}
                                  {destination.highlights.length > 3 && (
                                    <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-full">
                                      +{destination.highlights.length - 3} more
                                    </span>
                                  )}
                                </div>
                              </div>

                              <div className="flex items-center justify-between">
                                <div className="text-sm text-slate-500">
                                  <Calendar className="w-4 h-4 inline mr-1" />
                                  Best time: {destination.bestTime}
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  );
                }
              )}
            </div>
          ) : (
            // Show filtered destinations
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDestinations.map((destination, index) => (
                <motion.div
                  key={destination._id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="relative h-64">
                    <img
                      src={`/ceholder-svg-height-256-width-400-text-.png?height=256&width=400&text=${encodeURIComponent(
                        destination.image
                      )}`}
                      alt={destination.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-sm font-semibold text-slate-800">
                        {destination.price}
                      </span>
                    </div>
                    {destination.featured && (
                      <div className="absolute top-4 left-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Featured
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-slate-800">
                        {destination.title}
                      </h3>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-amber-400 fill-current" />
                        <span className="text-sm font-semibold text-slate-700">
                          {destination.rating}
                        </span>
                        <span className="text-sm text-slate-500">
                          ({destination.reviews})
                        </span>
                      </div>
                    </div>

                    <p className="text-slate-600 mb-4 line-clamp-3">
                      {destination.overview}
                    </p>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center space-x-2 text-sm text-slate-600">
                        <MapPin className="w-4 h-4" />
                        <span>{destination.region}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-slate-600">
                        <Clock className="w-4 h-4" />
                        <span>{destination.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-slate-600">
                        <Mountain className="w-4 h-4" />
                        <span>{destination.difficulty}</span>
                      </div>
                      {destination.maxAltitude && (
                        <div className="flex items-center space-x-2 text-sm text-slate-600">
                          <Users className="w-4 h-4" />
                          <span>Max altitude: {destination.maxAltitude}</span>
                        </div>
                      )}
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-slate-800 mb-2">
                        Highlights:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {destination.highlights
                          .slice(0, 3)
                          .map((highlight, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-sky-100 text-sky-700 text-xs rounded-full"
                            >
                              {highlight}
                            </span>
                          ))}
                        {destination.highlights.length > 3 && (
                          <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-full">
                            +{destination.highlights.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-sm text-slate-500">
                        <Calendar className="w-4 h-4 inline mr-1" />
                        Best time: {destination.bestTime}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {filteredDestinations.length === 0 && !loading && (
            <div className="text-center py-16">
              <Mountain className="w-16 h-16 text-slate-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-600 mb-2">
                No destinations found
              </h3>
              <p className="text-slate-500">
                Try selecting a different category or check back later.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
