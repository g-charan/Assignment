import axios from "axios";
import React, { useEffect, useState } from "react";

const Posts = () => {
  //API URL
  const url = "http://127.0.0.1:8000/posts/";

  //React Hooks
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const slicedData = data.slice(-3);
  const getData = async () => {
    try {
      setLoading(true);
      const resp = await axios.get(url);
      setData(resp.data);
      console.log(resp.data);
    } catch (error) {}
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="w-full">
      {loading ? (
        <div>Loading</div>
      ) : (
        <div className="w-full ">
          <h1 className="p-2 text-lg font-bold ">Posts:</h1>
          <div className="grid grid-cols-4 gap-1 p-3 rounded-sm jus">
            <div className="flex flex-col justify-center col-span-4 p-4 space-y-2 border-2 rounded-md shadow-md">
              {data &&
                slicedData.map((data) => (
                  <div className="self-center w-1/3 p-4 space-y-4 border-2 rounded-lg shadow-lg">
                    <p className="grid justify-start grid-cols-4 gap-4 ">
                      <p className="font-medium "> Title:</p>
                      <input
                        type="text"
                        value={data.title}
                        disabled
                        className="col-span-3 p-1 border-2 rounded-sm border-slate-300"
                      ></input>
                    </p>
                    <p className="grid justify-start grid-cols-4 gap-4">
                      <p className="font-medium "> Descripition:</p>
                      <textarea
                        type="text"
                        value={data.desc}
                        disabled
                        className="col-span-3 p-1 border-2 rounded-sm border-slate-300"
                      ></textarea>
                    </p>
                    <p className="grid justify-start grid-cols-4 gap-4">
                      <p className="font-medium "> DateTime:</p>
                      <input
                        type="text"
                        value={data.createdAt}
                        disabled
                        className="col-span-3 p-1 border-2 rounded-sm border-slate-300 "
                      ></input>
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Posts;
