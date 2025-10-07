import LayoutVideo from "./layoutvideo"
import AnimatedText from "../../Components/TypedAnimation/HomeTyped"
import HomeCounter from "../../Components/Counter/HomeCounter"
import HomeSlider from "./HomeSlider"


export default function Homelayout(){
     return(
          <div className="bg-[#113]">


<div className="pt-0">






{/* text  */}
<div className="">

   <div className="relative">
    <LayoutVideo />
    <div className="absolute xl:justify-start xl:pt-50 inset-0 flex flex-col items-center justify-center">
        <h1 className="text-blue-500 font-bold xl:text-2xl">Welcome Sir/Mam</h1>
        <AnimatedText />
    </div>
</div>

</div>
{/* text  */}



{/* slider */}
<div className="">
<HomeCounter />
</div>
{/* slider */}





{/* slider */}
<div className="mt-5">
<HomeSlider />
</div>
{/* slider */}


</div>




          </div>
     )
}