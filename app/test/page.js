'use client'
import { useEffect } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { FaUser } from "react-icons/fa";
import { RxHobbyKnife } from "react-icons/rx";
import { MdWifiCalling3, MdFamilyRestroom, MdCastForEducation } from "react-icons/md";
import { GoBook, PiShoppingBagOpenFill } from "react-icons/go";
import Image from "next/image";
import FirstPdf from '@/components/pdf/FirstPdf';

const personalInfo = {
    "Name": "Jane Doe",
    "Date of Birth": "15-01-1990",
    "Gender": "Female",
    "Marital Status": "Single",
    "Religion": "Hindu",
    "Caste": "Brahmin",
    "Height": "5 feet 10 inches",
    "Complexion": "Fair",
    "Blood Group": "A+"
};

// Define other objects similarly

const SecondPdf = () => {
    const A4Width = 595 ; // A4 width in pixels (210mm converted to pixels)
    const A4Height = 841 ; // A4 height in pixels (297mm converted to pixels)
    const backgroundColor = 'rgb(255, 250, 231)';

    useEffect(() => {
        const generatePdf = async () => {
            const pdf = new jsPDF('p', 'px', 'a4');
            const pageContent = document.getElementById('pdf-content');

            await html2canvas(pageContent, {
                scale: 1,
                scrollY: -window.scrollY,
                backgroundColor: null,
                useCORS: true
            }).then(canvas => {
                pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, A4Width, A4Height);
            });

            pdf.save('resume.pdf');
        };

        generatePdf();
    }, []);

    return (<main>

        <div id="pdf-content" className="w-full h-full" style={{ backgroundColor }}>
            <h1>hello all how are you </h1>
           <Image src={'/images/rakib.jpg'} width={200} height={300}  alt='test'/>
            <h1>hello all how are you </h1>
           <Image src={'/images/rakib.jpg'} width={200} height={300}  alt='test'/>
            <h1>hello all how are you </h1>
           <Image src={'/images/rakib.jpg'} width={200} height={300}  alt='test'/>
            <h1>hello all how are you </h1>
           <Image src={'/images/rakib.jpg'} width={200} height={300}  alt='test'/>
            <h1>hello all how are you </h1>
         
        </div>
    </main>
    );
};

export default SecondPdf;
