import React, { useState } from "react";
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
import Onboard2 from "./components/onboard/onboard2.components";
import Onboard3 from "./components/onboard/onboard3.components";
import Main from "./components/main/main.components";
function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [realname, setRealname] = useState("");
  const [phoneNum, setPhoneNum] = useState("01012345678");
  const [emailAgree, setEmailAgree] = useState(0);
  const [snsAgree, setSnsAgree] = useState(0);

  const [service1, setService1] = useState(false);
  const [service2, setService2] = useState(false);
  const [service3, setService3] = useState(false);
  const [service4, setService4] = useState(false);
  const [service5, setService5] = useState(false);

  const [iconStyle1, setIconStyle1] = useState("disabled");
  const [iconStyle2, setIconStyle2] = useState("disabled");
  const [iconStyle3, setIconStyle3] = useState("disabled");
  const [iconStyle4, setIconStyle4] = useState("disabled");
  const [iconStyle5, setIconStyle5] = useState("disabled");

  return (
    <div id="main-container">
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/signup1"
            element={
              <Signup1
                setEmailSignup={setEmail}
                setPassword={setPassword}
                setRealname={setRealname}
                setPhoneNum={setPhoneNum}
                setEmailAgree={setEmailAgree}
                setSnsAgree={setSnsAgree}
                service1={service1}
                service2={service2}
                service3={service3}
                service4={service4}
                service5={service5}
                setService1={setService1}
                setService2={setService2}
                setService3={setService3}
                setService4={setService4}
                setService5={setService5}
                iconStyle1={iconStyle1}
                iconStyle2={iconStyle2}
                iconStyle3={iconStyle3}
                iconStyle4={iconStyle4}
                iconStyle5={iconStyle5}
                setIconStyle1={setIconStyle1}
                setIconStyle2={setIconStyle2}
                setIconStyle3={setIconStyle3}
                setIconStyle4={setIconStyle4}
                setIconStyle5={setIconStyle5}
              />
            }
          />
          <Route
            path="/service"
            element={
              <Service
                service1={service1}
                service2={service2}
                service3={service3}
                service4={service4}
                service5={service5}
                setService1={setService1}
                setService2={setService2}
                setService3={setService3}
                setService4={setService4}
                setService5={setService5}
                iconStyle1={iconStyle1}
                iconStyle2={iconStyle2}
                iconStyle3={iconStyle3}
                iconStyle4={iconStyle4}
                iconStyle5={iconStyle5}
                setIconStyle1={setIconStyle1}
                setIconStyle2={setIconStyle2}
                setIconStyle3={setIconStyle3}
                setIconStyle4={setIconStyle4}
                setIconStyle5={setIconStyle5}
                setEmailAgree={setEmailAgree}
                setSnsAgree={setSnsAgree}
              />
            }
          />
          <Route
            path="/signup2"
            element={
              <Signup2
                email={email}
                password={password}
                realname={realname}
                phoneNum={phoneNum}
                emailAgree={emailAgree}
                snsAgree={snsAgree}
              />
            }
          />
          <Route path="/onboard1" element={<Onboard1 />} />
          <Route path="/onboard2" element={<Onboard2 />} />
          <Route path="/onboard3" element={<Onboard3 />} />
          <Route path="/find-id" element={<FindID />} />
          <Route path="/find-pw" element={<FindPW />} />
          <Route path="/main" element={<Main />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
