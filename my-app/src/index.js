import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {Link, NavLink, BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';

import TestPage from './views/TestPage/TestPage';
import BuildingPage from './views/BuildingPage/BuildingPage';
import NotFound from './views/NotFound/NotFound';
import Navbar from './UniComps/Navbar/Navbar'

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar 
        items={[
          {text:"TestPage", link:"/TestPage"},
          {text:"Blog", link:"/Blog"}
        ]}
      />
      <Routes>
        <Route path="/" element={<BuildingPage />} />
        <Route path="/TestPage" element={<TestPage />} />
        <Route path="/Blog" element={<BuildingPage />} />
        <Route path="/NotFound" element={<NotFound />} />
        {/* <Navigate to="NotFound" /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
