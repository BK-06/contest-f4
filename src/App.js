import { useEffect, useRef } from "react";
import Login from "./Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from "./Profile";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="contest-f4" Component={Login} />
        <Route exact path="" Component={Login} />
        <Route exact path="profile" Component={Profile} />
        {/* <Route exact path="data" Component={Screen2} /> */}
      </Routes>
    </Router>

    // <div>
    //     <Login/>
    // </div>
  );
}
