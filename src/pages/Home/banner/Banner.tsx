
import React from "react";
import banner from "../../../assets/images/banner.jpg";

export default function Banner() {
  return (
    <section className="relative">
      <img className="h-[75vh] w-[100vw] object-cover" src={banner} alt="Banner" />
      <div className="absolute rounded bg-bannerD w-[40%] h-[45%] right-[10%] bottom-[20%] flex items-center p-10 text-lg">
        <p className="font-medium text-black text-lg md:text-xl lg:text-2xl">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text.
        </p>
      </div>
    </section>
  );
}
