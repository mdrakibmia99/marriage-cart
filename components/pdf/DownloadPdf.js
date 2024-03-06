'use client'
import { PDFExport } from "@progress/kendo-react-pdf";
import React, { useRef } from "react";
import FirstPdf from "./FirstPdf";


const DownloadPdf = () => {
  const pdfExportComponent = useRef(null);

  const handleExportWithComponent = (event) => {
    pdfExportComponent.current.save();
  };

  return (
    <div className="app-content">
      <button primary={true} onClick={handleExportWithComponent} className="border py-2 px-3 text-lg hover:scale-[0.98] rounded-xl bg-slate-600 text-white duration-200 ease-in-out">
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

export default DownloadPdf;