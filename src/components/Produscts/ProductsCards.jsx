import React from "react";
import Button from "../shared/Button";

const ProductsCards = ({ data }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-7 mb-2">
      {data.map((card) => (
        <div
          data-aos="fade-up"
          data-aos-delay={card.aosDelay}
          key={card.id}
          className="group"
        >
          <div className="relative">
            <img
              src={card.img}
              alt=""
              className="h-[180px] w-[260px] object-cover rounded-md"
            />
            <div
              className="absolute top-1/2 -translate-y-1/2 w-full h-full items-center justify-center
                    hidden group-hover:flex group-hover:backdrop-blur-sm duration-200"
            >
              <Button
                text={"Add to cart"}
                bgColor={"bg-primary"}
                textColor={"text-white"}
              />
            </div>
          </div>
          <div className="mt-2">
            <h3 className="font-semibold">{card.title}</h3>
            <h3 className="font-bold">{card.price}</h3>
          </div>
        </div>
      ))}
      <div></div>
    </div>
  );
};

export default ProductsCards;
