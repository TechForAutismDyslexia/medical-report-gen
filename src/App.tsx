import { PDFViewer } from "@react-pdf/renderer";
import MyDocument from "./components/document";
import FileUploadBox from "./components/fileUploadBox";
import { Form } from "./components/types";
import "./App.css";

const App = () => {
  return (
    // <div className="flex justify-end items-center">
    // <PDFViewer height={1160} width={800}>
    //   <MyDocument  />
    // </PDFViewer>
    // </div>

    <FileUploadBox />
  );
};

export default App;
