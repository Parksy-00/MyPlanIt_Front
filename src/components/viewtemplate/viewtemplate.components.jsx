import "./viewtemplate.components.css";
import { Link } from "react-router-dom";
import BottomNavBar from "../globalcomponents/bottomnavbartodo.components";
import { AppBar, Tabs, Tab } from "@material-ui/core";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import dummydata from "../../dummydata/dummydata.json";
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import BottomNavBarPlan from "../globalcomponents/bottomnavbarplan.components";

function ViewTemplate() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if(reason&&reason == "backdropClick")
    return;
    setOpen(false);
    /*
     navigate("../main"); 백엔드 연결 후 이거 여기다가 추가하면 될 듯
    */
  };

  return (
    <div className="view-content">
       
     <div className="view-contents" style={{position: "relative",display: 'flex', flexDirection: "row",justifyContent:"space-between", width:"90vw", marginTop: "30", zIndex:'20'}}>
     <Link
           to='../main/maintemplateroutine'
          >
            <ArrowBackIosIcon style={{color:"black"}} />
          </Link>
          <button
        onClick={() => {
        }}
        style={{backgroundColor: "transparent", border:"0"}}
      >
       <FavoriteBorderIcon />
      </button>
          
     </div>
     
     <div style={{display:"flex", flexDirection:"column",width:"10", position:'absolute',top:"0", alignContent:"center"}}>
     <img className="view-image" src= {dummydata.content_image.imagefile} style={{width: '100vw'}}></img>
     <button
        onClick={handleClickOpen}
        className="add-button"
        style={{position: "relative",bottom:'100px', zIndex:"100",marginRight:'auto',marginLeft:'auto'}}
      >
        지금 바로 구매하기
      </button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <img src="https://firebasestorage.googleapis.com/v0/b/single-life-manager.appspot.com/o/ceos%20test%2Fceos_test_2.png?alt=media&token=cf050315-06f1-4ae8-8d01-a8d13a771395" style={{height:"80px",width:"80px",marginLeft:"auto",marginRight:"auto",marginTop:"30px"}}></img>
        <DialogTitle id="alert-dialog-title">
          {"짠! 지금은 무료체험 기간이에요."}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            선택하신 플랜을 무료로 사용해보세요!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button   onClick={handleClose} autoFocus style={{marginRight:"auto",marginLeft:"auto"}}>
           <div className="select-button">내 투두에 추가하기</div>
          </Button>
        </DialogActions>
      </Dialog>
     </div>
  
     
      <BottomNavBarPlan/>
    </div>
   
  );
}

export default ViewTemplate;
