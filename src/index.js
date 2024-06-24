import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
<<<<<<< HEAD
import { Provider } from 'react-redux';
import store from './redux/store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={store}>
    <App />
    </Provider>,

=======
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
>>>>>>> 149e74a1ffa880b579d88da04c8535242e3fda58
  </React.StrictMode>
);

