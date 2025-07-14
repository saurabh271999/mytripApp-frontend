import React, { useState } from 'react';
import {FaBus, FaExchangeAlt, FaCalendarAlt } from 'react-icons/fa';

const buttonicon = [
  { icon: "🏨" },
  { icon: "✈️" },
  { icon: "🚗" },
  { icon: "🚋" }
];

const Searchflight = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [todate, setdatefrom] = useState("");
  const [fromdate, setdateto] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    // e.preventDefault();
    setShowModal(true);
  };

  return (
    <>
      <div>
        <div className='bg-[#F3F5FA] flex justify-center items-center gap-10 h-15'>
          <h1 className='text-black text-xl font-bold m-5'>
            <span>{buttonicon[0].icon}</span> Flight
          </h1>
          <h1 className='text-black text-xl font-bold m-5'>
            <span>{buttonicon[1].icon}</span> Hotel
          </h1>
          <h1 className='text-black text-xl font-bold m-5'>
            <span>{buttonicon[2].icon}</span> Buses
          </h1>
          <h1 className='text-black text-xl font-bold m-5'>
            <span>{buttonicon[3].icon}</span> Train
          </h1>
        </div>

        <h1 className='m-5 text-4xl'>Search Bus</h1>
        <p className='text-1xl font-medium m-10'>Enjoy hassle free Bus ticket booking at lowest Busfare</p>

        <div className="bg-white rounded-xl shadow-md p-6 max-w-4xl mx-auto space-y-4">
          {/* Trip Type & Passenger Info */}
          <div className="flex justify-between items-center border-b pb-4">
            <div className="flex space-x-4 text-gray-700 font-medium">
             
            </div>
            
          </div>

          {/* From/To Inputs */}
          <div className="flex items-center gap-4">
            <div className="flex items-center border rounded-lg px-3 py-2 w-full">
              <FaBus className="text-gray-500 mr-2" />
              <input
                type="text"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                placeholder="Where from?"
                className="w-full outline-none"
              />
            </div>

            <div className="text-gray-500">
              <FaExchangeAlt />
            </div>

            <div className="flex items-center border rounded-lg px-3 py-2 w-full">
              <FaBus className="text-gray-500 mr-2" />
              <input
                type="text"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                placeholder="Where to?"
                className="w-full outline-none"
              />
            </div>
          </div>

          {/* Dates */}
          <div className="flex items-center gap-4">
            <div className="flex items-center border rounded-lg px-3 py-2 w-full">
              <FaCalendarAlt className="text-gray-500 mr-2" />
              <input type="date"
               onChange={(e) => setdatefrom(e.target.value)}
               value={todate}
               className="w-full outline-none" />
            </div>

            <div className="flex items-center border rounded-lg px-3 py-2 w-full text-gray-400">
              <input type="date" 
                onChange={(e) => setdateto(e.target.value)}
               value={fromdate}
              className="w-full outline-none" />
            </div>
          </div>

          {/* Fares */}
          <div className="flex gap-2 flex-wrap">
            <span className="border rounded-full px-3 py-1 text-sm cursor-pointer hover:bg-orange-600 text-white bg-orange-400">Senior citizen fare</span>
            <span className="border rounded-full px-3 py-1 text-sm cursor-pointer hover:bg-orange-600 text-white bg-orange-400">Student fare</span>
            <span className="border rounded-full px-3 py-1 text-sm cursor-pointer hover:bg-orange-600 text-white bg-orange-400">Armed forces fare</span>
          </div>

          {/* Work Deal + Button */}
          <div className="flex items-center justify-between mt-2">
            <label className="flex items-center gap-2 cursor-pointer bg-blue-50 px-3 py-2 rounded-md text-sm">
              <input type="checkbox" />
              <div>
                <span className="font-semibold">Unlock 10% extra savings</span>{" "}
                <span className="bg-orange-400 text-white px-1 py-0.5 rounded text-xs">NEW</span>
                <div className="text-gray-500 text-xs">Cleartrip for Work</div>
              </div>
            </label>

            <button
              onClick={handleSubmit}
              className="bg-[#FF5B00] cursor-pointer text-white font-semibold px-6 py-2 rounded-md hover:bg-orange-600 transition"
            >
              Book Bus
            </button>
          </div>
        </div>

        {/* Modal */}
        {showModal && (
          
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md text-center">
          
              <h2 className="text-xl font-bold mb-4">Flight Booked</h2>
              <p className="mb-2"><strong>From:</strong> {from =='' ? '' : from}</p>
              <p className="mb-4"><strong>To:</strong> {to == '' ? '' : to}</p>
              <p className="mb-4"><strong>Journey start from:</strong> {todate == '' ?'Select your Departure Date' : todate}</p>
              <p className="mb-4"><strong>To:</strong> {fromdate == '' ? 'Select your Arrival Date' : fromdate}</p>

              <button
                onClick={() => setShowModal(false)}
                className="bg-orange-600 text-white px-4 py-2 rounded cursor-pointer hover:bg-orange-500"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Searchflight;
