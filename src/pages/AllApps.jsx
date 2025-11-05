import React, { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";

export default function AllApps({ apps }) {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Simulate loading for search
  useEffect(() => {
    if (query.length > 0) {
      setLoading(true);
      const t = setTimeout(() => setLoading(false), 500);
      return () => clearTimeout(t);
    }
  }, [query]);

  const filteredApps = useMemo(() => {
    return apps.filter((app) =>
      app.title.toLowerCase().includes(query.trim().toLowerCase())
    );
  }, [apps, query]);

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <h1 className="text-2xl font-bold">
          All Apps{" "}
          <span className="text-sm text-gray-500">({apps.length} apps found)</span>
        </h1>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search apps..."
          className="px-3 py-2 border rounded w-full md:w-64"
        />
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
        src={app.image}
        alt={app.title}
        className="w-full h-40 object-cover"
      />

      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1">{app.title}</h3>
        <p className="text-sm text-gray-500 mb-2">{app.companyName}</p>

        {/* Stats row */}
        <div className="flex justify-between items-center text-sm text-gray-600">
          {/* Downloads */}
          <div className="flex items-center gap-1">
            <img
              src="/icon-downloads.png"
              alt="Downloads"
              className="w-4 h-4"
            />
            <span>{app.downloads?.toLocaleString() || "0"}</span>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1">
            <img
              src="/icon-ratings.png"
              alt="Rating"
              className="w-4 h-4"
            />
            <span>{app.ratingAvg || "0.0"}</span>
          </div>
        </div>
      </div>
    </Link>
  ))}
</div>

      )}
    </main>
  );
}
