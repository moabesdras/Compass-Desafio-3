
import React from "react";

interface CardLabelProps {
  color: string;
  text: string;
}

const CardLabel: React.FC<CardLabelProps> = ({ color, text }) => {
  return (
    <div className={`absolute right-5 top-5 flex items-center justify-center rounded-full w-12 h-12 ${color} text-white font-medium`}>
      {text}
    </div>
  );
}

export default CardLabel;
