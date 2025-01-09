import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMobileAlt,
} from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa6";
const Footerlinks = [
  {
    title: "Home",
    link: "/#Home",
  },
  {
    title: "About",
    link: "/#About",
  },
  {
    title: "Contact",
    link: "/#Contact",
  },
  {
    title: "Blog",
    link: "/#Blog",
  },
];

const Footer = () => {
  return (
    <div className="dark:bg-gray-950">
      <div className="container">
        <div className="grid md:grid-cols-3 pt-5">
          <div className="py-8 px-4">
            <a
              href="#"
              className="text-primary font-semibold tracking-widest text-2xl sm:text-3xl"
            >
              ESHOP
            </a>
            <p className="text-gray-600 dark:text-white/70 lg:pr-24 pt-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
              alias cum
            </p>
          </div>
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold sm:text-left mb-3">
                Important Links
              </h1>
              <ul className="space-y-3">
                {Footerlinks.map((data, index) => (
                  <li
                    key={index}
                    className="text-gray-600 dark:text-gray-400 hover:text-black hover:dark:text-white duration-300"
                  >
                    <a href={data.link}>{data.title}</a>
                  </li>
                ))}
              </ul>
            </div>
            {/* second col */}
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold sm:text-left mb-3">
                Quick Links
              </h1>
              <ul className="space-y-3">
                {Footerlinks.map((data, index) => (
                  <li
                    key={index}
                    className="text-gray-600 dark:text-gray-400 hover:text-black hover:dark:text-white duration-300"
                  >
                    <a href={data.link}>{data.title}</a>
                  </li>
                ))}
              </ul>
            </div>
            {/* company Address */}
            <div className="py-9 px-4 col-span-2 sm:col-auto">
              <h1 className="text-xl font-bold sm:text-left mb3">Address</h1>
              <div className="flex items-center gap-3">
                <FaLocationArrow />
                <p>Noida , Uttar Pradesh</p>
              </div>
              <div className="flex items-center gap-3 mt-6">
                <FaMobileAlt />
                <p>00000000000</p>
              </div>
              {/* social links */}
              <div className="flex items-center gap-4 mt-5">
                <a href="#">
                  <FaInstagram className="text-3xl hover:text-primary duration-300" />
                </a>
                <a href="#">
                  <FaFacebook className="text-3xl hover:text-primary duration-300" />
                </a>
                <a href="#">
                  <FaLinkedin className="text-3xl hover:text-primary duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
