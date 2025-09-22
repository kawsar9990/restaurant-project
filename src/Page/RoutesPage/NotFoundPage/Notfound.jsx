import { motion } from "framer-motion";
import { Link } from "react-router";

export default function NotF() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white relative overflow-hidden">
      

      <div className="absolute -top-20 -left-20 w-72 h-72 bg-red-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>

      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
        className="text-[10rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-400 to-orange-500 drop-shadow-lg"
      >
        404
      </motion.h1>


      <motion.p
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-3xl font-bold"
      >
        Oops! Page Not Found
      </motion.p>

      <motion.p
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="text-gray-400 mt-3 max-w-md text-center"
      >
        The page you’re looking for doesn’t exist or has been moved.
      </motion.p>

     
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.8, type: "spring" }}
      >
        <Link
          to="/"
          className="mt-8 inline-block px-8 py-3 rounded-2xl bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transition-transform"
        >
          Go Back Home
        </Link>
      </motion.div>
    </div>
  );
}
