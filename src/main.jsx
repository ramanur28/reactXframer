import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";
// import mouse context provider
import Provider from "./mouseContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>
);
