// components/LoginPopup.jsx
import React, { useState } from "react";

const LoginPopup = ({ onLoginSuccess }) => {
  const [showPopup, setShowPopup] = useState(true);
  const [showSignup, setShowSignup] = useState(false);
  const [useOtpLogin, setUseOtpLogin] = useState(true);

  // Signup states
  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupOtp, setSignupOtp] = useState("");
  const [signupOtpSent, setSignupOtpSent] = useState(false);
  const [signingUp, setSigningUp] = useState(false);

  // Login states
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginOtp, setLoginOtp] = useState("");
  const [loginOtpSent, setLoginOtpSent] = useState(false);
  const [loggingIn, setLoggingIn] = useState(false);

  const handleSendSignupOtp = async () => {
    if (!signupEmail) return alert("Please enter your email.");
    try {
      const res = await fetch('https://mytripapp-backend-2.onrender.com/api/otp/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: signupEmail })
      });
      const data = await res.json();
      if (res.ok) {
        setSignupOtpSent(true);
        alert("OTP sent to your email.");
      } else {
        alert(data.message || "Failed to send OTP");
      }
    } catch {
      alert("Error sending OTP");
    }
  };

  const handleSignup = async () => {
    if (!signupName || !signupEmail || !signupPassword || !signupOtp)
      return alert("All fields are required.");
    setSigningUp(true);
    try {
      const res = await fetch('https://mytripapp-backend-2.onrender.com/api/auth/verify-signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: signupName,
          email: signupEmail,
          password: signupPassword,
          otp: signupOtp
        })
      });
      const data = await res.json();
      if (res.ok) {
        alert("Signup successful! You can now login.");
        setShowSignup(false);
        setSignupName(""); setSignupEmail(""); setSignupPassword(""); setSignupOtp(""); setSignupOtpSent(false);
      } else {
        alert(data.message || "Signup failed");
      }
    } catch {
      alert("Error during signup");
    }
    setSigningUp(false);
  };

  const handleSendLoginOtp = async () => {
    if (!loginEmail) return alert("Please enter your email.");
    try {
      const res = await fetch('https://mytripapp-backend-2.onrender.com/api/otp/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: loginEmail })
      });
      const data = await res.json();
      if (res.ok) {
        setLoginOtpSent(true);
        alert("OTP sent to your email.");
      } else {
        alert(data.message || "Failed to send OTP");
      }
    } catch {
      alert("Error sending OTP");
    }
  };

  const handleLogin = async () => {
    if (!loginEmail) return alert("Please enter your email.");
    if (useOtpLogin && !loginOtp) return alert("Please enter OTP.");
    if (!useOtpLogin && !loginPassword) return alert("Please enter your password.");

    setLoggingIn(true);
    try {
      const endpoint = useOtpLogin ? "verify-login" : "login-by-password";
      const payload = useOtpLogin ? { email: loginEmail, otp: loginOtp } : { email: loginEmail, password: loginPassword };

      const res = await fetch(`https://mytripapp-backend-2.onrender.com/api/auth/${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok) {
        const profileRes = await fetch(`https://mytripapp-backend-2.onrender.com/api/userprofile?email=${encodeURIComponent(loginEmail)}`);
        const profileData = await profileRes.json();
        localStorage.setItem("userProfile", JSON.stringify(profileData));
        alert("Login successful!");
        setShowPopup(false);
        if (onLoginSuccess) onLoginSuccess();
      } else {
        alert(data.message || "Login failed");
      }
    } catch {
      alert("Error during login");
    }
    setLoggingIn(false);
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg w-full max-w-md shadow-lg p-6 relative">
        <button className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl" onClick={() => setShowPopup(false)}>
          &times;
        </button>
        <h3 className="text-xl font-semibold mb-4">{showSignup ? "Sign Up" : "Login"}</h3>

        {!showSignup ? (
          <>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none mb-2"
              value={loginEmail}
              onChange={e => setLoginEmail(e.target.value)}
              disabled={loginOtpSent && useOtpLogin}
            />

            <button
              className="text-sm text-blue-500 underline mb-2"
              onClick={() => setUseOtpLogin(prev => !prev)}
            >
              {useOtpLogin ? "Login with Password instead" : "Login with OTP instead"}
            </button>

            {useOtpLogin ? (
              !loginOtpSent ? (
                <button
                  onClick={handleSendLoginOtp}
                  className="bg-black text-white w-full py-2 rounded-md mt-2 hover:bg-gray-900 transition"
                >
                  Send OTP
                </button>
              ) : (
                <>
                  <input
                    type="text"
                    placeholder="Enter OTP"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none mb-2"
                    value={loginOtp}
                    onChange={e => setLoginOtp(e.target.value)}
                  />
                  <button
                    onClick={handleLogin}
                    className="bg-black text-white w-full py-2 rounded-md mt-2 hover:bg-gray-900 transition"
                    disabled={loggingIn}
                  >
                    {loggingIn ? "Logging in..." : "Login"}
                  </button>
                </>
              )
            ) : (
              <>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none mb-2"
                  value={loginPassword}
                  onChange={e => setLoginPassword(e.target.value)}
                />
                <button
                  onClick={handleLogin}
                  className="bg-black text-white w-full py-2 rounded-md mt-2 hover:bg-gray-900 transition"
                  disabled={loggingIn}
                >
                  {loggingIn ? "Logging in..." : "Login"}
                </button>
              </>
            )}

            <button
              className="w-full mt-4 text-blue-600 underline"
              onClick={() => setShowSignup(true)}
            >
              New user? Sign up
            </button>
          </>
        ) : (
          <>
            <input
              type="text"
              placeholder="Name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none mb-2"
              value={signupName}
              onChange={e => setSignupName(e.target.value)}
              disabled={signupOtpSent}
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none mb-2"
              value={signupEmail}
              onChange={e => setSignupEmail(e.target.value)}
              disabled={signupOtpSent}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none mb-2"
              value={signupPassword}
              onChange={e => setSignupPassword(e.target.value)}
              disabled={signupOtpSent}
            />
            {!signupOtpSent ? (
              <button
                onClick={handleSendSignupOtp}
                className="bg-orange-500 text-white w-full py-2 rounded-md mt-2 hover:bg-orange-600 transition"
              >
                Send OTP
              </button>
            ) : (
              <>
                <input
                  type="text"
                  placeholder="Enter OTP"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none mb-2"
                  value={signupOtp}
                  onChange={e => setSignupOtp(e.target.value)}
                />
                <button
                  onClick={handleSignup}
                  className="bg-orange-500 text-white w-full py-2 rounded-md mt-2 hover:bg-orange-600 transition"
                  disabled={signingUp}
                >
                  {signingUp ? "Signing up..." : "Sign Up"}
                </button>
              </>
            )}
            <button
              className="w-full mt-2 text-blue-600 underline"
              onClick={() => setShowSignup(false)}
            >
              Already have an account? Login
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginPopup;
