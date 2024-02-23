import React, { createContext, useState } from "react";
export const dataContext = createContext(null);

// context for testing or passing data through the whole application

function RO({ children }) {
  const [newLogin, setnewLogin] = useState({
    login: "",
  });

  return (
    <dataContext.Provider value={[newLogin, setnewLogin]}>
      {children}
    </dataContext.Provider>
  );
}

export default RO;
