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
      alert("Logged in successfully");
      navigate("/timer");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      alert("Logged in with Google");
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
    <div className="flex flex-col items-center justify-center h-screen  -tracking-tighter text-[12px] font-bold">
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
        <div className="flex w-full items-center gap-3 mb-7 mt-6">
          <div className="h-[1px] bg-gray-500 w-full"></div>
          <span className="w-auto text-gray-500">OR</span>
          <div className="h-[1px] bg-gray-500 w-full"></div>
        </div>
        <button
          onClick={handleGoogleLogin}
          className="p-3 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white  mb-4 w-full"
        >
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
