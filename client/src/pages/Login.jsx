import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../services/api";
import Loader from "../components/Loader";

const Login = ({ onAuthSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);
    setToast(null);

    try {
      const data = await loginUser({ email, password });

      console.log("LOGIN RESPONSE:", data);

      if (data?.token) {
        localStorage.setItem("token", data.token);
        onAuthSuccess?.(data.token);

        setToast({
          type: "success",
          message: "Login successful 🚀",
        });

        navigate("/");
      } else {
        setToast({
          type: "error",
          message: data?.message || "Invalid credentials",
        });
      }

    } catch (err) {
      console.log(err);
      setToast({
        type: "error",
        message: "Server error. Try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fef6e4] flex items-center justify-center font-[Poppins] relative">

      {/* LOADER */}
      {loading && <Loader />}

      {/* TOAST */}
      {toast && (
        <div
          className={`fixed top-5 right-5 px-4 py-3 rounded-lg shadow-lg text-white transition-all
          ${toast.type === "error" ? "bg-red-400" : "bg-green-400"}
          animate-fade-in`}
        >
          {toast.message}

          <button
            className="ml-3 opacity-80"
            onClick={() => setToast(null)}
          >
            ✕
          </button>
        </div>
      )}

      {/* LOGIN CARD */}
      <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md">

        <h1 className="text-4xl font-[Patrick_Hand] text-[#001858] text-center mb-6">
          🔐 Welcome Back
        </h1>

        <form className="flex flex-col gap-4" onSubmit={handleLogin}>

          <input
            type="email"
            placeholder="Email"
            className="px-4 py-3 rounded-lg border-2 border-[#f582ae] focus:outline-none focus:ring-2 focus:ring-[#f582ae]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

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

          <button
            type="submit"
            className="bg-[#f582ae] text-white py-3 rounded-lg font-semibold hover:scale-105 transition"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

        </form>

        <p className="text-sm text-center mt-4 text-gray-500">
          Don't have an account?{" "}
          <Link to="/register" className="text-[#f582ae]">
            Register
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Login;