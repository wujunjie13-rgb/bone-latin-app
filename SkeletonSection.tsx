import React, { useState } from "react";
import BonePractice from "./BonePractice";
import ComparisonTable from "./ComparisonTable";

const SECTIONS = {
  "upper-limb": {
    title: "Upper Limb",
    img: "/assets/skeletons/upper-limb.svg",
    bones: ["Humerus", "Radius", "Ulna"]
  },
  "lower-limb": {
    title: "Lower Limb",
    img: "/assets/skeletons/lower-limb.svg",
    bones: ["Femur", "Tibia", "Fibula"]
  }
  // 可继续扩展
};

export default function SkeletonSection({ section }: { section: string }) {
  const data = SECTIONS[section] || SECTIONS["upper-limb"];
  const [selectedBone, setSelectedBone] = useState(data.bones[0]);

  return (
    <div className="p-8">
      <h2 className="text-3xl neon-text mb-4">{data.title} Practice</h2>
      <div className="flex space-x-8">
        <img src={data.img} alt={data.title} className="w-96 h-auto bg-gray-800 rounded-lg shadow-xl" />
        <div>
          <div className="mb-4">
            {data.bones.map(bone => (
              <button
                key={bone}
                className={`px-4 py-2 m-1 neon-bg rounded ${bone === selectedBone ? "border-2 border-cyan-400" : ""}`}
                onClick={() => setSelectedBone(bone)}
              >
                {bone}
              </button>
            ))}
          </div>
          <BonePractice bone={selectedBone} />
          <ComparisonTable bone={selectedBone} />
        </div>
      </div>
    </div>
  );
}