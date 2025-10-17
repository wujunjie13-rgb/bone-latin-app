import React, { useState } from "react";
import { boneLatinData } from "../assets/boneLatinData";
import LatinVoice from "../components/LatinVoice";

export default function BrowseBones() {
  const [section, setSection] = useState("Skull");
  const [bone, setBone] = useState("");
  
  const sectionNames = Object.keys(boneLatinData);
  const boneNames = bone ? Object.keys(boneLatinData[section] || {}) : [];

  return (
    <div className="p-8 min-h-screen bg-gray-950 text-white">
      <h1 className="text-3xl font-bold mb-6">Bone Atlas: English & Latin</h1>
      <div className="mb-4 flex gap-4">
        <select value={section} onChange={e => {
          setSection(e.target.value);
          setBone("");
        }} className="bg-gray-800 px-4 py-2 rounded">
          {sectionNames.map(sec => <option key={sec}>{sec}</option>)}
        </select>
        <select value={bone} onChange={e => setBone(e.target.value)} className="bg-gray-800 px-4 py-2 rounded">
          <option value="">Select Bone</option>
          {Object.keys(boneLatinData[section] || {}).map(bn => <option key={bn}>{bn}</option>)}
        </select>
      </div>
      {bone && (
        <table className="min-w-full bg-gray-900 rounded-xl shadow-lg mt-4">
          <thead>
            <tr>
              <th className="p-2 text-left">English Name</th>
              <th className="p-2 text-left">Latin Name</th>
              <th className="p-2 text-left">Voice</th>
            </tr>
          </thead>
          <tbody>
            {boneLatinData[section][bone].map((row, idx) => (
              <tr key={idx}>
                <td className="p-2">{row.en}</td>
                <td className="p-2">{row.la}</td>
                <td className="p-2"><LatinVoice text={row.la} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {!bone && <div className="mt-10 text-gray-400">Please select a bone to browse its features...</div>}
    </div>
  );
}