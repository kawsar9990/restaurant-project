
import { Link } from "react-router"
import PostPage from "./BlogSinpost"

export default function BlogSingmain(){
     return(
          <div className="bg-white">

<div className="pt-10">



<div className=''>
     <div className='bg-[#FFF6F7] text-black p-15'>
          <h1 className='text-2xl md:text-4xl uppercase font-bold'>Blog Single Post</h1>
          <p className='flex capitalize text-[15px]'>
               <Link to="/" className='text-orange-500 font-black'>
               Kawsar.Restaurent/
          </Link>
          <Link to="" className="text-[15px]">
          Blog Post
          </Link>
          </p>
     </div>
</div>


<div>
   <PostPage />
</div>




</div>

          </div>
     )
}