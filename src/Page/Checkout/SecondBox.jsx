import { useState } from "react";
import Calendar from "react-calendar";

export default function SecondBox() {
  const [mode, setMode] = useState(null);
  const [value, onChange] = useState(new Date());
  const [dateOpen, setDateOpen] = useState(false);
  const [timeOpen, setTimeOpen] = useState(false);
  const [selectedTime, setSelectedTime] = useState("");

  const times = [
    "1:00 am","2:00 am","3:00 am","4:00 am","5:00 am","6:00 am","7:00 am","8:00 am",
    "9:00 am","10:00 am","11:00 am","12:00 pm","1:00 pm","2:00 pm","3:00 pm","4:00 pm",
    "5:00 pm","6:00 pm","7:00 pm","8:00 pm","9:00 pm","10:00 pm","11:00 pm","12:00 am"
  ];

  const handleSelect = (time) => {
    setSelectedTime(time);
    setTimeOpen(false);
  };

  return (
    <div className="shadow p-3 rounded-md">
   
      <div className="bg-[#FBFBFB] font-bold flex gap-7 p-3 justify-center">
        <p onClick={() => setMode("delivery")} className="cursor-pointer">
          Delivery
        </p>
        <p onClick={() => setMode("pickup")} className="cursor-pointer">
          Pickup
        </p>
      </div>

   
      {mode === "delivery" && (
        <div className="flex flex-col md:flex-row gap-5 items-start mt-5">
      
          <div className="w-full">
            <label className="block text-red-500 mb-2">Delivery Date *</label>
            <div
              onClick={() => setDateOpen(!dateOpen)}
              className="bg-[#F8F8F8] cursor-pointer border p-3 rounded-md"
            >
              {value.toDateString()}
            </div>
            {dateOpen && (
              <div className="pt-2">
                <Calendar
                  onChange={onChange}
                  value={value}
                  className="w-full shadow border-2 p-2 text-center font-bold"
                />
              </div>
            )}
          </div>

        
          <div className="w-full relative">
            <label className="block text-red-500 mb-2">Delivery Time *</label>
            <div
              onClick={() => setTimeOpen(!timeOpen)}
              className="bg-[#F8F8F8] border p-3 rounded-md cursor-pointer flex justify-between items-center"
            >
              <span className={selectedTime ? "text-black" : "text-gray-400"}>
                {selectedTime || "Select time"}
              </span>
              <svg
                className={`w-4 h-4 transform transition-transform ${
                  timeOpen ? "rotate-180" : "rotate-0"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            {timeOpen && (
              <ul className="absolute z-10 mt-1 w-full bg-white border rounded-md shadow-lg max-h-60 overflow-y-auto">
                {times.map((time, index) => (
                  <li
                    key={index}
                    onClick={() => handleSelect(time)}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {time}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}

     
      {mode === "pickup" && (
        <div className="flex flex-col md:flex-row gap-5 items-start mt-5">
        
          <div className="w-full">
            <label className="block text-red-500 mb-2">Pickup Date *</label>
            <div
              onClick={() => setDateOpen(!dateOpen)}
              className="bg-[#F8F8F8] cursor-pointer border p-3 rounded-md"
            >
              {value.toDateString()}
            </div>
            {dateOpen && (
              <div className="pt-2">
                <Calendar
                  onChange={onChange}
                  value={value}
                  className="w-full shadow border-2 p-2 text-center font-bold"
                />
              </div>
            )}
          </div>

        
          <div className="w-full relative">
            <label className="block text-red-500 mb-2">Pickup Time *</label>
            <div
              onClick={() => setTimeOpen(!timeOpen)}
              className="bg-[#F8F8F8] border p-3 rounded-md cursor-pointer flex justify-between items-center"
            >
              <span className={selectedTime ? "text-black" : "text-gray-400"}>
                {selectedTime || "Select time"}
              </span>
              <svg
                className={`w-4 h-4 transform transition-transform ${
                  timeOpen ? "rotate-180" : "rotate-0"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            {timeOpen && (
              <ul className="absolute z-10 mt-1 w-full bg-white border rounded-md shadow-lg max-h-60 overflow-y-auto">
                {times.map((time, index) => (
                  <li
                    key={index}
                    onClick={() => handleSelect(time)}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {time}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
