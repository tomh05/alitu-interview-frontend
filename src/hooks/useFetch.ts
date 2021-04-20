import { useState, useEffect } from 'react'

export default function useFetch<Res extends unknown>(url: string, options?: RequestInit) {
  const [response, setResponse] = useState<Res>()
  const [error, setError] = useState<unknown>()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true)
      try {
        const res = await fetch(url, options)
        const json = await res.json()
        setResponse(json)
        setIsLoading(false)
      } catch (error) {
        setError(error)
      }
    }
    fetchData()
  }, [options, url])

  return { response, error, isLoading }
}
