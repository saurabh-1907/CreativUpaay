import React from 'react';
import ReactDOM from 'react-dom/client'; // Use `react-dom/client` for React 18+
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';
import './styles/App.css';

// Create the root using `ReactDOM.createRoot`
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the application
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
