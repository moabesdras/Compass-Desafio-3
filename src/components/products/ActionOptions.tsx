
import React from "react";
import { FaMinus, FaPlus, FaShoppingCart, FaBalanceScale } from "react-icons/fa";

export default function ActionOptions() {
  return (
    <div className="flex flex-col md:flex-row gap-5 mt-4 items-center justify-center md:justify-start">
      <div className="justify-center flex flex-row items-center gap-4 border-[2px] border-gray-400 rounded-lg w-36 h-16">
        <button className="hover:bg-gray-200 rounded-lg px-3 py-1">
          <FaMinus />
        </button>
        <h1>1</h1>
        <button className="hover:bg-gray-200 rounded-lg px-3 py-1">
          <FaPlus />
        </button>
      </div>

      <button className="w-full h-16 md:w-60 border-[2px] border-black rounded-2xl font-medium mt-4 md:mt-0 flex items-center justify-center gap-2 px-4">
        <FaShoppingCart />
        <p>Add to cart</p>
      </button>
      
      <button className="w-full h-16 md:w-60 border-[2px] border-black rounded-2xl font-medium mt-4 md:mt-0 flex items-center justify-center gap-2 px-4">
        <FaBalanceScale />
        <p>Compare</p>
      </button>
    </div>
  );
}
