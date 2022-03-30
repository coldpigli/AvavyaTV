import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { CategoryProvider, FilterProvider, VideoProvider } from "./contexts";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <FilterProvider>
        <VideoProvider>
          <CategoryProvider>
            <App />
          </CategoryProvider>
        </VideoProvider>
      </FilterProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
