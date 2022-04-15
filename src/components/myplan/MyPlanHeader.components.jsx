import React from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import styled from "styled-components";

function MyPlanHeader({ current, setCurrent, buyLength, registerLength }) {
  const navigate = useNavigate();
  return (
    <Header>
      <UpperHeader>
        <ArrowBackIosIcon
          style={{ height: 56, color: "black", position: "absolute", left: 0 }}
          onClick={() => navigate(-1)}
        />
        <Title>MY PLAN</Title>
      </UpperHeader>
      <LowerHeader>
        <LinkButton
          selected={current === "BUY"}
          onClick={() => setCurrent("BUY")}
        >
          {"구매 플랜(" + buyLength + ")"}
        </LinkButton>
        <LinkButton
          selected={current === "REGISTER"}
          onClick={() => setCurrent("REGISTER")}
        >
          {"이용 중(" + registerLength + ")"}
        </LinkButton>
      </LowerHeader>
    </Header>
  );
}

export default MyPlanHeader;

const Header = styled.div`
  position: fixed;
  z-index: 10;
  width: 100%;
  background: #fbfbfb;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const UpperHeader = styled.div`
  background: #fbfbfb;
  width: 327px;
  display: flex;
  position: relative;
  justify-content: center;
  height: 56px;
`;

const LowerHeader = styled.div`
  display: flex;
  width: 327px;
  margin: 8px;
  font-size: 16px;
  font-weight: bold;
  margin-left: 10;
`;

const Title = styled.div`
  font-family: "SFProDisplay";
  font-weight: 510;
  font-size: 18px;
  height: 56px;
  line-height: 56px;
`;

const LinkButton = styled.button`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0px;
  background-color: #fbfbfb;
  border-radius: 0;
  border-width: 0px 0px 0px;
  font-family: "PretendardMedium";
  font-size: 16px;
  margin-right: 15px;
  padding: 0 0 1px;

  color: ${(props) => (props.selected ? "black" : "#C4C4C4")};
  border-bottom: ${(props) => (props.selected ? "2px solid #8977f7" : "none")};
  padding-bottom: ${(props) => (props.selected ? "2px" : "4px")};
`;
