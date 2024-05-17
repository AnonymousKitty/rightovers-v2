import React from 'react';
import './App.css';
import Compost from './components/Compost';
import FoodSharing from './components/FoodSharing';
import Settings from "./components/Settings";
import WelcomePage from './components/WelcomePage';
import NearMe from './components/NearMe';
import NearYou from './components/NearYou';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mapbox-gl/dist/mapbox-gl.css';


function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/NearMePage" element={<NearMe />} />
          <Route path="/NearYou" element={<NearYou />} />
          <Route path="/compost" element={<Compost />} />
          <Route path="/foodsharing" element={<FoodSharing />}/>
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
