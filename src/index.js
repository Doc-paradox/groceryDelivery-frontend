import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import  ThemeProvider  from '@mui/material/styles/ThemeProvider';
import myTheme from './theme';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <ThemeProvider theme={myTheme}>
    <App />
  </ThemeProvider>
  </React.StrictMode>
);

