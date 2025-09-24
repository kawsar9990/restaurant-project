import { useState } from "react";
import FsLightbox from "fslightbox-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { useKeenSlider } from "keen-slider/react";
import { motion } from "framer-motion";
import "keen-slider/keen-slider.min.css";

import img1 from "../../../public/Image/chef-at-workplace-XZLQJV9.jpeg";
import img2 from "../../../public/Image/apprentice-chef-3NYK4RZ.jpeg";
import img3 from "../../../public/Image/jkj.jpg";
import img4 from "../../../public/Image/dd.jpeg";
import img5 from "../../../public/Image/ii.jpg";
import img6 from "../../../public/Image/dd.jpg";

import imag3 from "../../../public/Image/3PQNVSH.jpg";
import imag4 from "../../../public/Image/EWC24GN.jpg";
import imag5 from "../../../public/Image/PCXJHSB.jpg";
import imag6 from "../../../public/Image/E4Z6KX9.jpg";

import videos from "../../../public/video/5.mp4";

library.add(faPlay);

export default function Team() {
  const [toggler, setToggler] = useState(false);
  const [video, setvideo] = useState(false);

  const handleplayclick = () => setvideo(true);
  const handleplayclickclose = () => setvideo(false);

  const [sliderRef] = useKeenSlider({
    rtl: false,
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 1,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 1024px)": {
        slides: {
          perView: 3,
          spacing: 16,
        },
      },
    },
    created(s) {
      const interval = setInterval(() => {
        s.next();
      }, 2000);
      return () => clearInterval(interval);
    },
  });

  const img = [img1, img2, img3, img4, img5, img6];

  return (
    <div>
      
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-[#113] h-150 text-white pt-50 text-center"
      >
        <p className="text-4xl font-black uppercase">Our Team</p>
        <p className="text-[10px] ml-20 mr-20 pt-5 capitalize md:text-[20px]">
          Welcome to our restaurant, where every meal is a celebration of flavor
          and hospitality.
        </p>
      </motion.div>

    
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-white p-10"
      >
        <div className="grid cursor-pointer gap-5 grid-cols-2 lg:grid-cols-3">
          {img.map((x, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              onClick={() => setToggler(!toggler)}
            >
              <img src={x} alt="team" className="rounded-md" />
            </motion.div>
          ))}
          <FsLightbox toggler={toggler} sources={img} />
        </div>
      </motion.div>

     
      <div className="relative">
        <video
          src={videos}
          className="w-full"
          type="video/mp4"
          muted
          autoPlay
          loop={true}
        ></video>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center left-0 right-0 absolute top-5 flex flex-col items-center justify-center min-h-full"
        >
          <button onClick={handleplayclick}>
            <FontAwesomeIcon
              className="bg-yellow-300 p-5 font-black cursor-pointer hover:shadow hover:shadow-blue-200 rounded-full"
              icon={faPlay}
            />
          </button>
          <p className="text-2xl uppercase font-black text-white">
            we serve you the best
          </p>
        </motion.div>
      </div>

      {video && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-opacity-70 flex justify-center items-center z-50 backdrop-blur-sm"
        >
          <div className="relative w-80 h-100 md:w-150">
            <button
              className="absolute top-2 right-2 text-2xl z-50 cursor-pointer text-white font-black"
              onClick={handleplayclickclose}
            >
              ✕
            </button>
            <iframe
              width="100%"
              height="250"
              src="https://www.youtube.com/embed/xPPLbEFbCAo?si=YCtRON0iA0fUbd_V"
              title="YouTube video player"
            
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>
      )}

      
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-[#171717] p-10 text-white"
      >
        <div className="text-center mt-20">
          <h1 className="uppercase text-4xl font-black">Customer Review</h1>
          <h1 className="border-2 ml-50 mr-50 mb-5 mt-5 border-y-amber-400"></h1>
          <p className="capitalize text-gray-400">
            When I first heard about Kisotext, I wasn’t entirely sure what to
            expect. The name popped up in a couple of online forums I follow,
            where people were discussing modern communication tools and
            productivity platforms.
          </p>
        </div>

        <div className="mt-15">
          <div ref={sliderRef} className="keen-slider text-white">
            {[imag6, imag5, imag4, imag3].map((imgSrc, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.02 }}
                className="keen-slider__slide"
              >
                <div className="bg-[#000000] p-7 rounded-md w-full">
                  <p className="text-gray-500 font-bold capitalize pb-5">
                    Its Very Beautiful Works And Website. Thank You Kawsar Ahmed
                    Sir. Your Works Very High
                  </p>
                  <div>
                    <p className="flex items-center gap-2">
                      <img src={imgSrc} alt="user" className="w-20 rounded-full" />
                      <div>
                        <p className="font-black uppercase">John Doe</p>
                        <span className="text-gray-400">Designation</span>
                      </div>
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
