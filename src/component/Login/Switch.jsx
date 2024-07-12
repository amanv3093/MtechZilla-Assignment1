import React from "react";

function Switch({ isLogin, setIsLogin }) {
  return (
    <div className="flex items-center mb-6">
      <span style={{ color: isLogin ? "gray" : "#3498DB" }} className="mr-5">
        LOGIN
      </span>
      <div
        onClick={() => setIsLogin(!isLogin)}
        className="relative inline-block w-12 align-middle select-none transition duration-200 ease-in"
      >
        <label
          htmlFor="toggle"
          style={{ background: "gray" }}
          className="toggle-label block overflow-hidden h-[1.4rem] rounded-full cursor-pointer"
        >
          <span
            className={`toggle-circle absolute block w-[0.9rem] h-[0.9rem] mt-1 ml-1 rounded-full bg-white shadow inset-y-0 left-0 transition-transform duration-200 ease-in-out ${
              isLogin ? "transform translate-x-6" : ""
            }`}
          ></span>
        </label>
      </div>
      <span style={{ color: isLogin ? "#2ecc71" : "gray" }} className="ml-5">
        SIGN UP
      </span>
    </div>
  );
}

export default Switch;
