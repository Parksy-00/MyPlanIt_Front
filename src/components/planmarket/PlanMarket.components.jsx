import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import BottomNavBar from "../globalcomponents/BottomNavBar.components";
import { Oval } from "react-loader-spinner";
import styled from "styled-components";
import PlanMarketHeader from "./PlanMarketHeader.components";
import PlanMarketContent from "./PlanMarketContent.components";

function PlanMarket() {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [current, setCurrent] = useState("ROUTINE");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setError(null);
        setUsers(null);
        setLoading(true);
        const response = await axios.get("https://myplanit.link/plans");
        setUsers(response.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchUsers();
  }, []);

  if (error) return <div>에러가 발생했습니다</div>;
  if (!users) return null;
  return (
    <Container>
      <PlanMarketHeader current={current} setCurrent={setCurrent} />

      {current === "ROUTINE" && <PlanMarketContent plans={users.Routine} />}

      {current === "GROWTH" && <PlanMarketContent plans={users.Growth} />}

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
  height: 100vh;
`;
