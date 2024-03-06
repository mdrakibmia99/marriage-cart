'use client'
import { PDFExport } from "@progress/kendo-react-pdf";
import React, { useRef } from "react";
import SecondPdf from "../page";
import FirstPdf from "@/components/pdf/FirstPdf";

const Page = () => {
  const pdfExportComponent = useRef(null);

  const handleExportWithComponent = (event) => {
    pdfExportComponent.current.save();
  };

  return (
    <div className="app-content">
      <button primary={true} onClick={handleExportWithComponent}>
        Export with Component
      </button>
      <PDFExport ref={pdfExportComponent} paperSize="A4">
        {/* <div> */}
         <FirstPdf/>
        {/* </div> */}
      </PDFExport>
    </div>
  );
};

export default Page;