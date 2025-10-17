import React from "react";
export default function LatinVoice({ text }: { text: string }) {
  const speakLatin = () => {
    const utter = new window.SpeechSynthesisUtterance(text);
    utter.lang = "la";
    utter.rate = 0.9;
    utter.pitch = 1.1;
    window.speechSynthesis.speak(utter);
  };
  return (
    <button className="ml-2 px-2 py-1 bg-cyan-700 rounded" onClick={speakLatin} title="Play Latin pronunciation">
      🔊
    </button>
  );
}