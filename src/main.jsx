import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { store } from "./store";

import "./css/global.css";
import "./css/header.css";
import "./css/home.css";
import "./css/about.css";
import "./css/products.css";
import "./css/product-detail.css";
import "./css/doctor-samples.css";
import "./css/checkout.css";
import "./css/product-card.css";
import "./css/product-image.css";
import "./css/footer.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
