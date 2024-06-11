// Icons
import Profile from "../../icons/Profile";
import CloseEye from "../../icons/CloseEye";
import OpenEye from "../../icons/OpenEye";
import axios from 'axios'
// React Router
import { Link, useNavigate } from "react-router-dom";

// Hooks
import { useRef, useState } from "react";

// Redux
import { useDispatch } from "react-redux";
import { setUser } from "../../slices/userSlice";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  const userNameRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleShowPassword = () => {
    setShowPassword(!showPassword)
    passwordRef.current.type = passwordRef.current.type === 'text' ? "password" : "text"
  };
  const handleformsubmit = async (e) => {
    e.preventDefault()
    try {
      const username = userNameRef.current.value.trim()
      const password = passwordRef.current.value.trim()
      const response = await axios.post("/api/auth/login", { username, password })
      dispatch(setUser(response.data))
      localStorage.setItem("user", JSON.stringify(response.data))
      navigate("/")
      userNameRef.current.value = ""
      passwordRef.current.value = ""
    } catch (error) {
      console.log("Fetch error " + error);
    }
  }

  return (
    <div className="h-[600px] mx-auto w-1/4 flex items-center justify-center flex-col">
      <div className="text-center mb-5">
        <h1 className="text-3xl text-bold">Welcome Back</h1>
        <h5 className="text-xs text-neutral-500 ">Login in to your account</h5>
      </div>
      <form className="w-full space-y-5" onSubmit={handleformsubmit}>
        {/* userName */}
        <div className="w-full">
          <label className="text-gray-500 text-sm" htmlFor="userName">
            Username
          </label>
          <div className="relative h-10">
            <input
              ref={userNameRef}
              type="userName"
              id="userName"
              placeholder="hsynmrzyv"
              className="absolute w-full h-full text-sm py-3 top-0 left-0 focus:outline-none bg-transparent border-b-2 border-gray-300 focus:border-lightOrange "
            />
            <Profile
              color="gray"
              className="w-5 h-5 absolute top-1/2 -translate-y-1/2 right-0"
            />
          </div>
        </div>

        {/* Password */}
        <div className="w-full">
          <label className="text-gray-500 text-sm" htmlFor="password">
            password
          </label>
          <div className="relative h-10">
            <input
              ref={passwordRef}
              type="password"
              id="password"
              placeholder="6+ strong character"
              className="absolute w-full h-full text-sm py-3 top-0 left-0 focus:outline-none bg-transparent border-b-2 border-gray-300 focus:border-lightOrange"
            />
            <span
              onClick={toggleShowPassword}
              className="absolute top-1/2 -translate-y-1/2 right-0 cursor-pointer"
            >
              {!showPassword && <CloseEye color="gray" className="w-5 h-5 " />}
              {showPassword && <OpenEye color="gray" className="w-5 h-5 " />}
            </span>
          </div>
        </div>

        <button className="w-full bg-lightOrange text-white p-2 rounded-xl hover:scale-95 transition-all duration-200">
          Sign In
        </button>
        <p className="text-center text-xs">
          Don't you have an account?{" "}
          <Link className="text-lightOrange" to="/sign-up">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignIn;
