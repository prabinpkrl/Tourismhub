"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Star,
  Clock,
  Users,
  Mountain,
  Calendar,
  ArrowRight,
} from "lucide-react";
import {
  destinationsApi,
  categoriesApi,
  type Destination,
  type Category,
} from "@/lib/api";
import { useApi } from "@/hooks/useApi";
import TrekBookingModal from "@/components/TrekBookingModal";

export default function PlacesToGoPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedDestination, setSelectedDestination] =
    useState<Destination | null>(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

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

  const loading = destinationsLoading || categoriesLoading;

  const filteredDestinations =
    selectedCategory === "all"
      ? destinations
      : destinations.filter((dest) => dest.category === selectedCategory);

  const handleBookNow = (destination: Destination) => {
    setSelectedDestination(destination);
    setIsBookingModalOpen(true);
  };

  const handleCloseBookingModal = () => {
    setIsBookingModalOpen(false);
    setSelectedDestination(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100">
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
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Places to Go
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover breathtaking destinations and embark on unforgettable
            adventures across Nepal's diverse landscapes
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
                  ? "bg-emerald-500 text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              All Destinations
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-colors ${
                  selectedCategory === category.id
                    ? "bg-emerald-500 text-white"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Featured Destinations
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Explore our handpicked selection of Nepal's most spectacular
              destinations
            </p>
          </div>

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
                  <div className="absolute bottom-4 left-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-semibold capitalize">
                    {destination.category}
                  </div>
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
                    <div className="space-y-1">
                      {destination.highlights
                        .slice(0, 3)
                        .map((highlight, idx) => (
                          <div
                            key={idx}
                            className="flex items-center text-sm text-slate-600"
                          >
                            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></div>
                            {highlight}
                          </div>
                        ))}
                      {destination.highlights.length > 3 && (
                        <div className="text-sm text-slate-500 italic">
                          +{destination.highlights.length - 3} more highlights
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div className="text-sm text-slate-500">
                      <Calendar className="w-4 h-4 inline mr-1" />
                      Best time: {destination.bestTime}
                    </div>
                    {destination.category === "trekking" ? (
                      <button
                        onClick={() => handleBookNow(destination)}
                        className="bg-emerald-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-emerald-600 transition-colors flex items-center space-x-2"
                      >
                        <span>Book Now</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    ) : (
                      <button className="bg-slate-100 text-slate-700 px-4 py-2 rounded-lg font-semibold hover:bg-slate-200 transition-colors flex items-center space-x-2">
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

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

      {/* Trek Booking Modal */}
      {selectedDestination && (
        <TrekBookingModal
          isOpen={isBookingModalOpen}
          onClose={handleCloseBookingModal}
          destination={selectedDestination}
        />
      )}
    </div>
  );
}
