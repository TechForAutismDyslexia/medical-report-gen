import React, { useState, DragEvent, ChangeEvent, useRef } from "react";
import * as XLSX from "xlsx";
import MyDocument from "./document";
import { Form } from "./types";
import { pdf } from "@react-pdf/renderer";
import JSZip from "jszip";

const FileUploadBox: React.FC = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [jsonData, setJsonData] = useState<any[]>([]);
  const [selectedFile, setSelectedFile] = useState<File>();
  const [finalZip, setFinalZip] = useState<Blob>();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragEnter = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    handleFile(files[0]);
  };

  const handleFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFile(files[0]);
    }
  };

  const handleFile = (file: File) => {
    if (
      file &&
      (file.type ===
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ||
        file.type === "application/vnd.ms-excel")
    ) {
      setSelectedFile(file);
      readExcelFile(file);
    } else {
      alert("Please upload a valid Excel file.");
    }
  };

  const readExcelFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const data = new Uint8Array(e.target?.result as ArrayBuffer);
      const workbook = XLSX.read(data, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const json = XLSX.utils.sheet_to_json(worksheet);
      setJsonData(json);
      console.log(json);
    };
    reader.readAsArrayBuffer(file);
  };

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handlePdfGeneration = async () => {
    console.log(jsonData)
    const zip = new JSZip();

    let index, form;
    for ([index, form] of Object.entries(jsonData)) {
      form = new Form(form)
      let pdfBlob = await pdf(<MyDocument form={form} />).toBlob();
      let fileName = `form ${index+1} ${form.name}.pdf`;
      zip.file(fileName, pdfBlob);
    }
    let zipBlob = await zip.generateAsync({ type: "blob" });
    setFinalZip(zipBlob);
  };

  return (
    <div
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className="flex h-max w-max"
    >
      <div
        style={{
          border: "2px dashed #ccc",
          borderRadius: "10px",
          padding: "20px",
          textAlign: "center",
          width: "400px",
          minHeight: "300px",
          margin: "0 auto",
          position: "relative",
        }}
        className="flex items-center justify-center flex-col"
      >
        {isDragging ? (
          <p>Release to drop files here</p>
        ) : (
          <div>
            <input
              type="file"
              id="file"
              style={{ display: "none" }}
              onChange={handleFileSelect}
              accept=".xlsx,.xls"
              ref={fileInputRef}
            />
            <button
              onClick={handleButtonClick}
              style={{
                backgroundColor: "#007bff",
                color: "#fff",
              }}
              className="justify-center items-center px-5 py-2.5 border-none rounded-md cursor-pointer"
            >
              Select File
            </button>
          </div>
        )}
        {/* {jsonData.length > 0 && (
          <div style={{ marginTop: "20px", textAlign: "left" }}>
            <pre>{JSON.stringify(jsonData, null, 2)}</pre>
          </div>
        )} */}
        {selectedFile && (
          <>
            <div style={{ marginTop: "20px", textAlign: "left" }}>
              <p>Selected File: {selectedFile.name}</p>
              {/* You can add more file details or processing logic here */}
            </div>
          </>
        )}

        {selectedFile && !finalZip && (
          <button
            onClick={handlePdfGeneration}
            style={{
              backgroundColor: "#007bff",
              color: "#fff",
            }}
            className="justify-center items-center mt-[20px] px-5 py-2.5 border-none rounded-md cursor-pointer active:border-none active:bg-[#007bff]"
          >
            Convert to forms
          </button>
        )}
        {finalZip && (
          <>
            <a href={URL.createObjectURL(finalZip)} download={`forms ${(Date.now())}.zip`}>
              <button
                style={{
                  backgroundColor: "#01d30f",
                  color: "#fff",
                }}
                className="justify-center items-center mt-[20px] px-5 py-2.5 border-none rounded-md cursor-pointer active:border-none active:bg-[#007bff]"
              >
                Download Forms
              </button>
            </a>
          </>
        )}
      </div>
    </div>
  );
};

export default FileUploadBox;
