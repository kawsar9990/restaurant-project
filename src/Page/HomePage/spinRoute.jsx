import img from '../../../public/Svg/spin-12315.gif'
import { Link } from 'react-router'

export default function Spin(){
     return(
          <div className="fixed top-50 right-0">

<div>
     <Link to="/spinbox" className="p-3  rounded-full font-black">

<img src={img} alt="" className='w-20 rounded-full object-cover'/>
  
     </Link>
</div>

          </div>
     )
}