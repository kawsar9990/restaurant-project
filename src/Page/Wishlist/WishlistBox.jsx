import { useSelector, useDispatch } from "react-redux"
import { removeFromWishlist, clearWishlist } from "../../Store/wishlistSlice"

export default function WishlistBox(){

    const dispatch = useDispatch();
    const wishlist  = useSelector((state)=> state.wishlist.items);

    if(wishlist.length === 0){
        return <p className="text-center mt-10 text-gray-500">No items in wishlist 💔</p>;
    }

    return(
    <div className="pt-10">
 <div className="max-w-4xl mx-auto mt-10">

<div className="flex flex-col gap-10">

<div className="flex justify-between items-center">
   <h2 className="text-2xl font-bold ">My Wishlist ❤️</h2> 
    <a href="" 
    className="text-2xl" style={{textDecoration: "underline"}}
    onClick={() =>dispatch(clearWishlist())}>Clear All</a>
</div>


<div className="grid grid-cols-1 p-2 md:grid-cols-2 xl:grid-cols-3 gap-3">
{wishlist.map((item)=> (
    <div key={item.id} className="group  cursor-pointer flex flex-col rounded-lg shadow-xl">

<div className='relative overflow-hidden'>
     <img src={item.img} alt="" className='w-full h-70 object-cover transition-transform duration-300 group-hover:scale-110 rounded cursor-pointer'/>
<div className="absolute bottom-0 text-white font-bold p-2 bg-orange-500">
     <p>{item.sale}</p>
</div>
</div>

<div className="p-5 flex flex-col gap-3">

<div className="flex items-center gap-3">
    <p className='text-[23px] font-semibold'>{item.name}</p>
     <p className='flex text-[10px] text-gray-400 gap-3'>
     <p>{item.reteus}</p>
     </p>    
</div>

<p className='text-gray-500'>{item.titlename}</p>
     <p className='flex gap-2 items-center'><p className='text-black font-bold text-[20px]'>${item.price}</p><p className='line-through text-gray-300'>${item.oldprice}</p></p>

     <div className=''>
     <button onClick={()=> dispatch(removeFromWishlist(item.id))}
     className='rounded-full border p-2 border-orange-400 text-orange-500 w-30 font-semibold cursor-pointer hover:text-black hover:bg-orange-500'>
    Remove
     </button>
</div>


</div>

    </div>
))}
</div>




</div>
 
    
</div>   
    </div>
)
}