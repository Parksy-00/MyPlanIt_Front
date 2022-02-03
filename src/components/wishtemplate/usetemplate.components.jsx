import "./wishtemplate.components.css";
import { Link } from "react-router-dom";
import BottomNavBar from "../globalcomponents/bottomnavbartodo.components";
import { AppBar, Tabs, Tab } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import SearchIcon from "@mui/icons-material/Search";
import dummydata from "../../dummydata/dummydata.json";
import MoreTemplate from "../moretemplate/moretemplate.components";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import React, { useState, useEffect, Component } from "react";
import { NavLink, Route } from "react-router-dom";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import BottomNavBarPlan from "../globalcomponents/bottomnavbarplan.components";
import { Switch } from "@mui/material";
import ViewTemplate from "../viewtemplate/viewtemplate.components";
import { useParams } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Oval } from "react-loader-spinner";
import BottomNavBarTodo from "../globalcomponents/bottomnavbartodo.components";
import Sheet from "react-modal-sheet";
import { useNavigate } from "react-router-dom";
import { sortAndDeduplicateDiagnostics } from "typescript";

const accessToken = localStorage.getItem("token");
function UseTemplate() {
  let navigate = useNavigate();
  let { plan_id } = useParams();
  const categories = [{ title: "일주일을 알차게" }, { title: "건강한 몸" }];
  const renderCategories = categories.map((categories) => {
    return <MoreTemplate categories={categories} />;
  });
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isOpen, setOpen] = React.useState(false);
  const [planId, setPlanId] = React.useState(null);
  const [planAll, setPlanAll] = React.useState(null);
  const [planName, setPlanName] = React.useState(null);
  const [planWriter, setPlanWriter] = React.useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setError(null);
        setUsers(null);
        setLoading(true);
        console.log(accessToken);
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
        console.log(response.data);
        setUsers(response.data);
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
          <Toolbar style={{ justifyContent: "center" }}>
            {/*  <div style={{width: '40px'}}></div>*/}
            <Typography
              edge="end"
              variant="h6"
              style={{
                marginLeft: "0",
              }}
            >
              <div
                style={{
                  fontFamily: "PretendardMedium",
                  fontSize: "20px",
                  textAlign: "center",
                  color: "black",
                }}
              >
                MY PLAN
              </div>
            </Typography>
            {/*
       <Link
        to='../main/buytemplate'
       >
         <FavoriteBorderIcon style={{color:"grey"}}/>
       </Link>
       */}
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
          <Oval
            color="#7965f4"
            height="40px"
            width="40px"
            justifyContent="true"
          />
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
          <Link to="../main">
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
          style={{ border: "1px solid #D3d3d3" }}
          to="../main/buytemplate"
          className="main-growth-button"
          style={{
            width: "7.5vh",
            height: "35px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "10px",
            border: "5px",
            background: "transparent",
            borderRadius: "0",
            color: "gray",
          }}
        >
          구매 플랜
        </Link>
        <div style={{ width: "3vw" }}></div>
        <Link
          style={{ border: "1px solid #D3d3d3" }}
          to="../main/usetemplate"
          className="main-growth-button"
          style={{
            width: "7.5vh",
            height: "35px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "10px",
            border: "5px",
            background: "transparent",
            borderRadius: "0",
            color: "black",
            borderBottom: "solid #7965f4",
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
          width: "inherit",
          float: "left",
          height: "680px",
          position: "relative",
        }}
      >
        <div className="textbox"></div>
        <div style={{ height: "10px" }}></div>

        {users.register_plans
          ? users.register_plans.map((register_plans) => (
              <li key={users.register_plans.id}>
                <button
                  style={{
                    textAlign: "start",
                    color: "black",
                    backgroundColor: "transparent",
                    borderColor: "transparent",
                  }}
                  onClick={function (event) {
                    setOpen(true);
                    setPlanId(register_plans.plan.id);
                    setPlanName(register_plans.plan.name);
                    setPlanWriter(register_plans.plan.writer_name);
                    setPlanAll(register_plans.plan);
                  }}
                >
                  <React.Fragment key={uuidv4()}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        boxShadow: "0px 0px 2px 0.5px #Dedede",
                        justifyContent: "center",
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
                          style={{ marginLeft: "0" }}
                          className="template-title"
                        >
                          {register_plans.plan.name}
                        </div>
                      </div>

                      <div style={{ height: "8px" }}></div>
                      <img
                        className="template-photourl"
                        src={register_plans.plan.intro_img_url}
                        style={{ width: "350px", height: "130px" }}
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
                                  fontSize: "14px",
                                  color: "gray",
                                  height: "14px",
                                  marginBottom: "4px",
                                }}
                              >
                                {register_plans.plan.writer_intro}
                              </div>
                              <div style={{ fontSize: "14px" }}>
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
                          style={{ fontSize: "12px", width: "335px" }}
                        >
                          {register_plans.plan.desc}
                        </div>
                        <div style={{ height: "5px" }}></div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "left",
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
                </button>
              </li>
            ))
          : null}
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
                      navigate("/main");
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
        <div style={{ height: "10px" }}></div>
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
