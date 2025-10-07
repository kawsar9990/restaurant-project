import img1 from '../../../../public/Image/Blog_img_12-413x220.jpg'
import img2 from '../../../../public/Image/Blog_img_11-413x220.jpg'
import img3 from '../../../../public/Image/Blog_img_9-413x220.jpg'
import img4 from '../../../../public/Image/Blog_img_10-413x220.jpg'
import img5 from '../../../../public/Image/Blog_img_8-413x220.jpg'
import img6 from '../../../../public/Image/Blog_img_7-413x220.jpg'
import img7 from '../../../../public/Image/Blog_img_5-413x220.jpg'
import img8 from '../../../../public/Image/Blog_img_6-413x220.jpg'
import img9 from '../../../../public/Image/Blog_img_4-413x220.jpg'
import img10 from '../../../../public/Image/Blog_img_1-413x220.jpg'
import img11 from '../../../../public/Image/Blog_img_2-413x220.jpg'
import img12 from '../../../../public/Image/Blog_img_3-413x220.jpg'


import img13 from '../../../../public/Image/single-page-img3.jpg'
import img14 from '../../../../public/Image/single-page-img1.jpg'
import img15 from '../../../../public/Image/single-page-img2.jpg'


import Reply from './BlogReply'

import { useState } from 'react'
import { useNavigate } from 'react-router'
import { FadeLoader } from "react-spinners";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCalendarDays, faComment, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router'

library.add(faCalendarDays, faComment,faUser, faMagnifyingGlass)

