import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  // handle login button click
  const handleLogin = (e) => {
    e.preventDefault();
    // (You can add validation or API login here later)
    navigate("/form"); // ✅ Redirect to Form page
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-purple-500">
      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-full max-w-md text-white">
        {/* Header */}
        <h2 className="text-3xl font-bold text-center mb-6">Welcome Back</h2>
        <p className="text-center text-white-200 mb-8">
          Login to your account to continue
        </p>

        {/* Login Form */}
        <form className="space-y-5" onSubmit={handleLogin}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium mb-1 text-white-100"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium mb-1 text-white-100"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          <div className="flex items-center justify-between text-sm text-white-100">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-purple-500" />
              Remember me
            </label>
            <a href="#" className="hover:underline text-white-100">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full py-2 mt-4 bg-purple-600 hover:bg-purple-700 transition-all duration-300 rounded-lg font-semibold text-white shadow-md hover:cursor-pointer"
          >
            Login
          </button>
        </form>

        {/* Signup Link */}
        <p className="text-center text-purple-100 mt-6 text-sm">
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
