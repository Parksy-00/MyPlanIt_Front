import "./viewtemplate.components.css";
import { Link } from "react-router-dom";
import BottomNavBar from "../globalcomponents/bottomnavbartodo.components";
import { AppBar, Tabs, Tab } from "@material-ui/core";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import dummydata from "../../dummydata/dummydata.json";
import React, { useState, useEffect, Component } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import BottomNavBarPlan from "../globalcomponents/bottomnavbarplan.components";
import axios from "axios";
import { render } from "@testing-library/react";
import {
  useParams
} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import {Oval} from "react-loader-spinner";
const refreshToken =  localStorage.getItem("refreshToken");
const accessToken =  localStorage.getItem("accessToken");

function ViewTemplate(props) {
  const { id } = useParams();
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const handleClickOpen = () => {
    setOpen(true);
  };
  const accessToken = localStorage.getItem("accessToken");
  const handleClose = (event, reason) => {
    if(reason&&reason == "backdropClick")
    return;
    axios
      .post(
        "https://myplanit.link/plans/"+id+"/buy",
        {
          access_token: accessToken,
          refresh_token: refreshToken,
        },
        {

          withCredentials: true,
          
          headers: {
            "Content-Type": "application/json",
          },
          
          
        }
      
      )
      .then((response) => {
        console.log(response);
        navigate("/main");
      })
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

  if (loading) return <div style={{marginTop:"50vh", marginBottom:"auto"}}><Oval color="#7965f4" height="40px" width="40px" /></div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!users) return null;

  return (
    <div className="view-content">
      <div
        className="view-contents"
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "90vw",
          marginTop: "30",
          zIndex: "20",
        }}
      >
        <Link to="../main/maintemplateroutine">
          <ArrowBackIosIcon style={{ color: "#7965f4" }} />
        </Link>
        <button
          onClick={() => {}}
          style={{ backgroundColor: "transparent", border: "0" }}
        >
          <FavoriteBorderIcon style={{ color: "#7965f4" }}/>
        </button>
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
            zIndex: "100",
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
            src="https://firebasestorage.googleapis.com/v0/b/single-life-manager.appspot.com/o/ceos%20test%2Fceos_test_2.png?alt=media&token=cf050315-06f1-4ae8-8d01-a8d13a771395"
            style={{
              height: "60px",
              width: "60px",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "40px",
            }}
          ></img>
          <DialogTitle id="alert-dialog-title" style={{fontFamily: "PretendardMedium",fontSize: "20px", textAlign:"center"}}>
            {"짠! 지금은 무료체험 기간이에요."}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description" style={{fontFamily: "PretendardMedium",fontSize: "16px", textAlign:"center", color: "#929292"}}>
              선택하신 플랜을 무료로 사용해보세요!
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleClose}
              autoFocus
              style={{ marginRight: "auto", marginLeft: "auto",marginTop:"-10px" }}
            >
              <div className="select-button"style={{fontFamily: "PretendardRegular",fontSize: "14px", textAlign:"center"}}> 내 투두에 추가하기 </div>
            </Button>
          </DialogActions>
        </Dialog>
      </div>

      <BottomNavBarPlan />
      <div style={{height: "33px", backgroundColor:"white",width:"100vw",position:"fixed", bottom:"0px"}}></div>
    </div>
  );
}

export default ViewTemplate;