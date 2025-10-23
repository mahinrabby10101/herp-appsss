// src/pages/MyInstallation.jsx
import React from "react";

export default function MyInstallation({ installedApps, onUninstall }) {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-6">My Installation</h2>

      {installedApps.length === 0 ? (
        <div className="text-gray-600">No apps installed yet.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {installedApps.map((app) => (
            <div key={app.id} className="bg-white rounded-lg shadow p-4">
              <img
                src={app.image}
                alt={app.title}
                className="w-full h-36 object-cover rounded"
              />
              <div className="mt-2 font-semibold">{app.title}</div>
              <div className="text-sm text-gray-500">
                {app.downloads.toLocaleString()} downloads
              </div>
              <div className="mt-3 flex gap-2">
                <button
                  onClick={() => onUninstall(app.id)}
                  className="px-3 py-1 border rounded text-sm hover:bg-gray-100"
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
