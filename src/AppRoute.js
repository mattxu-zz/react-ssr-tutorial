import {
  Routes,
  Route
} from "react-router-dom";
import React from 'react';
import Home from "./pages/Home";
import User from "./pages/User";

function AppRoute() {
	return (
		<Routes>
      <Route path="/" element={<Home />} />
      <Route path="user" element={<User />} />
    </Routes>
	)
}

export default AppRoute;
