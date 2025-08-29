const API_BASE_URL = "http://localhost:5000/api"

// Generic API response type
interface ApiResponse<T> {
  success: boolean
  data: T
  message?: string
  error?: string
}

interface PaginatedResponse<T> {
  success: boolean
  data: T[]
  pagination?: {
    page: number
    limit: number
    total: number
    pages: number
  }
}

// Generic API function
async function apiRequest<T>(endpoint: string, options?: RequestInit): Promise<ApiResponse<T>> {
  const url = `${API_BASE_URL}${endpoint}`

  const config: RequestInit = {
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
    ...options,
  }

  try {
    const response = await fetch(url, config)

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error("API Request failed:", error)
    throw error
  }
}

// Destinations API
export const destinationsApi = {
  getAll: async (params?: {
    category?: string
    featured?: boolean
    limit?: number
    page?: number
  }): Promise<PaginatedResponse<Destination>> => {
    const searchParams = new URLSearchParams()
    if (params?.category) searchParams.append("category", params.category)
    if (params?.featured) searchParams.append("featured", "true")
    if (params?.limit) searchParams.append("limit", params.limit.toString())
    if (params?.page) searchParams.append("page", params.page.toString())

    const query = searchParams.toString()
    return apiRequest<Destination[]>(`/destinations${query ? `?${query}` : ""}`) as Promise<
      PaginatedResponse<Destination>
    >
  },

  getById: async (id: string): Promise<ApiResponse<Destination>> => {
    return apiRequest<Destination>(`/destinations/${id}`)
  },

  getByCategory: async (
    category: string,
    params?: { limit?: number; page?: number },
  ): Promise<PaginatedResponse<Destination>> => {
    const searchParams = new URLSearchParams()
    if (params?.limit) searchParams.append("limit", params.limit.toString())
    if (params?.page) searchParams.append("page", params.page.toString())

    const query = searchParams.toString()
    return apiRequest<Destination[]>(`/destinations/category/${category}${query ? `?${query}` : ""}`) as Promise<
      PaginatedResponse<Destination>
    >
  },

  search: async (
    query: string,
    params?: { limit?: number; page?: number },
  ): Promise<ApiResponse<{ data: Destination[]; count: number }>> => {
    const searchParams = new URLSearchParams()
    if (params?.limit) searchParams.append("limit", params.limit.toString())
    if (params?.page) searchParams.append("page", params.page.toString())

    const queryString = searchParams.toString()
    return apiRequest<{ data: Destination[]; count: number }>(
      `/destinations/search/${encodeURIComponent(query)}${queryString ? `?${queryString}` : ""}`,
    )
  },
}

// Categories API
export const categoriesApi = {
  getAll: async (): Promise<ApiResponse<Category[]>> => {
    return apiRequest<Category[]>("/categories")
  },

  getById: async (id: string): Promise<ApiResponse<Category & { count: number }>> => {
    return apiRequest<Category & { count: number }>(`/categories/${id}`)
  },
}

// Weather API
export const weatherApi = {
  getCurrent: async (location?: string): Promise<ApiResponse<WeatherData>> => {
    const params = location ? `?location=${encodeURIComponent(location)}` : ""
    return apiRequest<WeatherData>(`/weather${params}`)
  },

  getForecast: async (
    location?: string,
    days?: number,
  ): Promise<
    ApiResponse<{
      location: string
      forecast: ForecastDay[]
      lastUpdated: string
    }>
  > => {
    const searchParams = new URLSearchParams()
    if (location) searchParams.append("location", location)
    if (days) searchParams.append("days", days.toString())

    const query = searchParams.toString()
    return apiRequest<{
      location: string
      forecast: ForecastDay[]
      lastUpdated: string
    }>(`/weather/forecast${query ? `?${query}` : ""}`)
  },
}

// Festivals API
export const festivalsApi = {
  getAll: async (params?: {
    category?: string
    featured?: boolean
    limit?: number
    page?: number
  }): Promise<PaginatedResponse<Festival>> => {
    const searchParams = new URLSearchParams()
    if (params?.category) searchParams.append("category", params.category)
    if (params?.featured) searchParams.append("featured", "true")
    if (params?.limit) searchParams.append("limit", params.limit.toString())
    if (params?.page) searchParams.append("page", params.page.toString())

    const query = searchParams.toString()
    return apiRequest<Festival[]>(`/festivals${query ? `?${query}` : ""}`) as Promise<PaginatedResponse<Festival>>
  },

  getById: async (id: string): Promise<ApiResponse<Festival>> => {
    return apiRequest<Festival>(`/festivals/${id}`)
  },

  getUpcoming: async (limit?: number): Promise<ApiResponse<Festival[]>> => {
    const params = limit ? `?limit=${limit}` : ""
    return apiRequest<Festival[]>(`/festivals/upcoming/list${params}`)
  },
}

