import React from "react";

// page routes for the components

const Home = React.lazy(() => import("../SubPages/Dashboard"));
const posts = React.lazy(() => import("../SubPages/Posts"));
const schedule = React.lazy(() => import("../SubPages/ScheduleLayout"));

const routes = [
  { name: "Home", path: "/home", element: Home },
  { name: "GoalsStatus", path: "/schedule", element: schedule },
  { name: "Posts", path: "/posts", element: posts },
];

export default routes;
