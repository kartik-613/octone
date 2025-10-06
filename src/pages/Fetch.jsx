import React from "react";

const Fetch = () => {
  return (
    <div className="bg-[#59a9b4] p-4 sm:p-6 rounded-2xl shadow-lg text-white mt-6 space-y-6">
      {/* Data Type Selection */}
      <div>
        <label className="block text-sm font-semibold text-white/90 mb-2">
          Select Data Type
        </label>
        <select className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg bg-white text-[#59a9b4] focus:outline-none focus:ring-2 focus:ring-white/80 text-sm sm:text-base">
          <option value="pancard">Pancard</option>
          <option value="adharcard">Aadhar Card</option>
        </select>
      </div>

      {/* Buttons Section */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 flex-wrap">
        {/* Download Button */}
        <button className="w-full sm:w-auto px-6 py-2 bg-white/20 hover:bg-white/30 rounded-lg font-semibold text-white shadow-md transition-all duration-300">
          Download File
        </button>
      </div>

      {/* Upload + Updated Download Section */}
      <div className="flex flex-col items-start gap-4 w-full">
        <div className="w-full">
          <label className="block text-sm font-semibold text-white/90 mb-2">
            Upload File
          </label>
          <input
            type="file"
            className="block text-sm sm:text-base text-[#59a9b4] bg-white rounded-lg px-3 py-2 w-full focus:outline-none mb-3"
          />
          <button className="px-6 py-2 bg-white/20 hover:bg-white/30 rounded-lg font-semibold text-white shadow-md transition-all duration-300 w-full sm:w-auto">
            Upload File
          </button>
        </div>

        {/* New Download Updated Button */}
        <button className="px-6 py-2 bg-white/20 hover:bg-white/30 rounded-lg font-semibold text-white shadow-md transition-all duration-300 w-full sm:w-auto">
          Download Updated File
        </button>
      </div>
    </div>
  );
};

export default Fetch;
