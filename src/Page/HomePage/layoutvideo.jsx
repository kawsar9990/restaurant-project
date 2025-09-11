
import video from '../../../public/video/main.mp4'

export default function LayoutVideo(){


return(
     <div className="pt-0">
<video src={video}
className=""
type="video/mp4" muted autoPlay loop></video>

</div>

)

}

