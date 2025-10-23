// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaGooglePlay, FaAppStoreIos } from "react-icons/fa";

export default function Home({ apps }) {
  const topApps = apps.slice(0, 8);

  return (
    <main className="flex-1">

      {/* Banner Section */}
      <div className="max-w-6xl mx-auto px-4 pt-20 pb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          We Build <span className="text-purple-600">Productive</span> Apps
        </h1>
        <p className="text-gray-500 mt-4">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. <br />
          Our goal is to turn your ideas into digital experiences that truly make an impact.
        </p>

        {/* App store buttons */}
        <div className="flex justify-center gap-3 mt-6">
          <a
            href="https://play.google.com/store/apps/details?id=YOUR_APP_ID"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white border px-4 py-2 shadow-sm hover:bg-gray-100"
          >
            <FaGooglePlay className="text-xl text-green-500" /> Google Play
          </a>

          <a
            href="https://apps.apple.com/app/idYOUR_APP_ID"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white border px-4 py-2 shadow-sm hover:bg-gray-100"
          >
            <FaAppStoreIos className="text-xl text-blue-500" /> App Store
          </a>
        </div>
      </div>

      {/* Hero / Phone Image */}
      <div className="relative flex justify-center mt-10 mb-0">
        <img
          src="/hero.png"
          alt="App preview"
          className="w-[680px] md:w-[640px]"
        />
      </div>

      {/* Stats Section - Full Width Gradient */}
      <div className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-10">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Trusted By Millions, Built For You
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-sm uppercase text-purple-200">Total Downloads</p>
              <h3 className="text-3xl font-bold mt-2">29.6M</h3>
              <p className="text-sm text-purple-200">21% More Than Last Month</p>
            </div>
            <div>
              <p className="text-sm uppercase text-purple-200">Total Reviews</p>
              <h3 className="text-3xl font-bold mt-2">906K</h3>
              <p className="text-sm text-purple-200">46% More Than Last Month</p>
            </div>
            <div>
              <p className="text-sm uppercase text-purple-200">Active Apps</p>
              <h3 className="text-3xl font-bold mt-2">132+</h3>
              <p className="text-sm text-purple-200">31 More Will Launch</p>
            </div>
          </div>
        </div>
      </div>

      {/* Top Apps Section */}
      <section className="max-w-6xl mx-auto px-4 mt-12">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold mb-2">Trending Apps</h2>
          <h5 className="text-gray-600">
            Explore all trending apps on the market developed by us
          </h5>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {topApps.map((app) => (
            <Link
              key={app.id}
              to={`/apps/${app.id}`}
              className="bg-white rounded shadow overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={app.image}
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

        {/* Show All Button */}
        <div className="flex justify-center mt-10 mb-10">
          <Link
            to="/apps"
            className="px-6 py-2 bg-purple-500 text-white font-semibold rounded hover:bg-purple-700 transition"
          >
            Show All
          </Link>
        </div>
      </section>
    </main>
  );
}
