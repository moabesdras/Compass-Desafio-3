
import React from "react";
import filter from "../../../assets/icons/filter.svg";
import grid from "../../../assets/icons/grid.svg";
import list from "../../../assets/icons/list.svg";

export default function Filter() {
  return (
    <section>
      <div className="bg-filterBg h-20 grid grid-cols-1 md:grid-cols-2">
        <div className="flex items-center justify-center md:justify-start gap-6 ml-4 md:ml-20">
          <div className="flex flex-row gap-2 items-center">
            <img src={filter} alt="filter" />
            <button className="font-medium text-lg hover:text-buttonHover">Filter</button>
          </div>

          <div className="flex flex-row gap-4">
            <button>
              <img src={grid} alt="grid" />
            </button>
            <button>
              <img src={list} alt="list" />
            </button>
          </div>

          <div className="border-l-2 border-gray-400 flex items-center justify-center h-10 pl-4">
            <h1 className="font-medium text-base">
              Showing 1-16 of 32 results
            </h1>
          </div>
        </div>

        <div className="flex justify-center md:justify-end items-center gap-6 mr-4 md:mr-20">
          <div className="flex items-center gap-3">
            <label className="font-medium text-lg" htmlFor="options">Show:</label>
            <select className="w-12 h-12 placeholder:text-center text-gray-400" name="options" id="options">
              <option value="16">16</option>
              <option value="32">32</option>
            </select>
          </div>
          
          <div className="flex items-center gap-3">
            <label className="font-medium text-lg" htmlFor="sortBy">Sort by:</label>
            <select className="w-36 h-12 placeholder:text-center text-gray-400" name="sortBy" id="sortBy">
              <option value="default">Default</option>
              <option value="priceLH">Price: low to high</option>
              <option value="priceHL">Price: high to low</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
}
