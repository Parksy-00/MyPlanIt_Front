import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import BottomNavBarTodo from "../globalcomponents/bottomnavbartodo.components";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import { ko } from "date-fns/locale";
import { Checkbox, Card, Button } from "antd";
import axios from "axios";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Sheet from "react-modal-sheet";
import { Input, Switch } from "antd";
import "./todomy.components.css";
import { Oval } from "react-loader-spinner";
import { PlusOutlined } from "@ant-design/icons";

function TodoMy() {
  let navigate = useNavigate();
  const [update, setUpdate] = useState(false);
  const [todo, setTodo] = useState([]);
  const [selectedDate, setSelectedDate] = useState(
    sessionStorage.getItem("date")
      ? new Date(sessionStorage.getItem("date"))
      : new Date()
  );
  const [isOpen, setOpen] = React.useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [error, setError] = useState(null);
  const [edit, setEdit] = useState(false);
  const [delay, setDelay] = useState([]);
  const handleDateChange = (date) => {
    sessionStorage.setItem("date", date);
    setSelectedDate(new Date(sessionStorage.getItem("date")));
  };
  let accessToken = sessionStorage.getItem("token");

  const fetchData = async () => {
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
          setData(response.data.personal_todos);
        });
    } catch (e) {
      setError(e);
    }
  };

  useEffect(() => {
    fetchData();
    setEdit(false);
    setDelay([]);
  }, [selectedDate, update]);
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
        <BottomNavBarTodo />
      </div>
    );
  if (error) return <div>에러가 발생했습니다</div>;
  return (
    <div className="container">
      <div
        style={{
          position: "fixed",
          top: 0,
          zIndex: 2,
          backgroundColor: "#fbfbfb",
          height: "100px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MuiPickersUtilsProvider
            locale={ko}
            utils={DateFnsUtils}
            style={{ fontFamily: "Pretendard-SemiBold" }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                marginRight: 30,
              }}
            >
              <DatePicker
                style={{
                  width: "auto",
                  fontFamily: "Pretendard-SemiBold",
                }}
                InputProps={{
                  disableUnderline: true,
                }}
                disableToolbar
                format="M월 d일 eee요일"
                margin="normal"
                value={selectedDate}
                className="date"
                onChange={handleDateChange}
              />
              <ExpandMoreIcon
                color="black"
                fontSize="large"
                style={{
                  padding: 0,
                  marginTop: 5,
                  marginRight: 10,
                }}
              />
            </div>
          </MuiPickersUtilsProvider>
          <Link to="../main/buytemplate">
            <Button
              style={{
                marginLeft: 20,
                height: 25,
                width: 73,
                fontSize: 9,
                marginTop: 10,
                fontFamily: "SFProDisplay",
              }}
            >
              MY PLAN
            </Button>
          </Link>
        </div>
        <span
          className="button-group"
          style={{
            fontSize: "16px",
            fontWeight: "bold",
            justifyContent: "center",
          }}
        >
          <Link
            to="../main/todoplan"
            className="main-routine-button"
            style={{
              width: 42,
              height: "17px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "10px",
              border: "5px",
              background: "#fbfbfb",
              borderRadius: "0",
              color: "gray",
              fontFamily: "SFProDisplay",
            }}
          >
            PLAN
          </Link>
          <div style={{ width: 15 }}></div>
          <Link
            to="../main/todomy"
            className="main-growth-button"
            style={{
              border: "1px solid #D3d3d3",
              width: 25,
              height: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "10px",
              border: "5px",
              background: "#fbfbfb",
              borderRadius: "0",
              color: "black",
              borderBottom: "2px solid #7965f4",
              marginRight: 38,
              paddingBottom: 2,
              marginLeft: 7,
              fontFamily: "SFProDisplay",
            }}
          >
            MY
          </Link>
          <div style={{ width: 190 }}>
            {!edit ? (
              <p
                style={{
                  justifyContent: "center",
                  alignItem: "center",
                  textAlign: "right",
                  marginTop: 0,
                  marginBottom: 0,
                  fontSize: "12px",
                  color: "#929292",
                  fontFamily: "Pretendard-Medium",
                }}
                onClick={() => {
                  setEdit(!edit);
                }}
              >
                편집하기
              </p>
            ) : (
              <p
                style={{
                  justifyContent: "center",
                  alignItem: "center",
                  textAlign: "right",
                  marginTop: 0,
                  marginBottom: 0,
                  fontSize: "12px",
                  color: "#8977F7",
                  fontFamily: "Pretendard-Medium",
                }}
                onClick={() => {
                  setEdit(!edit);
                }}
              >
                <img
                  src="/images/purpletick.png"
                  style={{ width: "12px", marginRight: 4 }}
                />
                편집완료
              </p>
            )}
          </div>
        </span>
      </div>
      <div style={{ height: "20px" }}></div>
      <div
        style={{
          position: "fixed",
          top: "100px",
          overflowY: "scroll",
          height: "calc(100vh - 200px)",
        }}
      >
        {data?.length ? (
          !edit ? (
            data.map((item, i) => {
              return (
                <Card
                  style={{
                    borderRadius: 5,
                    width: 327,
                    marginTop: 8,
                    height: 52,
                  }}
                >
                  <Checkbox
                    key={i}
                    style={{
                      marginLeft: 0,
                      marginTop: 14,
                    }}
                    checked={item["finish_flag"]}
                    onChange={async (e) => {
                      if (e.target.checked) {
                        axios
                          .post(
                            `https://myplanit.link/todos/my/${item["id"]}/check`,
                            { token: `Bearer ${accessToken}` },
                            {
                              headers: {
                                "Content-Type": "application/json",
                                Authorization: `Bearer ${accessToken}`,
                              },
                            }
                          )
                          .then(() => {
                            setUpdate(!update);
                          });
                      } else {
                        axios
                          .post(
                            `https://myplanit.link/todos/my/${item["id"]}/check`,
                            { token: `Bearer ${accessToken}` },
                            {
                              headers: {
                                "Content-Type": "application/json",
                                Authorization: `Bearer ${accessToken}`,
                              },
                            }
                          )
                          .then(() => {
                            setUpdate(!update);
                          });
                      }
                    }}
                  >
                    <span
                      style={{ marginLeft: 5, fontFamily: "Pretendard-Medium" }}
                    >
                      {item.todo_name}
                    </span>
                  </Checkbox>
                </Card>
              );
            })
          ) : (
            data.map((item, i) => {
              return !item["finish_flag"] ? (
                <Card
                  style={{
                    borderRadius: 5,
                    width: 327,
                    marginTop: 8,
                    height: 52,
                  }}
                >
                  <Checkbox
                    key={i}
                    style={{
                      marginLeft: 0,
                      marginTop: 14,
                    }}
                    onChange={() => {
                      if (delay.includes(item["id"])) {
                        let temp = [...delay];
                        temp = temp.filter((i) => i !== item["id"]);
                        setDelay(temp);
                      } else {
                        let temp = [...delay, item["id"]];
                        setDelay(temp);
                      }
                    }}
                  >
                    <span
                      style={{ marginLeft: 5, fontFamily: "Pretendard-Medium" }}
                    >
                      {item.todo_name}
                    </span>
                  </Checkbox>
                </Card>
              ) : (
                <Card
                  style={{
                    borderRadius: 5,
                    width: 327,
                    marginTop: 8,
                    height: 52,
                  }}
                >
                  <Checkbox
                    checked={false}
                    disabled
                    key={i}
                    style={{
                      marginLeft: 0,
                      marginTop: 14,
                    }}
                    onChange={() => {
                      if (delay.includes(item["id"])) {
                        let temp = [...delay];
                        temp = temp.filter((i) => i !== item["id"]);
                        setDelay(temp);
                      } else {
                        let temp = [...delay, item["id"]];
                        setDelay(temp);
                      }
                    }}
                  >
                    <span
                      style={{ marginLeft: 5, fontFamily: "Pretendard-Medium" }}
                    >
                      {item.todo_name}
                    </span>
                  </Checkbox>
                </Card>
              );
            })
          )
        ) : (
          <img
            src="/images/my.png"
            style={{ width: "60vw", marginTop: "17vh" }}
          />
        )}
      </div>

      <Button
        style={{
          backgroundColor: "#7965f4",
          position: "fixed",
          bottom: "110px",
          right: "8.5vw",
        }}
        onClick={function (event) {
          setOpen(true);
        }}
        size="large"
        type="primary"
        shape="circle"
        icon={<PlusOutlined />}
      />
      <Sheet isOpen={isOpen} onClose={() => setOpen(false)} snapPoints={[250]}>
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Content>
            <Input
              className="email-input"
              size="large"
              placeholder="오늘 할 일을 입력해주세요.."
              onChange={(e) => {
                setTodo(e.target.value);
              }}
              value={todo}
              style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                width: "350px",
                fontFamily: "PretendardRegular",
                fontSize: "16px",
                color: "black",
              }}
            />
            <button
              onClick={() => {
                axios
                  .post(
                    `https://myplanit.link/todos/my/${selectedDate.getFullYear()}-${(
                      "0" +
                      (selectedDate.getMonth() + 1)
                    ).slice(-2)}-${("0" + selectedDate.getDate()).slice(-2)}`,
                    {
                      todo_name: todo,
                    },
                    {
                      headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${accessToken}`,
                      },
                    }
                  )
                  .then(() => {
                    setUpdate(!update);
                    setOpen(false);
                    setTodo("");
                  });
              }}
              className="todo-add-button"
              style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              추가하기
            </button>
          </Sheet.Content>
        </Sheet.Container>

        <Sheet.Backdrop />
      </Sheet>
      {!edit ? (
        <span>
          <BottomNavBarTodo />
          <div
            style={{
              height: "33px",
              backgroundColor: "white",
              right: 0,
              left: 0,
              position: "fixed",
              bottom: 0,
              textAlign: "center",
            }}
          />
        </span>
      ) : (
        <div
          style={{
            right: 0,
            left: 0,
            height: "90px",
            backgroundColor: "#7965f4",
            position: "fixed",
            bottom: 0,
            textAlign: "center",
          }}
        >
          <span
            onClick={() => {
              let response = "";
              for (let i = 0; i < delay.length; i++) {
                axios
                  .post(
                    `https://myplanit.link/todos/my/${delay[i]}/delay`,
                    { token: `Bearer ${accessToken}` },
                    {
                      headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${accessToken}`,
                      },
                    }
                  )
                  .then(() => {
                    setUpdate(!update);
                  });
              }
            }}
          >
            <img
              src="/images/next.png"
              style={{ width: 35, marginTop: 15, marginRight: "16vw" }}
            />
          </span>
          <span
            onClick={() => {
              let response = "";
              for (let i = 0; i < delay.length; i++) {
                axios
                  .delete(`https://myplanit.link/todos/my/${delay[i]}/delete`, {
                    headers: {
                      "Content-Type": "application/json",
                      Authorization: `Bearer ${accessToken}`,
                    },
                  })
                  .then(() => {
                    setUpdate(!update);
                  });
              }
            }}
          >
            <img
              src="/images/delete.png"
              style={{ width: 35, marginTop: 15, marginLeft: "16vw" }}
            />
          </span>
        </div>
      )}
    </div>
  );
}

export default TodoMy;
