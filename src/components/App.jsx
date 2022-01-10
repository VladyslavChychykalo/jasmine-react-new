import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "../pages/HomePage";

const App = () => {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Redirect to="/" />
    </Switch>
  );
};

export default App;
