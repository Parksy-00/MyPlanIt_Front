import { useState, useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import axios from "axios";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import styled from "styled-components";
import PlanTodo from "../PlanTodo.components";
import BottomNavBar from "../../globalcomponents/BottomNavBar.components";
import EditFooter from "../EditFooter.components";

function PlanDetail() {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  const { title } = location.state;
  const accessToken = sessionStorage.getItem("access");
  const [current, setCurrent] = useState("All");
  const [delay, setDelay] = useState([]);
  const [update, setUpdate] = useState(true);
  const [edit, setEdit] = useState(false);
  const linkText = ["All", "Progress", "Done"];
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchTodos();
    setDelay([]);
  }, [current, update]);

  const fetchTodos = () => {
    axios
      .get(
        `https://myplanit.link/todos/plan/detail/${current.toLowerCase()}/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then((res) => {
        const fetchData = res.data;
        const todos = {};
        fetchData.data.forEach((todo) => {
            Object.assign(todo, {plan_id: id});
            if (todos[todo.day]) {
              todos[todo.day].push(todo);
            }
            else {
              todos[todo.day] = [todo];
            }
        });
        setData(Object.entries(todos));
      });
  };

  return (
    <Container>
      <Header>
        <FlexBox>
          <ArrowBackIosIcon
            style={{
              height: 56,
              color: "black",
              position: "absolute",
              left: 0,
            }}
            onClick={() => navigate(-1)}
          />
          <Title>{title}</Title>
        </FlexBox>

        <LowerHeader>
          {linkText.map((item, i) => (
            <LinkButton
              key={i}
              selected={current === item}
              onClick={() => setCurrent(item)}
            >
              {item}
            </LinkButton>
          ))}
          <EditButton
            editing={edit}
            onClick={() => {
              setEdit(!edit);
              setDelay([]);
            }}
          >
            {edit && (
              <img
                src="/images/purpletick.png"
                style={{ width: "12px", marginRight: 4 }}
              />
            )}
            {edit ? "편집완료" : "편집하기"}
          </EditButton>
        </LowerHeader>
      </Header>

      <TodoContainer>
        {data.map((plan, i) => (
          <PlanContainer key={i}>
            <PlanHeader>
              <Date>{parseInt(plan[0]) + 1}일차</Date>
            </PlanHeader>
            {plan[1].map((todo, i) => (
              <PlanTodo
                key={i}
                todo={todo}
                edit={edit}
                update={update}
                setUpdate={setUpdate}
                delay={delay}
                setDelay={setDelay}
              />
            ))}
          </PlanContainer>
        ))}
      </TodoContainer>

      {edit ? (
        <EditFooter
          current="PLANDETAIL"
          delay={delay}
          update={update}
          setUpdate={setUpdate}
        />
      ) : (
        <BottomNavBar current="TODO" />
      )}
    </Container>
  );
}

export default PlanDetail;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #fbfbfb;
  position: relative;
  height: 100%;
`;

const TodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 100px;
  width: 327px;
  overflow-y: scroll;
  font-family: "PretendardSemiBold";
`;

const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 327px;
`;

const Header = styled.div`
  background: #fbfbfb;
  width: 100vw;
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.div`
  font-family: "PretendardMedium";
  font-weight: 510;
  font-size: 18px;
  height: 56px;
  line-height: 56px;
`;

const LowerHeader = styled.div`
  position: relative;
  display: flex;
  width: 327px;
  margin: 8px;
  font-size: 16px;
  margin-left: 10;
`;

const LinkButton = styled.button`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  margin-top: 0px;
  background-color: #fbfbfb;
  border-radius: 0;
  border-width: 0px 0px 0px;
  font-family: "SFProDisplay";
  font-size: 16px;
  margin-right: 15px;
  padding: 0 0 1px;

  color: ${(props) => (props.selected ? "black" : "#C4C4C4")};
  border-bottom: ${(props) => (props.selected ? "2px solid #8977f7" : "none")};
  padding-bottom: ${(props) => (props.selected ? "4px" : "6px")};
`;

const EditButton = styled.p`
  position: absolute;
  right: 0;
  margin-top: 0;
  font-family: PretendardMedium;
  font-size: 12px;
  color: ${(props) => (props.editing ? "#8977F7" : "#929292")};
`;

const PlanContainer = styled.div`
  box-sizing: border-box;
  border-radius: 5px;
  position: relative;
  background-color: #fff;
  width: 327px;
  margin-top: 9px;
  padding: 16px 24px;
  border: 1px solid #f0f0f0;
`;

const PlanHeader = styled.div`
  border-bottom: 1px solid #eaeaea;
  padding: 0 0 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;
const Date = styled.span`
  font-size: 16px;
  font-family: "PretendardRegular";
  font-weight: 600;
  padding: 0 12px;
`;
