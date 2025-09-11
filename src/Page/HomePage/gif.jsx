import gif from '../../../public/video/video.mp4'

export default function Gif(){
     return(
        <div className="  bg-[#FFF1F1]">

<div className="">




<div className='mt-10 w-full'>
<video src={gif} autoPlay type="video/mp4" muted loop className='w-full'></video>
</div>


</div>

          </div>
     )
}