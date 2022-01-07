import "./wishtemplate.components.css";
import { Button } from "@nextui-org/react";
import { Input, Switch } from "antd";
import { Link } from "react-router-dom";
import BottomNavBar from "../globalcomponents/bottomnavbar.components";
import { AppBar, Tabs, Tab } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


function WishTemplate() {
  return (
    <div className="container">
     <AppBar position="static" style={{background: 'white'}}>
      <Toolbar style={{ justifyContent: "space-between" }}>
    
      <Link
           to='../inapp/maintemplateroutine'
          >
            <ArrowBackIosIcon />
          </Link>
          <Typography
          edge = 'end'
            variant="h6"
            style={{
             marginLeft: '0'
            }}
            color="black"
          >
            <div style={{color: "black"}}>찜한 목록</div>
          </Typography>
          <div style={{width: '40px'}}></div>
        </Toolbar>
    
      
      </AppBar>
      <img
        className="Pickicon"
        src="/images/pick_icon.png"
        style={{ marginTop: "200px", width: "60px", marginBottom: "51px" }}
      />
      <div className="wish-title" style={{fontSize: "20px", fontWeight: 'bold'}}>
        아직 찜한 플랜이 없어요!
      </div>
      <div style={{height:'10px'}}>

      </div>
      <div className="wish-content" style={{color: "#808080", fontSize: "14px"}}>
        원하는 플랜을 찜해 보세요
      </div>
      <BottomNavBar/>
    </div>
   
  );
}

export default WishTemplate;
