import React, { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'

import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

import { useCountryStatus } from '../Providers/CountryStatusProvider'

const mapName = (geoJsonName) => {
  const dict = {
    'Czech Republic': 'czechia',
    'Republic of the Congo': 'congo',
    'Democratic Republic of the Congo': 'democratic-republic-of-congo',
    'People\'s Republic of China': 'china',
    'Myanmar': 'burma',
    'United States of America': 'united-states',
    'Antartica': 'antarctica'
  }
  if (geoJsonName in dict) return dict[geoJsonName]
  return geoJsonName.toLowerCase().replaceAll(' ', '-')
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
    navigate(`/travel/country/${countryName}`)
  }

  const onEachCountry = (feature, layer) => {
    const name = feature.properties.NAME_EN || feature.properties.name
    layer.on({
      click: () => handleCountryClick(name)
    })
  }

  const getStyle = (feature) => {
    const { NAME_EN } = feature.properties
    const countryName = mapName(NAME_EN)
    const { statusMap } = useCountryStatus()
    const { missing = [], recommended = [] } = statusMap[countryName] || {} // fallback if not yet loaded
    if (recommended.length === 0) {
      return {
        color: '#000',
        weight: 2,
        fillColor: '#808080',
        fillOpacity: 0.5
      }
    }
    return {
      color: '#000',
      weight: 2,
      fillColor: missing?.length === 0 ? '#4CAF50' : '#F44336',
      fillOpacity: 0.5
    }
  }

  return (
    <MapContainer
      center={[51.1657, 10.4515]}
      worldCopyJump
      zoom={3}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {geoData && (
        <GeoJSON
          data={geoData}
          style={getStyle}
          onEachFeature={onEachCountry}
        />
      )}
    </MapContainer>
  )
}

export default Map
