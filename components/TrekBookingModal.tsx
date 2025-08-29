"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CreditCard, AlertCircle, CheckCircle } from "lucide-react";
import {
  bookingsApi,
  type Destination,
  type CreateTrekBookingRequest,
  type TrekBooking,
} from "@/lib/api";
import { log } from "console";

interface TrekBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  destination: Destination;
}

export default function TrekBookingModal({
  isOpen,
  onClose,
  destination,
}: TrekBookingModalProps) {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [booking, setBooking] = useState<TrekBooking | null>(null);
  const [formData, setFormData] = useState<CreateTrekBookingRequest>({
    destinationId: destination._id,
    customerName: "",
    customerEmail: "",
    customerPhone: "",
    customerCountry: "",
    startDate: "",
    numberOfPeople: 1,
    accommodationType: "teahouse",
    additionalServices: [],
    specialRequests: "",
    dietaryRequirements: "",
    medicalConditions: "",
  });
  console.log(formData);

  const accommodationTypes = [
    {
      type: "teahouse",
      label: "Tea House",
      description: "Basic accommodation with shared facilities",
      pricePerDay: 50,
      features: [
        "Shared rooms",
        "Basic meals",
        "Local experience",
        "Budget-friendly",
      ],
    },
    {
      type: "camping",
      label: "Camping",
      description: "Camping with full equipment and support",
      pricePerDay: 75,
      features: [
        "Private tents",
        "Professional equipment",
        "Camping meals",
        "Adventure experience",
      ],
    },
    {
      type: "luxury",
      label: "Luxury Lodge",
      description: "Premium accommodation with modern amenities",
      pricePerDay: 120,
      features: [
        "Private rooms",
        "Modern facilities",
        "Gourmet meals",
        "Comfort & luxury",
      ],
    },
  ];

  const additionalServices = [
    { service: "Porter Service", price: 25 },
    { service: "Professional Guide", price: 35 },
    { service: "Travel Insurance", price: 50 },
    { service: "Equipment Rental", price: 40 },
    { service: "Airport Transfer", price: 30 },
    { service: "Helicopter Rescue Insurance", price: 100 },
  ];

  const handleInputChange = (
    field: keyof CreateTrekBookingRequest,
    value: any
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleServiceToggle = (service: { service: string; price: number }) => {
    setFormData((prev) => {
      const exists = prev.additionalServices?.find(
        (s) => s.service === service.service
      );
      if (exists) {
        return {
          ...prev,
          additionalServices:
            prev.additionalServices?.filter(
              (s) => s.service !== service.service
            ) || [],
        };
      } else {
        return {
          ...prev,
          additionalServices: [...(prev.additionalServices || []), service],
        };
      }
    });
  };

  const calculateTotalPrice = () => {
    const durationDays =
      Number.parseInt(destination.duration.split("-")[0]) || 10;
    const accommodationPrice =
      accommodationTypes.find((a) => a.type === formData.accommodationType)
        ?.pricePerDay || 50;
    const basePrice =
      accommodationPrice * formData.numberOfPeople * durationDays;
    const servicesPrice =
      formData.additionalServices?.reduce(
        (sum, service) => sum + service.price,
        0
      ) || 0;
    return basePrice + servicesPrice;
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await bookingsApi.createTrekBooking(formData);
      setBooking(response.data);
      setStep(4);
    } catch (error) {
      console.error("Booking failed:", error);
      alert("Booking failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setStep(1);
    setBooking(null);
    setFormData({
      destinationId: destination._id,
      customerName: "",
      customerEmail: "",
      customerPhone: "",
      customerCountry: "",
      startDate: "",
      numberOfPeople: 1,
      accommodationType: "teahouse",
      additionalServices: [],
      specialRequests: "",
      dietaryRequirements: "",
      medicalConditions: "",
    });
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={handleClose}
      >
        <motion.div
          className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-sky-500 to-sky-600 text-white p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">Book Your Trek</h2>
                <p className="text-sky-100">{destination.title}</p>
              </div>
              <button
                onClick={handleClose}
                className="p-2 hover:bg-white/20 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Progress Steps */}
            <div className="flex items-center space-x-4 mt-6">
              {[1, 2, 3, 4].map((stepNum) => (
                <div key={stepNum} className="flex items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                      step >= stepNum
                        ? "bg-white text-sky-600"
                        : "bg-sky-400 text-white"
                    }`}
                  >
                    {stepNum === 4 && booking ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      stepNum
                    )}
                  </div>
                  {stepNum < 4 && (
                    <div className="w-8 h-0.5 bg-sky-400 mx-2"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
            {/* Step 1: Personal Information */}
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <h3 className="text-xl font-bold text-slate-800 mb-4">
                  Personal Information
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.customerName}
                      onChange={(e) =>
                        handleInputChange("customerName", e.target.value)
                      }
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.customerEmail}
                      onChange={(e) =>
                        handleInputChange("customerEmail", e.target.value)
                      }
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={formData.customerPhone}
                      onChange={(e) =>
                        handleInputChange("customerPhone", e.target.value)
                      }
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Country *
                    </label>
                    <input
                      type="text"
                      value={formData.customerCountry}
                      onChange={(e) =>
                        handleInputChange("customerCountry", e.target.value)
                      }
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                      placeholder="Enter your country"
                      required
                    />
                  </div>
                </div>
                <div className="flex justify-end">
                  <button
                    onClick={() => setStep(2)}
                    disabled={
                      !formData.customerName ||
                      !formData.customerEmail ||
                      !formData.customerPhone ||
                      !formData.customerCountry
                    }
                    className="bg-sky-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-sky-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next Step
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 2: Trek Details */}
            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <h3 className="text-xl font-bold text-slate-800 mb-4">
                  Trek Details
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Start Date *
                    </label>
                    <input
                      type="date"
                      value={formData.startDate}
                      onChange={(e) =>
                        handleInputChange("startDate", e.target.value)
                      }
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                      min={new Date().toISOString().split("T")[0]}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Number of People *
                    </label>
                    <select
                      value={formData.numberOfPeople}
                      onChange={(e) =>
                        handleInputChange(
                          "numberOfPeople",
                          Number.parseInt(e.target.value)
                        )
                      }
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? "Person" : "People"}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Accommodation Type */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-4">
                    Accommodation Type *
                  </label>
                  <div className="grid md:grid-cols-3 gap-4">
                    {accommodationTypes.map((accommodation) => (
                      <div
                        key={accommodation.type}
                        className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                          formData.accommodationType === accommodation.type
                            ? "border-sky-500 bg-sky-50"
                            : "border-slate-200 hover:border-slate-300"
                        }`}
                        onClick={() =>
                          handleInputChange(
                            "accommodationType",
                            accommodation.type
                          )
                        }
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-slate-800">
                            {accommodation.label}
                          </h4>
                          <span className="text-lg font-bold text-sky-600">
                            ${accommodation.pricePerDay}/day
                          </span>
                        </div>
                        <p className="text-sm text-slate-600 mb-3">
                          {accommodation.description}
                        </p>
                        <div className="space-y-1">
                          {accommodation.features.map((feature, idx) => (
                            <div
                              key={idx}
                              className="flex items-center text-xs text-slate-600"
                            >
                              <div className="w-1 h-1 bg-sky-500 rounded-full mr-2"></div>
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between">
                  <button
                    onClick={() => setStep(1)}
                    className="bg-slate-100 text-slate-700 px-6 py-3 rounded-lg font-semibold hover:bg-slate-200 transition-colors"
                  >
                    Previous
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    disabled={!formData.startDate}
                    className="bg-sky-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-sky-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next Step
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Additional Services & Requirements */}
            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <h3 className="text-xl font-bold text-slate-800 mb-4">
                  Additional Services & Requirements
                </h3>

                {/* Additional Services */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-4">
                    Additional Services (Optional)
                  </label>
                  <div className="grid md:grid-cols-2 gap-3">
                    {additionalServices.map((service) => (
                      <div
                        key={service.service}
                        className={`border rounded-lg p-3 cursor-pointer transition-colors ${
                          formData.additionalServices?.find(
                            (s) => s.service === service.service
                          )
                            ? "border-sky-500 bg-sky-50"
                            : "border-slate-200 hover:border-slate-300"
                        }`}
                        onClick={() => handleServiceToggle(service)}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-slate-800">
                            {service.service}
                          </span>
                          <span className="text-sky-600 font-semibold">
                            ${service.price}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Special Requirements */}
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Special Requests
                    </label>
                    <textarea
                      value={formData.specialRequests}
                      onChange={(e) =>
                        handleInputChange("specialRequests", e.target.value)
                      }
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                      rows={3}
                      placeholder="Any special requests..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Dietary Requirements
                    </label>
                    <textarea
                      value={formData.dietaryRequirements}
                      onChange={(e) =>
                        handleInputChange("dietaryRequirements", e.target.value)
                      }
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                      rows={3}
                      placeholder="Vegetarian, allergies, etc..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Medical Conditions
                    </label>
                    <textarea
                      value={formData.medicalConditions}
                      onChange={(e) =>
                        handleInputChange("medicalConditions", e.target.value)
                      }
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                      rows={3}
                      placeholder="Any medical conditions we should know about..."
                    />
                  </div>
                </div>

                {/* Price Summary */}
                <div className="bg-slate-50 rounded-lg p-4">
                  <h4 className="font-semibold text-slate-800 mb-3">
                    Price Summary
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>
                        Base Price ({formData.numberOfPeople} people ×{" "}
                        {Number.parseInt(destination.duration.split("-")[0]) ||
                          10}{" "}
                        days)
                      </span>
                      <span>
                        $
                        {accommodationTypes.find(
                          (a) => a.type === formData.accommodationType
                        )?.pricePerDay || 50}{" "}
                        × {formData.numberOfPeople} ×{" "}
                        {Number.parseInt(destination.duration.split("-")[0]) ||
                          10}
                      </span>
                    </div>
                    {formData.additionalServices?.map((service) => (
                      <div
                        key={service.service}
                        className="flex justify-between"
                      >
                        <span>{service.service}</span>
                        <span>${service.price}</span>
                      </div>
                    ))}
                    <div className="border-t pt-2 flex justify-between font-bold text-lg">
                      <span>Total Price</span>
                      <span className="text-sky-600">
                        ${calculateTotalPrice()}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between">
                  <button
                    onClick={() => setStep(2)}
                    className="bg-slate-100 text-slate-700 px-6 py-3 rounded-lg font-semibold hover:bg-slate-200 transition-colors"
                  >
                    Previous
                  </button>
                  <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="bg-sky-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-sky-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Processing...</span>
                      </>
                    ) : (
                      <>
                        <CreditCard className="w-4 h-4" />
                        <span>Book Now - ${calculateTotalPrice()}</span>
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 4: Confirmation */}
            {step === 4 && booking && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center space-y-6"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">
                    Booking Confirmed!
                  </h3>
                  <p className="text-slate-600">
                    Your trek booking has been successfully submitted.
                  </p>
                </div>

                <div className="bg-slate-50 rounded-lg p-6 text-left">
                  <h4 className="font-semibold text-slate-800 mb-4">
                    Booking Details
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-slate-500">Booking Reference:</span>
                      <p className="font-semibold">
                        {booking.bookingReference}
                      </p>
                    </div>
                    <div>
                      <span className="text-slate-500">Trek:</span>
                      <p className="font-semibold">
                        {booking.destinationTitle}
                      </p>
                    </div>
                    <div>
                      <span className="text-slate-500">Start Date:</span>
                      <p className="font-semibold">
                        {new Date(booking.startDate).toLocaleDateString()}
                      </p>
                    </div>
                    <div>
                      <span className="text-slate-500">Duration:</span>
                      <p className="font-semibold">{destination.duration}</p>
                    </div>
                    <div>
                      <span className="text-slate-500">People:</span>
                      <p className="font-semibold">{booking.numberOfPeople}</p>
                    </div>
                    <div>
                      <span className="text-slate-500">Total Price:</span>
                      <p className="font-semibold text-sky-600">
                        ${booking.totalPrice}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                    <div className="text-left">
                      <h5 className="font-semibold text-blue-800">
                        What's Next?
                      </h5>
                      <ul className="text-sm text-blue-700 mt-2 space-y-1">
                        <li>
                          • You'll receive a confirmation email within 24 hours
                        </li>
                        <li>• Our team will contact you to finalize details</li>
                        <li>• Payment instructions will be provided</li>
                        <li>• Pre-trek briefing will be scheduled</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleClose}
                  className="bg-sky-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-sky-600 transition-colors"
                >
                  Close
                </button>
              </motion.div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