// Gallery API
export const galleryApi = {
  getAll: async (params?: {
    category?: string
    featured?: boolean
    limit?: number
    page?: number
  }): Promise<PaginatedResponse<GalleryImage>> => {
    const searchParams = new URLSearchParams()
    if (params?.category) searchParams.append("category", params.category)
    if (params?.featured) searchParams.append("featured", "true")
    if (params?.limit) searchParams.append("limit", params.limit.toString())
    if (params?.page) searchParams.append("page", params.page.toString())

    const query = searchParams.toString()
    return apiRequest<GalleryImage[]>(`/gallery${query ? `?${query}` : ""}`) as Promise<PaginatedResponse<GalleryImage>>
  },

  getById: async (id: string): Promise<ApiResponse<GalleryImage>> => {
    return apiRequest<GalleryImage>(`/gallery/${id}`)
  },

  likeImage: async (id: string): Promise<ApiResponse<{ likes: number }>> => {
    return apiRequest<{ likes: number }>(`/gallery/${id}/like`, {
      method: "POST",
    })
  },
}

// Bookings API
export const bookingsApi = {
  getServices: async (
    type?: "tours" | "accommodation" | "transport",
  ): Promise<ApiResponse<BookingServicesResponse>> => {
    const params = type ? `?type=${type}` : ""
    return apiRequest<BookingServicesResponse>(`/bookings/services${params}`)
  },

  create: async (booking: CreateBookingRequest): Promise<ApiResponse<Booking>> => {
    return apiRequest<Booking>("/bookings", {
      method: "POST",
      body: JSON.stringify(booking),
    })
  },

  getById: async (id: string): Promise<ApiResponse<Booking>> => {
    return apiRequest<Booking>(`/bookings/${id}`)
  },
}

// Types
export interface Destination {
  _id: string
  title: string
  category: string
  region: string
  overview: string
  image: string
  rating: number
  reviews: number
  price: string
  duration: string
  difficulty: string
  bestTime: string
  maxAltitude: string
  highlights: string[]
  detailedInfo: {
    description: string
    itinerary: Array<{
      day: string
      activity: string
      elevation: string
    }>
    permits: string[]
    packingList: string[]
    safetyTips: string[]
    accommodation: string
    transportation: string
    cost: string
  }
  featured: boolean
  isActive: boolean
  createdAt: string
  updatedAt: string
}

export interface Category {
  _id: string
  id: string
  label: string
  description: string
  icon: string
  color: string
  count?: number
  isActive: boolean
  order: number
  createdAt: string
}

export interface WeatherData {
  _id: string
  location: string
  current: {
    temperature: number
    condition: string
    humidity: number
    windSpeed: number
    visibility: number
    uvIndex: number
  }
  forecast: ForecastDay[]
  regions: Array<{
    name: string
    temp: number
    condition: string
    icon: string
  }>
  lastUpdated: string
}

export interface ForecastDay {
  day: string
  high: number
  low: number
  condition: string
  icon: string
}

export interface Festival {
  _id: string
  title: string
  date: string
  location: string
  duration: string
  attendees: string
  rating: number
  image: string
  description: string
  highlights: string[]
  category: string
  ticketPrice: string
  featured: boolean
  isActive: boolean
  createdAt: string
}

export interface GalleryImage {
  _id: string
  title: string
  category: string
  likes: number
  photographer: string
  image: string
  description?: string
  location?: string
  tags: string[]
  featured: boolean
  isActive: boolean
  createdAt: string
}

export interface BookingService {
  id: number
  title: string
  duration?: string
  type?: string
  price: number
  rating: number
  reviews: number
  image: string
  features: string[]
}

export type BookingServicesResponse =
  | BookingService[]
  | {
      tours: BookingService[]
      accommodation: BookingService[]
      transport: BookingService[]
    }

export interface CreateBookingRequest {
  serviceId: number
  serviceType: "tours" | "accommodation" | "transport"
  customerName: string
  customerEmail: string
  customerPhone: string
  bookingDate: string
  numberOfPeople: number
  specialRequests?: string
}

export interface Booking {
  id: number
  serviceId: number
  serviceType: string
  customerName: string
  customerEmail: string
  customerPhone: string
  bookingDate: string
  numberOfPeople: number
  status: string
  createdAt: string
  bookingReference: string
}
