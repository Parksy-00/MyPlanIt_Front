import "./viewtemplate.components.css";
import { Link } from "react-router-dom";
import BottomNavBar from "../globalcomponents/bottomnavbar.components";
import { AppBar, Tabs, Tab } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import dummydata from "../../dummydata/dummydata.json";

function ViewTemplate() {
  return (
    <div className="view-content">
       
     <div className="view-contents" style={{position: "relative",display: 'flex', flexDirection: "row",justifyContent:"space-between", width:"90vw", marginTop: "30", zIndex:'20'}}>
     <Link
           to='../main/maintemplateroutine'
          >
            <ArrowBackIosIcon style={{color:"black"}} />
          </Link>
          <FavoriteBorderIcon />
     </div>
     

     <img className="view-image" src= {dummydata.content_image.imagefile} style={{width: '100vw', zIndex:"10", position:'absolute',top:"0"}}></img>
      <BottomNavBar/>
    </div>
   
  );
}

export default ViewTemplate;
