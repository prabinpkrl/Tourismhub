"use client"

import { useState, useEffect } from "react"

interface ApiState<T> {
  data: T | null
  loading: boolean
  error: string | null
}

export function useApi<T>(apiCall: () => Promise<T>, dependencies: any[] = []): ApiState<T> {
  const [state, setState] = useState<ApiState<T>>({
    data: null,
    loading: true,
    error: null,
  })

  useEffect(() => {
    let isMounted = true

    const fetchData = async () => {
      try {
        setState((prev) => ({ ...prev, loading: true, error: null }))
        const response = await apiCall()

        if (isMounted) {
          setState({
            data: response,
            loading: false,
            error: null,
          })
        }
      } catch (error) {
        if (isMounted) {
          setState({
            data: null,
            loading: false,
            error: error instanceof Error ? error.message : "An error occurred",
          })
        }
      }
    }

    fetchData()

    return () => {
      isMounted = false
    }
  }, dependencies)

  return state
}

export function useAsyncApi<T>() {
  const [state, setState] = useState<ApiState<T>>({
    data: null,
    loading: false,
    error: null,
  })

  const execute = async (apiCall: () => Promise<T>) => {
    try {
      setState({ data: null, loading: true, error: null })
      const response = await apiCall()

      setState({
        data: response,
        loading: false,
        error: null,
      })
      return response
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "An error occurred"
      setState({
        data: null,
        loading: false,
        error: errorMessage,
      })
      throw error
    }
  }

  return { ...state, execute }
}
