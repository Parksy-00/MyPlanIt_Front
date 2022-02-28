import React from "react";
import styled from "styled-components";

function PlanMarketHeader({ current, setCurrent }) {
  return (
    <>
      <UpperHeader>
        <Title>플랜</Title>
      </UpperHeader>
      <LowerHeader>
        <LinkButton
          selected={current === "ROUTINE"}
          onClick={() => setCurrent("ROUTINE")}
        >
          Routine
        </LinkButton>
        <LinkButton
          selected={current === "GROWTH"}
          onClick={() => setCurrent("GROWTH")}
        >
          Growth
        </LinkButton>
      </LowerHeader>
    </>
  );
}

export default PlanMarketHeader;

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
  font-family: "Pretendard";
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
