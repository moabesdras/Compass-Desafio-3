
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white-200 py-10">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 border-b">
        <div className="col-span-2 md:col-span-1 flex flex-col gap-10">
          <h2 className="font-bold text-3xl">Furniro.</h2>
          <p className="text-lg text-gray-400">
            400 University Drive Suite 200<br />
            Coral Gables, FL 33134<br />
            USA
          </p>
        </div>

        <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
          <div>
            <h3 className="font-medium text-gray-400 text-lg">Links</h3>
          <ul>
            <li className="mt-12"><Link to="/home" className="font-medium text-lg hover:text-buttonHover">Home</Link></li>
            <li className="mt-8"><Link to="/shop" className="font-medium text-lg hover:text-buttonHover">Shop</Link></li>
            <li className="mt-8"><Link to="/about" className="font-medium text-lg hover:text-buttonHover">About</Link></li>
            <li className="mt-8"><Link to="/contact" className="font-medium text-lg hover:text-buttonHover">Contact</Link></li>
          </ul>
          </div>
        </div>
        <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
          <h3 className="font-medium text-gray-400 text-lg">Help</h3>
          <ul>
            <li className="mt-8"><Link to="/payment" className="font-medium text-lg hover:text-buttonHover">Payment Options</Link></li>
            <li className="mt-8"><Link to="/return" className="font-medium text-lg hover:text-buttonHover">Return</Link></li>
            <li className="mt-8"><Link to="/privacy" className="font-medium text-lg hover:text-buttonHover">Privacy Policies</Link></li>
          </ul>
        </div>
        
        <div className="col-span-2 md:col-span-1 flex flex-col gap-10">
          <h3 className="font-medium text-gray-400 text-lg">Newsletter</h3>
          <form className="flex flex-col md:flex-row gap-2">
            <input
              className="outline-none text-sm border-b-[1px] border-black w-full md:w-3/4 px-0 py-1 bg-transparent hover:border-buttonHover"
              type="email"
              placeholder="Enter your email address"
            />
            <button className="font-medium text-sm border-b-[1px] border-black px-4 py-1 bg-black-500 text-black hover:text-buttonHover transition hover:border-buttonHover">
              SUBSCRIBE
            </button>
          </form>
        </div>

        <div className="container">
          <p>
            2023 Furniro. All rights reverved
          </p>
        </div>
        
      </div>
  </footer>
  );
}
