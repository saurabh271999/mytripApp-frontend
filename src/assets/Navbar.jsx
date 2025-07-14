import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import LoginPopup from "./LoginPopup";
import Bussinesspop from '../businnesspopup/Bussinesspop';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showBusinessPop, setShowBusinessPop] = useState(false);
  const [userEmail, setUserEmail] = useState(""); // Add this

  // Check login state on mount
  useEffect(() => {
    const userProfile = JSON.parse(localStorage.getItem("userProfile") || "{}");
    setIsLoggedIn(!!userProfile.email);
    setUserEmail(userProfile.email || "");
  }, []);

  // Callback to handle successful login
  const handleLoginSuccess = () => {
    setShowLogin(false);
    const userProfile = JSON.parse(localStorage.getItem("userProfile") || "{}");
    setIsLoggedIn(!!userProfile.email);
    setUserEmail(userProfile.email || "");
  };

  return (
    <>
      <nav className="flex items-center justify-between px-4 py-4 bg-white shadow-sm relative">
        {/* Left: Logo and subtitle */}
        <div className="flex items-center space-x-2">
          <NavLink to="/">
            <div className="flex items-center">
              <span className="text-orange-500 text-3xl mr-2">✔️</span>
              <span className="text-orange-500 font-bold text-2xl">Amazingtrip</span>
            </div>
          </NavLink>
          <span className="hidden sm:inline text-sm text-gray-400 italic ml-2">
            |  <span className="font-semibold"></span>
          </span>
        </div>

        {/* Show logged in email */}
        {isLoggedIn && userEmail && (
          <span className="text-sm text-gray-600 font-semibold mr-4">
            {userEmail}
          </span>
        )}

        {/* Right: Nav links */}
        <div className="hidden sm:flex items-center space-x-8">
          <NavLink className="" to="/booking">
            <span className="mr-1 hover:text-orange-500">⭑Offers</span>
          </NavLink>
          <span
            className="mr-1 relative"
            onMouseEnter={() => setShowBusinessPop(true)}
            onMouseLeave={() => setShowBusinessPop(false)}
            style={{ cursor: "pointer" }}
          >
            👜 Business
            {showBusinessPop && (
              <div
                className="absolute w-[900px] right-[-100px] top-full z-50"
                onMouseEnter={() => setShowBusinessPop(true)}
                onMouseLeave={() => setShowBusinessPop(false)}
              >
                <Bussinesspop />
              </div>
            )}
          </span>
          <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M19 9l-7 7-7-7" />
          </svg>
          <a href="#" className="flex items-center text-gray-700 hover:text-orange-500 text-base">
            <span className="mr-1">🧳</span> My Trips
          </a>
          <a href="#" className="flex items-center text-gray-700 hover:text-orange-500 text-base">
            <span className="mr-1">🛎️</span> Support
          </a>
          {!isLoggedIn ? (
            <button
              className="ml-4 px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition"
              onClick={() => setShowLogin(true)}
            >
              Login
            </button>
          ) : (
            <NavLink to='/profile'>
              <button
                className="ml-4 px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition flex items-center"
              >
                <span className="mr-2">👤</span> Profile
              </button>
            </NavLink>
          )}
        </div>

        {/* Hamburger Icon (Mobile) */}
        <div className="sm:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 hover:text-orange-500 focus:outline-none"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-20 left-0 w-full bg-white shadow-md sm:hidden z-50">
            <div className="flex flex-col p-6 space-y-4">
              <NavLink to="/booking">
                <span className="text-gray-700 hover:text-orange-500 active:bg-orange-100 px-2 py-1 rounded transition text-base flex items-center">
                  ⭑ Offers
                </span>
              </NavLink>
              <span className="text-gray-700 hover:text-orange-500 active:bg-orange-100 px-2 py-1 rounded transition text-base flex items-center">
                👜 Business
              </span>
              <span className="text-gray-700 hover:text-orange-500 active:bg-orange-100 px-2 py-1 rounded transition text-base flex items-center">
                🧳 My Trips
              </span>
              <span className="text-gray-700 hover:text-orange-500 active:bg-orange-100 px-2 py-1 rounded transition text-base flex items-center">
                🛎️ Support
              </span>
              {!isLoggedIn ? (
                <button
                  className="w-full px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition"
                  onClick={() => setShowLogin(true)}
                >
                  Login
                </button>
              ) : (
                <NavLink to='/profile'>
                  <button
                    className="w-full px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition flex items-center justify-center"
                  >
                    <span className="mr-2">👤</span> Profile
                  </button>
                </NavLink>
              )}
            </div>
          </div>
        )}
      </nav>
      {showLogin && <LoginPopup onLoginSuccess={handleLoginSuccess} />}
    </>
  );
};

export default Navbar;
