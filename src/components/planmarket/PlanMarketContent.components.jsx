import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import PlanCard from "../myplan/PlanCard.components";

function PlanMarketContent({ plans }) {
  const navigate = useNavigate();
  return (
    <Container>
      {plans.map((plan, i) => (
        <PlanCard
          key={i}
          title={plan.name}
          profile_img={plan.writer_img}
          plan_img={plan.intro_img_url}
          writer_name={plan.writer_name}
          writer_intro={plan.writer_intro}
          desc={plan.desc}
          tags={plan.tags}
          onClick={() => navigate("../main/viewtemplate/" + plan.id)}
        />
      ))}
    </Container>
  );
}

export default PlanMarketContent;

const Container = styled.div`
  overflow-y: scroll;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 90px;
`;
