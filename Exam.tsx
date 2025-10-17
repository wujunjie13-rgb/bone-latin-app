import React, { useState, useEffect } from "react";
import { boneLatinData } from "../assets/boneLatinData";

const EXAM_DURATION = 30 * 60; // 30分钟，单位秒
const EXAM_QUESTIONS = 20; // 每次抽20题

// 随机抽取题目
function getRandomQuestions(n: number) {
  const all = [];
  Object.entries(boneLatinData).forEach(([sec, bones]) => {
    Object.entries(bones).forEach(([bone, features]) => {
      (features as any[]).forEach(f => all.push({ section: sec, bone, ...f }));
    });
  });
  return all.sort(() => Math.random() - 0.5).slice(0, n);
}

export default function Exam() {
  const [timeLeft, setTimeLeft] = useState(EXAM_DURATION);
  const [questions] = useState(getRandomQuestions(EXAM_QUESTIONS));
  const [current, setCurrent] = useState(0);
  const [input, setInput] = useState("");
  const [wrongBook, setWrongBook] = useState([]);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (finished) return;
    if (timeLeft <= 0) { setFinished(true); return; }
    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft, finished]);

  const submitAnswer = () => {
    if (input.trim().toLowerCase() !== questions[current].la.toLowerCase()) {
      setWrongBook([...wrongBook, questions[current]]);
    }
    setInput("");
    if (current === questions.length - 1) {
      setFinished(true);
      localStorage.setItem("wrongBook", JSON.stringify([...wrongBook]));
    } else {
      setCurrent(current + 1);
    }
  };

  return (
    <div className="p-8 min-h-screen bg-gray-950 text-white">
      <h2 className="text-3xl font-bold mb-6">Exam (模拟考试)</h2>
      <div className="mb-4 text-xl">
        Time Left: <span className="text-cyan-400">{Math.floor(timeLeft / 60)}:{("0"+(timeLeft%60)).slice(-2)}</span>
      </div>
      {finished ? (
        <div>
          <h3 className="text-2xl mb-4">Exam Finished!</h3>
          <div>Score: {questions.length - wrongBook.length} / {questions.length}</div>
          <div>Wrong Questions: {wrongBook.length}</div>
          <a href="/wrongbook" className="mt-6 inline-block bg-cyan-700 px-8 py-2 rounded text-white">Go to Wrong Book</a>
        </div>
      ) : (
        <div>
          <div className="mb-4"><b>Section:</b> {questions[current].section} <b>Bone:</b> {questions[current].bone}</div>
          <div className="mb-4"><b>English:</b> {questions[current].en}</div>
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Type Latin name..."
            className="px-4 py-2 rounded bg-gray-800 text-white border border-cyan-400"
          />
          <button className="ml-2 bg-cyan-700 px-4 py-2 rounded" onClick={submitAnswer}>Submit</button>
        </div>
      )}
    </div>
  );
}