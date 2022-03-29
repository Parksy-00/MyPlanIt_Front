import { useState, useEffect } from "react";
import axios from "axios";
import BottomNavBar from "../globalcomponents/BottomNavBar.components";
import styled from "styled-components";
import LoadingScreen from "../globalcomponents/Loading.components";

function PlanMarketProposal() {
  const accessToken = sessionStorage.getItem("access");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [plans, setPlans] = useState([]);
  const [inputText, setInputText] = useState("");
  const [placeholder, setPlaceholder] = useState(
    "필요한 플랜을 알려주시면, 다음 플랜으로 준비할게요!"
  );
  const [inputColor, setInputColor] = useState("#CECECE");

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
        console.log(response.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchData();
  }, [setInputText]);

  if (loading)
    return (
      <div>
        <LoadingScreen />
        <BottomNavBar current="PLAN" />
      </div>
    );
  if (error) return <div>에러가 발생했습니다</div>;
  if (!plans) return null;

  function sendPlan() {
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
      .then((response) => {
        console.log(response);
        setInputText("");
      });
  }

  return (
    <>
      <Header>
        <InputField
          placeholder={placeholder}
          onChange={(e) => {
            setInputText(e.target.value);
          }}
          normal={inputColor}
          value={inputText}
        />
        <Button
          onClick={(e) => {
            if (inputText !== "") {
              sendPlan();
            } else {
              setPlaceholder("필요한 플랜을 입력해주세요!");
              setInputColor("#F87676");
              setTimeout(() => {
                setPlaceholder(
                  "필요한 플랜을 알려주시면, 다음 플랜으로 준비할게요!"
                );
                setInputColor("#ededed");
              }, 2000);
            }
          }}
        >
          {" "}
          요청하기{" "}
        </Button>
        <HR />
      </Header>
      <Body></Body>
    </>
  );
}

const Header = styled.div`
  position: fixed;
  margin-top: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const InputField = styled.textarea`
  text-align: center;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${(props) => props.normal};
  }
  width: 330px;
  height: 120px;
  border: 1px ${(props) => props.normal} solid;
  border-radius: 6px;
  vertical-align: top;
  resize: none;
  outline: none;
  caret-color: transparent;
`;

const Button = styled.button`
  width: 330px;
  height: 35px;
  background-color: #7965f4;
  color: white;
  border: none;
  border-radius: 5px;
  margin-top: 7px;
`;

const HR = styled.hr`
  margin-top: 15px;
  width: 380px;
  background-color: #c4c4c4;
  height: 0.1px;
`;

const Body = styled.div``;

export default PlanMarketProposal;
