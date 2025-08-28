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

export default function PlacesToGoPage() {
  const [expandedDestination, setExpandedDestination] = useState<number | null>(
    null
  );
  const [activeFilter, setActiveFilter] = useState("all");

  const destinations = [
    {
      id: 1,
      title: "Annapurna Circuit Trek",
      category: "mountain",
      region: "Annapurna Region",
      overview:
        "One of the world's most spectacular trekking routes, offering diverse landscapes from subtropical forests to high alpine terrain.",
      image: "annapurna circuit trek with mountain views and trekkers",
      rating: 4.9,
      reviews: 1247,
      price: "From $899",
      duration: "15-21 days",
      difficulty: "Challenging",
      bestTime: "March-May, September-November",
      maxAltitude: "5,416m (Thorong La Pass)",
      highlights: [
        "Thorong La Pass (5,416m)",
        "Diverse cultural experiences",
        "Stunning mountain panoramas",
        "Traditional Gurung villages",
        "Natural hot springs at Tatopani",
      ],
      detailedInfo: {
        description:
          "The Annapurna Circuit is a classic trek that takes you through diverse landscapes, from lush rhododendron forests to high-altitude desert terrain. This trek offers an incredible variety of scenery, culture, and challenges, making it one of the most rewarding adventures in the Himalayas.",
        itinerary: [
          {
            day: "Day 1-2",
            activity: "Kathmandu to Besisahar, drive to Chame",
            elevation: "2,710m",
          },
          {
            day: "Day 3-5",
            activity: "Chame to Manang via Pisang",
            elevation: "3,519m",
          },
          {
            day: "Day 6",
            activity: "Acclimatization day in Manang",
            elevation: "3,519m",
          },
          {
            day: "Day 7-9",
            activity: "Manang to Thorong Phedi",
            elevation: "4,450m",
          },
          {
            day: "Day 10",
            activity: "Cross Thorong La Pass to Muktinath",
            elevation: "5,416m",
          },
          {
            day: "Day 11-15",
            activity: "Muktinath to Pokhara via Ghorepani",
            elevation: "2,874m",
          },
        ],
        permits: [
          "ACAP (Annapurna Conservation Area Permit) - $30",
          "TIMS Card (Trekkers' Information Management System) - $20",
        ],
        packingList: [
          "4-season sleeping bag (-15°C rating)",
          "Insulated down jacket",
          "Waterproof trekking boots",
          "Trekking poles",
          "High-altitude sunglasses",
          "Altitude sickness medication",
        ],
        safetyTips: [
          "Acclimatize properly - spend extra days at altitude",
          "Carry altitude sickness medication (Diamox)",
          "Stay hydrated and avoid alcohol at high altitude",
          "Inform someone about your trekking plans",
          "Consider hiring a local guide for safety",
        ],
        accommodation: "Tea houses and lodges available throughout the route",
        transportation: "Domestic flight to Pokhara, then bus to trailhead",
        cost: "$899 - $1,499 depending on services and duration",
      },
    },
    {
      id: 2,
      title: "Everest Base Camp Trek",
      category: "mountain",
      region: "Khumbu Region",
      overview:
        "The ultimate trekking adventure to the base of the world's highest mountain, through Sherpa heartland.",
      image: "everest base camp trek with prayer flags and mountain views",
      rating: 4.8,
      reviews: 2156,
      price: "From $1,299",
      duration: "12-16 days",
      difficulty: "Very Challenging",
      bestTime: "March-May, September-November",
      maxAltitude: "5,364m (EBC)",
      highlights: [
        "Everest Base Camp (5,364m)",
        "Kala Patthar viewpoint (5,545m)",
        "Sherpa culture and monasteries",
        "Sagarmatha National Park",
        "Stunning Himalayan panoramas",
      ],
      detailedInfo: {
        description:
          "Trek to the base camp of Mount Everest, the world's highest peak. This iconic journey takes you through the heart of Sherpa country, offering breathtaking mountain views and rich cultural experiences.",
        itinerary: [
          {
            day: "Day 1",
            activity: "Fly Kathmandu to Lukla, trek to Phakding",
            elevation: "2,610m",
          },
          {
            day: "Day 2-3",
            activity: "Phakding to Namche Bazaar",
            elevation: "3,440m",
          },
          {
            day: "Day 4",
            activity: "Acclimatization day in Namche",
            elevation: "3,440m",
          },
          {
            day: "Day 5-7",
            activity: "Namche to Dingboche via Tengboche",
            elevation: "4,410m",
          },
          {
            day: "Day 8",
            activity: "Acclimatization day in Dingboche",
            elevation: "4,410m",
          },
          {
            day: "Day 9-12",
            activity: "Dingboche to EBC via Lobuche",
            elevation: "5,364m",
          },
        ],
        permits: [
          "Sagarmatha National Park Entry Permit - $30",
          "Khumbu Pasang Lhamu Rural Municipality Permit - $20",
        ],
        packingList: [
          "Expedition-grade sleeping bag (-20°C)",
          "High-altitude down jacket",
          "Mountaineering boots",
          "Crampons (for Kala Patthar)",
          "Oxygen saturation meter",
          "Comprehensive first aid kit",
        ],
        safetyTips: [
          "Mandatory acclimatization days - don't skip them",
          "Monitor oxygen saturation levels daily",
          "Descend immediately if severe altitude sickness symptoms occur",
          "Weather can change rapidly - be prepared",
          "Consider helicopter evacuation insurance",
        ],
        accommodation: "Mountain lodges and tea houses",
        transportation: "Scenic flight to Lukla (weather dependent)",
        cost: "$1,299 - $2,499 including flights and permits",
      },
    },
    {
      id: 3,
      title: "Chitwan National Park Safari",
      category: "wildlife",
      region: "Chitwan Region",
      overview:
        "Experience diverse wildlife including rhinos, tigers, and exotic birds in Nepal's premier national park.",
      image: "chitwan national park with elephants and jungle safari",
      rating: 4.7,
      reviews: 892,
      price: "From $299",
      duration: "3-5 days",
      difficulty: "Easy",
      bestTime: "October-March",
      maxAltitude: "200m",
      highlights: [
        "One-horned rhinoceros sightings",
        "Bengal tiger tracking",
        "Elephant safari rides",
        "Canoe trips on Rapti River",
        "Tharu cultural programs",
      ],
      detailedInfo: {
        description:
          "Chitwan National Park is Nepal's first national park and a UNESCO World Heritage Site. Home to diverse wildlife including the endangered one-horned rhinoceros and Bengal tigers.",
        itinerary: [
          {
            day: "Day 1",
            activity: "Arrival and jungle walk",
            elevation: "200m",
          },
          {
            day: "Day 2",
            activity: "Elephant safari and canoe trip",
            elevation: "200m",
          },
          {
            day: "Day 3",
            activity: "Jeep safari and bird watching",
            elevation: "200m",
          },
          {
            day: "Day 4",
            activity: "Tharu cultural program",
            elevation: "200m",
          },
        ],
        permits: [
          "Chitwan National Park Entry Fee - $15 per day",
          "Camera fee (if applicable) - $5",
        ],
        packingList: [
          "Lightweight, earth-toned clothing",
          "Insect repellent",
          "Binoculars for wildlife viewing",
          "Camera with telephoto lens",
          "Comfortable walking shoes",
          "Sun hat and sunscreen",
        ],
        safetyTips: [
          "Maintain safe distance from wild animals",
          "Follow guide instructions at all times",
          "Stay on designated paths during jungle walks",
          "Avoid bright colors that might disturb wildlife",
          "Carry insect repellent for mosquitoes",
        ],
        accommodation: "Jungle lodges and resorts with modern amenities",
        transportation:
          "5-hour drive from Kathmandu or short flight to Bharatpur",
        cost: "$299 - $599 including accommodation and activities",
      },
    },
    {
      id: 4,
      title: "Kathmandu Valley Cultural Tour",
      category: "culture",
      region: "Kathmandu Valley",
      overview:
        "Explore ancient temples, palaces, and UNESCO World Heritage Sites in Nepal's cultural heart.",
      image: "kathmandu valley temples and cultural heritage sites",
      rating: 4.6,
      reviews: 1543,
      price: "From $199",
      duration: "3-7 days",
      difficulty: "Easy",
      bestTime: "October-April",
      maxAltitude: "1,400m",
      highlights: [
        "Pashupatinath Temple",
        "Boudhanath Stupa",
        "Bhaktapur Durbar Square",
        "Patan Durbar Square",
        "Swayambhunath (Monkey Temple)",
      ],
      detailedInfo: {
        description:
          "Discover the rich cultural heritage of Kathmandu Valley, home to seven UNESCO World Heritage Sites. Experience ancient architecture, traditional crafts, and spiritual traditions.",
        itinerary: [
          {
            day: "Day 1",
            activity: "Kathmandu Durbar Square and Swayambhunath",
            elevation: "1,350m",
          },
          {
            day: "Day 2",
            activity: "Pashupatinath and Boudhanath",
            elevation: "1,350m",
          },
          {
            day: "Day 3",
            activity: "Bhaktapur Durbar Square",
            elevation: "1,401m",
          },
          {
            day: "Day 4",
            activity: "Patan Durbar Square and museums",
            elevation: "1,330m",
          },
        ],
        permits: [
          "Monument entrance fees - $3-10 per site",
          "Photography permits (optional) - $2-5 per site",
        ],
        packingList: [
          "Comfortable walking shoes",
          "Modest clothing for temples",
          "Camera for architecture",
          "Small backpack for day trips",
          "Respectful attire",
          "Guidebook or cultural information",
        ],
        safetyTips: [
          "Dress modestly when visiting religious sites",
          "Remove shoes before entering temples",
          "Be respectful during religious ceremonies",
          "Watch for pickpockets in crowded areas",
          "Stay hydrated while walking",
        ],
        accommodation: "Heritage hotels and boutique guesthouses",
        transportation: "Walking tours and short taxi rides within valley",
        cost: "$199 - $399 including guide and entrance fees",
      },
    },
    {
      id: 5,
      title: "Pokhara Adventure Hub",
      category: "adventure",
      region: "Pokhara Valley",
      overview:
        "Adventure sports capital with paragliding, boating, and stunning mountain views of the Annapurna range.",
      image: "pokhara valley with lake and paragliding activities",
      rating: 4.8,
      reviews: 967,
      price: "From $149",
      duration: "2-5 days",
      difficulty: "Easy to Moderate",
      bestTime: "September-May",
      maxAltitude: "1,400m",
      highlights: [
        "Paragliding over Phewa Lake",
        "Boating on Phewa Lake",
        "Sarangkot sunrise viewpoint",
        "World Peace Pagoda",
        "Adventure sports activities",
      ],
      detailedInfo: {
        description:
          "Pokhara is Nepal's adventure capital, offering stunning lake and mountain scenery with numerous outdoor activities. Perfect for both relaxation and adrenaline-pumping adventures.",
        itinerary: [
          {
            day: "Day 1",
            activity: "Arrival and Phewa Lake exploration",
            elevation: "822m",
          },
          {
            day: "Day 2",
            activity: "Paragliding and World Peace Pagoda",
            elevation: "1,113m",
          },
          {
            day: "Day 3",
            activity: "Sarangkot sunrise and adventure activities",
            elevation: "1,592m",
          },
          {
            day: "Day 4",
            activity: "Optional day trips to nearby attractions",
            elevation: "822m",
          },
        ],
        permits: [
          "No special permits required for most activities",
          "Paragliding insurance included in activity cost",
        ],
        packingList: [
          "Comfortable outdoor clothing",
          "Sunglasses and sunscreen",
          "Camera for scenic views",
          "Light jacket for early morning",
          "Comfortable walking shoes",
          "Swimwear for lake activities",
        ],
        safetyTips: [
          "Choose certified operators for adventure activities",
          "Check weather conditions before paragliding",
          "Wear life jackets during water activities",
          "Stay hydrated during outdoor activities",
          "Follow safety briefings carefully",
        ],
        accommodation: "Lakeside hotels and resorts with mountain views",
        transportation:
          "30-minute flight from Kathmandu or 6-hour scenic drive",
        cost: "$149 - $349 including activities and accommodation",
      },
    },
    {
      id: 6,
      title: "Langtang Valley Trek",
      category: "mountain",
      region: "Langtang Region",
      overview:
        "Scenic valley trek through rhododendron forests, traditional Tamang villages, and glacial landscapes.",
      image: "langtang valley trek with mountain views and villages",
      rating: 4.7,
      reviews: 634,
      price: "From $599",
      duration: "7-12 days",
      difficulty: "Moderate",
      bestTime: "March-May, September-November",
      maxAltitude: "4,984m (Tserko Ri)",
      highlights: [
        "Langtang Glacier views",
        "Tamang cultural heritage",
        "Kyanjin Gompa monastery",
        "Tserko Ri viewpoint",
        "Rhododendron forests",
      ],
      detailedInfo: {
        description:
          "Known as the 'Valley of Glaciers,' Langtang offers spectacular mountain scenery and rich Tamang culture. This trek is perfect for those seeking a less crowded alternative to Everest and Annapurna.",
        itinerary: [
          {
            day: "Day 1-2",
            activity: "Kathmandu to Syabrubesi",
            elevation: "1,503m",
          },
          {
            day: "Day 3-4",
            activity: "Syabrubesi to Langtang Village",
            elevation: "3,430m",
          },
          {
            day: "Day 5-6",
            activity: "Langtang to Kyanjin Gompa",
            elevation: "3,870m",
          },
          { day: "Day 7", activity: "Tserko Ri day hike", elevation: "4,984m" },
          {
            day: "Day 8-10",
            activity: "Return journey to Syabrubesi",
            elevation: "1,503m",
          },
        ],
        permits: [
          "Langtang National Park Entry Permit - $30",
          "TIMS Card - $20",
        ],
        packingList: [
          "3-season sleeping bag",
          "Warm layers for high altitude",
          "Waterproof jacket and pants",
          "Sturdy trekking boots",
          "Trekking poles",
          "Headlamp with extra batteries",
        ],
        safetyTips: [
          "Be aware of altitude sickness symptoms",
          "Trek with a buddy or guide",
          "Inform locals about your trekking plans",
          "Carry emergency communication device",
          "Check weather conditions regularly",
        ],
        accommodation: "Tea houses and community lodges",
        transportation: "7-8 hour drive from Kathmandu to trailhead",
        cost: "$599 - $999 including permits and accommodation",
      },
    },
  ];

  const categories = [
    { id: "all", label: "All Destinations", count: destinations.length },
    {
      id: "mountain",
      label: "Mountain Treks",
      count: destinations.filter((d) => d.category === "mountain").length,
    },
    {
      id: "culture",
      label: "Cultural Sites",
      count: destinations.filter((d) => d.category === "culture").length,
    },
    {
      id: "wildlife",
      label: "Wildlife & Nature",
      count: destinations.filter((d) => d.category === "wildlife").length,
    },
    {
      id: "adventure",
      label: "Adventure Sports",
      count: destinations.filter((d) => d.category === "adventure").length,
    },
  ];

  const filteredDestinations =
    activeFilter === "all"
      ? destinations
      : destinations.filter((dest) => dest.category === activeFilter);

  const toggleExpanded = (id: number) => {
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
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  activeFilter === category.id
                    ? "bg-sky-500 text-white shadow-lg"
                    : "bg-white text-slate-600 hover:bg-sky-50 hover:text-sky-600 shadow-sm"
                }`}
              >
                {category.label} ({category.count})
              </button>
            ))}
          </div>
        </motion.div>

        {/* Destinations Grid */}
        <div className="space-y-8">
          {filteredDestinations.map((destination, index) => (
            <motion.div
              key={destination.id}
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

                  <p className="text-slate-600 mb-6">{destination.overview}</p>

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
                      onClick={() => toggleExpanded(destination.id)}
                      className="flex-1 bg-sky-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-sky-600 transition-colors flex items-center justify-center space-x-2"
                    >
                      <span>View Details</span>
                      {expandedDestination === destination.id ? (
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

              {/* Detailed Information Section - Concise Container */}
              <AnimatePresence>
                {expandedDestination === destination.id && (
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
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
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
