import AnimatedText from "../../Components/typejs/typed"
import HomeSlider from "../../Components/swipper/Homeslider"
import HomeCounter from "../../Components/Counter/HomeCounter"

export default function Home(){
     return(
          <div className="bg-[#11173E] w-full h-150 text-white">


<div className="pt-10">


{/* text  */}
<div className="text-center lg:pt-10 pt-7">

<h1>Welcome Sir/Mam</h1>

<div className="">
     <AnimatedText />
</div>

</div>
{/* text  */}



{/* slider */}
<div className="pt-5 lg:pt-10">
<HomeCounter />
</div>
{/* slider */}





{/* slider */}
<div className="pt-5 lg:pt-10">
<HomeSlider />
</div>
{/* slider */}


</div>




          </div>
     )
}