
import React from "react";
import ProductMini from "../../components/products/ProductMini";

export default function ImagesSection() {
  const imageUrl = "https://i.postimg.cc/KYM5wx34/sofas.png";

  const products = Array.from({ length: 4 }, (_, index) => ({
    id: index + 1,
    img: imageUrl,
  }));

  return (
    <div className="flex justify-end">
      <div className="flex flex-row mr-14">
        <div className="flex flex-col gap-4">
          {products.map((product) => (
            <ProductMini key={product.id} img={product.img} />
          ))}
        </div>
        
        <div>
          <img className="rounded-2xl" src={imageUrl} alt="" />
        </div>
      </div>
    </div>
  );
}
