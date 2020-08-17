import React from "react";
import { Route, Switch } from "react-router-dom";

// components
import Home from "./components/Home/Home";
import NameList from "./components/NameList/NameList";
import NotFound from "./components/NotFound/NotFound";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/nameList" component={NameList} />
      <Route component={NotFound} />
    </Switch>
  );
};
