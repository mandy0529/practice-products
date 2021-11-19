import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import AppProvider from './contexts/AppContext';
import FilterProvider from './contexts/FilterContext';

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <FilterProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </FilterProvider>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
