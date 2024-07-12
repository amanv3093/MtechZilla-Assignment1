import React, { useState } from "react";
import {
  auth,
  provider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "../../firebase/firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Logged in successfully");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      alert("Logged in with Google");
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
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 -tracking-tighter text-[12px] font-bold">
      <div
        className="border w-[400px] h-[500px]  flex flex-col items-center rounded"
        style={{
          border: isLogin ? "1px solid #2ecc71" : "1px solid #3498DB",
          padding: "60px 50px",
        }}
      >
        <div className="flex items-center mb-6 ">
          <span
            style={{ color: isLogin ? "gray" : "#3498DB" }}
            className="mr-5 "
          >
            LOGIN
          </span>
          <div
            onClick={() => setIsLogin(!isLogin)}
            className="relative inline-block w-12 align-middle select-none transition duration-200 ease-in"
          >
            <label
              htmlFor="toggle"
              className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
            >
              <span
                className={`toggle-circle absolute block w-4 h-4 mt-1 ml-1 rounded-full bg-white shadow inset-y-0 left-0 transition-transform duration-200 ease-in-out ${
                  isLogin ? "transform translate-x-6" : ""
                }`}
              ></span>
            </label>
          </div>
          <span
            style={{ color: isLogin ? "#2ecc71" : "gray" }}
            className="ml-5 "
          >
            SIGN UP
          </span>
        </div>

        <form
          onSubmit={!isLogin ? handleLogin : handleSignup}
          className="flex flex-col space-y-4 mb-6  mt-4 w-full "
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="p-3   outline-none"
            style={{
              boxShadow: isLogin ? " 0 0 0 1px #2ecc71" : " 0 0 0 1px #3498DB",
            }}
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="p-3   outline-none"
            style={{
              boxShadow: isLogin ? " 0 0 0 1px #2ecc71" : " 0 0 0 1px #3498DB",
            }}
          />
          <button
            style={{
              background: isLogin ? " #2ecc71" : " #3498DB",
            }}
            type="submit"
            className="p-3  text-white  "
          >
            {!isLogin ? "Login" : "Signup"}
          </button>
        </form>
        <div className="flex w-full items-center gap-3 mb-6 mt-6">
          <div className="h-[1px] bg-gray-500 w-full"></div>
          <span className="w-auto text-gray-500">OR</span>
          <div className="h-[1px] bg-gray-500 w-full"></div>
        </div>
        <button
          onClick={handleGoogleLogin}
          className="p-3 border border-red-500 text-red-500  mb-4 w-full"
        >
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
