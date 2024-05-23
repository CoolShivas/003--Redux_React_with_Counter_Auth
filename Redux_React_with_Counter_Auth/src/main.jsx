import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
// import counterStore from './components/store/index.js';
import counterStore from './components/store/index.js';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={counterStore}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
