import img1 from "../../assets/category/earphone.png";
import img2 from "../../assets/category/watch.png";
import img3 from "../../assets/category/macbook.png";
import img4 from "../../assets/category/gaming.png";
import img5 from "../../assets/category/vr.png";
import img6 from "../../assets/category/speaker.png";
import Button from "../shared/Button";

const Category = () => {
  return (
    <div className="py-5 sm:p-8 ">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          <div
            className="py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl 
            relative h-[350px] flex items-end"
          >
            <div className="mb-5">
              <p className="mb-[2px] text-gray-400">Enjoy</p>
              <p className="text-2xl font-semibold mb-[2px]">With</p>
              <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-3">
                Earphone
              </p>
              <Button
                text="Browse"
                bgColor="bg-primary"
                textColor={"text-white"}
              />
            </div>
            <img src={img1} alt="" className="w-[320px] absolute bottom-0" />
          </div>
          {/* second col */}
          <div
            className="py-10 pl-5 bg-gradient-to-br from-brandYellow to-brandYellow/80 text-white rounded-3xl 
            relative h-[350px] flex items-end"
          >
            <div className="mb-5">
              <p className="mb-[2px] text-white">Enjoy</p>
              <p className="text-2xl font-semibold mb-[2px]">With</p>
              <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-3">
                Gatget
              </p>
              <Button
                text="Browse"
                bgColor="bg-white"
                textColor={"text-brandYellow"}
              />
            </div>
            <img src={img2} className="w-[320px] absolute top-8 -right-5 " />
          </div>
          {/* third col */}
          <div
            className="col-span-2 py-10 pl-5 bg-gradient-to-br from-primary/90 to-primary/90 text-white rounded-3xl 
            relative h-[350px] flex items-end"
          >
            <div className="mb-5">
              <p className="mb-[2px] text-gray-200">Enjoy</p>
              <p className="text-2xl font-semibold mb-[2px]">With</p>
              <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-3">
                Laotop
              </p>
              <Button
                text="Browse"
                bgColor="bg-white"
                textColor={"text-primary"}
              />
            </div>
            <img src={img3} alt="" className="w-[250px] absolute right-3 " />
          </div>
        </div>

        {/* 2 */}

        <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          <div
            className="col-span-2 py-10 pl-5 bg-gradient-to-br from-gray-400/90 to-gray-100 text-white rounded-3xl 
            relative h-[350px] flex items-end "
          >
            <div className="mb-5">
              <p className="mb-[2px] text-gray-200">Enjoy</p>
              <p className="text-2xl font-semibold mb-[2px]">With</p>
              <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-3">
                Console
              </p>
              <Button
                text="Browse"
                bgColor="bg-primary"
                textColor={"text-white"}
              />
            </div>
            <img src={img4} alt="" className="w-[250px] absolute right-3 " />
          </div>

          {/* second col */}
          <div
            className="py-10 pl-5 bg-brandGreen text-white rounded-3xl 
            relative h-[350px] flex items-start"
          >
            <div className="mb-5">
              <p className="mb-[2px] text-white">Enjoy</p>
              <p className="text-2xl font-semibold mb-[2px]">With</p>
              <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-3">
                Oculus
              </p>
              <Button
                text="Browse"
                bgColor="bg-white"
                textColor={"text-brandGreen"}
              />
            </div>
            <img
              src={img5}
              alt=""
              className="w-[250px] absolute bottom-0 right- "
            />
          </div>
          {/* third col */}
          <div
            className="py-10 pl-5 bg-gradient-to-br from-brandBlue to-brandBlue/90 text-white rounded-3xl 
            relative h-[350px] flex items-start"
          >
            <div className="mb-5">
              <p className="mb-[2px] text-gray-400">Enjoy</p>
              <p className="text-2xl font-semibold mb-[2px]">With</p>
              <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-3">
                Speakers
              </p>
              <Button
                text="Browse"
                bgColor="bg-white"
                textColor={"text-brandBlue"}
              />
            </div>
            <img
              src={img6}
              alt=""
              className="w-[220px] absolute bottom-0 right-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
