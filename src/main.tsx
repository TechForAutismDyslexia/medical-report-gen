import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Test from "./Test.tsx";
import "./index.css";
import {BrowserRouter, Routes, Route} from "react-router-dom"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename="reportgen">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>,
);
