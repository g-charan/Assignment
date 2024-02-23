import React, { Suspense, createContext, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import routes from "../Datasets/routes";
import { RequireAuth } from "../context/RequireAuth";

// Dynamic page loading using react routers

export const valueContext = createContext(null);
const MainLayout = () => {
  const [value, setValue] = useState();
  return (
    <Suspense>
      <valueContext.Provider value={[value, setValue]}>
        <RequireAuth>
          <Routes>
            {routes.map((route, idx) => {
              return (
                route.element && (
                  <Route
                    key={idx}
                    name={route.name}
                    path={route.path}
                    element={<route.element />}
                  />
                )
              );
            })}
            <Route path="/" element={<Navigate to="home" replace />} />
          </Routes>
        </RequireAuth>
      </valueContext.Provider>
    </Suspense>
  );
};

export default MainLayout;
