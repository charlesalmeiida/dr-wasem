"use client"

import React, { useState, useEffect } from "react"
import { GoogleMap, LoadScript } from "@react-google-maps/api"

const containerStyle = {
  width: "488px",
  height: "328px",
}

const center = {
  lat: -25.443065643310547,
  lng: -49.33836364746094,
}

export const Maps = () => {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""

  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) return null

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={17}
      ></GoogleMap>
    </LoadScript>
  )
}
