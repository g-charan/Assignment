import axios from "axios";
import React, { useContext, useState } from "react";
import { goalContext } from "../SubPages/Goals";

const url = "http://127.0.0.1:5000/goals";

const CreateNewGoal = () => {
  const [val1, setVal1] = useState();
  const [val2, setVal2] = useState();
  const [val3, setVal3] = useState();
  const [val4, setVal4] = useState();
  const [open, setOpen] = useContext(goalContext);

  const postData = async () => {
    try {
      const resp = await axios.post(url, { amount: val1, days: val3 });
      console.log(resp.data);
      setOpen(false);
    } catch (error) {
      console.log(error.resp);
    }
  };

  return (
    <div className="flex flex-col w-full gap-2">
      <input
        type="text"
        className="w-[35vw] p-2 border-2 border-black rounded-md"
        value={val1}
        placeholder="Amount"
        onChange={(e) => setVal1(e.target.value)}
      />
      {/* <input
        type="text"
        className="w-[35vw] p-2 border-2 border-black rounded-md"
        value={val2}
        placeholder=""
        onChange={(e) => setVal2(e.target.value)}
      /> */}
      <input
        type="text"
        className="w-[35vw] p-2 border-2 border-black rounded-md"
        value={val3}
        placeholder="Months"
        onChange={(e) => setVal3(e.target.value)}
      />
      {/* `<input
        type="text"
        className="w-[35vw] p-2 border-2 border-black rounded-md"
        value={val4}
        placeholder="Category"
        onChange={(e) => setVal4(e.target.value)}
      />` */}
      <button
        className="w-[5vw] px-4 py-2 m-2 text-white transition-all rounded-md bg-slate-800 hover:scale-110"
        onClick={postData}
      >
        Create
      </button>
    </div>
  );
};

export default CreateNewGoal;
