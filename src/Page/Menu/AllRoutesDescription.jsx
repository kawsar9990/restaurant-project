
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

import img from '../../../public/Svg/5.jpg'

import { useState, useEffect } from 'react';


export default  function MenuAllDescription(){
  
    const [reviews, setReviews] = useState([]);
     const [newReview, setnewReview] = useState({
          name: '',
          email: '',
          comment: '',
          rating: 0,
     })


    useEffect(()=> {
     const storeReview = localStorage.getItem('reviewall');
     if(storeReview){
          setReviews(JSON.parse(storeReview))
     }
    },[])
 
  

     useEffect(()=> {
     localStorage.setItem('reviewall', JSON.stringify(reviews))
    },[reviews])
 

    const handleInput = (e) => {
     const {name, value} = e.target;
     setnewReview({...newReview, [name]: value})
    }

    const handleRatingChange = (event, value) => {
     setnewReview({...newReview, rating: value})
    }
  

    const handlesubmit = () => {
     if(!newReview.name || !newReview.email || !newReview.comment || !newReview.rating === 0){
          return;
     }
     const reviewAdd = {...newReview, date: new Date().toLocaleDateString()};
     setReviews([reviewAdd, ...reviews]);
     setnewReview({ 
          name: '',
          email: '',
          comment: '',
          rating: 0,})
    }




     return(
          <div className='bg-white'>

<div className='mt-10 p-5'>


<Tabs>
    <TabList>
      <Tab>Description</Tab>
      <Tab>Reviews ({reviews.length +2})</Tab>
    </TabList>






    <TabPanel>
      <div>
          <p>
কাওসার রেস্টুরেন্টে আমরা বিশ্বাস করি – “ভালো খাবার, ভালো মনের চাবিকাঠি।” তাই প্রতিটি পদ প্রস্তুত করা হয় সেরা মানের উপকরণ ব্যবহার করে এবং দক্ষ শেফদের হাতের ছোঁয়ায়। আমাদের খাবারের বৈচিত্র্যই আমাদের শক্তি। দেশি ঐতিহ্যবাহী খাবার থেকে শুরু করে ইতালিয়ান পাস্তা, আমেরিকান বার্গার, চাইনিজ নুডলস কিংবা মজাদার পিজ্জা – সবকিছুই পাবেন এক ছাদের নিচে।          </p>
      </div>
    </TabPanel>








    <TabPanel>
  
  <div>


<div className='pb-20'>

     <div className='flex flex-row pt-10 gap-3 items-center'>
          <div className='flex'>
               <img src={img} alt="" className='rounded-full w-15'/>
          </div>
          <div className='w-full'>
              <div className='flex items-center justify-between w-full'>
                <p className='flex gap-2 items-center'><p className='font-bold'>Admin</p><p className=' text-[10px] text-gray-400'>- 20 March, 2025</p></p>
               <p>  <Stack spacing={3}>
            <Rating name="half-rating" readOnly defaultValue={3} precision={0.5} />
          </Stack></p>
              </div>
              <div>
               <p className='text-gray-500 font-semibold'>So Beautifully</p>
              </div>
          </div>
     </div>




       <div className='flex flex-row pt-10 gap-3 items-center'>
          <div className='flex'>
               <img src={img} alt="" className='rounded-full w-15'/>
          </div>
          <div className='w-full'>
              <div className='flex items-center justify-between w-full'>
                <p className='flex gap-2 items-center'><p className='font-bold'>Admin</p><p className='text-[10px] text-gray-400'>(verified owner) - 20 March, 2025</p></p>
               <p className='text-[10px]'>  <Stack spacing={3}>
            <Rating className='text-[10px]' name="half-rating" readOnly defaultValue={3} precision={0.5} />
          </Stack></p>
              </div>
              <div>
               <p className='text-gray-500 font-semibold'>Test</p>
              </div>
          </div>
     </div>





<div className="">
{
  reviews.map((re, i)=> (
               
       <div key={i} className='flex flex-row pt-10 gap-3 items-center'>
          <div className='flex'>
               <img src={img} alt="" className='rounded-full w-15'/>
          </div>
          <div className='w-full'>
              <div className='flex items-center justify-between w-full'>
                <p className='flex gap-2 items-center'><p className='font-bold'>{re.name}</p><p className='text-gray-400 text-[10px]'>{re.date}</p></p>
               <p>  <Stack spacing={3}>
            <Rating name="half-rating" 
            readOnly value={re.rating}
             precision={0.5} />
          </Stack></p>
              </div>
              <div>
               <p className='text-gray-500 font-semibold'>{re.comment}</p>
              </div>
          </div>
     </div>
          ))
}

</div>


</div>











<div className='flex flex-col gap-3 p-3'>
     <p className='font-bold text-2xl'>Add a review</p>
     <p className='text-gray-400'>Your email address will not be published. Required fields are marked *</p>
     <p className='text-gray-400'>Your rating *</p>
    
    
    
    
     <p className=''> 
     <Stack spacing={1}>
      <Rating 
      name="half-rating" 
      value={newReview.rating}
      precision={1} 
      onChange={handleRatingChange}/>
    </Stack>
     </p>

     <div className='flex flex-col gap-3'>



      <div className='flex flex-col 5'>
          <label htmlFor="comment" className='cursor-pointer'>Your review *</label>
          <textarea name="comment" 
          id='comment'
          value={newReview.comment}
          onChange={handleInput}
          className='rounded-md border-1 border-gray-300 focus p-3 mt-2 mb-2'></textarea>
      </div> 
       
       
        <div className='flex flex-col '> 
          <label htmlFor="name"  className='cursor-pointer'>Name *</label>
         <input type="text"
         name='name'
         id='name'
         value={newReview.name}
         onChange={handleInput}
         className='rounded-md border-1 border-gray-300 focus p-3 mt-2 mb-2'/>
      </div> 
      
      
        <div className='flex flex-col '>
          <label htmlFor="email"  className='cursor-pointer font-bold'>Email *</label>
          <input type="email"
          name='email'
          id='email'
          value={newReview.email}
          onChange={handleInput}
          className='rounded-md border-1 border-gray-300 focus p-3 mt-2 mb-2'  />
      </div>  




      <div className='flex flex-row items-start gap-2'>
          <input type="checkbox" name="ck" id="ck" />
          <label htmlFor="ck" style={{userSelect: "none"}}>             
          Save my name, email, and website in this browser for the next time I comment.
          </label>
      </div>

      
      
      <div className='mt-3'>
          <button 
          onClick={handlesubmit}
          className='bg-orange-400 w-full rounded-md p-2 text-white font-bold cursor-pointer'>
               Submit
          </button>
      </div>

     </div>
</div>
  </div>

    </TabPanel>









  </Tabs>




</div>

          </div>
     )
}