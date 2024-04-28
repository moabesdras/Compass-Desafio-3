
import React from "react";
import { Link } from "react-router-dom";
import share from "../../assets/icons/share.svg";
import compare from "../../assets/icons/compare.svg";
import like from "../../assets/icons/like.svg";
import DetailsOptions from "./DetailsOptions";

const detailOptions = [
  { id: 1, icon: share, name: "Share" },
  { id: 2, icon: compare, name: "Compare" },
  { id: 3, icon: like, name: "Like" },
];

const SeeDetail = () => {
  return (
    <div className="transition duration-500 hover:bg-black hover:bg-opacity-50 absolute z-10 h-[100%] w-[100%] flex flex-col justify-center items-center">
      <Link to="/product">
        <button className="bg-white w-48 h-12 font-semibold text-[#B88E2F] hover:text-white hover:bg-[#B88E2F] hover:border-[#B88E2F] transition duration-300 rounded-lg border border-[#B88E2F]">
          <p>See Details</p>
        </button>
      </Link>

      <div className="flex flex-row justify-center items-center gap-5 mt-5">
        {detailOptions.map(option => (
          <DetailsOptions key={option.id} icon={option.icon} name={option.name} />
        ))}
      </div>
    </div>
  );
};

export default SeeDetail;
