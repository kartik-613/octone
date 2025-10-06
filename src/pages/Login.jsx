import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/dashboard"); // Redirect to Dashboard
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-white">
      <div className="bg-[#59a9b4] p-6 sm:p-8 rounded-2xl shadow-2xl w-full max-w-md text-white">
        {/* Header */}
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-6">
          Welcome Back
        </h2>
        <p className="text-center text-white/90 mb-6 sm:mb-8 text-sm sm:text-base">
          Login to your account to continue
        </p>

        {/* Login Form */}
        <form className="space-y-4 sm:space-y-5" onSubmit={handleLogin}>
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium mb-1 text-white/90"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/80 text-sm sm:text-base"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium mb-1 text-white/90"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/80 text-sm sm:text-base"
            />
          </div>

          {/* Remember + Forgot */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-sm text-white/90 gap-2 sm:gap-0">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-white/80" />
              Remember me
            </label>
            <a href="#" className="hover:underline text-white/90 mt-1 sm:mt-0">
              Forgot password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-2 sm:py-2.5 mt-4 bg-white/20 hover:bg-white/30 transition-all duration-300 rounded-lg font-semibold text-white shadow-md"
          >
            Login
          </button>
        </form>

        {/* Signup */}
        <p className="text-center text-white/90 mt-4 sm:mt-6 text-sm">
          Don’t have an account?{" "}
          <a href="#" className="text-white hover:underline font-medium">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
