import FsLightbox from "fslightbox-react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
library.add(faMagnifyingGlass)

import img1 from '../../../public/myimg/1.jpeg'
import img2 from '../../../public/myimg/2.jpeg'
import img3 from '../../../public/myimg/3.jpeg'
import img4 from '../../../public/myimg/4.jpeg'

export default function About2nd(){
    const [toggler, setToggler] = useState(false);

     const image = [img1, img2, img3, img4]

     const handleOpen = (i) =>{
          setToggler(!toggler)
     }

     return(
          <div className="pt-20 bg-[#222023] w-full text-white">

<div className="p-10">

<h1 className="text-center font-bold text-5xl flex flex-row justify-center gap-3 text-[#E68556]">About <p className="text-[#EAE5D6]">Us</p></h1>
<p className="text-center font-bold pt-5 text-[#E5E1D2]">Engineer MD Kawsar Ahmed is a passionate and highly skilled Full-Stack Web Developer with expertise in building modern, responsive, and user-friendly web applications.</p>

<div className="pt-10 flex flex-col gap-10 xl:flex-row">

<div>
     <p className="flex gap-2">
          <p className="bg-amber-50 h-10 p-2 text-black font-bold">Q</p>
          <p className="capitalize text-[#949DA2] font-black">On the frontend, Kawsar is proficient in HTML, CSS, JavaScript, and frameworks such as React and Next.js. He focuses on creating clean, responsive, and accessible designs that ensure excellent user experience across all devices. On the backend, he is experienced with Node.js, Express, PHP, and databases like MySQL and MongoDB, enabling him to build secure, scalable, and efficient systems.</p>
     </p>
</div>

<div>
     <p className="flex gap-2">
          <p className="bg-amber-50 h-10 p-2 text-black font-bold">W</p>
          <p  className="capitalize text-[#949DA2] font-black">Engineer MD Kawsar Ahmed continues to grow as a developer, keeping up with the latest industry trends and technologies. His goal is to build impactful web applications that empower businesses and create meaningful digital experiences.Beyond technical skills, Kawsar is a problem-solver who values collaboration, adaptability, and clear communication.</p>
     </p>
</div>

</div>





<div className="pt-20  grid grid-cols-2 gap-5 xl:grid-cols-4  justify-center items-center">
{image.map((imm,i)=> (
     <div key={i}
     className="relative group rounded-md overflow-hidden">

          <img src={imm} alt="ks" className="w-full h-auto roun-md"/>


<div 
className="absolute inset-0 bg-black/50 bg-bg-opacity-60 flex flex-col
justify-center items-center opacity-0 group-hover:opacity-100
transition-opacity duration-300" style={{userSelect: 'none'}}>
     <p className="text-white text-lg font-semibold mb-2">  Er. MD Kawsar Ahmed</p>
     <button 
     onClick={()=> handleOpen(i)}
     className="text-white text-2xl cursor-pointer">
             <FontAwesomeIcon icon={faMagnifyingGlass} />
     </button>
</div>
     </div>
))}

{/* fsblightbox  */}
  <FsLightbox toggler={toggler} sources={image} />

</div>



</div>
          </div>
     )
}