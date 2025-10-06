import React, { useState } from "react";

const Form = () => {
  const [mode, setMode] = useState("fetch");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-purple-500 p-6">
      <div className="bg-white/20 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-full max-w-3xl text-white">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-8 text-purple-900">
          File Management Portal
        </h2>

        {/* Radio Selection */}
        <div className="flex justify-center gap-8 mb-8">
          <label className="flex items-center gap-2 text-purple-900 font-medium">
            <input
              type="radio"
              name="mode"
              value="fetch"
              checked={mode === "fetch"}
              onChange={(e) => setMode(e.target.value)}
              className="accent-purple-600 w-4 h-4"
            />
            Fetch
          </label>

          <label className="flex items-center gap-2 text-purple-900 font-medium">
            <input
              type="radio"
              name="mode"
              value="data"
              checked={mode === "data"}
              onChange={(e) => setMode(e.target.value)}
              className="accent-purple-600 w-4 h-4"
            />
            Data
          </label>
        </div>

        {/* Fetch Mode */}
        {mode === "fetch" && (
          <div className="space-y-6">
            {/* Data Dropdown */}
            <div>
              <label
                htmlFor="dataType"
                className="block text-sm font-semibold text-purple-800 mb-2"
              >
                Select Data Type
              </label>
              <select
                id="dataType"
                className="w-full px-4 py-2 rounded-lg bg-white/80 text-purple-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="pancard">Pancard</option>
                <option value="adharcard">Aadhar Card</option>
              </select>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <button className="w-full sm:w-auto px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow transition-all duration-300">
                Download File
              </button>

              <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                <input
                  type="file"
                  className="block text-sm text-purple-900 bg-white/80 rounded-lg px-3 py-2 w-full focus:outline-none"
                />
                <button className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow transition-all duration-300">
                  Upload File
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Data Mode */}
        {mode === "data" && (
          <div className="space-y-8">
            {/* Filters */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-semibold text-purple-800 mb-2">
                  From Date
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-2 rounded-lg bg-white/80 text-purple-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-purple-800 mb-2">
                  To Date
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-2 rounded-lg bg-white/80 text-purple-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-purple-800 mb-2">
                  By
                </label>
                <select className="w-full px-4 py-2 rounded-lg bg-white/80 text-purple-900 focus:outline-none focus:ring-2 focus:ring-purple-500">
                  <option value="">Select</option>
                  <option value="admin">Admin</option>
                  <option value="user">User</option>
                </select>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border border-purple-300 rounded-lg overflow-hidden">
                <thead className="bg-purple-600 text-white">
                  <tr>
                    <th className="px-4 py-2">Name</th>
                    <th className="px-4 py-2">Type</th>
                    <th className="px-4 py-2">Date</th>
                    <th className="px-4 py-2">No. of Downloads</th>
                  </tr>
                </thead>
                <tbody className="bg-white/80 text-purple-900">
                  <tr>
                    <td className="px-4 py-2">Rahul Sharma</td>
                    <td className="px-4 py-2">Pancard</td>
                    <td className="px-4 py-2">2025-10-06</td>
                    <td className="px-4 py-2">3</td>
                  </tr>
                  <tr className="bg-purple-100">
                    <td className="px-4 py-2">Neha Patel</td>
                    <td className="px-4 py-2">Aadhar Card</td>
                    <td className="px-4 py-2">2025-10-05</td>
                    <td className="px-4 py-2">1</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Form;
