import React, { useState, DragEvent, ChangeEvent, useRef } from "react";
import * as XLSX from "xlsx";
import MyDocument from "./document";
import { Form } from "./types";
import { pdf } from "@react-pdf/renderer";
import JSZip from "jszip";
import spinnerSvg from "../assets/spinner.svg";
import StyledButton from "./styledButton";

const FileUploadBox: React.FC = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [jsonData, setJsonData] = useState<any[]>([]);
  const [selectedFile, setSelectedFile] = useState<File>();
  const [isprocessing, setIsProcessing] = useState<boolean>();
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
    setFinalZip(undefined);
    if (
      file &&
      (file.type ===
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ||
        file.type === "application/vnd.ms-excel" ||
        file.name.substring(file.name.length - 4, file.name.length) == "xlsx")
    ) {
      console.log(
        file.name.substring(file.name.length - 4, file.name.length) == "xlsx",
      );
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

      for (let i of json) {
        let testResults = workbook.Sheets[(i as any)["Name"]];
        (i as any)["WISC Test Results"] = XLSX.utils.sheet_to_json(testResults);
      }
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
    try {
      setIsProcessing(true);
      console.log(jsonData);
      const zip = new JSZip();

      let index: number, form;
      for ([index, form] of jsonData.entries()) {
        form = new Form(form);

        console.log(form);

        let pdfBlob = await pdf(<MyDocument form={form} />).toBlob();
        let fileName = `form ${index + 1} ${form.name}.pdf`;
        zip.file(fileName, pdfBlob);
      }
      let zipBlob = await zip.generateAsync({ type: "blob" });
      setFinalZip(zipBlob);
      setIsProcessing(false);
    } catch (error) {
      console.error(error);
      if (error instanceof Error) {
        alert(error.message);
      }
      setIsProcessing(false);
    }
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
          margin: "0 auto",
          position: "relative",
        }}
        className="flex items-center justify-center flex-col w-[300px] min-h-[300px] sm:w-[400px]"
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
            <StyledButton color="#007bff" onClick={handleButtonClick}>
              Select File
            </StyledButton>
          </div>
        )}

        {selectedFile && (
          <div style={{ textAlign: "left" }} className="my-5">
            <p>Selected File: {selectedFile.name}</p>
          </div>
        )}

        {selectedFile &&
          !finalZip &&
          (!isprocessing ? (
            <StyledButton color="#007bff" onClick={handlePdfGeneration}>
              Generate Report
            </StyledButton>
          ) : (
            <StyledButton color="#007bff" onClick={() => {}}>
              <div>
                {" "}
                <img
                  className="size-7 animate-spin inline-block"
                  src={spinnerSvg}
                  alt=""
                />
                Processing...
              </div>
            </StyledButton>
          ))}
        {finalZip && (
          <>
            <a
              href={URL.createObjectURL(finalZip)}
              download={`forms ${Date.now()}.zip`}
            >
              <StyledButton color="#01d30f" onClick={() => {}}>
                Download Forms
              </StyledButton>
            </a>
          </>
        )}
      </div>
    </div>
  );
};

export default FileUploadBox;
