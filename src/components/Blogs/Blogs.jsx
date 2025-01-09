import React from "react";
import Heading from "../shared/Heading";
import img1 from "../../assets/blogs/blog-1.jpg";
import img2 from "../../assets/blogs/blog-2.jpg";
import img3 from "../../assets/blogs/blog-3.jpg";

const BlogData = [
  {
    title: "How to choose perfect smartwatch",
    subtitle:
      "minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro? ",
    publishesd: "Jan 20, 2024 by Dilshad",
    img: img1,
    aosDelay: "0",
  },
  {
    title: "How to choose perfect gadget",
    subtitle:
      "minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro? ",
    publishesd: "Jan 20, 2024 by Satya",
    img: img2,
    aosDelay: "200",
  },
  {
    title: "How to choose perfect VR headset",
    subtitle:
      "minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro? ",
    publishesd: "Jan 20, 2024 by Sabir",
    img: img3,
    aosDelay: "400",
  },
];

const Blogs = () => {
  return (
    <div className="container mt-14">
      <Heading title="Recent News" subtitle="Explore Our Blogs" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 md:gap-7">
        {BlogData.map((data, index) => (
          <div key={index}>
            <div
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
              className="overflow-hidden rounded-lg mb-2"
            >
              <img
                src={data.img}
                alt=""
                className="w-full h-[220px] object-cover rounded-lg hover:scale-105 duration-500"
              />
            </div>
            <div className="space-y-2">
              <p className="text-xs text-gray-500">{data.publishesd}</p>
              <p className="font-bold">{data.title}</p>
              <p className="text-sm line-clamp-2 text-gray-600 dark:text-gray-400">
                {data.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
