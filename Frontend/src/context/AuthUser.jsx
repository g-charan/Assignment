import React, { createContext, useState } from "react";
export const dataContext = createContext(null);

function RO({ children }) {
  const [newLogin, setnewLogin] = useState({
    login: "",
  });
  // const [newName, setnewName] = useState();

  return (
    <dataContext.Provider value={[newLogin, setnewLogin]}>
      {children}
    </dataContext.Provider>
  );
}

export default RO;
