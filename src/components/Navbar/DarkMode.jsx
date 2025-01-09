import { useState, useEffect } from "react";
import lightButton from "../../assets/website/light-mode-button.png";
import DarkButton from "../../assets/website/dark-mode-button.png";
const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;
  useEffect(() => {
    localStorage.setItem("theme", theme);

    if (theme === "dark") {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  });

  return (
    <div className=" relative">
      <img
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        src={lightButton}
        alt="light"
        className={`z-10 absolute w-12 cursor-pointer duration-200 ${
          theme === "dark" ? " opacity-0" : " opacity-100"
        }`}
      />
      <img
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        src={DarkButton}
        alt="light"
        className={` w-12 `}
      />
    </div>
  );
};

export default DarkMode;
