import React from "react";
import "antd/dist/antd.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./components/login/login.components";
import Signup1 from "./components/signup/signup1.components";
import Service from "./components/signup/service.components";
import Signup2 from "./components/signup/signup2.components";
import FindID from "./components/lost/findid.components";
import FindPW from "./components/lost/findpw.components";
import Onboard1 from "./components/onboard/onboard1.components";

function App() {
  return (
    <div id="main-container">
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup1" element={<Signup1 />} />
          <Route path="/service" element={<Service />} />
          <Route path="/signup2" element={<Signup2 />} />
          <Route path="/onboard1" element={<Onboard1 />} />
          <Route path="/find-id" element={<FindID />} />
          <Route path="/find-pw" element={<FindPW />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
