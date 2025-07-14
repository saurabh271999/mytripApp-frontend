import React, { useState } from 'react';
import { FaMapMarkerAlt, FaCalendarAlt, FaUser } from 'react-icons/fa';

const Searchhotel = () => {
  const [location, setLocation] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);
  const [showModal, setShowModal] = useState(false);

  const handleSearch = () => {
    alert(`Searching hotels in ${location}`);
  };

  return (
    <div className="px-4 py-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">Search hotels</h1>
      <p className="text-gray-600 mb-6">Enjoy hassle free bookings with Cleartrip</p>

      <div className="bg-white rounded-xl shadow p-6 space-y-4">
        {/* Location Input */}
        <div className="flex items-center border rounded-md px-4 py-3">
          <FaMapMarkerAlt className="text-gray-500 mr-3" />
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter locality, landmark, city or hotel"
            className="w-full outline-none"
          />
        </div>

        {/* Dates */}
        <div className="flex gap-4">
          <div className="flex items-center border rounded-md px-4 py-3 w-full">
            <FaCalendarAlt className="text-gray-500 mr-3" />
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full outline-none"
            />
          </div>
          <div className="flex items-center border rounded-md px-4 py-3 w-full">
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full outline-none"
            />
          </div>
        </div>

        {/* Room/Guest Info (Triggers Modal) */}
        <div
          className="flex items-center border rounded-md px-4 py-3 cursor-pointer"
          onClick={() => setShowModal(true)}
        >
          <FaUser className="text-gray-500 mr-3" />
          <span>{rooms} Room{rooms > 1 ? 's' : ''}, {adults} Adult{adults > 1 ? 's' : ''}</span>
        </div>

        {/* Search Button */}
        <button
          onClick={handleSearch}
          className="w-full bg-[#FF5B00] text-white font-semibold py-3 rounded-md hover:bg-orange-600 transition"
        >
          Search hotels
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-sm">
            <h2 className="text-lg font-bold mb-4">Select Rooms & Guests</h2>

            <div className="mb-4">
              <label className="block font-medium mb-1">Rooms</label>
              <input
                type="number"
                min="1"
                value={rooms}
                onChange={(e) => setRooms(parseInt(e.target.value))}
                className="w-full border px-3 py-2 rounded outline-none"
              />
            </div>

            <div className="mb-4">
              <label className="block font-medium mb-1">Adults</label>
              <input
                type="number"
                min="1"
                value={adults}
                onChange={(e) => setAdults(parseInt(e.target.value))}
                className="w-full border px-3 py-2 rounded outline-none"
              />
            </div>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-300 text-sm rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-orange-500 text-white text-sm rounded hover:bg-orange-600"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Searchhotel;
