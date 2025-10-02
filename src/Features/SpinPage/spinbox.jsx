
import { useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library} from '@fortawesome/fontawesome-svg-core';
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';
import {faBell, faEllipsisVertical, faInbox, faMessage, faPaperPlane, faXmark, faFileArrowUp} from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router";
library.add(faMessage, faPaperPlane, faBell, faXmark, faEllipsisVertical, faInbox, faFileArrowUp, faFacebookMessenger);

import img1 from '../../../public/Myimg/1.jpeg';


import { Wheel } from 'react-custom-roulette';



export default function SpinBox(){
      const [click, setClick] = useState(false);  
   
 const data = [
    { option: 'Free Delivery' },
    { option: '5% Off' },
    { option: '50% Off' },
    { option: '10% Off' },
    { option: 'Free Delivery' },
    { option: '20% Off' },
    { option: '99% Off' },
    { option: '10% Off' },
    { option: '8% Off' },
    { option: 'Free Delivery' },
    { option: '30% Off' },
    { option: '40% Off' },
    { option: '2% Off' },
    { option: '70% Off' },
  ];

  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };

      return(
         <div className="flex flex-col h-screen bg-gray-100">
 <div className='bg-gray-800 w-full p-4 flex justify-between items-center text-white fixed top-0 z-50'>
        <Link to="/" className='flex items-center gap-2'>
          <img src={img1} alt="profile" className='w-10 h-10 rounded-full object-cover'/>
          <span className='font-bold text-lg sm:text-xl'>Kawsar Restaurant</span>
        </Link>
        <div className='relative'>
          <FontAwesomeIcon className='cursor-pointer text-xl sm:text-2xl' icon={faEllipsisVertical} onClick={()=> setClick(!click)} />
          {click && (
            <div className='absolute right-0 mt-2 w-40 bg-gray-700 p-2 rounded-md flex flex-col gap-2 text-sm'>
              <a href="https://m.me/61576560495361" target='_blank' className='flex items-center gap-2'>
                <FontAwesomeIcon icon={faFacebookMessenger}/> Messenger
              </a>
              <a href="mailto:mdhossian72@gmail.com" target='_blank' className='flex items-center gap-2'>
                <FontAwesomeIcon icon={faInbox}/> Email
              </a>
            </div>
          )}
        </div>
      </div>










<div className="pt-20">
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        backgroundColors={['#3e3e3e', '#df3428']}
        textColors={['#ffffff']}
        outerBorderColor="#000"
        outerBorderWidth={5}
        innerRadius={0}
        radiusLineColor="#ffffff"
        radiusLineWidth={2}
        fontSize={20}
        onStopSpinning={() => {
          setMustSpin(false);
          alert('Winner: ' + data[prizeNumber].option);
        }}
      />
      <button
        className="mt-6 cursor-pointer px-4 py-2 bg-blue-600 text-white rounded-lg"
        onClick={handleSpinClick}
        disabled={mustSpin}
      >
        {mustSpin ? 'Spinning...' : 'Spin'}
      </button>
    </div>   
</div>









          </div>
     )
}