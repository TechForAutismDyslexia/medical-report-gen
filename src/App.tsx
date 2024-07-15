import "./App.css";
import { PDFViewer } from "@react-pdf/renderer";
import FileUploadBox from "./components/fileUploadBox";
import MyDocument from "./components/document/document";

const App = () => {
  return (
    <PDFViewer height={800} width={600}>
      <MyDocument />
    </PDFViewer>
  );
  // return <FileUploadBox />;
};

export default App;
