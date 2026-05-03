import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../services/api";
import Loader from "../components/Loader";

const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = async (e) => {
  e.preventDefault();

  setLoading(true);

  try {
    const data = await registerUser({ name, email, password });

    console.log(data); // debug once

    localStorage.setItem("token", data.token);

    navigate("/");
  } catch (err) {
    console.log(err);
  } finally {
    setLoading(false);
  }
};

{loading && <Loader />}
  return (
      <>
        {loading && <Loader />}

        <div className="min-h-screen bg-[#fef6e4] flex items-center justify-center font-[Poppins]">
          
          <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md">
            
            <h1 className="text-4xl font-[Patrick_Hand] text-[#001858] text-center mb-6">
              📝 Join the Notes Club
            </h1>

            <form
              className="flex flex-col gap-4"
              onSubmit={handleRegister}
            >

              <input
                type="text"
                placeholder="Your Name"
                className="px-4 py-3 rounded-lg border-2 border-[#8bd3dd]"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />

              <input
                type="email"
                placeholder="Email"
                className="px-4 py-3 rounded-lg border-2 border-[#f582ae]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <p className="text-xs text-gray-500 -mt-2 ml-1">
              Use a valid email address (example: name@gmail.com)
              </p>

              <div className="relative">

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full px-4 py-3 rounded-lg border-2 border-[#8bd3dd] pr-12"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />

                {/* Eye button */}
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>

              </div>
              <p className="text-xs text-gray-500 -mt-2 ml-1">
              Must contain at least 1 uppercase letter and 1 number (min 6 characters) e.g Password123
              </p>

              <button className="bg-[#f582ae] text-white py-3 rounded-lg font-semibold hover:scale-105 transition">
                Register
              </button>

            </form>

            <p className="text-sm text-center mt-4 text-gray-500">
              Already have an account?{" "}
              <Link to="/login" className="text-[#f582ae]">Login</Link>
            </p>

          </div>
        </div>
      </>
   );
  };

export default Register;