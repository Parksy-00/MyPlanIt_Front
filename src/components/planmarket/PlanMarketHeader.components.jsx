import {useNavigate} from "react-router-dom"
import styled from "styled-components";
import constants from "../../constants";

function PlanMarketHeader() {
  const navigate = useNavigate();

  return (
    <Header>
      <Title>플랜</Title>
      <ProposalButton
        src={constants.PROPOSAL}
        onClick={() => navigate("../proposal")}
      />
    </Header>
  );
}

export default PlanMarketHeader;

const Header = styled.div`
  background: #fbfbfb;
  width: 327px;
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 10;
  margin: 10px;
`;

const ProposalButton = styled.img`
  position: absolute;
  right: 10px;
`;

const Title = styled.div`
  font-family: "PretendardMedium";
  font-size: 18px;
  height: 30px;
  line-height: 30px;
`;