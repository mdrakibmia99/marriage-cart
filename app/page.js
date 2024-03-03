import FirstPdf from "@/components/pdf/FirstPdf";
import SecondPdf from "@/components/pdf/SecondPdf";

export default function Home() {




  return (
    <main>

      <div className="flex flex-col  justify-center items-center gap-5">
          <SecondPdf/>
          <FirstPdf/>
      </div>
    </main>
  );
}
