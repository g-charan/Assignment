import { LineChart } from "@mui/x-charts/LineChart";
import { PieChart } from "@mui/x-charts/PieChart";
import {
  Heart,
  Laptop,
  MessageCircleMore,
  Smartphone,
  Tablet,
  ThumbsUp,
  Trash2,
  UserRoundCheck,
  UserRoundPlus,
} from "lucide-react";
import React, { useState } from "react";
import facebook from "../assets/facebook.png";
import insta from "../assets/insta.png";
import user from "../assets/user1.png";
import whatsapp from "../assets/whatsapp.png";

const Home = () => {
  // React Hooks( Can use these for data in graphs )
  const [daily, setDaily] = useState();
  const [total, setTotal] = useState();
  const [monthly, setMonthly] = useState([]);
  const [expenses, setExpenses] = useState([]);

  //Static JSON Data

  const devices = [
    { device: "Smartphone", percentage: "15%", icon: Smartphone },
    { device: "Tablet", percentage: "65%", icon: Tablet },
    { device: "Laptop", percentage: "10%", icon: Laptop },
  ];

  const shortBoxes = [
    { no: 2679, title: "Followers", icon: UserRoundCheck },
    { no: 3209, title: "Following", icon: UserRoundPlus },
    { no: 321321, title: "Likes", icon: Heart },
    { no: 23213, title: "Comments", icon: MessageCircleMore },
  ];

  const data2 = [
    { id: 0, img: whatsapp, title: "Special Offers!!!" },
    { id: 1, img: insta, title: "New Merch Launched Today!!" },
    { id: 2, img: facebook, title: "Thanks a lot for your support" },
  ];

  const data = [
    { id: 0, value: 10, label: "Shares" },
    { id: 1, value: 15, label: "Comments" },
    { id: 2, value: 20, label: "Likes" },
  ];

  const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
  const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
  const sData = [800, 4000, 7120, 2908, 4000, 2100, 3200];
  const xLabels = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  return (
    <div className="w-full h-screen">
      <div className="flex flex-row w-full justify-evenly ">
        {shortBoxes.map((data) => (
          <div className="flex justify-between w-1/6 p-1 bg-white rounded-md shadow-lg hover:scale-105 hover:transition-all hover:cursor-pointer">
            <div className="p-2">
              <p className="text-2xl font-bold">{data.no}</p>
              <p className="font-medium ">{data.title}</p>
            </div>
            <div className="p-3">
              <data.icon className=" hover:scale-105 hover:transition-all" />
            </div>
          </div>
        ))}
      </div>
      <div className="p-2 my-2 rounded-md">
        <p className="font-bold ">Statistics</p>
        <div className="grid justify-center w-full grid-cols-2 p-2 space-x-4">
          <div className="flex justify-center h-full p-4 align-middle bg-white rounded-lg shadow-lg z-1">
            <PieChart
              series={[
                {
                  data: data,
                  highlightScope: { faded: "global", highlighted: "item" },
                  faded: {
                    innerRadius: 30,
                    additionalRadius: -30,
                    color: "gray",
                  },
                },
              ]}
              height={300}
            />
          </div>
          <div className="p-4 bg-white rounded-lg shadow-lg z-1">
            <LineChart
              height={300}
              series={[
                { data: pData, label: "Shares" },
                { data: uData, label: "Comments" },
                { data: sData, label: "Likes" },
              ]}
              xAxis={[{ scaleType: "point", data: xLabels }]}
            />
          </div>
        </div>
      </div>

      <div className="grid justify-center w-full grid-cols-4 grid-rows-4 gap-2 bg-white">
        <div className="grid-flow-col col-span-2 row-span-4 p-2 bg-white rounded-md shadow-xl z-1">
          <p className="font-bold ">Scheduled posts</p>
          {data2.map((data) => (
            <div className="grid h-[12vh] grid-cols-4 grid-rows-4 p-2 m-2 border-b-2 shadow-md rounded-sm hover:border-2 hover:border-slate-600 hover:z-1 hover:transition-all hover:cursor-pointer">
              <img
                className="h-[3.5vw] row-span-4   place-self-center"
                src={data.img}
              ></img>
              <p className="col-span-3 font-semibold">{data.title}</p>
              <div className="p-2">
                <p className="text-xs">Posted on</p>
                <p className="font-medium ">Instagram</p>
              </div>
              <div className="p-2 ">
                <p className="text-xs">Posted Date</p>
                <p className="font-medium ">10 Apr, 2024</p>
              </div>
            </div>
          ))}
        </div>
        <div className="col-span-2 row-span-2 p-2 bg-white rounded-md shadow-md">
          <p className="font-bold ">Recent Comment</p>
          <div className="grid grid-cols-4 grid-rows-4 p-4 rounded-lg shadow-sm">
            <div className="flex h-auto col-span-4 row-span-1 space-x-2">
              <img src={user} className=" w-[2vw] h-[2vw] justify-center"></img>
              <p className="flex flex-col justify-center font-medium">
                Username
              </p>
            </div>
            <div className="col-span-4 row-span-2 ">
              something that is random, or a random state or condition:
              different statistical methods used to estimate randoms. Slang. a
              person or thing that is unknown, unidentified, or suspiciously out
              of place. a person or thing that is odd or unpredictable.
            </div>
            <div className="flex items-center h-auto col-span-2 px-2 space-x-4">
              <ThumbsUp className=" hover:scale-105 hover:transition-all" />
              <MessageCircleMore className=" hover:scale-105 hover:transition-all" />
              <Trash2 className=" hover:scale-105 hover:transition-all" />
            </div>
            <div className="flex justify-center col-span-2">
              <button className="w-2/5 py-1 m-1 text-white bg-black rounded-md hover:scale-105 hover:transition-all">
                See post
              </button>
            </div>
          </div>
        </div>
        <div className="z-50 col-span-2 row-span-2 p-2 bg-white rounded-md shadow-2xl ">
          <p className="font-bold ">Users on Different Devices</p>
          <div className="flex w-full p-2 justify-evenly">
            {devices.map((data) => (
              <div className="flex flex-col w-1/6 p-2 rounded-lg shadow-lg hover:scale-105 hover:transition-all hover:cursor-pointer">
                <data.icon className="self-center " />
                <p className="p-1 text-sm text-center">{data.device}</p>
                <p className="text-lg font-semibold text-center ">
                  {data.percentage}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
