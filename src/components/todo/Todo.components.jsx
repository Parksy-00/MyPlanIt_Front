import { useState, useEffect } from "react";
import BottomNavBar from "../globalcomponents/BottomNavBar.components";
import axios from "axios";
import { Oval } from "react-loader-spinner";
import TodoHeader from "./TodoHeader.components";
import TodoPlan from "./TodoPlan.components";
import TodoMy from "./TodoMy.components";
import EditFooter from "./EditFooter.components";

function Todo() {
  const accessToken = sessionStorage.getItem("token");
  const [update, setUpdate] = useState(false);
  const [updateMy, setUpdateMy] = useState(false);

  const [selectedDate, setSelectedDate] = useState(
    sessionStorage.getItem("date")
      ? new Date(sessionStorage.getItem("date"))
      : new Date()
  );
  const [current, setCurrent] = useState("PLAN");
  const [planData, setPlanData] = useState();
  const [myTodoData, setMyTodoData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [edit, setEdit] = useState(false);
  const [delay, setDelay] = useState([]);

  const fetchPlan = async () => {
    try {
      await axios
        .get(
          `https://myplanit.link/todos/plan/${selectedDate.getFullYear()}-${(
            "0" +
            (selectedDate.getMonth() + 1)
          ).slice(-2)}-${("0" + selectedDate.getDate()).slice(-2)}`,
          {
            Authorization: `Bearer ${accessToken}`,
            withCredentials: true,
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
          }
        )
        .then((response) => {
          setPlanData(Object.entries(response.data));
        });
    } catch (err) {
      setError(err);
      console.log(err);
    }
  };

  const fetchMyTodo = async () => {
    try {
      await axios
        .get(
          `https://myplanit.link/todos/my/${selectedDate.getFullYear()}-${(
            "0" +
            (selectedDate.getMonth() + 1)
          ).slice(-2)}-${("0" + selectedDate.getDate()).slice(-2)}`,
          {
            Authorization: `Bearer ${accessToken}`,
            withCredentials: true,
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
          }
        )
        .then((response) => {
          setMyTodoData(response.data.personal_todos);
        });
    } catch (err) {
      setError(err);
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPlan();
    setEdit(false);
    setDelay([]);
  }, [selectedDate, update]);

  useEffect(() => {
    fetchMyTodo();
    setEdit(false);
    setDelay([]);
  }, [selectedDate, updateMy]);

  if (loading)
    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          backgroundColor: "gray",
          zIndex: 100000,
        }}
      >
        <Oval color="#7965f4" height="40px" width="40px" />
        <BottomNavBar />
      </div>
    );
  if (error) return <div>에러가 발생했습니다</div>;

  return (
    <div className="container">
      <TodoHeader
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        edit={edit}
        setEdit={setEdit}
        current={current}
        setCurrent={setCurrent}
      />

      {current === "PLAN" && (
        <TodoPlan
          planData={planData}
          myTodoData={myTodoData}
          accessToken={accessToken}
          edit={edit}
          update={update}
          setUpdate={setUpdate}
          delay={delay}
          setDelay={setDelay}
          current={current}
        />
      )}

      {current === "MY" && (
        <TodoMy
          myTodoData={myTodoData}
          accessToken={accessToken}
          updateMy={updateMy}
          setUpdateMy={setUpdateMy}
          selectedDate={selectedDate}
          edit={edit}
          delay={delay}
          setDelay={setDelay}
        />
      )}

      {!edit ? (
        <BottomNavBar />
      ) : (
        <EditFooter
          current={current}
          delay={delay}
          accessToken={accessToken}
          update={update}
          setUpdate={setUpdate}
          updateMy={updateMy}
          setUpdateMy={setUpdateMy}
        />
      )}
    </div>
  );
}

export default Todo;