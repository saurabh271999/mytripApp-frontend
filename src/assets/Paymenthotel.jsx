
import React, { useEffect } from 'react';

import { NavLink } from 'react-router-dom';
export default function FirstFlightOffer() {
  useEffect(() => {
  const script = document.createElement('script');
  script.src = 'https://checkout.razorpay.com/v1/checkout.js';
  script.async = true;
  document.body.appendChild(script);
}, []);

  const handlePayment = () => {
  const options = {
    key: 'rzp_live_0UuvnA3YQefRKT', 
    amount: buyPhone.price * counter * 100, 
    currency: 'INR',
    name: 'Buy Easy Phone',
    description: buyPhone.title,
    image: 'https://png.pngtree.com/png-clipart/20200727/original/pngtree-e-commerce-logo-template-png-image_5066821.jpg', 
    handler: function (response) {
      alert('✅ Payment Successful! Payment ID: ' + response.razorpay_payment_id);
    },
    prefill: {
      name: 'Saurabh',
      email: 'saurabh@example.com',
      contact: '9999999999',
    },
    notes: {
      address: 'Ghaziabad, India',
    },
    theme: {
      color: '#3399cc',
    },
  };

  const rzp = new window.Razorpay(options);
  rzp.open();
};
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center py-10 px-4">
      {/* Hero Section */}
      <div className="mb-8">
      <div className="flex items-center">
    <span className="text-orange-500 text-3xl mr-2">✔️</span>
    <span className="text-orange-500 font-bold text-2xl">Amazingtrip</span>
  </div>
      </div>

      {/* Content */}
      <div className="bg-white w-full max-w-3xl rounded-3xl shadow-lg p-6 md:p-10 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-orange-600 mb-4">First Hotel Booking Offer</h1>
        <p className="text-lg text-gray-700 mb-6">
          Flat 10% Off On Your First Hotel booking
        </p>

        {/* Coupon Box */}
        <div className="bg-blue-100 border border-blue-300 text-orange-400 font-semibold text-lg px-6 py-3 rounded-full inline-block mb-6">
          Use Coupon Code: <span className="font-bold">CTFIRST</span>
        </div>

        {/* Book Button */}
        <div className="mb-10">
          <a
            href="https://www.cleartrip.com/flights"
            target="_blank"
            rel="noopener noreferrer"
          >
            <NavLink to="/booking/hotel/paymenthotel/searchflight/hotel">
            <button onClick={handlePayment} className=" cursor-pointer bg-orange-600 hover:bg-orange-400 text-white px-6 py-2 rounded-full text-lg font-semibold shadow-md transition">
              Book Now
            </button>
            </NavLink>
            
          </a>
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-2 gap-6 text-left mb-10">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 shadow">
            <h3 className="text-xl font-semibold text-orange-400 mb-2">What do you get?</h3>
            <p className="text-gray-700">
              Flat 10% off up to ₹1,000 on Hotel booking
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 shadow">
            <h3 className="text-xl font-semibold text-orange-400 mb-2">How to avail the offer?</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Log in or sign up on Cleartrip</li>
              <li>Select a Hotel</li>
              <li>
                Use code <span className="font-bold text-blue-700">CTFIRST</span> during checkout
              </li>
            </ul>
          </div>
        </div>

        {/* Terms & Conditions */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow text-left">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Terms & Conditions</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
            <li>Offer valid only for new users.</li>
            
            <li>Maximum discount of ₹1,000.</li>
            <li>Offer valid till 31 May 2025.</li>
            <li>Standard cancellation policies apply.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
