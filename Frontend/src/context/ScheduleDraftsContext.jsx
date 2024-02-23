import React, { createContext, useContext, useState } from "react";

export const DraftContext = createContext(null);

export const ScheduleDraftsContext = ({ children }) => {
  const [title, setTitle] = useState("");
  const [desc, setdesc] = useState("");
  const [time, settime] = useState("");
  const scheduleFunc = (title, desc, time) => {
    setTitle(title);
    setdesc(desc);
    settime(time);
  };

  return (
    <DraftContext.Provider value={{ title, desc, time, scheduleFunc }}>
      {children}
    </DraftContext.Provider>
  );
};

export const useDraft = () => {
  return useContext(DraftContext);
};
