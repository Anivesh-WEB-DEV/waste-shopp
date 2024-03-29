import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import store from "./components/Redux/store.js";
import { Provider } from "react-redux";
import { Auth0Provider } from "@auth0/auth0-react";
// import SearchBar from "./components/NavCard/SearchBar.jsx";
import App from "./App.jsx";
// import Tests from './Test/Tests.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="e-commerce3545.us.auth0.com"
    clientId="bLI4nRccfIQsCr0AH2OHMD6orZmBZ6yO"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <Provider store={store}>
      {/* <SearchBar/> */}
      <App />
    </Provider>
  </Auth0Provider>
);
