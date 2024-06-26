
import React, { useState } from "react";
import SeeDetail from "./SeeDetail";
import DiscountLabel from "./CardLabel";

export default function ProductCard({ data }: any) {
  const [show, setShow] = useState(false);
  
  return (
    <div
      onMouseOver={() => setShow(true)}
      onMouseOut={() => setShow(false)}
      className="bg-cardBg w-fit mt-8 relative ">
        
        {show && <SeeDetail />}
        <div className="relative">
          <img src="https://i.postimg.cc/Qtc09hjv/mesa.png" alt="" />

          {data.discount_percent ? (
            <DiscountLabel
              color="bg-discountBg"
              text={`-${data.discount_percent}%`}
            />
          )
          : data.is_new ? (
            <DiscountLabel color="bg-newProdBg" text="New" />
          ) : null}
        </div>

        <div className=" flex flex-col m-5 gap-2">
          <h1 className="font-semibold text-2xl">{data.name}</h1>
          <h1 className="text-gray-400">{data.description}</h1>

          <div className="flex flex-row gap-2 items-center">
            <h1 className="text-lg font-semibold">{`R$ ${data.price.toLocaleString(
              "pt-br",
              {currency: "BRL" }
            )}`}</h1>

            <h1 className="line-through text-gray-300">
              {data.discount_price
                ? data.discount_price.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })
                : null}
            </h1>
          </div>
        </div>
    </div>
  );
}
