"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  Cloud,
  Sun,
  CloudRain,
  Wind,
  Droplets,
  Eye,
  Thermometer,
  MapIcon,
} from "lucide-react";

export default function WeatherPage() {
  const currentWeather = {
    location: "Mountain Region",
    temperature: 22,
    condition: "Partly Cloudy",
    humidity: 65,
    windSpeed: 12,
    visibility: 10,
    uvIndex: 6,
  };

  const forecast = [
    {
      day: "Today",
      high: 22,
      low: 15,
      condition: "Partly Cloudy",
      icon: <Cloud className="w-6 h-6" />,
    },
    {
      day: "Tomorrow",
      high: 24,
      low: 16,
      condition: "Sunny",
      icon: <Sun className="w-6 h-6" />,
    },
    {
      day: "Wednesday",
      high: 20,
      low: 14,
      condition: "Light Rain",
      icon: <CloudRain className="w-6 h-6" />,
    },
    {
      day: "Thursday",
      high: 18,
      low: 12,
      condition: "Cloudy",
      icon: <Cloud className="w-6 h-6" />,
    },
    {
      day: "Friday",
      high: 25,
      low: 17,
      condition: "Sunny",
      icon: <Sun className="w-6 h-6" />,
    },
    {
      day: "Saturday",
      high: 23,
      low: 16,
      condition: "Partly Cloudy",
      icon: <Cloud className="w-6 h-6" />,
    },
    {
      day: "Sunday",
      high: 21,
      low: 15,
      condition: "Light Rain",
      icon: <CloudRain className="w-6 h-6" />,
    },
  ];

  const regions = [
    {
      name: "Mountain Region",
      temp: 22,
      condition: "Partly Cloudy",
      icon: <Cloud className="w-5 h-5" />,
    },
    {
      name: "Coastal Areas",
      temp: 28,
      condition: "Sunny",
      icon: <Sun className="w-5 h-5" />,
    },
    {
      name: "Cultural Sites",
      temp: 26,
      condition: "Clear",
      icon: <Sun className="w-5 h-5" />,
    },
    {
      name: "National Parks",
      temp: 19,
      condition: "Light Rain",
      icon: <CloudRain className="w-5 h-5" />,
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
                Weather Forecast
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
        {/* Current Weather */}
        <motion.div
          className="bg-gradient-to-br from-sky-400 to-sky-600 text-white rounded-2xl p-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-2">
                {currentWeather.location}
              </h2>
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-6xl font-light">
                  {currentWeather.temperature}°
                </span>
                <div>
                  <Cloud className="w-12 h-12 mb-2" />
                  <p className="text-sky-100">{currentWeather.condition}</p>
                </div>
              </div>
              <p className="text-sky-100">
                Perfect weather for outdoor activities and sightseeing!
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Droplets className="w-5 h-5" />
                  <span className="text-sm">Humidity</span>
                </div>
                <span className="text-2xl font-bold">
                  {currentWeather.humidity}%
                </span>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Wind className="w-5 h-5" />
                  <span className="text-sm">Wind Speed</span>
                </div>
                <span className="text-2xl font-bold">
                  {currentWeather.windSpeed} km/h
                </span>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Eye className="w-5 h-5" />
                  <span className="text-sm">Visibility</span>
                </div>
                <span className="text-2xl font-bold">
                  {currentWeather.visibility} km
                </span>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Thermometer className="w-5 h-5" />
                  <span className="text-sm">UV Index</span>
                </div>
                <span className="text-2xl font-bold">
                  {currentWeather.uvIndex}
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 7-Day Forecast */}
        <motion.div
          className="bg-white rounded-2xl shadow-lg p-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-slate-800 mb-6">
            7-Day Forecast
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
            {forecast.map((day, index) => (
              <motion.div
                key={index}
                className="text-center p-4 rounded-xl hover:bg-slate-50 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <p className="font-semibold text-slate-800 mb-2">{day.day}</p>
                <div className="flex justify-center mb-3 text-sky-500">
                  {day.icon}
                </div>
                <div className="space-y-1">
                  <p className="text-lg font-bold text-slate-800">
                    {day.high}°
                  </p>
                  <p className="text-sm text-slate-500">{day.low}°</p>
                </div>
                <p className="text-xs text-slate-600 mt-2">{day.condition}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Regional Weather */}
        <motion.div
          className="bg-white rounded-2xl shadow-lg p-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-slate-800 mb-6">
            Regional Weather
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {regions.map((region, index) => (
              <motion.div
                key={index}
                className="p-4 border border-slate-200 rounded-xl hover:border-sky-300 hover:bg-sky-50 transition-colors"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-slate-800">
                    {region.name}
                  </h4>
                  <div className="text-sky-500">{region.icon}</div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-slate-800">
                    {region.temp}°
                  </span>
                  <span className="text-sm text-slate-600">
                    {region.condition}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Travel Weather Tips */}
        <motion.div
          className="bg-white rounded-2xl shadow-lg p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-slate-800 mb-6">
            Travel Weather Tips
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4 bg-green-50 border border-green-200 rounded-xl">
              <h4 className="font-semibold text-green-800 mb-2">
                🌞 Perfect for Hiking
              </h4>
              <p className="text-sm text-green-700">
                Clear skies and moderate temperatures make it ideal for mountain
                trails and outdoor adventures.
              </p>
            </div>

            <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl">
              <h4 className="font-semibold text-blue-800 mb-2">
                📸 Great Photography Weather
              </h4>
              <p className="text-sm text-blue-700">
                Partly cloudy conditions provide excellent lighting for
                landscape and cultural site photography.
              </p>
            </div>

            <div className="p-4 bg-orange-50 border border-orange-200 rounded-xl">
              <h4 className="font-semibold text-orange-800 mb-2">
                🧥 Pack Layers
              </h4>
              <p className="text-sm text-orange-700">
                Temperature variations between day and night. Bring light
                jackets for evening activities.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
