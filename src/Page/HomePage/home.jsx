import AnimatedText from "../../Components/typejs/typed"
import HomeSlider from "../../Components/swipper/Homeslider"
import HomeCounter from "../../Components/Counter/HomeCounter"

export default function Home(){
     return(
          <div className="bg-[#113]">


<div className="pt-10">


{/* text  */}
<div className="">

<h1 className="text-center text-white">Welcome Sir/Mam</h1>

<div className="">
     <AnimatedText />
</div>

</div>
{/* text  */}



{/* slider */}
<div className="">
<HomeCounter />
</div>
{/* slider */}





{/* slider */}
<div className="">
<HomeSlider />
</div>
{/* slider */}


</div>




          </div>
     )
}