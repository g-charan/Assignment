import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDraft } from "../context/ScheduleDraftsContext";
const url = "http://127.0.0.1:8000/posts/";

const SchedulePosts = () => {
  const schedule = useDraft();
  const [title, setTitle] = useState(schedule.title);
  const [desc, setDesc] = useState(schedule.desc);
  const [scheduledTime, setScheduledTime] = useState(schedule.time);
  const [timeRemaining, setTimeRemaining] = useState(null);
  const [submited, setSubmitted] = useState(false);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleTimeChange = (e) => {
    setScheduledTime(e.target.value);
  };

  const handleDescChange = (e) => {
    setDesc(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Calculate time remaining until scheduled time
    const now = new Date();
    const scheduledDateTime = new Date(scheduledTime);
    const timeDifference = scheduledDateTime - now;
    setTimeRemaining(timeDifference);
    // Reset form after submission
    // setTitle("");
    // setScheduledTime("");
    setSubmitted(true);
  };
  useEffect(() => {
    schedule.scheduleFunc(title, desc, scheduledTime);
  }, [handleDescChange, handleTitleChange, handleTimeChange]);

  const formatTime = (milliseconds) => {
    if (milliseconds === null || milliseconds <= 0) {
      return "";
    }

    const totalSeconds = Math.ceil(milliseconds / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  const postData = async () => {
    try {
      const resp = await axios.post(url, {
        title: title,
        desc: desc,
      });
      console.log(resp.data);
    } catch (error) {}
  };

  useEffect(() => {
    let timer;
    if (timeRemaining !== null && timeRemaining > 0) {
      timer = setTimeout(() => {
        // Here you can implement the logic to post the content
        console.log(`posting: ${title}`);
        postData();
        // Reset time remaining after posting
        setTimeRemaining(null);
      }, timeRemaining);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [timeRemaining]);

  useEffect(() => {
    let interval;
    if (timeRemaining !== null && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining((prevTime) => prevTime - 1000);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [timeRemaining]);

  return (
    <div className="w-full ">
      <div className="flex justify-center w-full ">
        <div className="flex flex-col w-1/3 gap-2 p-2 rounded-md ">
          <label for="Title">Title:</label>
          <input
            type="text"
            id="Title"
            className="border-2 rounded-md h-[2vw]"
            value={title}
            onChange={handleTitleChange}
            disabled={submited}
          ></input>
          <label for="Desc">Description:</label>
          <textarea
            type="text"
            id="Desc"
            className="border-2 rounded-md h-[3vw]"
            disabled={submited}
            value={desc}
            onChange={handleDescChange}
          ></textarea>
          {/* <label for="Date">Date:</label>
        <input type="text" id="Date" className="border-2 rounded-md"></input> */}
          <label for="Time">Date Time:</label>
          <input
            type="datetime-local"
            id="Time"
            className="border-2 rounded-md h-[2vw]"
            value={scheduledTime}
            onChange={handleTimeChange}
            disabled={submited}
          ></input>
          {!submited ? (
            <div className="flex justify-evenly">
              <button
                className="w-2/5 py-1 m-1 text-white bg-black rounded-md hover:scale-105 hover:transition-all"
                onClick={handleSubmit}
              >
                Schedule
              </button>
              <button
                className="w-2/5 py-1 m-1 text-white bg-black rounded-md hover:scale-105 hover:transition-all"
                onClick={postData}
              >
                Post now
              </button>
            </div>
          ) : (
            <div className="flex justify-center ">
              <button
                className="w-2/5 py-1 m-1 text-white bg-black rounded-md hover:scale-105 hover:transition-all"
                onClick={() => setSubmitted(false)}
              >
                Clear
              </button>
            </div>
          )}
          <div className="text-sm text-center">
            TIme Remaining for your next post:{" "}
            <p>{formatTime(timeRemaining)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchedulePosts;
