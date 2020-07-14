import React from "react";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import Solution1 from "./components/Solution1";
import Solution2 from "./components/Solution2";

const menu = [
  {
    title: "Solution 1",
    route: "/solution1",
  },
  {
    title: "TodoList",
    route: "/solution2",
  },
  {
    title: "Hello World",
    route: "/solution3",
  },
];

export default function Routes() {
  return (
    <>
      <Navbar items={menu} />
      <div className="content">
        <Switch>
          <Route path="/solution1" exact component={Solution1} />
          <Route path="/solution2" exact component={Solution2} />
          <Route path="/solution3" exact component={Solution1} />
        </Switch>
      </div>
    </>
  );
}
