import { Switch, BrowserRouter, Route, Redirect } from "react-router-dom";

import Menu from "./component/menu";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import MusicList from "./pages/MusicList";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
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
            <Route path="/musiclist">
              <MusicList />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
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
