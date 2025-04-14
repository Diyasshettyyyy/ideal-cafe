import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'; // Keep this line from your local changes
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import reportWebVitals from './reportWebVitals'; // Keep this line from your local changes

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
