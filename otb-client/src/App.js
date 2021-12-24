import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Component import
import Home from './modules/components/Home';
import Login from './modules/components/Login';
import NotFound from './modules/components/NotFound';
import Sidebar from './modules/components/Sidebar';
import UnhandledError from './modules/components/UnhandledError';
import Logout from './modules/components/Logout';

function App() {
  return (
    <div id="root">
      <Sidebar />
      <Routes>
        <Route>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />}/>
          <Route path="/unhandlederror" element={<UnhandledError />} />
          <Route path="/notfound" element={<NotFound />} />
        </Route>    
      </Routes>
    </div>
  );
} 

export default App;
