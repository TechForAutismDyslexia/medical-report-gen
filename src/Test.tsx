import createReport from "docx-templates";
import StyledButton from "./components/styledButton";
import { useState } from "react";
// import docxFileUrl from "./assets/test.docx";

async function fetchDocxFile() {
  // Fetch the .docx file from the public folder
  const response = await fetch("reportgen/test.docx");

  // Convert the response to an ArrayBuffer
  const arrayBuffer = await response.arrayBuffer();
  const uint8array = new Uint8Array(arrayBuffer);
  // Create a Buffer from the ArrayBuffer

  return uint8array;
}

async function generateDoc() {
  const template = await fetchDocxFile();
  const report = await createReport({
    template,
    data: {
      title: "MyTitle",
      fname: "John",
      lname: "Doe",
    },
    cmdDelimiter: ["«", "»"],
  });

  const reportBlob = new Blob([report]);

  return URL.createObjectURL(reportBlob);
}

export default function Test() {
  const [objectUrl, setObjectUrl] = useState("");

  generateDoc().then((objectUrl) => {
    setObjectUrl(objectUrl);
  });

  return (
    <>
      <div className="items-center justify-center">
        {objectUrl && (
          <a href={objectUrl}>
            <StyledButton color="#01d30f" onClick={() => {}}>
              Download Forms
            </StyledButton>
          </a>
        )}
      </div>
    </>
  );
}
