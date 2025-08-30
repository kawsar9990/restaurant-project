import { Link } from 'react-router'
import img1 from '../../../public/img/9VHNB7G.png'
import img2 from '../../../public/img/catg-rice.png'
import img3 from '../../../public/img/cheeseburger.png'
import img4 from '../../../public/img/catg-pizza.png'
import img5 from '../../../public/img/catg-pasta.png'

export default function RestaurentBar(){
     return(
          <div className="bg-white w-full pt-20 lg:pt-0">


<div className="p-5">

<h2 className="text-center text-green-300">- Restaurant & Bar -</h2>
<h1 className="text-center text-2xl font-bold">Caverta Experience</h1>

<div className="flex flex-col gap-7 lg:justify-center lg:text-center pt-5 pb-5 lg:flex-row">

<div>
     <p>Explore texture, color and of course the ultimate tastes with our menu of the season. All the ingredients are fresh and carefully selected by our chefs. Enjoy an extraordinary dinning experience.</p>
</div>

<div>
  <p>For a truly memorable dining experience, cuisine and atmosphere are paired as thoughtfully as food and wine. Ut enim ad minim veniam, quis nostrud exercitation ullamco. Quia consequuntur magnis.</p>   
</div>

<div>
     <p>Ad nullam delicata quo. Quo erant vocent eu. Essent mnesarchum disputando in pri, nec utroque praesent sententiae ei. Sed impedit graecis no, dicam ignota volumus mel ei. Mel fierent.</p>
</div>

</div>


</div>







<div className='p-5'>

<div className='flex flex-col gap-5 lg:flex-row'>


<div className='w-full bg-green-600 text-white text-capitalize rounded-md p-5 shadow-md h-full flex-col text-center flex items-center justify-center lg:hover:-translate-y-5 transition-transform duration-200 hover:cursor-pointer'>
     <div className='rounded-full p-5'>
    <img src={img1} alt="ks" className='rounded-full w-55 h-40 object-cover'/>
     </div>
     <h1 className='text-2xl font-bold'>Burger</h1>
     <p className='pt-2 capitalize'>Aliquip periculis signiferumque est ea, dictas volutpat cu qui. Sea iisque offendit expetendis</p>
     <Link to="" className='mt-3 bg-blue-100 text-black p-2 rounded-md font-bold cursor-pointer'>View More</Link>
</div>


<div className='lg:hover:-translate-y-5 transition-transform duration-200 hover:cursor-pointer w-full bg-green-600 text-white text-capitalize rounded-md p-5 shadow-md h-full flex-col text-center flex items-center justify-center'>
     <div className='rounded-full p-5'>
     <img src={img2} alt="ks" className='rounded-full w-55 h-40 object-cover'/>
     </div>
     <h1 className='text-2xl font-bold'>Rise</h1>
     <p className='pt-2 capitalize'>Aliquip periculis signiferumque est ea, dictas volutpat cu qui. Sea iisque offendit expetendis</p>
     <Link to="" className='mt-3 bg-blue-100 text-black p-2 rounded-md font-bold cursor-pointer'>View More</Link>
</div>


<div className='w-full bg-green-600 text-white lg:hover:-translate-y-5 transition-transform duration-200 hover:cursor-pointer  text-capitalize rounded-md p-5 shadow-md h-full flex-col text-center flex items-center justify-center'>
     <div className='rounded-full p-5'>
     <img src={img3} alt="ks" className='rounded-full w-55 h-40 object-cover'/>
     </div>
     <h1 className='text-2xl font-bold'>Burger</h1>
     <p className='pt-2 capitalize'>Aliquip periculis signiferumque est ea, dictas volutpat cu qui. Sea iisque offendit expetendis</p>
     <Link to="" className='mt-3 bg-blue-100 text-black p-2 rounded-md font-bold cursor-pointer'>View More</Link>
</div>


<div className='w-full bg-green-600 text-white text-capitalize rounded-md p-5 lg:hover:-translate-y-5 transition-transform duration-200 hover:cursor-pointer  shadow-md h-full flex-col text-center flex items-center justify-center'>
     <div className='rounded-full p-5'>
     <img src={img4} alt="ks" className='rounded-full w-55 h-40 object-cover'/>
     </div>
     <h1 className='text-2xl font-bold'>Pizza</h1>
     <p className='pt-2 capitalize'>Aliquip periculis signiferumque est ea, dictas volutpat cu qui. Sea iisque offendit expetendis</p>
     <Link to="" className='mt-3 bg-blue-100 text-black p-2 rounded-md font-bold cursor-pointer'>View More</Link>
</div>


<div className='w-full bg-green-600 text-white text-capitalize rounded-md p-5 shadow-md h-full flex-col lg:hover:-translate-y-5 transition-transform duration-200 hover:cursor-pointer  text-center flex items-center justify-center'>
     <div className='rounded-full p-5'>
     <img src={img5} alt="ks" className='rounded-full w-55 h-40 object-cover'/>
     </div>
     <h1 className='text-2xl font-bold'>Pasta</h1>
     <p className='pt-2 capitalize'>Aliquip periculis signiferumque est ea, dictas volutpat cu qui. Sea iisque offendit expetendis</p>
     <Link to="" className='mt-3 bg-blue-100 text-black p-2 rounded-md font-bold cursor-pointer'>View More</Link>
</div>



</div>

</div>
          
          </div>
     )
}