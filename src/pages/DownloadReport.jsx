import React from "react";

const DownloadReport = () => {
  return (
    <div className="bg-[#59a9b4] p-4 sm:p-6 rounded-2xl shadow-lg text-white mt-6">
      <h2 className="text-2xl font-bold mb-4">Download Report</h2>

      {/* Filter Section */}
      <div className="flex flex-col sm:flex-row gap-4 mb-4">
        {/* From Date */}
        <div className="flex-1">
          <label className="block text-sm font-semibold mb-1">From Date</label>
          <input
            type="date"
            className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg bg-white text-[#59a9b4] placeholder-[#59a9b4]/70 focus:outline-none focus:ring-2 focus:ring-white/80 text-sm sm:text-base"
          />
        </div>

        {/* To Date */}
        <div className="flex-1">
          <label className="block text-sm font-semibold mb-1">To Date</label>
          <input
            type="date"
            className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg bg-white text-[#59a9b4] placeholder-[#59a9b4]/70 focus:outline-none focus:ring-2 focus:ring-white/80 text-sm sm:text-base"
          />
        </div>

        {/* By Dropdown */}
        <div className="flex-1">
          <label className="block text-sm font-semibold mb-1">By</label>
          <select className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg bg-white text-[#59a9b4] focus:outline-none focus:ring-2 focus:ring-white/80 text-sm sm:text-base">
            <option value="all">All</option>
            <option value="pancard">Pancard</option>
            <option value="adharcard">Aadhar Card</option>
          </select>
        </div>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto rounded-lg">
        <table className="w-full border border-white/30 text-sm sm:text-base">
          <thead className="bg-white text-[#59a9b4]">
            <tr>
              <th className="px-3 sm:px-4 py-2 text-left font-medium">Name</th>
              <th className="px-3 sm:px-4 py-2 text-left font-medium">Type</th>
              <th className="px-3 sm:px-4 py-2 text-left font-medium">Date</th>
              <th className="px-3 sm:px-4 py-2 text-left font-medium">No. of Downloads</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white/90 text-[#59a9b4]">
              <td className="px-3 sm:px-4 py-2">Rahul Sharma</td>
              <td className="px-3 sm:px-4 py-2">Pancard</td>
              <td className="px-3 sm:px-4 py-2">2025-10-06</td>
              <td className="px-3 sm:px-4 py-2">3</td>
            </tr>
            <tr className="bg-white/80 text-[#59a9b4]">
              <td className="px-3 sm:px-4 py-2">Neha Patel</td>
              <td className="px-3 sm:px-4 py-2">Aadhar Card</td>
              <td className="px-3 sm:px-4 py-2">2025-10-05</td>
              <td className="px-3 sm:px-4 py-2">1</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DownloadReport;
    