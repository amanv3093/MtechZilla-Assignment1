import React, { useState } from "react";
import {
  auth,
  provider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "../../firebase/firebase";
import Switch from "./Switch";

import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  let navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/timer");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate("/timer");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Signed up successfully");
    } catch (error) {
      alert(error.message);
    }
  };
  console.log(isLogin);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen  -tracking-tighter text-[12px] font-bold">
      <div
        className=" w-[400px] h-[500px]  flex flex-col items-center rounded-xl"
        style={{
          boxShadow: isLogin ? " 0 0 3px 1px #2ecc71" : " 0 0 3px 1px #3498DB",
          padding: "60px 50px",
        }}
      >
        <Switch isLogin={isLogin} setIsLogin={setIsLogin} />
        <form
          onSubmit={!isLogin ? handleLogin : handleSignup}
          className="flex flex-col space-y-4 mb-6  mt-4 w-full "
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value.toLowerCase())}
            placeholder="Email"
            className="p-3   outline-none"
            style={{
              boxShadow: isLogin ? " 0 0 0 1px #2ecc71" : " 0 0 0 1px #3498DB",
            }}
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            className="p-3   outline-none"
            style={{
              boxShadow: isLogin ? " 0 0 0 1px #2ecc71" : " 0 0 0 1px #3498DB",
            }}
          />
          <button
            style={{
              background: isLogin ? "#2ecc71" : "#3498DB",
            }}
            type="submit"
            className="p-3 text-white hover:bg-red-500 hover:text-white"
          >
            {!isLogin ? "Login" : "Signup"}
          </button>
        </form>
        <div className="flex w-full items-center gap-3 mb-9 mt-6">
          <div className="h-[1px] bg-gray-500 w-full"></div>
          <span className="w-auto text-gray-500">OR</span>
          <div className="h-[1px] bg-gray-500 w-full"></div>
        </div>

        <div class="px-6 sm:px-0 max-w-sm  w-full" onClick={handleGoogleLogin}>
          <button
            type="button"
            class="w-full text-white border  border-red-500  hover:bg-red-500 hover:text-white    text-sm px-5 py-2.5 text-center inline-flex items-center justify-between mr-2 mb-2"
          >
            <svg
              class="mr-2 -ml-1 w-4 h-4"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="google"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 488 512"
            >
              <path
                fill="currentColor"
                d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
              ></path>
            </svg>
            Continue with Google<div></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
