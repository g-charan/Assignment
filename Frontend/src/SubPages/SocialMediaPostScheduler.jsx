import React, { useEffect, useState } from "react";

const SocialMediaPostScheduler = (postContent, scheduledTime) => {
  //   const [postContent, setPostContent] = useState("");
  //   const [scheduledTime, setScheduledTime] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(null);

  const handleContentChange = (e) => {
    // setPostContent(e.target.value);
  };

  const handleTimeChange = (e) => {
    // setScheduledTime(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Calculate time remaining until scheduled time
    const now = new Date();
    const scheduledDateTime = new Date(scheduledTime);
    const timeDifference = scheduledDateTime - now;
    setTimeRemaining(timeDifference);
    // Reset form after submission
    // setPostContent("");
    // setScheduledTime("");
  };

  useEffect(() => {
    let timer;
    if (timeRemaining !== null && timeRemaining > 0) {
      timer = setTimeout(() => {
        // Here you can implement the logic to post the content
        console.log(`posting: ${postContent}`);
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

  return (
    <div>
      <h2>Schedule Social Media Post</h2>
      <form onSubmit={handleSubmit}>
        {/* <div>
          <label htmlFor="postContent">Post Content:</label>
          <textarea
            id="postContent"
            value={postContent}
            onChange={handleContentChange}
          />
        </div>
        <div>
          <label htmlFor="scheduledTime">Scheduled Time:</label>
          <input
            type="datetime-local"
            id="scheduledTime"
            value={scheduledTime}
            onChange={handleTimeChange}
          />
        </div> */}
        <div>Time Remaining: {formatTime(timeRemaining)}</div>
        <button type="submit">Schedule</button>
      </form>
    </div>
  );
};

export default SocialMediaPostScheduler;
