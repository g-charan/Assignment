import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";

const Registration = () => {
  // React Hooks
  const [confirmation, setConfirmation] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  // Navigation
  const navigate = useNavigate();

  // API URL
  const url = "http://127.0.0.1:8000/users/";

  const postData = async () => {
    try {
      const resp = await axios.post(url, { name: name, password: password });
      console.log(resp.data);
      alert("User Created");
      navigate("/login");
    } catch (error) {}
  };

  return (
    <div>
      <div className="flex flex-col justify-center w-screen h-screen p-4">
        <div className="flex justify-center w-full p-10">
          <p className="text-2xl font-semibold text-black">Registration</p>
        </div>
        <div className="flex flex-col self-center  border-black w-[75rem] h-[35rem] rounded-md z-10 shadow-lg bg-[#050505] ">
          <div className="flex justify-around w-full h-full">
            <div className="flex flex-col justify-center w-full border-r-2 h-[25rem] self-center p-2">
              <h1 className="h-10 text-white place-self-center">JOIN US</h1>
            </div>
            <div className="flex flex-col justify-center w-full h-full ">
              <div className="flex flex-col self-center p-5">
                <label
                  for="fname"
                  className="text-[#757575] font-semibold text-sm "
                >
                  Name
                </label>
                <input
                  id="fname"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className=" w-[27rem] bg-black border-b-2 text-white hover:bg-zinc-950 rounded-sm focus:outline-none "
                ></input>
              </div>
              <div className="flex flex-col self-center p-5">
                <label
                  for="Email"
                  className="text-[#757575] font-semibold text-sm "
                >
                  Email
                </label>
                <input
                  id="Email"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className=" w-[27rem] bg-black border-b-2 text-white hover:bg-zinc-950 rounded-sm  focus:outline-none "
                ></input>
              </div>
              <div className="flex flex-col self-center p-5">
                <label
                  for="CEmail"
                  className="text-[#757575] font-semibold text-sm "
                >
                  Password
                </label>
                <input
                  id="CEmail"
                  type="password"
                  value={confirmation}
                  onChange={(e) => setConfirmation(e.target.value)}
                  className=" w-[27rem] bg-black border-b-2 text-white hover:bg-zinc-950 rounded-sm  focus:outline-none "
                ></input>
              </div>
              <div className="flex flex-col self-center p-5">
                <label
                  for="Pass"
                  className="text-[#757575] font-semibold text-sm "
                >
                  Confirm Password
                </label>
                <input
                  id="Pass"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className=" w-[27rem] bg-black border-b-2 text-white hover:bg-zinc-950 rounded-sm  focus:outline-none "
                ></input>
                <button
                  className="text-black w-[8rem] rounded-lg font-semibold mt-4 p-2 bg-white hover:scale-105 hover:transition-all"
                  onClick={postData}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
