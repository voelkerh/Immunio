import React, { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'

import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const getStyle = (feature) => {
  // eslint-disable-next-line prefer-destructuring
  const status = feature.properties.status
  return {
    color: '#000',
    weight: 2,
    fillColor: status === 'green' ? '#4CAF50' : '#F44336',
    fillOpacity: 0.5
  }
}

const Map = () => {
  const navigate = useNavigate()

  const [geoData, setGeoData] = useState(null)

  useEffect(() => {
    fetch('/assets/ne_10m_admin_0_countries.json')
      .then((res) => res.json())
      .then((data) => setGeoData(data))
      .catch()
  }, [])

  const handleCountryClick = (countryName) => {
    navigate(`/country/${countryName}`)
  }

  const onEachCountry = (feature, layer) => {
    const name = feature.properties.ADMIN || feature.properties.name
    layer.on({
      click: () => handleCountryClick(name)
    })
  }

  return (
    <MapContainer center={[51.1657, 10.4515]} zoom={3} style={{ height: '100%', width: '100%' }}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {geoData && (
        <GeoJSON data={geoData} style={getStyle} onEachFeature={onEachCountry} />
      )}
    </MapContainer>
  )
}

export default Map
