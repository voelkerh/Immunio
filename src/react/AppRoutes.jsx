import React from 'react'

import { Route, Routes } from 'react-router-dom'

import Home from './Pages/Monitoring/Home'

import FirstTimeHome from './Pages/DataEntry/FirstTimeHome'

import CreatePerson from './Pages/DataEntry/CreatePerson'

import MapView from './Pages/Travel/MapView'
import Travel from './Pages/Travel/Travel'
import TravelOverview from './Pages/Travel/TravelOverview'
import CountryView from './Pages/Travel/CountryView'

import VaccinationCertificate from './Pages/VaccinationCertificate/VaccinationCertificate'
import VaccinationCertificateOverview from './Pages/VaccinationCertificate/VaccinationCertificateOverview'

import ProfileSettings from './Pages/Profile/ProfileSettings'
import Splash from './Pages/Splash/Splash'

import Error404 from './Pages/Error404'

const AppRoutes = () => (
  <Routes>

    <Route path="/" element={<Splash />} />

    <Route path="/home" element={<Home />} />

    <Route path="/first_home" element={<FirstTimeHome />} />

    <Route path="/create_person" element={<CreatePerson />} />

    <Route path="/settings" element={<ProfileSettings />} />

    <Route path="/vaccinationCertificate" element={<VaccinationCertificate />}>
      <Route index element={<VaccinationCertificateOverview />} />
    </Route>

    <Route path="/travel" element={<Travel />}>
      <Route index element={<TravelOverview />} />
      <Route path="map" element={<MapView />} />
      <Route path="country/:name" element={<CountryView />} />
    </Route>

    <Route path="*" element={<Error404 />} />

  </Routes>
)

export default AppRoutes
