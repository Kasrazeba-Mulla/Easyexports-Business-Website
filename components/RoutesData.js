import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./MainPage/Main";
import FeaturesPage from "./FeaturesPages/FeaturesPage";

function RoutesData() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Main />
            </>
          }
        />
        <Route
          path="/features"
          element={
            <>
              <FeaturesPage />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesData;
