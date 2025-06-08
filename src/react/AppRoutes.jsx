import React from 'react'

import { Route, Routes } from 'react-router-dom'

import Home from './Pages/Home'

import MapView from './Pages/Reisen/MapView'
import Reisen from './Pages/Reisen/Reisen'
import ReisenOverview from './Pages/Reisen/ReisenOverview'

import Impfpass from './Pages/Impfpass/Impfpass'
import ImpfpassOverview from './Pages/Impfpass/ImpfpassOverview'

import Profile from './Pages/Profile/Profile'
import ProfileOverview from './Pages/Profile/ProfileOverview'
import ProfileSettings from './Pages/Profile/ProfileSettings'
import Splash from './Pages/Splash/Splash'

import Error404 from './Pages/Error404'

const AppRoutes = () => (
  <Routes>

    <Route path="/" element={<Splash />} />

    <Route path="/home" element={<Home />} />

    <Route path="/profile" element={<Profile />}>
      <Route path="" element={<ProfileOverview />} />
      <Route path="settings" element={<ProfileSettings />} />
    </Route>

    <Route path="/impfpass" element={<Impfpass />}>
      <Route path="" element={<ImpfpassOverview />} />

    </Route>

    <Route path="/reisen" element={<Reisen />}>
      <Route path="" element={<ReisenOverview />} />
      <Route path="map" element={<MapView />} />
    </Route>

    <Route path="*" element={<Error404 />} />

  </Routes>
)

export default AppRoutes
