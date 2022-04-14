import { useState, useEffect } from "react";
import axios from "axios";
import BottomNavBar from "../globalcomponents/BottomNavBar.components";
import styled from "styled-components";
import PlanMarketHeader from "./PlanMarketHeader.components";
import PlanMarketContent from "./PlanMarketContent.components";
import LoadingScreen from "../globalcomponents/Loading.components";

function PlanMarket() {
  const [plans, setPlans] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await axios.get("https://myplanit.link/plans");
        const data = response.data;
        setPlans([...data.Routine, ...data.Growth]);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchUsers();
  }, []);

  if (loading)
    return (
      <div>
        <LoadingScreen />
        <BottomNavBar current="PLAN" />
      </div>
    );
  if (error) return <div>에러가 발생했습니다</div>;
  if (!plans) return null;
  
  return (
    <Container>
      <PlanMarketHeader/>

      <PlanMarketContent plans={plans} />

      <BottomNavBar current="PLAN" />
    </Container>
  );
}

export default PlanMarket;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #fbfbfb;
  position: relative;
  height: 100%;
`;
