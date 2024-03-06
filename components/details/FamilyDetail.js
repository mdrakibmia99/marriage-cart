import React from 'react';

const familyDetails = {

    "Father Name": "Prakash Varma",
    "Father's Job": "Govt. Servant",
    "Mother Name": "Roopashree Varma",
    "Brother Name": "TejasviSurya Varma",
    "Brother's Job": "Pursuing M.B.B.S.",
    "Sister Name": "Akshatha Varma",
}
const FamilyDetail = () => {

    return (
        <div className='w-full'>
        <h1 className='text-xl font-semibold pb-2 text-[#e0c86e]'>Family Details</h1>
        <div className='flex flex-col gap-1 text-black'>

        {
            Object.entries(familyDetails)?.map(([key, value]) =>(
                <div class="flex w-full" key={key}>
                <div class="w-4/12">{key}</div>
                <div class="w-1/12">:</div>
                <div class="w-7/12">{value}</div>
            </div>
            ))
        }
        </div>
    </div>
    );
};

export default FamilyDetail;