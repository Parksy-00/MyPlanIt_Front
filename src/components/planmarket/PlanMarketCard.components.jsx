import styled from "styled-components";

function PlanMarketCard({ proposal, num, username }) {
  return (
    <BodyCard>
      <Title>
        🚀 {username}님의 {num}번 째 플랜
      </Title>
      <Detail>{proposal.slice(0, 20)}</Detail>
    </BodyCard>
  );
}

const BodyCard = styled.div`
  width: 330px;
  height: 70px;
  background-color: #8977f7;
  border-radius: 5px;
  border: 0.2px solid white;
  margin-bottom: 10px;
`;

const Title = styled.p`
  font-size: 13px;
  color: white;
  margin-left: 10px;
  margin-top: 10px;
  margin-bottom: 7px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
`;

const Detail = styled.p`
  font-size: 13px;
  color: white;
  margin-left: 12px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
`;

export default PlanMarketCard;
