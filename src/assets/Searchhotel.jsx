import React from 'react';
import { NavLink } from 'react-router-dom';

const offers = [
  {
    img: 'https://mmhotels.in/wp-content/uploads/2024/01/istockphoto-104731717-612x612-1.jpg',
  },
  {
    img: 'https://mmhotels.in/wp-content/uploads/2024/01/istockphoto-104731717-612x612-1.jpg',
  },
  {
    img: 'https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg',
  },
  {
    img: 'https://www.hotelscombined.in/rimg/himg/7f/61/7a/expediav2-601348-adb170-787981.jpg?width=968&height=607&crop=true',
  },
  {
    img: 'https://assets.cntraveller.in/photos/68106e3f9f2ded6f7061548c/1:1/w_750,h_750,c_limit/itc%20windsor.jpeg',
  },
  {
    img: 'https://assets.cntraveller.in/photos/68106e3f9f2ded6f7061548c/1:1/w_750,h_750,c_limit/itc%20windsor.jpeg',
  },
];

export default function FlightCard() {
  return (
    <div className="flex flex-col items-center w-full bg-gradient-to-b from-white-50 to-white min-h-screen py-10">
      {/* Logo */}
      <div className="flex items-center">
    <span className="text-orange-500 text-3xl mr-2">✔️</span>
    <span className="text-orange-500 font-bold text-2xl">Amazingtrip</span>
  </div>

     <div className='m-10'>
       <NavLink to="/payment/searchflight">
       <button className=' cursor-pointer bg-blue-600 text-white font-semibold px-4 py-1.5 rounded-full hover:bg-blue-700 transition m-5'>Flight</button>
       </NavLink>
      
      <NavLink to="/booking/hotel">
      <button className= ' cursor-pointer bg-blue-600 text-white font-semibold px-4 py-1.5 rounded-full hover:bg-blue-700 transition m-5'>Hotel</button>
      </NavLink>
      <NavLink to="searchbus">
      <button className='bg-blue-600 cursor-pointer text-white font-semibold px-4 py-1.5 rounded-full hover:bg-blue-700 transition m-5'>Buses</button>
      </NavLink>
     </div>
        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {offers.map((offer, index) => (
            <NavLink to="/booking/hotel/paymenthotel" key={index} className="group">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform transition-all duration-300 group-hover:-translate-y-1 overflow-hidden">
                {/* Image section */}
                <div className="relative">
                  <img
                    src={offer.img}
                    alt="Flight"
                    className="w-full h-48 object-cover"
                  />
                  {/* Badge */}
                  <div 
                  style={{
                    background:'none'
                  }} className="absolute top-3 left-3 bg-white bg-opacity-90 text-black text-sm px-3 py-2 rounded-lg shadow-md">
                    {/* <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/UPI-Logo-vector.svg/2560px-UPI-Logo-vector.svg.png"
                      alt="UPI"
                      className="w-5 inline-block mr-1"
                    /> */}
                    <span className="font-semibold">₹5,000 Off</span>
                    <div className="text-xs text-black font-bold">on Hotels via UPI</div>
                  </div>
                </div>

                {/* Bottom section */}
                <div className="flex justify-between items-center px-4 py-3 bg-blue-50 border-t">
                  <button className="flex items-center gap-1 bg-blue-100 hover:bg-blue-200 text-blue-800 px-3 py-1.5 rounded-full text-sm font-medium transition">
                    CTUPI
                    <img
                      src="https://png.pngtree.com/png-clipart/20190619/original/pngtree-vector-copy-icon-png-image_4013516.jpg"
                      alt="copy"
                      className="w-4"
                    />
                  </button>
                  <button className="bg-blue-600 text-white font-semibold px-4 py-1.5 rounded-full hover:bg-blue-700 transition">
                    BOOK NOW
                  </button>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
  
  );
}
