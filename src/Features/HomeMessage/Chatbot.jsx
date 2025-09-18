import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { 
  faBell, faEllipsisVertical, faInbox, faMessage, 
  faPaperPlane, faXmark, faFileArrowUp 
} from '@fortawesome/free-solid-svg-icons';
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';
import { useDropzone } from 'react-dropzone';
import '../../style/custom.css';

library.add(faMessage, faPaperPlane, faBell, faXmark, faEllipsisVertical, faInbox, faFileArrowUp, faFacebookMessenger);

import img1 from '../../../public/Myimg/1.jpeg';
import img2 from '../../../public/Myimg/4.jpeg';

export default function Chatbody() {
  const [click, setClick] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [userName, setUserName] = useState('');
  const [collectEmail, setCollectEmail] = useState(false);
  const [email, setEmail] = useState('');


  useEffect(() => {
    setMessages([{ type: 'bot', text: "Welcome  Sir, Our Kawsar.Restaurent Website." },
      {type: 'bot', text: 'Hi Sir Iam MD Kawsar Ahmed. Restaurent Website Creator And CSE Engineer.'},
      {type: 'bot', text: 'Tell us how we can help you ?'}
    ]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: acceptedFiles => {
      const file = acceptedFiles[0];
      setMessages(prev => [...prev, { type: 'user', file }]);
    }
  });

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    setMessages(prev => [...prev, { type: 'user', text: inputMessage }]);




    if (!userName) {
      setMessages(prev => [...prev, 
        { type: 'bot', text: `Sir or Ma'am, may I know your name?` },
      ]);
      setUserName('pending');
      setInputMessage('');
      return;
    }




     if (userName === 'pending') {
      setUserName(inputMessage);
       setMessages(prev => [...prev, 
    { type: 'bot', text: `Nice to meet you ${inputMessage}! How can I help you?` }      ]);
      setInputMessage('');
      return;
    }



    if (!collectEmail) {
      setCollectEmail(true);
    }

    setMessages(prev => [...prev, { type: 'bot', text: `I received: "${inputMessage}". How can I assist further?` }]);
    setMessages(prev => [...prev, { type: 'bot', text: `Please give your email address so that we can contact you through it.` }]);
    setInputMessage('');
  };

  const handleEmailSubmit = () => {
    if (!email.trim()) return;
    setMessages(prev => [...prev, { type: 'user', text: `Email: ${email}` }]);
    setMessages(prev => [...prev, { type: 'bot', text: `Thank you! I will contact you soon.` }]);
    setEmail('');
    setCollectEmail(false);
  };

  return (
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
        <div className='bg-white p-4 rounded-lg shadow flex-1 overflow-y-auto flex flex-col gap-3'>
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'} items-start gap-2`}>
              {msg.type === 'bot' && (
                <img src={img2} alt="bot" className='w-8 h-8 rounded-full object-cover'/>
              )}
              <div className={`p-3 rounded-lg max-w-[70%] break-words ${msg.type === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}>
                {msg.file ? (
                  msg.file.type.startsWith('image') ? (
                    <img src={URL.createObjectURL(msg.file)} alt={msg.file.name} className='w-32 h-32 object-cover rounded' />
                  ) : (
                    <div className='flex items-center gap-2'>
                      <FontAwesomeIcon icon={faFileArrowUp} />
                      <span>{msg.file.name}</span>
                    </div>
                  )
                ) : (
                  msg.text
                )}
              </div>
            </div>
          ))}
        </div>


        {!collectEmail ? (
          <div className='flex gap-2 mt-2'>
            <input 
              type="text"
              onKeyDown={(e)=> {if(e.key === "Enter") handleSendMessage()}}
              value={inputMessage}
              onChange={(e)=> setInputMessage(e.target.value)}
              className='flex-1 p-3 rounded border outline-none text-sm sm:text-base'
              placeholder='Type a message...'
            />
            <button onClick={handleSendMessage} className='bg-blue-600 p-3 rounded text-white'>
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
            <button {...getRootProps()} className='bg-gray-200 p-3 rounded'>
              <input {...getInputProps()} />
              <FontAwesomeIcon icon={faFileArrowUp} />
            </button>
          </div>
        ) : (
          <div className='flex gap-2 mt-2'>
            <input 
              type="email"
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
              className='flex-1 p-3 rounded border outline-none text-sm sm:text-base'
              placeholder='Enter your email...'
            />
            <button onClick={handleEmailSubmit} className='bg-green-600 p-3 rounded text-white'>Submit</button>
          </div>
        )}
      </div>

     
      <div className='fixed bottom-0 w-full bg-yellow-400 text-white p-3 flex justify-center items-center gap-2'>
        <FontAwesomeIcon icon={faBell}/>
        <span className='text-sm sm:text-base'>Click to set your email to get notifications</span>
      </div>
    </div>
  );
}
