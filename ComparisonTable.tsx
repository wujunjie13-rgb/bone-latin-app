import React from "react";
import LatinVoice from "./LatinVoice";

const LATIN_TABLE = {
  Tibia: [
    { en: "Tibial Tuberosity", la: "Tuberositas tibiae" },
    { en: "Medial Malleolus", la: "Malleolus medialis" },
    { en: "Intercondylar Eminence", la: "Eminentia intercondylaris" }
    // 可继续补充
  ]
  // 其它骨骼...
};

export default function ComparisonTable({ bone }: { bone: string }) {
  const rows = LATIN_TABLE[bone] || [];
  if (!rows.length) return null;
  return (
    <table className="min-w-full bg-gray-900 rounded-xl shadow-lg mt-4">
      <thead>
        <tr>
          <th className="p-2 text-left">English</th>
          <th className="p-2 text-left">Latin</th>
          <th className="p-2 text-left">Voice</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, idx) => (
          <tr key={idx}>
            <td className="p-2">{row.en}</td>
            <td className="p-2">{row.la}</td>
            <td className="p-2"><LatinVoice text={row.la} /></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}