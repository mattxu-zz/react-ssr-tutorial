import {
  Route
} from "react-router-dom";
import React from 'react';
import Home from "./pages/Home";
import User from "./pages/User";

function AppRoute() {
	return (
		<div>
      <Route exact path="/" component={Home} />
      <Route path="/user" component={User} />
    </div>
	)
}

export default AppRoute;
