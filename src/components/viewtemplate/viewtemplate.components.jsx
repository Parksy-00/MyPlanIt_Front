import "./viewtemplate.components.css";
import { Link } from "react-router-dom";
import BottomNavBar from "../globalcomponents/BottomNavBar.components";
import { AppBar, Tabs, Tab } from "@material-ui/core";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import React, { useState, useEffect, Component } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";
import { render } from "@testing-library/react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Oval } from "react-loader-spinner";

function ViewTemplate(props) {
  const { id } = useParams();
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const handleClickOpen = () => {
    setOpen(true);
  };
  const accessToken = sessionStorage.getItem("access");
  const handleClose = (event, reason) => {
    if (reason && reason == "backdropClick") return;
    axios
      .all([
        axios.post(
          "https://myplanit.link/plans/" + id + "/buy",
          { token: `Bearer ${accessToken}` },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
          }
        ),
        axios.post(
          "https://myplanit.link/myplans/" + id + "/register",
          { token: `Bearer ${accessToken}` },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
          }
        ),
      ])
      .then((response) => {
        navigate("/todo");
      });
    setOpen(false);
  };

  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setError(null);
        setUsers(null);
        setLoading(true);
        const response = await axios.get("https://myplanit.link/plans/" + id);
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
      <div style={{ marginTop: "50vh", marginBottom: "auto" }}>
        <Oval color="#7965f4" height="40px" width="40px" />
      </div>
    );
  if (error) return <div>에러가 발생했습니다</div>;
  if (!users) return null;

  return (
    <div className="view-content">
      <div
        className="view-contents"
        style={{
          position: "fixed",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "90vw",
          marginTop: "30px",
          zIndex: "20",
        }}
      >
        <Link to="/planmarket">
          <ArrowBackIosIcon style={{ color: "#7965f4", marginTop: "30px" }} />
        </Link>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "10",
          position: "absolute",
          top: "0",
          alignContent: "center",
        }}
      >
        <img
          className="view-image"
          src={users.main_img_url}
          style={{ width: "100vw" }}
        ></img>
        <button
          onClick={handleClickOpen}
          className="add-button"
          style={{
            position: "relative",
            bottom: "100px",
            zIndex: 0,
            marginRight: "auto",
            marginLeft: "auto",
          }}
        >
          지금 바로 구매하기
        </button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <img
            src="/images/celebrate.png"
            style={{
              height: "60px",
              width: "60px",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "40px",
            }}
          ></img>
          <DialogTitle
            id="alert-dialog-title"
            style={{
              fontFamily: "PretendardMedium",
              fontSize: "20px",
              textAlign: "center",
            }}
          >
            {"짠! 지금은 무료체험 기간이에요."}
          </DialogTitle>
          <DialogContent>
            <DialogContentText
              id="alert-dialog-description"
              style={{
                fontFamily: "PretendardMedium",
                fontSize: "16px",
                textAlign: "center",
                color: "#929292",
              }}
            >
              선택하신 플랜을 무료로 사용해보세요!
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleClose}
              autoFocus
              style={{
                marginRight: "auto",
                marginLeft: "auto",
                marginTop: "-10px",
              }}
            >
              <div
                className="select-button"
                style={{
                  fontFamily: "PretendardRegular",
                  fontSize: "14px",
                  textAlign: "center",
                }}
              >
                {" "}
                내 투두에 추가하기{" "}
              </div>
            </Button>
          </DialogActions>
        </Dialog>
      </div>

      <BottomNavBar current="PLAN" />
    </div>
  );
}

export default ViewTemplate;
