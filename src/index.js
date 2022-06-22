import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import LoginComponent from './components/login_authentication/LoginComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    < LoginComponent />
  </React.StrictMode>
);
