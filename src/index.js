import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import {
  CategoryProvider,
  FilterProvider,
  UserProvider,
  VideoProvider,
} from "./contexts";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <UserProvider>
        <FilterProvider>
          <VideoProvider>
            <CategoryProvider>
              <App />
            </CategoryProvider>
          </VideoProvider>
        </FilterProvider>
      </UserProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
