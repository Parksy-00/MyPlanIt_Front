import { useState, useEffect } from "react";
import axios from "axios";
import { Loading } from "@nextui-org/react";
import BottomNavBar from "../globalcomponents/BottomNavBar.components";
import MyPlanHeader from "./MyPlanHeader.components";
import MyPlanContent from "./MyPlanContent.components";
import styled from "styled-components";
import LoadingScreen from "../globalcomponents/Loading.components";

function MyPlan() {
  const accessToken = sessionStorage.getItem("access");
  const [current, setCurrent] = useState("BUY");
  const [buyPlans, setBuyPlans] = useState([]);
  const [registerPlans, setRegisterPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [buyLength, setBuyLength] = useState(0);
  const [registerLength, setRegisterLength] = useState(0);

  useEffect(() => {
    const fetchRegisterPlans = async () => {
      try {
        const response = await axios.get(
          "https://myplanit.link/myplans/registered",
          {
            withCredentials: true,
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        setRegisterPlans(
          response.data.register_plans ? response.data.register_plans : []
        );
        setRegisterLength(
          response.data.register_plans ? response.data.register_plans.length : 0
        );
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchRegisterPlans();
  }, []);

  useEffect(() => {
    const fetchBuyPlans = async () => {
      try {
        const response = await axios.get("https://myplanit.link/myplans/buy", {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setBuyPlans(response.data.buy_plans ? response.data.buy_plans : []);
        setBuyLength(
          response.data.buy_plans ? response.data.buy_plans.length : 0
        );
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchBuyPlans();
  }, []);

  if (error) return error;

  if (loading) return <LoadingScreen />;

  return (
    <Container>
      <MyPlanHeader
        current={current}
        setCurrent={setCurrent}
        buyLength={buyLength}
        registerLength={registerLength}
      />

      {current === "BUY" && <MyPlanContent plans={buyPlans} />}
      {current === "REGISTER" && (
        <MyPlanContent plans={registerPlans} register />
      )}

      <BottomNavBar current="TODO" />
    </Container>
  );
}

export default MyPlan;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #fbfbfb;
  position: relative;
  height: 100vh;
`;
