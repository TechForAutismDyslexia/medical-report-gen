import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
// import { PDFViewer } from "@react-pdf/renderer";
import FileUploadBox from "./components/fileUploadBox";
import ReportGenPortal from "./pages/ReportGenPortal";
// import MyDocument from "./components/document/document";

const App = () => {
  // return (
  //   <PDFViewer height={800} width={600}>
  //     <MyDocument />
  //   </PDFViewer>
  // );
  return (
    <BrowserRouter basename="reportgen">
      <Routes>
        <Route path="/">
          <Route path="/" element={<ReportGenPortal />} />
          <Route path="generate" element={<FileUploadBox />} />
        </Route>
        {/* <Route path="/test" element={<Test />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
