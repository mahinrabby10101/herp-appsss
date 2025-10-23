// src/pages/AppDetails.jsx
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ResponsiveContainer, BarChart, Bar, XAxis, Tooltip } from "recharts";

export default function AppDetails({ apps, onInstall, installedIds }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const app = apps.find((a) => String(a.id) === String(id));
  const [installed, setInstalled] = useState(() =>
    installedIds.includes(Number(id))
  );

  useEffect(() => setInstalled(installedIds.includes(Number(id))), [installedIds, id]);

  if (!app) {
    return (
      <div className="max-w-4xl mx-auto p-8 text-center">
        <h2 className="text-2xl font-semibold">App not found</h2>
        <p className="mt-3 text-gray-600">No app matches this ID.</p>
        <div className="mt-4">
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 border rounded"
          >
            Go back
          </button>
        </div>
      </div>
    );
  }

  const handleInstall = () => {
    onInstall(app);
    setInstalled(true);
  };

  const chartData = app.ratings.map((r) => ({
    name: r.name.replace(" star", ""),
    value: r.count,
  }));

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Image */}
        <div className="md:col-span-1">
          <img
            src={app.image}
            alt={app.title}
            className="w-full rounded"
          />
        </div>

        {/* Details */}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-semibold">{app.title}</h2>
          <div className="text-gray-600 mt-1">
            {app.companyName} • {app.reviews} reviews •{" "}
            {app.downloads.toLocaleString()} downloads
          </div>

          {/* Install button */}
          <div className="mt-4">
            <button
              onClick={handleInstall}
              disabled={installed}
              className={`px-4 py-2 rounded ${
                installed ? "bg-gray-300" : "bg-purple-600 text-white"
              }`}
            >
              {installed ? "Installed" : "Install"}
            </button>
          </div>

          {/* Ratings Chart */}
          <div className="mt-8">
            <h3 className="font-semibold mb-2">Ratings</h3>
            <div style={{ width: "100%", height: 200 }}>
              <ResponsiveContainer>
                <BarChart data={chartData}>
                  <XAxis dataKey="name" />
                  <Tooltip />
                  <Bar dataKey="value" fill="#7c3aed" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Description */}
          <div className="mt-6">
            <h3 className="font-semibold">Description</h3>
            <p className="text-gray-600 mt-2">{app.description}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
