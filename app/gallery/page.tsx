"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  ArrowLeft,
  Heart,
  Share2,
  Download,
  Filter,
  MapIcon,
} from "lucide-react";

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const categories = [
    { id: "all", label: "All Photos" },
    { id: "mountains", label: "Mountains" },
    { id: "culture", label: "Culture" },
    { id: "wildlife", label: "Wildlife" },
    { id: "festivals", label: "Festivals" },
    { id: "adventure", label: "Adventure" },
  ];

  const photos = [
    {
      id: 1,
      title: "Sunrise Over Mountain Peaks",
      category: "mountains",
      likes: 234,
      photographer: "John Smith",
      image: "majestic sunrise over snow-capped mountain peaks",
    },
    {
      id: 2,
      title: "Ancient Temple Architecture",
      category: "culture",
      likes: 189,
      photographer: "Maria Garcia",
      image: "ancient temple with intricate architectural details",
    },
    {
      id: 3,
      title: "Wildlife in Natural Habitat",
      category: "wildlife",
      likes: 156,
      photographer: "David Chen",
      image: "elephants in their natural habitat",
    },
    {
      id: 4,
      title: "Traditional Festival Celebration",
      category: "festivals",
      likes: 298,
      photographer: "Sarah Johnson",
      image: "colorful traditional festival with dancers",
    },
    {
      id: 5,
      title: "Paragliding Adventure",
      category: "adventure",
      likes: 167,
      photographer: "Mike Wilson",
      image: "paragliding over scenic mountain landscape",
    },
    {
      id: 6,
      title: "Mountain Lake Reflection",
      category: "mountains",
      likes: 203,
      photographer: "Emma Brown",
      image: "pristine mountain lake with perfect reflections",
    },
    {
      id: 7,
      title: "Cultural Heritage Site",
      category: "culture",
      likes: 145,
      photographer: "Alex Turner",
      image: "historic cultural heritage site with tourists",
    },
    {
      id: 8,
      title: "Rare Bird Species",
      category: "wildlife",
      likes: 178,
      photographer: "Lisa Park",
      image: "colorful rare bird in natural environment",
    },
    {
      id: 9,
      title: "Night Festival Lights",
      category: "festivals",
      likes: 267,
      photographer: "Tom Anderson",
      image: "festival lights and decorations at night",
    },
  ];

  const filteredPhotos =
    activeFilter === "all"
      ? photos
      : photos.filter((photo) => photo.category === activeFilter);

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
                Photo Gallery
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
        {/* Filter Tabs */}
        <motion.div
          className="bg-white rounded-2xl shadow-lg p-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center space-x-4 mb-6">
            <Filter className="w-5 h-5 text-slate-600" />
            <h2 className="text-xl font-bold text-slate-800">
              Filter by Category
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeFilter === category.id
                    ? "bg-sky-500 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Photo Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo, index) => (
            <motion.div
              key={photo.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              onClick={() => setSelectedImage(photo.id)}
            >
              <div className="relative h-64">
                <Image
                  src={`/abstract-geometric-shapes.png?height=300&width=400&query=${photo.image}`}
                  alt={photo.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full p-2">
                  <Heart className="w-4 h-4 text-white" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-bold text-slate-800 text-lg mb-2">
                  {photo.title}
                </h3>
                <p className="text-sm text-slate-600 mb-3">
                  by {photo.photographer}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Heart className="w-4 h-4 text-red-500" />
                      <span className="text-sm text-slate-600">
                        {photo.likes}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                      <Share2 className="w-4 h-4 text-slate-600" />
                    </button>
                    <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                      <Download className="w-4 h-4 text-slate-600" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Photography Tips */}
        <motion.div
          className="bg-white rounded-2xl shadow-lg p-6 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-slate-800 mb-6">
            Photography Tips
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Golden Hour Magic",
                tip: "Capture stunning landscapes during sunrise and sunset for warm, soft lighting that enhances natural beauty.",
              },
              {
                title: "Cultural Respect",
                tip: "Always ask permission before photographing people, especially during cultural ceremonies and festivals.",
              },
              {
                title: "Wildlife Photography",
                tip: "Maintain safe distances from wildlife and use telephoto lenses to capture detailed shots without disturbing animals.",
              },
              {
                title: "Composition Rules",
                tip: "Use the rule of thirds and leading lines to create more dynamic and visually appealing photographs.",
              },
              {
                title: "Weather Conditions",
                tip: "Don't let bad weather stop you - dramatic skies and atmospheric conditions can create unique photo opportunities.",
              },
              {
                title: "Local Perspectives",
                tip: "Explore beyond tourist spots and discover hidden gems that showcase authentic local life and culture.",
              },
            ].map((tip, index) => (
              <motion.div
                key={index}
                className="p-4 bg-slate-50 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <h4 className="font-semibold text-slate-800 mb-2">
                  {tip.title}
                </h4>
                <p className="text-sm text-slate-600">{tip.tip}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            className="bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-hidden"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            {(() => {
              const photo = photos.find((p) => p.id === selectedImage);
              return photo ? (
                <>
                  <div className="relative h-96">
                    <Image
                      src={`/abstract-geometric-shapes.png?height=400&width=600&query=${photo.image}`}
                      alt={photo.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">
                      {photo.title}
                    </h3>
                    <p className="text-slate-600 mb-4">
                      Photographed by {photo.photographer}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        <Heart className="w-5 h-5 text-red-500" />
                        <span className="text-slate-600">
                          {photo.likes} likes
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button className="flex items-center space-x-2 px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors">
                          <Heart className="w-4 h-4" />
                          <span>Like</span>
                        </button>
                        <button className="flex items-center space-x-2 px-4 py-2 bg-slate-100 text-slate-600 rounded-lg hover:bg-slate-200 transition-colors">
                          <Download className="w-4 h-4" />
                          <span>Download</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              ) : null;
            })()}
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
