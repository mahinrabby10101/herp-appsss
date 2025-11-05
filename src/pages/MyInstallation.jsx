// src/pages/MyInstallation.jsx
import React, { useState, useMemo } from "react";

export default function MyInstallation({ installedApps, onUninstall }) {
  const [sort, setSort] = useState("none");

  const sortedApps = useMemo(() => {
    if (sort === "high") return [...installedApps].sort((a, b) => b.size - a.size);
    if (sort === "low") return [...installedApps].sort((a, b) => a.size - b.size);
    return installedApps;
  }, [installedApps, sort]);

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-4">
        <div>
          <h2 className="text-3xl font-bold">Your Installed Apps</h2>
          <p className="text-gray-500">
            Explore all trending apps on the market developed by us
          </p>
        </div>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="px-3 py-2 border rounded w-full sm:w-auto"
        >
          <option value="none">Sort by size</option>
          <option value="high">High → Low</option>
          <option value="low">Low → High</option>
        </select>
      </div>

      {sortedApps.length === 0 ? (
        <div className="text-gray-600">No apps installed yet.</div>
      ) : (
        <div className="space-y-4">
          {sortedApps.map((app) => (
            <div
              key={app.id}
              className="flex items-center justify-between bg-white rounded-lg shadow p-4"
            >
              <img
                src={app.image}
                alt={app.title}
                className="w-16 h-16 object-cover rounded"
              />

              <div className="flex-1 ml-4 flex items-center justify-between">
                <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6">
                  <span className="font-semibold">{app.title}</span>
                  <span className="text-green-500 text-sm flex items-center gap-1">
                    {app.downloads.toLocaleString()}M
                  </span>
                  <span className="text-yellow-500 text-sm flex items-center gap-1">
                    ⭐ {app.rating}
                  </span>
                  <span className="text-gray-500 text-sm">{app.size} MB</span>
                </div>

                <button
                  onClick={() => onUninstall(app.id)}
                  className="ml-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                >
                  Uninstall
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
