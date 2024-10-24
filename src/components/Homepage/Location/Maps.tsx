"use client"

import React, { useState, useEffect } from "react"
import { GoogleMap, LoadScript } from "@react-google-maps/api"

const center = {
  lat: -25.433796842489745,
  lng: -49.302595461460015,
}

export const Maps = () => {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""

  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) return null

  return (
    <div className="w-full h-[50vh] lg:w-[90%]">
      <LoadScript googleMapsApiKey={apiKey}>
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "100%" }}
          center={center}
          zoom={18}
        ></GoogleMap>
      </LoadScript>
    </div>
  )
}
