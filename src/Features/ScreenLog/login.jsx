import { useEffect, useState,useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";



const VALID_USER = "admin"
const VALID_PASS = "12345"


export default function LoginPass({onLogin}){
const [showLogin, setShowLogin] = useState(false);
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [showPass, setShowPass] = useState(false);
const [error, setError] = useState("");
const inputref = useRef(null)
const passref = useRef(null)

useEffect(()=> {
const auth = localStorage.getItem("isloggedIn");
if(!auth){
     onLogin();
}
else{
      setShowLogin(true)
      if(inputref.current) inputref.current.focus()

}

},[onLogin])



const handlelogin = () => {


if(!username.trim() ){
     setError("");
     if(inputref.current) useRef.current.focus();
     return
}

if(!passref.trim() ){
     setError("");
     if(passref.current) passref.current.focus();
     return
}



if(username === VALID_USER && password === VALID_PASS){
     localStorage.setItem("isloggedIn", JSON.stringify({
          username: username,
          password: password
     }));
     setError("")
     setShowLogin(false)
     onLogin();
}
else{
     setError("❌ Incorrect username or password")
     if(inputref.current){
     inputref.current.focus()
}
}
}


return(
    <AnimatePresence>
{showLogin && (
<motion.div
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
exit={{ opacity: 0 }}
className="fixed inset-0 backdrop-blur-3xl bg-gradient-to-br from-purple-600 to-indigo-800 flex p-5 items-center justify-center z-50"
>

<motion.div
initial={{ scale: 0.8, opacity: 0 }}
animate={{ scale: 1, opacity: 1 }}
exit={{ scale: 0.8, opacity: 0 }}
transition={{ duration: 0.4 }}
className="bg-white rounded-2xl shadow-2xl p-8"
>

<h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
      🔐 Kawsar.Restaurent Login
</h2>

<form onSubmit={handlelogin} className="flex flex-col gap-4">
<div>
<label className="block text-gray-600 font-medium mb-1">
    Username
</label>  
<input type="text" 
ref={inputref}
value={username}
onKeyDown={(e)=> {
     if(e.key  === "Enter"){
          e.preventDefault()
          if(passref.current) passref.current.focus()
     }
}}
onChange={(e)=> setUsername(e.target.value)}
placeholder="Enter username"
className=" w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
/>  
</div>
<div>
   <label className="block text-gray-600 font-medium mb-1">
  Password
</label>  
<div className="relative">
<input type={showPass ? "text" : "password"} 
value={password}
ref={passref}
onKeyDown={(e)=> {
     if(e.key === "Enter"){
          e.preventDefault()
          onLogin()
     }
}}
onChange={(e)=> setPassword(e.target.value)}
className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none pr-10"
 placeholder="Enter password"
/>
<button
type="button"
onClick={() => setShowPass(!showPass)}
className="absolute right-3 top-2.5 text-gray-500">
<FontAwesomeIcon icon={showPass ? faEyeSlash : faEye} size="lg"/>
</button>
</div>
</div>




{error && (
 <p className="text-red-600 text-sm font-medium">{error}</p>    
)}

<button
type="submit"
className="mt-3 w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition">
     Login
</button>


</form>

</motion.div>



</motion.div>
)}
    </AnimatePresence>
)



}