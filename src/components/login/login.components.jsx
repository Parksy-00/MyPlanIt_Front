import { useNavigate } from "react-router-dom";
import styled from "styled-components";
function Login() {
  let navigate = useNavigate();

  return (
    <div className="container">
      <img
        className="Logo"
        src="/images/logo.png"
        style={{ marginTop: "200px", width: "173px", marginBottom: "101px" }}
      />
      <LogoText>어쩌구저쩌구, 마이플랜잇</LogoText>
    </div>
  );
}

const LogoText = styled.span`
  position: absolute;
  width: 201px;
  height: 20px;
  top: 250px;
  font-family: Pretendard;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 20px;
  text-align: center;
  color: #929292;
`;

export default Login;
