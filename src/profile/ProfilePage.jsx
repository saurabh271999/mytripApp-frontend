import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const userProfile = JSON.parse(localStorage.getItem("userProfile") || "{}");
    const latestBooking = JSON.parse(localStorage.getItem("latestBooking") || "{}");

    if (!userProfile.email) {
      setLoading(false);
      return;
    }

    const fetchProfile = async () => {
      try {
        const res = await fetch(`https://mytrip-backend.vercel.app/api/userprofile?email=${encodeURIComponent(userProfile.email)}`);
        const data = await res.json();
        setUser({ ...data, latestBooking });
      } catch (err) {
        console.error("Failed to load user profile", err);
      }
      setLoading(false);
    };

    fetchProfile();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userProfile");
    localStorage.removeItem("latestBooking");
    localStorage.removeItem("userEmail");
    navigate("/");
    window.location.reload();
  };

  if (loading) {
    return <div className="p-8 max-w-xl mx-auto">Loading...</div>;
  }

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-2xl font-semibold mb-6">Profile</h1>

      {/* Login Info */}
      <section className="mb-6">
        <h2 className="text-xl font-medium mb-2">Login information</h2>
        <div className="flex justify-between border-b py-2">
          <span>Email Address</span>
          <span className="font-semibold">{user.email || 'Not provided'}</span>
        </div>
      </section>

      {/* Personal Info */}
      <section className="mb-6">
        <h2 className="text-xl font-medium mb-2">Personal information</h2>
        <div className="flex justify-between border-b py-2">
          <span>Full Name</span>
          <span className="text-gray-400">{user.name || 'Not Provided'}</span>
        </div>
      </section>

      {/* Booking Info */}
      {user.latestBooking?.from && (
        <section className="mb-6">
          <h2 className="text-xl font-medium mb-2">Recent Flight Booking</h2>
          <div className="flex justify-between border-b py-2">
            <span>From</span>
            <span>{user.latestBooking.from}</span>
          </div>
          <div className="flex justify-between border-b py-2">
            <span>To</span>
            <span>{user.latestBooking.to}</span>
          </div>
          <div className="flex justify-between border-b py-2">
            <span>Departure</span>
            <span>{user.latestBooking.departureDate}</span>
          </div>
          <div className="flex justify-between border-b py-2">
            <span>Arrival</span>
            <span>{user.latestBooking.arrivalDate}</span>
          </div>
        </section>
      )}

      <button onClick={handleLogout} className="mt-8 px-6 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition">
        Logout
      </button>
    </div>
  );
};

export default Profile;
