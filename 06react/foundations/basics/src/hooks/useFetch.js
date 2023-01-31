import { useState, useEffect } from "react"

export const useFetch = (url) => {
  const [response, setResponse] = useState(null)

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(json => setResponse(json))
      .catch(error => setResponse(error))
  }, [url])

  return response
}