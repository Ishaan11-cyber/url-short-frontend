import React from "react";
import { FaLink, FaShareAlt, FaEdit, FaChartLine } from "react-icons/fa";

const features = [
  {
    icon: <FaLink className="text-blue-500 text-4xl mb-4 group-hover:scale-110 transition-transform" />,
    title: "Simple URL Shortening",
    description: "Create short, memorable URLs with ease. Our elegant interface and intuitive workflow let you start shortening URLs instantly.",
  },
  {
    icon: <FaShareAlt className="text-green-500 text-4xl mb-4 group-hover:scale-110 transition-transform" />,
    title: "Powerful Analytics",
    description: "Deep insights into link performance via our analytics dashboard. Track clicks, geo-data, and referrals for smarter marketing.",
  },
  {
    icon: <FaEdit className="text-purple-500 text-4xl mb-4 group-hover:scale-110 transition-transform" />,
    title: "Enhanced Security",
    description: "Robust encryption secures your links so your data stays safe. Advanced measures ensure peace of mind.",
  },
  {
    icon: <FaChartLine className="text-red-500 text-4xl mb-4 group-hover:scale-110 transition-transform" />,
    title: "Fast and Reliable",
    description: "Lightning-fast redirects and high uptime with scalable infrastructure for a seamless user experience, every time.",
  },
];

const AboutPage = () => (
  <div className="lg:px-14 sm:px-8 px-5 min-h-[calc(100vh-64px)] pt-8 bg-gradient-to-br from-sky-50 via-purple-50 to-pink-50">
    <div className="bg-white w-full shadow-xl rounded-xl sm:py-12 py-8 flex flex-col items-center">
      <h1 className="sm:text-4xl text-3xl font-extrabold italic text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-pink-600 mb-4 drop-shadow-lg">
        About Linklytics
      </h1>
      <p className="text-gray-700 text-md sm:text-lg mb-10 text-center max-w-3xl">
        Linklytics simplifies URL shortening for efficient sharing. Easily generate, manage, and track your links. Focused on seamless experience, powerful analytics, and security.
      </p>
      <div className="grid lg:grid-cols-2 gap-8 sm:gap-6 w-full max-w-4xl px-2">
        {features.map((f, i) => (
          <div
            key={i}
            className="group bg-gradient-to-br from-white via-sky-50 to-purple-100 rounded-xl shadow-lg flex flex-col items-center px-6 py-7 transition-transform hover:-translate-y-1 hover:shadow-xl hover:bg-white cursor-pointer"
          >
            {f.icon}
            <h2 className="sm:text-xl text-base font-bold text-slate-800 mb-2 drop-shadow">
              {f.title}
            </h2>
            <p className="text-gray-600 text-center">{f.description}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default AboutPage;
