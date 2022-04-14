import styled from "styled-components";

function ProposalCard({ proposal, num }) {
  return (
    <Card>
      <Title>
        🚀 {num}번째 플랜
      </Title>
      <Detail>{proposal}</Detail>
    </Card>
  );
}

const Card = styled.div`
  width: 327px;
  background-color: #FFFFFF;
  border-radius: 5px;
  border: 0.1px solid #ededed;
  margin-bottom: 10px;
`;

const Title = styled.p`
  font-size: 13px;
  color: #929292;
  margin: 12px;
  font-family: "Pretendard";
`;

const Detail = styled.p`
  font-size: 13px;
  color: #000000;
  opacity: 0.8;
  margin: 0 12px 18px;
  font-family: "PretendardRegular";
`;

export default ProposalCard;
