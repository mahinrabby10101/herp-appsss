
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

export default function AppDetails({ apps, onInstall, installedIds }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const app = apps.find((a) => String(a.id) === String(id));
  const [installed, setInstalled] = useState(() =>
    installedIds.includes(Number(id))
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  
  useEffect(() => {
    setInstalled(installedIds.includes(Number(id)));
  }, [installedIds, id]);

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

 
  const chartData =
    app.ratings && app.ratings.length > 0
      ? app.ratings.map((r) => ({
          name: r.name.replace(" star", ""),
          value: r.count,
        }))
      : [
          { name: "5", value: 0 },
          { name: "4", value: 0 },
          { name: "3", value: 0 },
          { name: "2", value: 0 },
          { name: "1", value: 0 },
        ];

        

  return (
    <main className="w-full px-4 py-8">
    {/* App Image */}
    <div className="flex flex-col md:flex-row items-start bg-white p-6 rounded-lg shadow-md w-full mb-6">
  {/* App Image */}
  <div className="w-full md:w-1/4 flex-shrink-0 mb-4 md:mb-0">
    <img
      src={app.image}
      alt={app.title}
      className="w-full h-auto rounded-lg object-cover"
    />
  </div>

  {/* Right Side Info */}
  <div className="w-full md:w-3/4 md:pl-6">
    {/* Title and Company */}
    <h2 className="text-2xl font-semibold">{app.title}</h2>
    <p className="text-gray-500 mt-1">
      Developed by{" "}
      <span className="text-indigo-600 font-medium">{app.companyName}</span>
    </p>

    {/* Stats Row */}
    <div className="flex flex-wrap gap-8 mt-6 text-center">
  <div className="flex flex-col items-center">
    <img src="/icon-downloads.png" alt="Downloads" className="w-6 h-6 mb-1" />
    <p className="text-sm text-gray-500">Downloads</p>
    <p className="text-xl font-semibold">{app.downloads?.toLocaleString() || "0"}</p>
  </div>

  <div className="flex flex-col items-center">
    <img src="/icon-ratings.png" alt="Average Rating" className="w-6 h-6 mb-1" />
    <p className="text-sm text-gray-500">Average Rating</p>
    <p className="text-xl font-semibold">{app.ratingAvg || "0.0"}</p>
  </div>

  <div className="flex flex-col items-center">
    <img src="/icon-review.png" alt="Total Reviews" className="w-6 h-6 mb-1" />
    <p className="text-sm text-gray-500">Total Reviews</p>
    <p className="text-xl font-semibold">{app.reviews?.toLocaleString() || "0"}</p>
  </div>
</div>


    {/* Install Button */}
    <div className="mt-6">
      {installed ? (
        <div className="flex gap-3">
          <button
            disabled
            className="px-4 py-2 rounded bg-purple-300 text-white w-full md:w-auto"
          >
            Installed
          </button>
          <button
            onClick={() => setInstalled(false)}
            className="px-4 py-2 rounded bg-green-600 text-white w-full md:w-auto"
          >
            Disable
          </button>
        </div>
      ) : (
        <button
          onClick={handleInstall}
          className="px-6 py-2 rounded bg-green-600 text-white font-medium w-full md:w-auto"
        >
          Install Now {app.size ? `(${app.size} MB)` : ""}
        </button>
      )}
    </div>
  </div>
</div>

  
    {/* Chart Section */}
   {/* Chart Section */}
   <h3>Ratings</h3>
<div className="w-full mb-6" style={{ height: 300 }}>
  {chartData.length > 0 ? (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={chartData}
        layout="vertical"
        margin={{ top: 5, right: 20, left: 40, bottom: 5 }}
      >
        <XAxis type="number" />
        <YAxis type="category" dataKey="name" reversed />
        <Tooltip />
        <Bar dataKey="value" fill="#7c3aed" />
      </BarChart>
    </ResponsiveContainer>
  ) : (
    <p className="text-gray-500">No ratings available</p>
  )}
</div>

  
    {/* Description Section */}
    <div className="w-full">
      <h3 className="font-semibold">Description</h3>
      <p className="text-gray-600 mt-2">{app.description || "No description available."}</p>
    </div>
  </main>
  
  );
}
