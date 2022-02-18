import "./wishtemplate.components.css";
import { Link } from "react-router-dom";
import { AppBar, Tabs, Tab } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import React, { useState, useEffect, Component } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Loading } from "@nextui-org/react";
import BottomNavBarTodo from "../globalcomponents/bottomnavbartodo.components";
import Sheet from "react-modal-sheet";
import { useNavigate } from "react-router-dom";
import { sortAndDeduplicateDiagnostics } from "typescript";

function UseTemplate() {
  let navigate = useNavigate();

  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isOpen, setOpen] = React.useState(false);
  const [planId, setPlanId] = React.useState(null);
  const [planAll, setPlanAll] = React.useState(null);
  const [planName, setPlanName] = React.useState(null);
  const [planWriter, setPlanWriter] = React.useState(null);

  let accessToken = sessionStorage.getItem("token");

  useEffect(() => {
    accessToken = sessionStorage.getItem("token");
    const fetchUsers = async () => {
      try {
        setError(null);
        setUsers(null);
        setLoading(true);
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
        console.log(accessToken);
        if (response.data.message == "이용 중인 플랜이 없습니다.") {
          setUsers([]);
        } else {
          setUsers(response.data);
        }
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
        <AppBar
          position="static"
          elevation={0}
          style={{ background: "white", width: "100vw" }}
        >
          <Toolbar style={{ justifyContent: "space-between" }}>
            <Link to="../main/todoplan">
              <ArrowBackIosIcon style={{ color: "black" }} />
            </Link>
            <Typography
              edge="end"
              variant="h6"
              style={{
                marginLeft: "0",
              }}
            >
              <div style={{ color: "black" }}>MY PLAN</div>
            </Typography>
            <div style={{ width: "40px" }}></div>
          </Toolbar>
        </AppBar>
        <div
          style={{
            marginTop: "40vh",
            marginBottom: "auto",
            marginLeft: "40vw",
            marginRight: "auto",
          }}
        >
          <Loading />
        </div>
        <BottomNavBarTodo />
        <div
          style={{
            height: "33px",
            backgroundColor: "white",
            width: "100vw",
            position: "fixed",
            bottom: "0px",
          }}
        ></div>
      </div>
    );
  if (error) return <div>에러가 발생했습니다</div>;
  if (!users) return null;
  return (
    <div className="container">
      <AppBar
        position="static"
        elevation={0}
        style={{ background: "white", width: "100vw" }}
      >
        <Toolbar style={{ justifyContent: "space-between" }}>
          <Link to="../main/todoplan">
            <ArrowBackIosIcon style={{ color: "black" }} />
          </Link>
          <Typography
            edge="end"
            variant="h6"
            style={{
              marginLeft: "0",
            }}
          >
            <div style={{ color: "black" }}>MY PLAN</div>
          </Typography>
          <div style={{ width: "40px" }}></div>
        </Toolbar>
      </AppBar>
      <span
        className="button-group"
        style={{ marginTop: "8px", fontSize: "16px", fontWeight: "bold" }}
      >
        <Link
          to="../main/buytemplate"
          className="main-growth"
          style={{
            border: "1px solid #D3d3d3",
            width: "70px",
            height: "35px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "0px",
            border: "5px",
            background: "transparent",
            borderRadius: "0",
            color: "gray",
            fontFamily: "Pretendard-SemiBold",
          }}
        >
          구매 플랜
        </Link>
        <div style={{ width: "3vw" }}></div>
        <Link
          to="../main/usetemplate"
          className="main-growth"
          style={{
            border: "1px solid #D3d3d3",
            width: "70px",
            height: "35px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "2px",
            border: "5px",
            background: "transparent",
            borderRadius: "0",
            color: "black",
            borderBottom: "solid #7965f4",
            fontFamily: "Pretendard-SemiBold",
          }}
        >
          이용 중
        </Link>
        <div style={{ width: "50vw" }}></div>
      </span>
      <div style={{ height: "10px" }}></div>
      <ul
        className="template-content"
        style={{
          overflowY: "scroll",
          height: "680px",
          position: "relative",
        }}
      >
        <div className="textbox"></div>
        <div style={{ height: "10px" }}></div>

        {users.register_plans?.map((register_plans) => (
          <li
            onClick={function (event) {
              setOpen(true);
              setPlanId(register_plans.plan.id);
              setPlanName(register_plans.plan.name);
              setPlanWriter(register_plans.plan.writer_name);
              setPlanAll(register_plans.plan);
            }}
            key={users.register_plans.id}
          >
            <React.Fragment key={uuidv4()}>
              <div
                style={{
                  backgroundColor: "white",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "0px 0px 1.5px 0.5px #Dedede",
                  justifyContent: "center",
                  marginLeft: 1,
                  marginRight: 1,
                }}
                className="template-all"
              >
                <div style={{ height: "5px" }}></div>
                <div
                  style={{
                    width: "350px",
                    marginRight: "auto",
                    marginLeft: "auto",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      marginLeft: "3%",
                      marginTop: 7,
                      marginBottom: 7,
                      fontFamily: "PretendardMedium",
                      color: "black",
                    }}
                    className="template-title"
                  >
                    {register_plans.plan.name}
                  </div>
                </div>

                <div style={{ height: "8px" }}></div>
                <img
                  className="template-photourl"
                  src={register_plans.plan.intro_img_url}
                  style={{
                    width: "80vw",
                    height: "130px",
                    objectFit: "cover",
                  }}
                ></img>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "350px",
                    paddingLeft: "5px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        marginTop: "10px",
                        width: "280px",
                      }}
                    >
                      <img
                        className="template-writerphoto"
                        src={register_plans.plan.writer_img}
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "20px",
                          marginBottom: "5px",
                          marginLeft: "6px",
                          marginRight: "3px",
                        }}
                      ></img>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          marginLeft: "10px",
                        }}
                      >
                        <div
                          className="template-writerintro"
                          style={{
                            fontSize: "13px",
                            color: "black",
                            height: "14px",
                            marginBottom: "4px",
                            fontFamily: "PretendardMedium",
                          }}
                        >
                          {register_plans.plan.writer_intro}
                        </div>
                        <div
                          style={{
                            fontSize: "13px",
                            color: "black",
                            fontFamily: "PretendardMedium",
                          }}
                        >
                          {register_plans.plan.writer_name}
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        marginTop: "auto",
                        marginBottom: "auto",
                        color: "#7965f4",
                      }}
                    >
                      {/* {Routine.checkHeart ? 
 <FavoriteIcon />:
 <FavoriteBorderIcon />} */}
                    </div>
                  </div>
                  <div
                    className="template-content"
                    style={{
                      fontSize: "12px",
                      marginLeft: "8px",
                      marginTop: "5px",
                      fontFamily: "PretendardMedium",
                    }}
                  >
                    {register_plans.plan.desc}
                  </div>
                  <div style={{ height: "5px" }}></div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "left",
                      marginLeft: 7,
                    }}
                  >
                    <div className="template-tag">
                      {register_plans.plan.tags[0]}
                    </div>
                    <div style={{ width: "10px" }}></div>
                  </div>
                  <div style={{ height: "5px" }}></div>
                </div>
              </div>
              <div style={{ height: "15px" }}></div>
            </React.Fragment>
          </li>
        ))}
        <Sheet
          isOpen={isOpen}
          onClose={() => setOpen(false)}
          snapPoints={[300]}
        >
          <Sheet.Container>
            <Sheet.Header />
            <Sheet.Content>
              <div style={{ marginLeft: "30px" }} className="template-title">
                {planName}
              </div>
              <div
                style={{ marginLeft: "30px", marginBottom: "20px" }}
                className="template-content"
              >
                {planWriter}
              </div>
              <button
                onClick={() => navigate("../main/viewtemplate/" + planId)}
                style={{
                  backgroundColor: "transparent",
                  border: "0",
                  marginLeft: "24px",
                  height: "60px",
                }}
              >
                <div className="see-content" style={{ textAlign: "start" }}>
                  상세 정보 보기
                </div>
              </button>
              <br />
              <div
                style={{
                  marginLeft: "30px",
                  marginRight: "30px",
                  height: "1px",
                  backgroundColor: "#d3d3d3",
                  width: "370px",
                }}
              ></div>
              <button
                onClick={() => {
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
                      navigate("/main/todoplan");
                    });
                }}
                style={{
                  backgroundColor: "transparent",
                  border: "0",
                  marginLeft: "24px",
                  height: "60px",
                }}
              >
                <div className="delete-content" style={{ textAlign: "start" }}>
                  투두 리스트에서 제거하기
                </div>
              </button>
            </Sheet.Content>
          </Sheet.Container>

          <Sheet.Backdrop />
        </Sheet>
        <div className="textbox"></div>
        <div style={{ height: "200px" }}></div>
      </ul>
      <BottomNavBarTodo />
      <div
        style={{
          height: "33px",
          backgroundColor: "white",
          width: "100vw",
          position: "fixed",
          bottom: "0px",
        }}
      ></div>
    </div>
  );
}

export default UseTemplate;
