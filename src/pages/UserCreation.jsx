import React from "react";

const UserCreation = () => {
  return (
    <div className="bg-[#59a9b4] p-4 sm:p-6 rounded-2xl shadow-lg text-white mt-6 w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center sm:text-left">
        Create New User
      </h2>

      <form className="space-y-4">
        {/* Name */}
        <div>
          <label className="block text-sm font-semibold mb-1 text-white/90">
            Name
          </label>
          <input
            type="text"
            placeholder="Enter name"
            className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg bg-white text-[#59a9b4] focus:outline-none focus:ring-2 focus:ring-white/80 text-sm sm:text-base"
          />
        </div>

        {/* Mobile */}
        <div>
          <label className="block text-sm font-semibold mb-1 text-white/90">
            Mobile
          </label>
          <input
            type="tel"
            placeholder="Enter mobile number"
            className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg bg-white text-[#59a9b4] focus:outline-none focus:ring-2 focus:ring-white/80 text-sm sm:text-base"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-semibold mb-1 text-white/90">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter email"
            className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg bg-white text-[#59a9b4] focus:outline-none focus:ring-2 focus:ring-white/80 text-sm sm:text-base"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-semibold mb-1 text-white/90">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter password"
            className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg bg-white text-[#59a9b4] focus:outline-none focus:ring-2 focus:ring-white/80 text-sm sm:text-base"
          />
        </div>

        {/* Role */}
        <div>
          <label className="block text-sm font-semibold mb-1 text-white/90">
            API Permissions
          </label>
          <select className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg bg-white text-[#59a9b4] focus:outline-none focus:ring-2 focus:ring-white/80 text-sm sm:text-base">
            <option value="create">Create</option>
            <option value="read">Read</option>
            <option value="update">Update</option>
            <option value="delete">Delete</option>
            <option value="download">Download</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1 text-white/90">
            Role
          </label>
          <select className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg bg-white text-[#59a9b4] focus:outline-none focus:ring-2 focus:ring-white/80 text-sm sm:text-base">
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
        </div>

        {/* Create User Button */}
        <button className="w-full py-2 mt-2 bg-white/20 hover:bg-white/30 text-white font-semibold rounded-lg  transition-all duration-300">
          Create User
        </button>
      </form>
    </div>
  );
};

export default UserCreation;
