import React, { useState } from "react";
// 假设错题数据保存在 localStorage 或后端
const getWrongList = () => {
  return JSON.parse(localStorage.getItem("wrongBook") || "[]");
};
export default function WrongBook() {
  const [wrongList, setWrongList] = useState(getWrongList());
  const markMastered = (idx: number) => {
    const newList = wrongList.filter((_, i) => i !== idx);
    setWrongList(newList);
    localStorage.setItem("wrongBook", JSON.stringify(newList));
  };
  return (
    <div className="p-8 min-h-screen bg-gray-950 text-white">
      <h2 className="text-3xl font-bold mb-6">Wrong Book</h2>
      {wrongList.length === 0 && <div>No wrong questions yet!</div>}
      {wrongList.map((q, idx) => (
        <div key={idx} className="bg-gray-900 p-4 rounded mb-4 flex justify-between">
          <div>
            <div><b>Section:</b> {q.section}</div>
            <div><b>Bone:</b> {q.bone}</div>
            <div><b>English:</b> {q.en}</div>
            <div><b>Latin:</b> {q.la}</div>
          </div>
          <button className="bg-cyan-700 px-4 py-2 rounded" onClick={() => markMastered(idx)}>Mastered</button>
        </div>
      ))}
    </div>
  );
}