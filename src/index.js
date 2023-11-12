import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { SearchContext } from "./Home";

ReactDom.render(
  <BrowserRouter>
  <SearchContext.Provider>
    <App />
    </SearchContext.Provider>
  </BrowserRouter>,

  document.getElementById("root")
);
