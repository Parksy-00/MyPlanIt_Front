import React from "react";
import { useNavigate } from "react-router-dom";
import Sheet from "react-modal-sheet";
import axios from "axios";
import styled from "styled-components";
import constants from "../../constants";

function PlanSheet({ isOpen, setIsOpen, title, writer_name, planId }) {
  const navigate = useNavigate();
  const accessToken = sessionStorage.getItem("access");
  const deletePlan = () => {
    if (!window.confirm("정말 제거하시겠습니까?")) return;
    axios
      .post(
        `https://myplanit.link/myplans/${planId}/delete`,
        {
          plan_id: planId,
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then((response) => {
        navigate("/todo");
      });
  };
  return (
    <Sheet isOpen={isOpen} onClose={() => setIsOpen(false)} snapPoints={[300]}>
      <Sheet.Container>
        <Sheet.Header />
        <Sheet.Content
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Title>{title}</Title>
          <Text color="#929292">{writer_name}</Text>
          <StyledButton
            onClick={() => navigate("../main/viewtemplate/" + planId)}
            underline
          >
            <Text>상세 정보 보기</Text>
            <img src={constants.DETAIL_ICON} height="14px" />
          </StyledButton>
          <StyledButton onClick={deletePlan}>
            <Text color="red">투두 리스트에서 제거하기</Text>
          </StyledButton>
        </Sheet.Content>
      </Sheet.Container>

      <Sheet.Backdrop />
    </Sheet>
  );
}

export default PlanSheet;

const Title = styled.div`
  font-family: "PretendardMedium";
  font-size: 16px;
  font-weight: 700;
  overflow: hidden;
  width: 327px;
  margin: 2px 0;
`;

const Text = styled.div`
  font-family: "PretendardRegular";
  font-size: 14px;
  width: 327px;
  color: ${(props) => props.color || "#000000"};
`;

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  width: 327px;
  height: 64px;
  padding: 0px;
  text-align: start;
  display: flex;
  align-items: center;

  border-bottom: ${(props) =>
    props.underline ? "0.7px solid #E9E9E9" : "none"};
`;
