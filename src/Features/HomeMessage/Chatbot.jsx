import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library} from '@fortawesome/fontawesome-svg-core';
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';
import {faBell, faEllipsisVertical, faInbox, faMessage, faPaperPlane, faXmark, faFileArrowUp} from '@fortawesome/free-solid-svg-icons';
library.add(faMessage, faPaperPlane, faBell, faXmark, faEllipsisVertical, faInbox, faFileArrowUp, faFacebookMessenger);

import img1 from '../../../public/Myimg/1.jpeg';
import img2 from '../../../public/Myimg/4.jpeg';

import '../../style/custom.css';
import { Link } from 'react-router';
import {useState } from 'react';



export default function Chatbody(){
  
   const [click, setClick] = useState(false);
  
   const [message, setMessage] = useState([
    {
      text: "Welcome  Sir, Our Kawsar.Restaurent Website.",
      sender: "bot",
    },
     {
      text: "Hi Sir Iam MD Kawsar Ahmed. Restaurent Website Creator And CSE Engineer.",
      sender: "bot",
    },
     {
      text: 'Tell us how we can help you ?',
      sender: "bot",
    }, 
   ])


   const [input, setInput] = useState("")
   const [step, setstep] = useState(0)
   const [username, setusername] = useState("")
    const [useremail, setuseremail] = useState("")
   
   const handleClick = () => {
    if(input.trim === "") return ;

    let userMessage = [...message, {text: input, sender: "user"}];

    if(step === 0){
      userMessage.push({text: "Sir or Ma'am, may I know your name?", sender: "bot" })
      setstep(1);
    }
    else if(step === 1){
      setusername(input);
      userMessage.push({text: `Nice to meet you ${input}! How can I help you?`, sender: "bot"})
      setstep(2)
    }
    else if(step === 2){
       setusername(input);
       userMessage.push({text : `I received: "${input}". How can I assist further?`, sender: "bot"})
       setstep(3)
    } 
    else if(step === 3){
       setusername(input);
       userMessage.push({text :"Please give your email address so that we can contact you through it.", sender: "bot"})
       setstep(4)
    }
    else if (step === 4){
      userMessage.push(
        {
          type: "email-box",
          sender: "bot"
        }
      )
      setstep(5)
    }

    setMessage(userMessage);
    setInput("")
   }
 
   const handleEmailClick = (email) => {
    if(!email.trim()) return;
    setuseremail(email);
    setMessage((prev)=> [...prev, {text: `Thank you! We have saved your info.`, sender: "bot"}])
   }
  
  
  
  
  return(
    <div className="flex flex-col h-screen bg-gray-100">
    
<div className='bg-gray-800 w-full p-4 flex justify-between items-center text-white fixed top-0 z-50'>
        <Link to="/" className='flex items-center gap-2'>
          <img src={img1} alt="profile" className='w-10 h-10 rounded-full object-cover'/>
          <span className='font-bold text-lg sm:text-xl'>Kawsar Restaurant</span>
        </Link>
        <div className='relative'>
          <FontAwesomeIcon className='cursor-pointer text-xl sm:text-2xl' icon={faEllipsisVertical} onClick={()=> setClick(!click)} />
          {click && (
            <div className='absolute right-0 mt-2 w-40 bg-gray-700 p-2 rounded-md flex flex-col gap-2 text-sm'>
              <a href="https://m.me/61576560495361" target='_blank' className='flex items-center gap-2'>
                <FontAwesomeIcon icon={faFacebookMessenger}/> Messenger
              </a>
              <a href="mailto:mdhossian72@gmail.com" target='_blank' className='flex items-center gap-2'>
                <FontAwesomeIcon icon={faInbox}/> Email
              </a>
            </div>
          )}
        </div>
      </div>





<div className="flex-1 flex flex-col pt-20 px-4 sm:px-8 pb-20 gap-4 overflow-hidden">



<div className="bg-white p-4 rounded-lg shadow flex-1 overflow-y-auto flex flex-col gap-3">

{message.map((msg, i)=> (
  <div className={`flex items-start gap-2 
    ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
  key={i}>
{msg.sender === "bot" && (
      <img src={img2} alt="" className="w-8 h-8 rounded-full object-cover"/>

)}


{msg.type === "email-box" ? (
<div className="bg-gray-200 p-3 rounded-lg flex gap-2">
<input type="email" 
placeholder='Enter your email'
className='p-2 rounded border text-sm'
onKeyDown={(e)=> e.key === "Enter" && handleEmailClick()}/>

<button 
onClick={()=> {
  const emailInput = document.querySelector('input[type = "email"]')
  if(emailInput) handleEmailClick(emailInput.value)
}}
className='bg-blue-600 text-white px-3 py-1 rounded'>
  Submit
</button>
</div>
) : (
<div className={`bg-gray-200 text-gray-900 p-2 rounded-lg text-sm sm:text-base max-w-xs
  ${msg.sender === "user" ? "bg-blue-600 text-black" : "bg-gray-200 text-gray-900"}`}>
  {msg.text}
</div>

)}


{msg.sender === "user" && (
  <img src={img1} alt=""className="w-8 h-8 rounded-full object-cover" />
)}

  </div>
))}

</div>






<div className="flex gap-2 mt-2">
<input type="text" name="" id="" 
value={input}
onChange={(e)=> setInput(e.target.value)}
onKeyDown={(e)=> e.key === "Enter" && handleClick()}
className='flex-1 p-3 rounded border outline-none text-sm sm:text-base'
placeholder='Type a message...'/>

<button
onClick={handleClick}
className='bg-blue-600 p-3 rounded text-white cursor-pointer'>
  <FontAwesomeIcon icon={faPaperPlane} />
</button>
</div>

</div>















 <div style={{userSelect: "none"}} className='cursor-pointer fixed bottom-0 w-full bg-yellow-400 text-white p-3 flex justify-center items-center gap-2'>
        <FontAwesomeIcon icon={faBell}/>
        <span className='text-sm sm:text-base'>Click to set your email to get notifications</span>
      </div>
    </div>
  )
}