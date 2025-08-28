"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Clock,
  Users,
  Star,
  MapIcon,
} from "lucide-react";

export default function FestivalsEventsPage() {
  const upcomingFestivals = [
    {
      id: 1,
      title: "Mountain Heritage Festival",
      date: "March 15-17, 2024",
      location: "Mountain Region",
      duration: "3 days",
      attendees: "5,000+",
      rating: 4.9,
      image: "colorful mountain heritage festival with traditional dancers",
      description:
        "Celebrate the rich cultural heritage of mountain communities with traditional music, dance, and local cuisine.",
      highlights: [
        "Traditional performances",
        "Local crafts",
        "Cultural workshops",
        "Mountain cuisine",
      ],
    },
    {
      id: 2,
      title: "Spring Flower Festival",
      date: "April 8-10, 2024",
      location: "Valley Region",
      duration: "3 days",
      attendees: "8,000+",
      rating: 4.8,
      image: "spring flower festival with blooming gardens",
      description:
        "Experience the beauty of spring with flower exhibitions, garden tours, and nature photography workshops.",
      highlights: [
        "Flower exhibitions",
        "Garden tours",
        "Photography contests",
        "Nature walks",
      ],
    },
    {
      id: 3,
      title: "Cultural Arts Festival",
      date: "May 20-22, 2024",
      location: "Cultural District",
      duration: "3 days",
      attendees: "12,000+",
      rating: 4.7,
      image: "cultural arts festival with traditional performances",
      description:
        "Immerse yourself in traditional arts, crafts, and performances showcasing local cultural heritage.",
      highlights: [
        "Art exhibitions",
        "Live performances",
        "Craft workshops",
        "Cultural talks",
      ],
    },
    {
      id: 4,
      title: "Adventure Sports Festival",
      date: "June 5-7, 2024",
      location: "Adventure Park",
      duration: "3 days",
      attendees: "6,000+",
      rating: 4.6,
      image: "adventure sports festival with outdoor activities",
      description:
        "Join thrilling adventure sports competitions and try various outdoor activities with expert guidance.",
      highlights: [
        "Sports competitions",
        "Adventure trials",
        "Equipment demos",
        "Safety workshops",
      ],
    },
  ];

  const monthlyCalendar = [
    { month: "March", events: 3, highlight: "Mountain Heritage Festival" },
    { month: "April", events: 2, highlight: "Spring Flower Festival" },
    { month: "May", events: 4, highlight: "Cultural Arts Festival" },
    { month: "June", events: 3, highlight: "Adventure Sports Festival" },
    { month: "July", events: 2, highlight: "Summer Music Festival" },
    { month: "August", events: 3, highlight: "Harvest Celebration" },
  ];

  const culturalEvents = [
    {
      title: "Traditional Dance Performance",
      frequency: "Every Saturday",
      location: "Cultural Center",
      image: "traditional dance performance with colorful costumes",
    },
    {
      title: "Local Craft Workshop",
      frequency: "Twice a week",
      location: "Artisan Village",
      image: "local craft workshop with artisans",
    },
    {
      title: "Storytelling Evening",
      frequency: "Every Friday",
      location: "Community Hall",
      image: "storytelling evening with local elders",
    },
  ];

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
                Festivals & Events
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
      <section className="bg-gradient-to-br from-purple-400 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Cultural Celebrations & Events
            </h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Experience vibrant festivals, traditional celebrations, and
              cultural events that showcase our rich heritage
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Upcoming Festivals */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-slate-800 mb-8 text-center">
            Upcoming Festivals
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {upcomingFestivals.map((festival, index) => (
              <motion.div
                key={festival.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="relative h-64">
                  <Image
                    src={`/abstract-geometric-shapes.png?height=300&width=500&query=${festival.image}`}
                    alt={festival.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">
                        {festival.rating}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h4 className="text-2xl font-bold text-slate-800 mb-3">
                    {festival.title}
                  </h4>
                  <p className="text-slate-600 mb-4">{festival.description}</p>

                  <div className="grid grid-cols-2 gap-4 text-sm text-slate-600 mb-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{festival.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>{festival.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{festival.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4" />
                      <span>{festival.attendees}</span>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    {festival.highlights.map((highlight, idx) => (
                      <div
                        key={idx}
                        className="flex items-center space-x-2 text-sm text-slate-600"
                      >
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <button className="w-full bg-purple-500 text-white py-3 rounded-lg font-semibold hover:bg-purple-600 transition-colors">
                    Get Tickets
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Monthly Calendar */}
        <motion.div
          className="mb-16 bg-white rounded-2xl shadow-lg p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">
            Festival Calendar
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {monthlyCalendar.map((month, index) => (
              <motion.div
                key={index}
                className="p-4 border border-slate-200 rounded-xl hover:border-purple-300 hover:bg-purple-50 transition-colors"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-bold text-slate-800">{month.month}</h4>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-sm">
                    {month.events} events
                  </span>
                </div>
                <p className="text-sm text-slate-600">
                  Featured: {month.highlight}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Regular Cultural Events */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-slate-800 mb-8 text-center">
            Regular Cultural Events
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {culturalEvents.map((event, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="relative h-48">
                  <Image
                    src={`/abstract-geometric-shapes.png?height=200&width=300&query=${event.image}`}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6">
                  <h4 className="text-xl font-bold text-slate-800 mb-2">
                    {event.title}
                  </h4>
                  <div className="flex items-center space-x-4 text-sm text-slate-600 mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{event.frequency}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <button className="w-full bg-slate-100 text-slate-700 py-3 rounded-lg font-semibold hover:bg-slate-200 transition-colors">
                    Learn More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Festival Etiquette */}
        <motion.div
          className="mt-16 bg-white rounded-2xl shadow-lg p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">
            Festival Etiquette & Tips
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Dress Respectfully",
                tip: "Wear modest, comfortable clothing appropriate for cultural events and weather conditions.",
              },
              {
                title: "Photography Ethics",
                tip: "Always ask permission before photographing people, especially during religious ceremonies.",
              },
              {
                title: "Participate Respectfully",
                tip: "Join activities when invited, but observe quietly during sacred or solemn moments.",
              },
              {
                title: "Support Local",
                tip: "Buy from local vendors and artisans to support the community and get authentic souvenirs.",
              },
            ].map((tip, index) => (
              <motion.div
                key={index}
                className="text-center p-4 bg-slate-50 rounded-xl"
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
    </div>
  );
}
