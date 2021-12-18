import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Component import
import Login from './modules/components/Login';
import NotFound from './modules/components/NotFound';
import UnhandledError from './modules/components/UnhandledError';


function App() {
  return (
    <Routes>
      <Route>
        <Route path="/login" element={<Login />} />
        <Route path="/unhandlederror" element={<UnhandledError />} />
        <Route path="/notfound" element={<NotFound />} />
      </Route>    
    </Routes>
  );
} 

export default App;
