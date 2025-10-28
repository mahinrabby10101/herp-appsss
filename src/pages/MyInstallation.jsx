// src/pages/MyInstallation.jsx
import React from "react";

export default function MyInstallation({ installedApps, onUninstall }) {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Your Installed Apps</h2>
      <p className="text-gray-500 mb-6">
        Explore all trending apps on the market developed by us
      </p>

      {installedApps.length === 0 ? (
        <div className="text-gray-600">No apps installed yet.</div>
      ) : (
        <div className="space-y-4">
          {installedApps.map((app) => (
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1M12 12v-6m-6 6h12"
                      />
                    </svg>
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
