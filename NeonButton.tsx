import React from "react";
import { Link } from "react-router-dom";

const NeonButton = ({ to, text }: { to: string; text: string }) => (
  <Link
    to={to}
    className="px-6 py-3 m-2 rounded-lg font-semibold text-lg neon-bg transition duration-200 hover:scale-105"
  >
    {text}
  </Link>
);

export default NeonButton;