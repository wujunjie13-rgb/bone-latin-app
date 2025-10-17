import React from "react";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center text-white">
      <h1 className="text-5xl font-bold mb-6">NeoBones Anatomy Atlas</h1>
      <Link to="/browse" className="px-8 py-4 bg-cyan-800 rounded-xl mt-6 text-2xl hover:bg-cyan-600 transition">Browse Bones</Link>
      <Link to="/exam" className="px-8 py-4 bg-purple-800 rounded-xl mt-6 text-2xl hover:bg-purple-600 transition">Start Exam</Link>
      <Link to="/wrongbook" className="px-8 py-4 bg-pink-800 rounded-xl mt-6 text-2xl hover:bg-pink-600 transition">Wrong Book</Link>
    </div>
  );
}