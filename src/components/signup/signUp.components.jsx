import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Signup1 from "./signup1.components";
import Signup2 from "./signup2.components";

function SignUp() {
  let navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [equalPw, setEqualPw] = useState("");
  const [name, setName] = useState("");
  const [emailCheck, setEmailCheck] = useState(false);
  const [pwCheck, setPwCheck] = useState(false);
  const [nameCheck, setNameCheck] = useState(false);
  const [service, setService] = useState([false, false, false, false, false]);
  const [emailAgree, setEmailAgree] = useState(false);
  const [snsAgree, setSnsAgree] = useState(false);

  const prop = {
    email,
    setEmail,
    password,
    setPassword,
    equalPw,
    setEqualPw,
    name,
    setName,
    emailCheck,
    setEmailCheck,
    pwCheck,
    setPwCheck,
    nameCheck,
    setNameCheck,
    service,
    setService,
    setStep,
    emailAgree,
    setEmailAgree,
    snsAgree,
    setSnsAgree,
  };

  return (
    <div className="container">
      <div className="header">
        <ArrowBackIosIcon
          className="back-arrow"
          onClick={() => {
            step === 1 ? navigate("/") : setStep(1);
          }}
        />
        <span className="title">회원가입 ({step}/2)</span>
      </div>
      {step === 1 ? <Signup1 {...prop} /> : <Signup2 {...prop} />}
    </div>
  );
}

export default SignUp;
