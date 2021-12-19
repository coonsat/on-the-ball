import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Component import
import Home from './modules/components/Home';
import UnhandledError from './modules/components/Error';

function App() {
  return (
    <div className="container">
      <Routes>
          <Route path="/" element={<Home />} >
            <Route path="/error" element={<UnhandledError />} />  
          </Route> 
      </Routes>
    </div>
  );
};

export default App;