"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowLeft,
  MessageCircle,
  Send,
  Paperclip,
  Mic,
  MapPin,
  Calendar,
  Cloud,
  Camera,
  MapIcon,
} from "lucide-react";

export default function ChatAssistantPage() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "bot",
      content:
        "Hello! I'm your AI travel assistant. I can help you with destinations, weather updates, travel advisories, and personalized recommendations. How can I assist you today?",
      timestamp: "10:30 AM",
    },
    {
      id: 2,
      type: "user",
      content: "What's the weather like in the mountains this week?",
      timestamp: "10:31 AM",
    },
    {
      id: 3,
      type: "bot",
      content:
        "The mountain regions are experiencing clear skies with temperatures ranging from 15-22°C. Perfect for hiking and outdoor activities! Here's the 5-day forecast:\n\n📅 Today: Sunny, 22°C\n📅 Tomorrow: Partly cloudy, 20°C\n📅 Wednesday: Clear, 18°C\n📅 Thursday: Light rain, 16°C\n📅 Friday: Sunny, 21°C\n\nWould you like specific trail recommendations for these conditions?",
      timestamp: "10:31 AM",
    },
  ]);

  const quickQuestions = [
    "Best places to visit this season",
    "Weather forecast for next week",
    "Cultural festivals happening now",
    "Adventure activities available",
    "Travel safety updates",
    "Accommodation recommendations",
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                  <ArrowLeft className="w-5 h-5 text-slate-600" />
                </button>
              </Link>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="font-bold text-slate-800">
                    AI Travel Assistant
                  </h1>
                  <p className="text-sm text-green-600 flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Online
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Link href="/">
                <div className="w-8 h-8 bg-sky-500 rounded-lg flex items-center justify-center">
                  <MapIcon className="w-4 h-4 text-white" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-sky-500 to-sky-600 text-white p-6">
            <h2 className="text-2xl font-bold mb-2">Travel Assistant Chat</h2>
            <p className="text-sky-100">
              Get instant help with your travel planning
            </p>
          </div>

          {/* Quick Questions */}
          <div className="p-6 border-b bg-slate-50">
            <h3 className="font-semibold text-slate-800 mb-3">
              Quick Questions
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {quickQuestions.map((question, index) => (
                <motion.button
                  key={index}
                  className="text-left p-3 bg-white border border-slate-200 rounded-lg hover:border-sky-300 hover:bg-sky-50 transition-colors text-sm"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setMessage(question)}
                >
                  {question}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Chat Messages */}
          <div className="h-96 overflow-y-auto p-6 space-y-4">
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                className={`flex ${
                  msg.type === "user" ? "justify-end" : "justify-start"
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className={`flex space-x-3 max-w-xs lg:max-w-md ${
                    msg.type === "user"
                      ? "flex-row-reverse space-x-reverse"
                      : ""
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      msg.type === "user" ? "bg-sky-500" : "bg-slate-200"
                    }`}
                  >
                    {msg.type === "user" ? (
                      <span className="text-white text-sm font-bold">U</span>
                    ) : (
                      <MessageCircle className="w-4 h-4 text-slate-600" />
                    )}
                  </div>
                  <div
                    className={`rounded-2xl p-4 ${
                      msg.type === "user"
                        ? "bg-sky-500 text-white"
                        : "bg-slate-100 text-slate-800"
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">{msg.content}</p>
                    <p
                      className={`text-xs mt-2 ${
                        msg.type === "user" ? "text-sky-100" : "text-slate-500"
                      }`}
                    >
                      {msg.timestamp}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Chat Input */}
          <div className="p-6 border-t bg-white">
            <div className="flex space-x-4">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ask me anything about travel, weather, destinations..."
                  className="w-full px-4 py-3 pr-12 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600">
                  <Paperclip className="w-5 h-5" />
                </button>
              </div>
              <button className="p-3 bg-slate-100 text-slate-600 rounded-xl hover:bg-slate-200 transition-colors">
                <Mic className="w-5 h-5" />
              </button>
              <button className="p-3 bg-sky-500 text-white rounded-xl hover:bg-sky-600 transition-colors">
                <Send className="w-5 h-5" />
              </button>
            </div>
            <p className="text-xs text-slate-500 mt-2"></p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {[
            {
              icon: <Cloud className="w-6 h-6" />,
              title: "Weather Updates",
              description: "Real-time weather forecasts for any destination",
            },
            {
              icon: <MapPin className="w-6 h-6" />,
              title: "Destination Info",
              description: "Detailed information about places to visit",
            },
            {
              icon: <Calendar className="w-6 h-6" />,
              title: "Event Planning",
              description: "Help with festivals and cultural events",
            },
            {
              icon: <Camera className="w-6 h-6" />,
              title: "Photo Spots",
              description: "Best photography locations and tips",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm border border-slate-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-4 text-sky-600">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-slate-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
