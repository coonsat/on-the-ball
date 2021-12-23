import React from 'react';
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';

// Component import
import Home from './modules/components/Home';
import UnhandledError from './modules/components/Error';
import ScrollHandler from './modules/components/ScrollHandler';
import Navigation from './modules/components/Navigation';
import Sections from './modules/components/Sections';

function App() {
  return (
    // <div className="container font-link">
    //   <Routes>
    //       <Route path="/" element={<Home />} >
    //         <Route path="/error" element={<UnhandledError />} />  
    //       </Route> 
    //   </Routes>
    // </div>
    <BrowserRouter>
      <div className="container-new">
        <ScrollHandler />
        {/* <Navigation /> */}
        <Sections />
      </div>    
    </BrowserRouter>
  );
};

export default App;