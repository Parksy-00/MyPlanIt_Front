import { useNavigate } from "react-router-dom";
import styled from "styled-components";
function Login() {
  let navigate = useNavigate();

  return (
    <Container>
      <img
        src="/images/logo.png"
        style={{ marginTop: "200px", width: "173px", marginBottom: "101px" }}
      />
      <LogoText>당신의 목표 가이드, 마이플랜잇</LogoText>
      <Buttons>
        <Button
          primary
          onClick={() => {
            alert("둘러보기");
          }}
        >
          둘러보기
        </Button>
        <Button
          onClick={() => {
            navigate("/login");
          }}
        >
          가입하기
        </Button>
      </Buttons>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #fbfbfb;
  position: relative;
  height: 100vh;
`;

const LogoText = styled.span`
  position: absolute;
  width: 250px;
  height: 20px;
  top: 240px;
  font-family: Pretendard;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 20px;
  text-align: center;
  color: #929292;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  width: 327px;
  height: 52px;
  border: 1px solid transparent;
  border-color: #d9d9d9;
  border-radius: 4px;
  background: ${(props) => (props.primary ? "#7965f4" : "white")};
  color: ${(props) => (props.primary ? "white" : "#7965f4")};
  font-family: PretendardMedium;
  font-size: 16px;
  filter: ${(props) =>
    props.primary ? null : "drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.12))"};
`;

const Buttons = styled.span`
  position: absolute;
  bottom: 95px;
`;

export default Login;
