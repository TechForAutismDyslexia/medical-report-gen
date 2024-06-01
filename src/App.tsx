import React from "react";
import ReactDOM from "react-dom";
import { PDFViewer } from "@react-pdf/renderer";
import MyDocument from "./document";
import FileUploadBox from "./components/fileUploadBox";

import "./App.css"

const App = () => (
  <div className="flex justify-end items-center">
    {/* <PDFViewer height={1160} width={800}>
    <MyDocument />
  </PDFViewer> */}

  <FileUploadBox />

  
  </div>
);

export default App;
