import React from "react";
import SchedulePosts from "./SchedulePosts";

const ScheduleLayout = () => {
  //Can add more objects for more scheduling posts
  //Requires Improvement
  const data = [{ no: 1 }];

  return (
    <div className="w-full ">
      <div>
        <div className="flex justify-between px-10 py-5 ">
          <p className="p-2 text-lg font-bold ">Schedule posts here:</p>
          <button className="w-[2vw] py-1 m-1 text-white bg-black rounded-md hover:scale-105 hover:transition-all">
            +
          </button>
        </div>
        {data.map(() => (
          <div className="flex flex-col">
            <button className="w-[2vw] py-1 m-1 text-white bg-black rounded-md hover:scale-105 hover:transition-all ">
              x
            </button>
            <SchedulePosts />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScheduleLayout;
