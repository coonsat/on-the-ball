import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Component import
import Home from './modules/components/Home';
import Schedule from './modules/components/Schedule';
import Contracts from './modules/components/Contracts';
import Content from './modules/components/Content';
import Reports from './modules/components/Reports';
import Invoicing from './modules/components/Invoicing';
import Notification from './modules/components/Notification';
import Settings from './modules/components/Settings';
import Login from './modules/components/Login';
import NotFound from './modules/components/NotFound';
import Sidebar from './modules/components/Sidebar';
import UnhandledError from './modules/components/UnhandledError';
import Logout from './modules/components/Logout';

function App() {
  return (
    <div className="container">
      <Sidebar />
      <Routes>
        <Route>
          <Route path="/" element={<Home />}/>
          <Route path="/schedule" element={<Schedule />}/>
          <Route path="/contracts" element={<Contracts />}/>
          <Route path="/content" element={<Content />}/>
          <Route path="/reports" element={<Reports />}/>
          <Route path="/invoicing" element={<Invoicing />}/>
          <Route path="/notification" element={<Notification />}/>
          <Route path="/settings" element={<Settings />}/>
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
