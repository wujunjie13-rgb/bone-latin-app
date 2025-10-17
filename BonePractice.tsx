import React, { useState } from "react";
import LatinVoice from "./LatinVoice";

const BONE_PARTS = {
  Tibia: [
    { en: "Tibial Tuberosity", la: "Tuberositas tibiae" },
    { en: "Medial Malleolus", la: "Malleolus medialis" },
    { en: "Intercondylar Eminence", la: "Eminentia intercondylaris" }
    // 可继续补充
  ]
  // 其它骨骼...
};

export default function BonePractice({ bone }: { bone: string }) {
  const parts = BONE_PARTS[bone] || [];
  const [current, setCurrent] = useState(0);
  const [input, setInput] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);

  if (!parts.length) return <div>No practice available.</div>;

  const part = parts[current];

  return (
    <div className="bg-gray-900 p-6 rounded-xl shadow-lg mb-6">
      <h3 className="text-xl mb-2">Name this part in Latin:</h3>
      <div className="text-lg mb-2 font-mono">{part.en}</div>
      <input
        className="px-4 py-2 rounded bg-gray-800 text-white border border-cyan-400"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Type Latin name..."
      />
      <button
        className="ml-2 neon-bg px-3 py-1 rounded"
        onClick={() => setShowAnswer(true)}
      >
        Show Answer
      </button>
      {showAnswer && (
        <div className="mt-2 text-cyan-300">
          {part.la} <LatinVoice text={part.la} />
        </div>
      )}
      <div className="mt-4">
        <button
          className="neon-bg px-3 py-1 rounded"
          disabled={current === 0}
          onClick={() => { setCurrent(current - 1); setInput(""); setShowAnswer(false); }}
        >
          Previous
        </button>
        <button
          className="neon-bg px-3 py-1 rounded ml-2"
          disabled={current === parts.length - 1}
          onClick={() => { setCurrent(current + 1); setInput(""); setShowAnswer(false); }}
        >
          Next
        </button>
      </div>
    </div>
  );
}