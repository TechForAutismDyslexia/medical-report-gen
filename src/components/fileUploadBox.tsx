import React, { useState, DragEvent, ChangeEvent, useRef } from 'react';
import * as XLSX from 'xlsx';

const FileUploadBox: React.FC = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [jsonData, setJsonData] = useState<any[]>([]);
  const [selectedFile, setSelectedFile] = useState<File>()
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
    if (file && (file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' || file.type === 'application/vnd.ms-excel')) {
      readExcelFile(file);
      setSelectedFile(file)
    } else {
      alert('Please upload a valid Excel file.');
    }
  };

  const readExcelFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const data = new Uint8Array(e.target?.result as ArrayBuffer);
      const workbook = XLSX.read(data, { type: 'array' });
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

  return (
    <div
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      style={{
        border: '2px dashed #ccc',
        borderRadius: '10px',
        padding: '20px',
        textAlign: 'center',
        width: '300px',
        margin: '0 auto',
      }}
    >
      {isDragging ? (
        <p>Release to drop files here</p>
      ) : (
        <div>
          <input
            type="file"
            id="file"
            style={{ display: 'none' }}
            onChange={handleFileSelect}
            accept=".xlsx,.xls"
            ref={fileInputRef}
          />
          <button
            onClick={handleButtonClick}
            style={{
              backgroundColor: '#007bff',
              color: '#fff',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Select File
          </button>
        </div>
      )}
      {jsonData.length > 0 && (
        <div style={{ marginTop: '20px', textAlign: 'left' }}>
          <pre>{JSON.stringify(jsonData, null, 2)}</pre>
        </div>
      )}
      {selectedFile && (
        <div style={{ marginTop: '20px', textAlign: 'left' }}>
          <p>Selected File: {selectedFile.name}</p>
          {/* You can add more file details or processing logic here */}
        </div>
      )}
    </div>
  );
};

export default FileUploadBox;
