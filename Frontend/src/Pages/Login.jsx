import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dataContext } from "../context/AuthUser";
import { useAuth } from "../context/ProtectedRoutes";

function Login() {
  // React Hooks
  const [password, setPass] = useState("");
  const auth = useAuth();
  const [loading, setLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [newLogin, setnewLogin] = useContext(dataContext);

  // API URL
  const url = "http://127.0.0.1:8000/login/";

  //Navigation
  const navigate = useNavigate();

  //Posting to API
  const postData = async () => {
    setLoading(true);
    try {
      const resp = await axios.post(url, { name: email, password: password });
      const data = resp.data;
      setLoggedIn(data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
    if (!loading) {
      if (loggedIn == true) {
        console.log(loggedIn);
        setnewLogin((data) => {
          return { ...newLogin, login: loggedIn };
        });
        auth.login(email, password);
        navigate("/home");
      } else {
        alert("Please try again or check your credentials");
      }
    }
  };

  const gotoRegistration = () => {
    navigate("/registration");
  };

  return (
    <div>
      {loading ? (
        <div>Loading please wait</div>
      ) : (
        <div className="flex flex-col justify-center w-screen h-screen p-4 ">
          <div className="flex justify-center w-full p-10">
            <p className="text-2xl font-semibold text-black">Login</p>
          </div>
          <div className="flex flex-col self-center w-[55rem] h-[25rem] bg-black ">
            <div className="flex justify-around w-full h-full">
              <div className="flex flex-col justify-center w-full h-full">
                <div className="flex flex-col self-center p-5">
                  <label for="Email" className="text-white ">
                    UserName
                  </label>
                  <input
                    id="UserName"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className=" w-[27rem] bg-black border-b-2 text-white hover:bg-zinc-950 focus:outline-none "
                  ></input>
                </div>
                <div className="flex flex-col self-center p-5">
                  <label for="password" className="text-white ">
                    Password
                  </label>
                  <input
                    id="password"
                    type="text"
                    value={password}
                    onChange={(e) => setPass(e.target.value)}
                    className=" w-[27rem] bg-black border-b-2 text-white hover:bg-zinc-950 focus:outline-none "
                  ></input>
                </div>
                <div className="self-center space-x-10 ">
                  <button
                    className="text-black w-[8rem] rounded-lg font-semibold self-center p-2 bg-white hover:scale-105 hover:transition-all"
                    onClick={postData}
                  >
                    Log in
                  </button>
                  <button
                    className="text-center text-white hover:underline hover:decoration-white "
                    onClick={gotoRegistration}
                  >
                    Create account
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
