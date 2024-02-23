import React from "react";

const Home = React.lazy(() => import("../SubPages/Dashboard"));
const posts = React.lazy(() => import("../SubPages/Posts"));
const schedule = React.lazy(() => import("../SubPages/ScheduleLayout"));
const test = React.lazy(() => import("../SubPages/SocialMediaPostScheduler"));

const routes = [
  { name: "Home", path: "/home", element: Home },
  { name: "GoalsStatus", path: "/schedule", element: schedule },
  { name: "Posts", path: "/posts", element: posts },
  { name: "Test", path: "/test", element: test },
];

export default routes;
