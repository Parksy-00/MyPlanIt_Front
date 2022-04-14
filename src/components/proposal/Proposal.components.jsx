import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BottomNavBar from "../globalcomponents/BottomNavBar.components";
import * as Styled from "./Proposal.style";
import LoadingScreen from "../globalcomponents/Loading.components";
import ProposalCard from "./ProposalCard.components";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

function Proposal() {
  const accessToken = sessionStorage.getItem("access");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [plans, setPlans] = useState([]);
  const [inputText, setInputText] = useState("");
  const [warning, setWarning] = useState(false);
  const [update, setUpdate] = useState(false);
  const placeholder = "필요한 플랜을 알려주시면, 다음 플랜으로 준비할게요!";
  const warningText = "필요한 플랜을 입력해주세요!";

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(null);
        setPlans(null);
        setLoading(true);
        const response = await axios.get("https://myplanit.link/proposal", {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setPlans(response.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchData();
  }, [update]);

  function SendPlan() {
    axios
      .post(
        "https://myplanit.link/proposal",
        {
          proposal: inputText,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then(() => {
        setInputText("");
        setUpdate(!update);
      });
  }

  const onClickHandler = (e) => {
    if (inputText !== "") {
      SendPlan();
    } else {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
    }
  };

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
    <>
      <Styled.Header>
        <Styled.Title>건의함</Styled.Title>
        <ArrowBackIosIcon
          style={{ color: "black", position: "absolute", left: 0 }}
          onClick={() => navigate(-1)}
        />
      </Styled.Header>
      
      <Styled.InputArea>
        <Styled.InputField
          placeholder={warning? warningText: placeholder}
          onChange={(e) => {
            setInputText(e.target.value);
          }}
          warning={warning}
          value={inputText}
        />
        <Styled.Button onClick={onClickHandler}>요청하기</Styled.Button>
      </Styled.InputArea>

      <Styled.Hr />

      <Styled.Content>
        <Styled.ContentTitle>이런 플랜이 있으면 좋겠어요!</Styled.ContentTitle>
        <Styled.CardContainer>
          {plans.map((plan, i) => (
            <ProposalCard proposal={plan.proposal} num={plan.id} key={i} />
          ))}
        </Styled.CardContainer>
      </Styled.Content>
      <BottomNavBar current="PLAN" />
    </>
  );
}

export default Proposal;
