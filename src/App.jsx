import Banner from "./components/Banner/Banner";
import Category from "./components/Category/Category";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services";
import headphone from "./assets/hero/headphone.png";
import Products from "./components/Produscts/Products";
import smartwatch2 from "./assets/category/smartwatch2-removebg-preview.png";
import Blogs from "./components/Blogs/Blogs";
import Partners from "./components/Partners/Partners";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const BannerData = {
  discount: "30% OFF",
  title: "Fine Smile",
  data: "10 Jan to 28 Jan",
  image: headphone,
  title2: "Air Solo Bass",
  title3: "Winter Sale",
  title4:
    " lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis",
  bgColor: "bg-primary",
  buttouColor: "text-primary",
};
const BannerData2 = {
  discount: "30% OFF",
  title: "Happy Hours",
  data: "10 Jan to 28 Jan",
  image: smartwatch2,
  title2: "Smart Solo",
  title3: "Winter Sale",
  title4:
    " lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis",
  bgColor: "bg-brandGreen",
  buttouColor: "text-brandGreen",
};

const App = () => {
  const [orderPopup, setOrderPopup] = useState(false);
  const handlePopup = () => {
    setOrderPopup(!orderPopup);
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className=" dark:bg-gray-900 duration-200 overflow-hidden dark:text-white">
      <Navbar handlePopup={handlePopup} />
      <Hero handlePopup={handlePopup} />
      <Category />
      <Services />
      <Banner data={BannerData} />
      <Products />
      <Banner data={BannerData2} />
      <Blogs />
      <Partners />
      <Footer />
      <Popup orderPopup={orderPopup} handlePopup={handlePopup} />
    </div>
  );
};

export default App;
