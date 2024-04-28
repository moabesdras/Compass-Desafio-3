
import React, { useState } from "react";
import star from "../../assets/icons/star.svg";

export default function Rating() {
  const [rating, setRating] = useState(0); // Estado para armazenar a avaliação do usuário

  const handleStarClick = (index: any) => {
    // Define a avaliação baseada no índice da estrela clicada
    setRating(index + 1);
  };

  const starStyle = {
    cursor: "pointer",
    transition: "transform 0.2s ease-in-out, filter 0.2s ease-in-out",
  };

  return (
    <div className="flex flex-row gap-4 items-center">
      <div className="flex flex-row gap-1">
        {Array.from({ length: 5 }, (_, index) => (
          <button
            key={index}
            onClick={() => handleStarClick(index)}
            style={{
              ...starStyle,
              transform: index < rating ? "scale(1.2)" : "scale(1)",
              filter: index < rating ? "hue-rotate(-20deg)" : "grayscale(100%)",
            }}
          >
            <img src={star} alt="star" />
          </button>
        ))}
      </div>

      <div className="border-l-2 w-40 flex justify-center items-center">
        {/* Exibe a contagem de avaliações e a avaliação selecionada */}
        <h1 className="text-sm text-gray-400">{`${rating} Customer review(s)`}</h1>
      </div>
    </div>
  );
}
