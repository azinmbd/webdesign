import { Switch, BrowserRouter, Route, Redirect } from "react-router-dom";

import Menu from "./component/Menu";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Edit from "./pages/Edit";
import Add from "./pages/Add";
import "./style/app.scss";
import React from "react";
const App = () => {
  return (
    <div className="container-fluid p-0">
      <BrowserRouter>
        <React.Fragment>
          <Menu />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
        
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/edit">
              <Edit />
            </Route>
            <Route path="/add">
              <Add />
            </Route>

            <Route path="*">
              <Redirect from="*" to="/404" />
              <NotFound />
            </Route>
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    </div>
  );
};

export default App;
