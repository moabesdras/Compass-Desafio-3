
import React from "react";
import facebook from "../../assets/icons/facebook.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import twitter from "../../assets/icons/twitter.svg";

export default function Metadata() {
  return (
    <div className="flex flex-row  gap-5 border-t-2 mt-12 ">
      <div className="flex flex-col gap-3 mt-10">
        <ul className="list-disc text-gray-400">
          <li>SKU: SS01</li>
          <li>Category: Sofas</li>
          <li>Tags: Sofas, Chair, Home, Shop</li>
          <li>
            Share:
            <span className="sr-only">Share on social media</span>
            <img
              className="hover:cursor-pointer inline-block ml-2"
              src={facebook}
              alt="Facebook"
              title="Share on Facebook"
            />
            <img
              className="hover:cursor-pointer inline-block ml-2"
              src={linkedin}
              alt="LinkedIn"
              title="Share on LinkedIn"
            />
            <img
              className="hover:cursor-pointer inline-block ml-2"
              src={twitter}
              alt="Twitter"
              title="Share on Twitter"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