export default function PostPage(){


const navigate = useNavigate();
const [loading, setLoading] = useState(false);

   const handleLoading  = (url) => {
     setLoading(true);
     setTimeout(() => {
        setLoading(false)  
        navigate(url)
     }, 300);
   }


    


   const product = [
     {
          id: 1,
          img: img1,
          category: "Food",
          name: "How My Love for Gourmet Coffee Created Our Signature Blends",
          date: "10 Dec, 2021",
          title: "Massa a of est sit commodo convallis auctor aliquet ready works an more sem. Massa est commodo dummy convallis.…",
     },
      {
          id: 2,
          img: img2,
          category: "Food",
          name: "Why My Experience with Home Cooking Influenced Our Recipes",
          date: "20 Dec, 2022",
          title: "Massa a of est sit commodo convallis auctor aliquet ready works an more sem. Massa est commodo dummy convallis.…",
     },
      {
          id: 3,
          img: img3,
          category: "Food",
          name: "How My Passion for Gluten-Free Baking Expanded Our Reach",
          date: "18 Nov, 2025",
          title: "Massa a of est sit commodo convallis auctor aliquet ready works an more sem. Massa est commodo dummy convallis.…",
     },
      {
          id: 4,
          img: img4,
          category: "Food",
          name: "Why My Culinary Adventures Led to Unique Menu Items",
          date: "20 Mar, 2022",
          title: "Massa a of est sit commodo convallis auctor aliquet ready works an more sem. Massa est commodo dummy convallis.…",
     },
      {
          id: 5,
          img: img5,
          category: "Food",
          name: "How My Discovery of Local Farmers Inspired Our Products",
          date: "20 Mar, 2023",
          title: "Massa a of est sit commodo convallis auctor aliquet ready works an more sem. Massa est commodo dummy convallis.…",
     },
      {
          id: 6,
          img: img6,
          category: "Food",
          name: "How My Journey with Organic Produce Shaped Our Brand",
          date: "20 Mar, 2020",
          title: "Massa a of est sit commodo convallis auctor aliquet ready works an more sem. Massa est commodo dummy convallis.…",
     },
      {
          id: 7,
          img: img7,
          category: "Food",
          name: "Why My Fascination with Artisan Bread Became Our Bestseller",
          date: "05 Mar, 2022",
          title: "Massa a of est sit commodo convallis auctor aliquet ready works an more sem. Massa est commodo dummy convallis.…",
     },
      {
          id: 8,
          img: img8,
          category: "Food",
          name: "How My Interest in Exotic Flavors Enhanced Our Offerings",
          date: "20 Mar, 2025",
          title: "Massa a of est sit commodo convallis auctor aliquet ready works an more sem. Massa est commodo dummy convallis.…",
     },
      {
          id: 9,
          img: img9,
          category: "Food",
          name: "Why My Experiment with Vegan Recipes Boosted Sales",
          date: "20 Mar, 2024",
          title: "Massa a of est sit commodo convallis auctor aliquet ready works an more sem. Massa est commodo dummy convallis.…",
     },
      {
          id: 10,
          img: img10,
          category: "Food",
          name: "How My Love of Sweet & Salty Into Our Signature TreatX",
          date: "21 Mar, 2025",
          title: "Massa a of est sit commodo convallis auctor aliquet ready works an more sem. Massa est commodo dummy convallis.…",
     },
      {
          id: 11,
          img: img11,
          category: "Food",
          name: "Why My Passion for Spices Transformed Our Menu",
          date: "4 Oct, 2024",
          title: "Massa a of est sit commodo convallis auctor aliquet ready works an more sem. Massa est commodo dummy convallis.…",
     },
      {
          id: 12,
          img: img12,
          category: "Food",
          name: "How My Obsession with Fresh Ingredients Elevated Our Dishes",
          date: "4 Mar, 2025",
          title: "Massa a of est sit commodo convallis auctor aliquet ready works an more sem. Massa est commodo dummy convallis.…",
     },
   ]
   
   const LinkButton = [
     "Business",
     "Delivery",
     "Food",
     "Online",
     "Online Food"
   ]

   


const [searchItem, setSearchItem] = useState("");
const [selectpost, setselectpost] = useState(
     product.find(post => post.id === 1)
)


 
const handleSelctPost = (item) => {
     setselectpost(item);
}

 

   
   
     return(
          <div className='bg-white'>


{loading && (
     <div className="fixed inset-0 flex justify-center items-center backdrop-blur-sm bg-black/30 z-50">
           <FadeLoader color="#f97316" />
     </div>
)}







<div className='pt-10 pb-10'>



<div className='grid grid-cols-1 gap-5 xl:gap-1 xl:grid-cols-[2fr_1fr] p-2'>




<div id='top'>

<div className='p-3'>
<div className='flex flex-col gap-3' >
     <p className="pt-20"><Link  to={`/blogsingle/${selectpost.id}`} className=' rounded-lg bg-orange-500 p-2 text-white font-bold w-20 text-center cursor-pointer'>{selectpost.category}</Link></p>
     <p><Link  to={`/blogsingle/${selectpost.id}`}className='md:text-2xl font-bold  capitalize hover:text-red-400'>{selectpost.name}</Link></p>
     <div className='flex justify-between'>
          <p className='flex'>
               <p className='flex gap-2 items-center text-gray-500 hover:text-red-600'><FontAwesomeIcon icon={faUser} /></p>
               <p className='flex gap-2 text-gray-500 hover:text-red-600'>By Admin</p>
          </p>
          <p className='flex'>
               <p className='flex gap-2 items-center text-gray-500 hover:text-red-600'><FontAwesomeIcon icon={faCalendarDays} /></p>
               <p className='flex gap-2 text-gray-500 hover:text-red-600'>{selectpost.date}</p>
          </p>
          <p className='flex'>
               <p className='flex gap-2 items-center text-gray-500 hover:text-red-600'><FontAwesomeIcon icon={faComment} /></p>
               <p className='flex gap-2 text-gray-500 hover:text-red-600'>0</p>
          </p>
     </div>
</div>

<div className='mt-10 mb-10 w-full cursor-pointer'>
<img src={selectpost.img} alt="" className='rounded-md w-full'/>
</div>

<div className='flex flex-col gap-10 capitalize'>
     <p className='text-gray-500 font-semibold'>{selectpost.title}</p>
     <p className='text-gray-600'>
          Kawsar is a skilled programmer who has made a name for himself in the world of technology through his dedication and innovative work. From a young age, he was fascinated by computers and software, spending countless hours exploring how programs work and experimenting with basic coding. During his school years, he began learning programming languages such as C, C++, Java, and Python, developing a strong foundation in logic and problem-solving. He enhanced his skills through online tutorials, coding challenges, and personal projects, which helped him gain practical experience early on. Later, he pursued a degree in Computer Science at university, where he deepened his knowledge in software development, algorithms, data structures, and web development.
     </p>
     <p className='text-gray-600'>
          Kawsar has never limited himself to theoretical understanding; he constantly applies his programming skills to solve real-world problems. He actively participated in university projects and hackathons, creating innovative applications and software that simplify everyday tasks and improve efficiency for users.
Kawsar’s work is driven by the goal of using technology to make life easier and more secure for people. He has contributed to a variety of programming projects, including database management systems, mobile applications, and web applications. His software is often customized to meet user needs, focusing on usability and efficiency.
     </p>

     <p className='bg-amber-50 border-1 border-red-500 uppercase p-7 rounded shadow font-black'>
“ the was popularised in the 160 with the release circum stances any occur in which toil and pain can procure him some great pleasur To take atrivial example ”
     </p>

     <p className='flex flex-col gap-5'>
          <p className='font-bold text-[20px]'>Discover great stuff & services</p>
          <p className='text-gray-600'>
               Overall, Kawsar is a passionate programmer whose curiosity, creativity, and commitment to learning set him apart. He demonstrates how technical expertise, combined with problem-solving skills and a willingness to help others, can make a significant impact in the technology world. Whether developing software, exploring cutting-edge technology, or teaching others, Kawsar continues to push boundaries and contribute meaningfully to the programming community, establishing himself as a respected and inspiring figure in the field.
          </p>
     </p>

     <div className='p-5'>
          <ul className='list-disc grid grid-cols-1 md:justify-center md:grid-cols-2'>
               <li className='text-black-500 font-semibold font-serif'>Etiam porta sem malesuada euismod.</li>
               <li className='text-black-500 font-semibold font-serif'>Porta sem area Product.</li>
               <li className='text-black-500 font-semibold font-serif'>Service tiam porta sem malesuada</li>
               <li className='text-black-500 font-semibold font-serif'>Etiam porta sem malesuada euismod.</li>
               <li className='text-black-500 font-semibold font-serif'>Porta sem area Product.</li>
               <li className='text-black-500 font-semibold font-serif'>Service tiam porta sem malesuada</li>
          </ul>
     </div>

     <div className='mt-5 grid grid-cols-1 gap-10 p-5 justify-center items-center md:grid-cols-2 lg:grid-cols-3'>
          <img src={img13} alt="" className='w-full rounded-md'/>
          <img src={img14} alt="" className='w-full rounded-md'/>
          <img src={img15} alt="" className='w-full rounded-md'/>
     </div>

     <div className='flex flex-col gap-10'>
          <p className='text-gray-500 font-stretch-50%'>
            Kawsar is an enthusiastic entrepreneur and a passionate food lover who decided to combine his love for good food with his business acumen by opening his own restaurant. From a young age, Kawsar was fascinated by different cuisines and culinary traditions, often experimenting with recipes at home and sharing them with family and friends. His interest in food grew alongside his curiosity about business management and hospitality, which eventually led him to pursue a restaurant of his own. He carefully planned every aspect of his venture, from selecting the location to designing the menu, ensuring that each element reflected his commitment to quality and customer satisfaction.   
          </p>
          <p  className='text-gray-500 font-stretch-50%'>
            Kawsar paid special attention to the concept of his restaurant, aiming to create a space where people could not only enjoy meals but also feel comfortable and relaxed. The interior was designed with a mix of modern and traditional elements, creating an inviting environment that encourages diners to linger and savor their meals. He worked closely with chefs to develop a menu that balances innovation with familiarity, offering dishes that cater to diverse tastes while maintaining high standards of freshness and quality. From appetizers to desserts, every dish is crafted with care, using locally sourced ingredients whenever possible.   
          </p>
          <p  className='text-gray-500 font-stretch-50%'>
               Kawsar is also forward-thinking when it comes to technology and marketing. He uses social media and online platforms to engage with customers, share updates, and promote special events. His approach ensures that his restaurant stays connected with the community and remains competitive in an increasingly digital world. Ultimately, Kawsar’s restaurant is more than just a place to eat; it represents his passion for food, dedication to excellence, and commitment to providing memorable experiences for every guest. Through hard work, creativity, and a focus on quality, Kawsar has created a restaurant that reflects his values and leaves a lasting impression on everyone who visits.

If you want, I can also rewrite this into a slightly more storytelling style to make it feel more personal and lively, still keeping it around 500 words. Do you want me to do that?
          </p>
     </div>


          <div className='pt-20'>
<Reply />
          </div>


</div>

</div>

</div>













<div className='shadow-2xl p-10 rounded-md xl:h-450'>
<div>

    <div className='flex flex-col gap-3 pb-5 w-full'>
     <label htmlFor="sear" className='text-gray-900 font-bold cursor-pointer'>Search</label>
    
     <div className='w-full flex'>
    

   <div className="w-full bg-[#dddddd] flex items-center justify-between rounded-md shadow pl-3 pr-2">
  <input
    type="text"
    id="sear"
    value={searchItem}
    onChange={(e) => setSearchItem(e.target.value)}
    placeholder="Search Here...."
    autoComplete='off'
    className="flex py-2 bg-transparent outline-none placeholder-gray-600 focus:ring-0"
  />
  <button 
  className="bg-red-600  p-2 px-4 text-center text-white cursor-pointer font-bold rounded-md">
    <FontAwesomeIcon icon={faMagnifyingGlass} />
  </button>
</div>
    

     </div>
     </div>
     <hr className='text-gray-400'/>


     <div className='pt-10'>
          <p className='font-bold text-2xl'>Latest Posts</p>
          <div className='pb-10'>
               {product.slice(0,6).map((item) => (
                    <div className="pt-5" onClick={()=> handleSelctPost(item)} key={item.id}>

<a href='#top' onClick={handleLoading}>
<div className='flex gap-3 justify-start items-center'>

<div>
     <img src={item.img} alt="" className='w-30 rounded-md '/>
</div>

<div>
    <p className='flex gap-2 text-[10px] text-gray-500 hover:text-red-600'><p><FontAwesomeIcon icon={faCalendarDays} /></p><p>{item.date}</p></p>
    <p className='text-gray-500 text-[10px]'>{item.name}</p>  
</div>

</div>
</a>

                    </div>
               ))}
          </div>
     <div>

     </div>

 <hr className='text-gray-400'/>

     <p className='font-bold pt-10 text-2xl'>Popular Posts</p>

 <div className='pb-10'>
               {product.slice(6,12).map((item) => (
                    <div className="pt-5" onClick={()=> handleSelctPost(item)} key={item.id}>

<a href='#top' onClick={handleLoading}>
<div className='flex gap-3 justify-start items-center'>

<div>
     <img src={item.img} alt="" className='w-30 rounded-md '/>
</div>

<div>
    <p className='flex gap-2 text-[10px] text-gray-500 hover:text-red-600'><p><FontAwesomeIcon icon={faCalendarDays} /></p><p>{item.date}</p></p>
    <p className='text-gray-500 text-[10px]'>{item.name}</p>  
</div>

</div>
</a>

                    </div>
               ))}
          </div>

     </div> 

 <hr className='text-gray-400'/>

<div className='pt-10 flex flex-col gap-2 pb-10'>
     <p className='font-bold text-2xl'>Category</p>
     <Link to="/blogarchive">Food(12)</Link>
</div>

 <hr className='text-gray-400'/>


<div className="pt-10">
     <p className='font-bold text-2xl'>Tags</p>
     <div className='gap-2 grid grid-cols-2 xl:grid-cols-3 w-full mt-5 items-center'>
          {LinkButton.map((i)=> (
          <button className='flex' key={i}>
               <Link className='bg-white shadow p-2 w-full text-center rounded-md'>
               {i}
               </Link>
          </button>
          ))}
     </div>
</div>



</div>
</div>


  
</div>






</div>


          </div>
     )
}