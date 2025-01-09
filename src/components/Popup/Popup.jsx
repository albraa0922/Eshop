import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import Button from "../shared/Button";
import { TbDeviceDesktopOff } from "react-icons/tb";

const Popup = ({ orderPopup, handlePopup }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
  });

  function close() {
    if (orderPopup) {
      handlePopup();
    }
  }
  return (
    <>
      {orderPopup && (
        <div
          onClick={close}
          className="h-screen w-screen fixed top-0 left-0 bg-black/50 backdrop-blur-sm z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="fixed w-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white
              dark:bg-gray-900 dark:text-white duration-200 rounded-md shadow-md p-4"
          >
            <div className="flex items-center justify-between">
              <h2>Order Now</h2>
              <div>
                <IoCloseOutline
                  onClick={handlePopup}
                  className="text-2xl cursor-pointer"
                />
              </div>
            </div>
            <div>
              <input
                value={form.name}
                onChange={(e) => {
                  setForm({ ...form, name: e.target.value });
                }}
                type="text"
                placeholder="Name"
                className="form-input"
              />
              <input
                value={form.email}
                onChange={(e) => {
                  setForm({ ...form, email: e.target.value });
                }}
                type="text"
                placeholder="Email"
                className="form-input"
              />
              <input
                value={form.address}
                onChange={(e) => {
                  setForm({ ...form, address: e.target.value });
                }}
                type="text"
                placeholder="Address"
                className="form-input"
              />
            </div>
            <div>
              <Button
                text={"Order Now"}
                bgColor={"bg-primary"}
                textColor={"text-white"}
                handlePopup={handlePopup}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
