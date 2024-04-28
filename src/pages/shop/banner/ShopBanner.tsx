
import React from 'react';
import ShopBanner from '../../../assets/images/ShopBanner.jpg';
import { Link } from 'react-router-dom';

export default function ShopBannerComponent() {
  return (
    <section>
      <div className="relative">
        <img
          className="w-full h-[30vh] md:h-[40vh] object-cover blur-[3px] opacity-60"
          src={ShopBanner}
          alt="Shop Banner"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <div className="text-5xl font-medium text-black">Shop</div>
          <div className="flex gap-2 mt-4 justify-center items-center text-black">
            <Link to="/" className="text-lg font-medium hover:underline">
              Home
            </Link>
            <h1 className="font-medium text-2xl">&gt;</h1>
            <h1 className="font-normal">Shop</h1>
          </div>
        </div>
      </div>
    </section>
  );
}
