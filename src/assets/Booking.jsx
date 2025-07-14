import React from 'react';
import { NavLink } from 'react-router-dom';

const offers = [
  {
    img: 'https://s.abcnews.com/images/GMA/airplane-vacation-gty-er-190402_hpMain_5_16x9_1600.jpg',
  },
  {
    img: 'https://www.flightnetwork.com/system/image/open_graph_default_image.jpg',
  },
  {
    img: 'https://blog.air.irctc.co.in/wp-content/uploads/2023/04/aeroplane-ticket-booking.jpg',
  },
  {
    img: 'https://assets.telegraphindia.com/telegraph/2020/Jul/1595972233_1594320268_shutterstock_699697081.jpg',
  },
  {
    img: 'https://i.ytimg.com/vi/UVOj672w4BI/hq720.jpg',
  },
  {
    img: 'https://media.istockphoto.com/id/155439315/photo/passenger-airplane-flying-above-clouds-during-sunset.jpg?s=612x612&w=0&k=20&c=LJWadbs3B-jSGJBVy9s0f8gZMHi2NvWFXa3VJ2lFcL0=',
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
      
      <NavLink to="/booking/hotel/searchhotel">
      <button className= ' cursor-pointer bg-blue-600 text-white font-semibold px-4 py-1.5 rounded-full hover:bg-blue-700 transition m-5'>Hotel</button>
      </NavLink>
      <NavLink to="searchbus">
      <button className='bg-blue-600 cursor-pointer text-white font-semibold px-4 py-1.5 rounded-full hover:bg-blue-700 transition m-5'>Buses</button>
      </NavLink>
     </div>
        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {offers.map((offer, index) => (
            <NavLink to="/payment" key={index} className="group">
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
                    <div className="text-xs text-gray-600">on Flights via UPI</div>
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
