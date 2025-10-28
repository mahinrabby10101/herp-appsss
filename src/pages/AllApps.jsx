// src/pages/AllApps.jsx
import React, { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";

export default function AllApps({ apps }) {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("none");
  const [loading, setLoading] = useState(false);

  // Simulate typing loading
  useEffect(() => {
    if (query.length > 0) {
      setLoading(true);
      const t = setTimeout(() => setLoading(false), 500);
      return () => clearTimeout(t);
    }
  }, [query]);

  const filteredApps = useMemo(() => {
    let filtered = apps.filter((app) =>
      app.title.toLowerCase().includes(query.trim().toLowerCase())
    );

    if (sort === "high") filtered = filtered.slice().sort((a, b) => b.downloads - a.downloads);
    else if (sort === "low") filtered = filtered.slice().sort((a, b) => a.downloads - b.downloads);

    return filtered;
  }, [apps, query, sort]);
console.log(filteredApps)
  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <h1 className="text-2xl font-bold">All Apps</h1>
        <div className="flex items-center gap-3">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search apps..."
            className="px-3 py-2 border rounded"
          />
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="px-3 py-2 border rounded"
          >
            <option value="none">Sort</option>
            <option value="high">Downloads High-Low</option>
            <option value="low">Downloads Low-High</option>
          </select>
        </div>
      </div>

      {loading ? (
        <div className="text-center py-8">Searching...</div>
      ) : filteredApps.length === 0 ? (
        <div className="text-center py-8">No App Found.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {filteredApps.map((app) => (
            <Link
              key={app.id}
              to={`/apps/${app.id}`}
              className="bg-white rounded shadow hover:shadow-lg overflow-hidden transition"
            >
              <img
                src={app.image} // fallback
                alt={app.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">{app.title}</h3>
                <p className="text-sm text-gray-500 mb-2">{app.companyName}</p>
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <span>{app.downloads.toLocaleString()} downloads</span>
                  <span>⭐ {app.ratingAvg}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}
