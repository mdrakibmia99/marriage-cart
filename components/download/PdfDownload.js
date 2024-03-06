"use client";
import generatePDF, { Resolution, Margin, Options } from "react-to-pdf";
import FirstPdf from "../pdf/FirstPdf";

const options = {
  filename: "advanced-example.pdf",
  method: "save",
  resolution: Resolution.EXTREME,
};

// you can also use a function to return the target element besides using React refs
const getTargetElement = () => document.getElementById("container");

const downloadPdf = () => generatePDF(getTargetElement);

const PdfDownload = () => {
  return (
    <div>
      <button onClick={downloadPdf}>Download PDF</button>
      <div id="container">
          <FirstPdf />
      </div>
    </div>
  );
};

export default PdfDownload;
