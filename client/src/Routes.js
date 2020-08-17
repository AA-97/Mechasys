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
      <Route path="/nameList" component={NameList} />
      <Route path="/contactUs" component={NotFound} />
      <Route path="/about" component={NotFound} />
    </Switch>
  );
};
