import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './reset.css';
import App from './app.js';
import Button from './componentes/button.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App p="Texto a ser estilizado" color="#0ffff8"/>
    <Button label="Baixar CV"/>
  </React.StrictMode>
  
);

