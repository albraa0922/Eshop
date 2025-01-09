import { CiSearch } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa6";
import DarkMode from "./DarkMode";

const MenuLinks = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Shop",
    link: "/#shop",
  },
  {
    id: 3,
    name: "About",
    link: "/#about",
  },
  {
    id: 4,
    name: "Blogs",
    link: "/#blogs",
  },
];
const DropDaownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#",
  },
  {
    id: 3,
    name: "Top Rate",
    link: "/#",
  },
];
const Navbar = ({ handlePopup }) => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-30">
      <div className="py-4">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-primary font-semibold tracking-widest text-2xl sm:text-3xl"
            >
              ESHOP
            </a>
            <div className=" hidden md:block">
              <ul className="flex">
                {MenuLinks.map((link, index) => (
                  <li
                    key={index}
                    className="mx-4 text-l font-semibold text-gray-500 hover:text-black
                    dark:hover:text-white duration-200"
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
                <li className=" cursor-pointer group ml-3">
                  <a
                    href="#"
                    className="flex items-center gap-[1px] text-l font-semibold text-gray-500
                    hover:text-black dark:hover:text-white duration-200 "
                  >
                    Quick Link
                    <FaCaretDown className=" group-hover:rotate-180 duration-200" />
                  </a>
                  <div
                    className=" absolute z-40 hidden group-hover:block bg-white shadow-md 
                        rounded-md w-[200px] p-2 dark:bg-gray-900 dark:text-white"
                  >
                    <ul>
                      {DropDaownLinks.map((link, index) => (
                        <li key={index}>
                          <a
                            href={link.link}
                            className=" text-gray-500 p-2 rounded-md block hover:bg-primary/20
                          hover:text-black dark:hover:text-white duration-200 font-semibold"
                          >
                            {link.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-between items-center gap-4">
            <div className="relative group">
              <input
                type="text"
                placeholder="search"
                className="search-bar pb-1 text-gray-500 indent-2"
              />
              <CiSearch className="absolute top-1 right-2 text-gray-600 dark:text-gray-400 text-xl group-hover:text-primary" />
            </div>
            <button className="relative p-3">
              <FaCartShopping
                className=" text-xl text-gray-600 dark:text-gray-400"
                onClick={handlePopup}
              />
              <div
                className="bg-red-600 w-4 h-4 text-white rounded-full absolute top-[2px] right-[2px] flex items-center 
                    justify-center pb-1"
              >
                <span>1</span>
              </div>
            </button>
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
