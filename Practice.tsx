import React from "react";
import { useParams } from "react-router-dom";
import SkeletonSection from "../components/SkeletonSection";

export default function Practice() {
  const { section } = useParams();
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <SkeletonSection section={section || "upper-limb"} />
    </div>
  );
}