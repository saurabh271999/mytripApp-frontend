import React, { useState } from 'react';
import {
  FaPlaneDeparture,
  FaPlaneArrival,
  FaExchangeAlt,
  FaCalendarAlt,
} from 'react-icons/fa';

const buttonicon = [
  { icon: "🏨" },
  { icon: "✈️" },
  { icon: "🚗" },
  { icon: "🚋" },
];

const Searchflight = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [todate, setdatefrom] = useState("");
  const [fromdate, setdateto] = useState("");
  const [popup, setPopup] = useState({ type: "", show: false });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userProfile = JSON.parse(localStorage.getItem("userProfile"));
    const userEmail = userProfile?.email;

    if (!userEmail) {
      setPopup({ type: "error", show: true });
      return;
    }

    try {
      const res = await fetch("https://mytripapp-backend-2.onrender.com/api/booking/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          from,
          to,
          departureDate: todate,
          arrivalDate: fromdate,
          userEmail,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setPopup({ type: "success", show: true });
      } else {
        setPopup({ type: "error", show: true });
      }
    } catch (error) {
      console.error("Email send error:", error);
      setPopup({ type: "error", show: true });
    }
  };

  return (
    <div>
      {/* Top Icons */}
      <div className="bg-[#F3F5FA] py-4 px-2">
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
          {buttonicon.map((item, index) => (
            <h1 key={index} className="text-black text-base md:text-lg lg:text-xl font-bold flex items-center gap-2">
              <span>{item.icon}</span> {["Flight", "Hotel", "Buses", "Train"][index]}
            </h1>
          ))}
        </div>
      </div>

      <h1 className="m-5 text-4xl">Search Flight</h1>
      <p className="text-1xl font-medium m-10">
        Enjoy hassle free flight ticket booking at lowest airfare
      </p>

      {/* Booking Form */}
      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md p-6 max-w-4xl mx-auto space-y-4">
        <div className="flex justify-between items-center border-b pb-4">
          <div>→ One way</div>
          <div>👤 1 Adult, Economy ⌄</div>
        </div>

        {/* From / To */}
        <div className="flex items-center gap-4">
          <div className="flex items-center border rounded-lg px-3 py-2 w-full">
            <FaPlaneDeparture className="text-gray-500 mr-2" />
            <input
              type="text"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              placeholder="Where from?"
              className="w-full outline-none"
              required
            />
          </div>

          <FaExchangeAlt className="text-gray-500" />

          <div className="flex items-center border rounded-lg px-3 py-2 w-full">
            <FaPlaneArrival className="text-gray-500 mr-2" />
            <input
              type="text"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              placeholder="Where to?"
              className="w-full outline-none"
              required
            />
          </div>
        </div>

        {/* Dates */}
        <div className="flex items-center gap-4">
          <div className="flex items-center border rounded-lg px-3 py-2 w-full">
            <FaCalendarAlt className="text-gray-500 mr-2" />
            <input
              type="date"
              value={todate}
              onChange={(e) => setdatefrom(e.target.value)}
              className="w-full outline-none"
              required
            />
          </div>

          <div className="flex items-center border rounded-lg px-3 py-2 w-full">
            <input
              type="date"
              value={fromdate}
              onChange={(e) => setdateto(e.target.value)}
              className="w-full outline-none"
              required
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button type="submit" className="bg-[#FF5B00] text-white font-semibold px-6 py-2 rounded-md hover:bg-orange-600 transition">
            Book flights
          </button>
        </div>
      </form>

      {/* POPUP Message */}
      {popup.show && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-40">
          <div className="bg-white p-6 rounded-md text-center w-[90%] max-w-sm shadow-lg">
            <h2 className={`text-xl font-bold mb-3 ${popup.type === "success" ? "text-green-600" : "text-red-600"}`}>
              {popup.type === "success" ? "✅ Flight Booked Successfully" : "❌ Booking Failed"}
            </h2>

            <p className="mb-4">
              {popup.type === "success"
                ? "Confirmation has been sent to your email."
                : "Something went wrong while booking the flight."}
            </p>

            <button
              onClick={() => setPopup({ ...popup, show: false })}
              className={`px-4 py-2 rounded text-white ${popup.type === "success" ? "bg-green-600" : "bg-red-600"} hover:opacity-90`}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Searchflight;
