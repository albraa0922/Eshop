import React from "react";
import Slider from "react-slick";
import Imge1 from "../../assets/hero/headphone.png";
import Imge2 from "../../assets/category/vr.png";
import Imge3 from "../../assets/category/macbook.png";
import Button from "../shared/Button";

const HeroData = [
  {
    id: 1,
    img: Imge1,
    subtitle: "Beats Solo",
    title1: "Wiereless",
    title2: "Headphone",
  },
  {
    id: 1,
    img: Imge2,
    subtitle: "Beats Solo",
    title1: "Wiereless",
    title2: "Virtual",
  },
  {
    id: 1,
    img: Imge3,
    subtitle: "Beats Solo",
    title1: "Wiereless",
    title2: "Laptops",
  },
];

const Hero = ({ handlePopup }) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    // autoplay
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="container">
      <div className="overflow-hidden rounded-3xl min-h-[550px] sm:h-[600px] hero-bg-color flex items-center">
        <div className="container pb-8 sm:pb-0">
          <Slider {...settings}>
            {HeroData.map((data) => (
              <div key={data.id}>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  <div
                    className="flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center 
                    sm:text-left order-2 sm:order-1 z-10"
                  >
                    <h2
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className="text-2xl sm:text-6xl lg:text-2xl font-bold"
                    >
                      {data.subtitle}
                    </h2>
                    <h2
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                    >
                      {data.title1}
                    </h2>
                    <h2
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className="text-5xl sm:text-[80px] xl:text-[150px] uppercase text-white dark:text-white/20 font-bold"
                    >
                      {data.title2}
                    </h2>
                    <div
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-duration="500"
                      data-aos-once="true"
                    >
                      <Button
                        text="Shop By Category"
                        bgColor="bg-primary"
                        textColor="text-white"
                        handlePopup={handlePopup}
                      />
                    </div>
                  </div>
                  <div className="order-1 sm:order-2">
                    <div
                      data-aos="zoom-in"
                      data-aos-once="true"
                      className=" relative z-30"
                    >
                      <img
                        src={data.img}
                        alt=""
                        className="w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] sm:scale-105 object-contain mx-auto
                      drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] relative z-40"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Hero;
