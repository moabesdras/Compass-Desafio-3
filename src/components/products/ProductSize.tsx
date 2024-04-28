
import React from "react";

export default function ProductSize(props: any) {
  const sizes = ["L", "XL", "XS"];

  return (
    <div>
      <h1 className="text-gray-400">Size</h1>
      <div className="flex flex-row gap-4">
        {sizes.map((size, index) => (
          <button
            key={index}
            className="flex justify-center items-center bg-filterBg w-10 h-10 rounded-lg font-medium hover:bg-buttonHover hover:text-white"
            aria-label={`Select size ${size}`}
            title={`Select size ${size}`}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}
