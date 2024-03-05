import PrintButton from "@/components/PrintButton ";
import PdfDownload from "@/components/download/PdfDownload";
import FirstPdf from "@/components/pdf/FirstPdf";
import SecondPdf from "@/components/pdf/SecondPdf";


export default function Home() {

  return (<main>
    <div className="flex flex-col  justify-center items-center ">
      <SecondPdf />
      <FirstPdf />
    </div>
    <PrintButton />
    <PdfDownload/>
  </main>
  );
}
