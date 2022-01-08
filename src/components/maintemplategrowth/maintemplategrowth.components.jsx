import "./maintemplategrowth.components.css";
import { Link } from "react-router-dom";
import BottomNavBar from "../globalcomponents/bottomnavbar.components";
import { useNavigate } from "react-router-dom";
import { AppBar, Tabs, Tab } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import SearchIcon from '@mui/icons-material/Search';
import dummydata from "../../dummydata/dummydata.json";
import MoreTemplate from "../moretemplate/moretemplate.components";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

function MainTemplateGrowth() {
    let navigate = useNavigate();
    const categories = [
      {title: '일주일을 알차게'},
      {title: '건강한 몸'}
    ];
    const renderCategories = categories.map(categories =>{
      return (
        
        <MoreTemplate categories={categories}/>
      );

    });
    
  return (
    <div className="container">
         <AppBar position="static" style={{background: 'white',width: "100vw"}}>
      <Toolbar style={{ justifyContent: "space-between" }}>
      <div style={{width: '40px'}}></div>
          <Typography
          edge = 'end'
            variant="h6"
            style={{
             marginLeft: '0'
            }}
            color="black"
          >
            <div style={{color: "black"}}>플랜</div>
          </Typography>
          <Link
           to='../main/wishtemplate'
          >
            <FavoriteBorderIcon style={{color:"grey"}}/>
          </Link>
        </Toolbar>
      </AppBar>
      <Link
        to='./maintemplateroutine'
        className="search-button"
        style={{border: '1px solid #D3d3d3'}}
      >
        <SearchIcon /> &nbsp;원하는 플랜을 검색해보세요
      </Link>
      <span
        className="button-group"
        style={{ marginTop: "8px", fontSize: "16px", fontWeight:"bold"}}
      >
        <Link
       to='../main/maintemplateroutine'
        className="routine-button"
        style={{width: "7.5vh", height: "35px"}}
      >
        Routine
      </Link>
      <div style={{width: '5vw'}}></div>
      <Link
        style={{border: '1px solid #D3d3d3'}}
        to='../main/maintemplategrowth'
        className="growth-button"
        style={{width: "7.5vh", height: "35px"}}
      >
        Growth
      </Link>
      <div style={{width: "55vw"}}></div>
      </span>
       <div style={{height: '10px'}}></div>
      <ul className="template-content"style={{overflowY: 'scroll',
  width:'inherit',
  float: 'left',
  height:'560px',
  position:'relative'}}>
      <div
        className="textbox"
      >
      </div>
      <div style={{height: '10px'}}></div>
      <Link to="../main/viewtemplate" className="template-overall" style={{justifyContent:'center',color:'black'}}>
          {dummydata.contents_2.map(contents_2=>(
            <li key={dummydata.contents_2.id}>
              <div style={{display:'flex',flexDirection:'column', boxShadow: '0px 0px 8px 1px #D3d3d3', justifyContent: 
          "center"}} className="template-all">
             <div style={{height: "5px"}}></div>
             <div style={{width: '300px', marginRight:'auto',marginLeft:'auto',display: "flex", flexDirection: "row", justifyContent: 'space-between'}}>
             <div className="template-title">{contents_2.title}</div>
  
             </div>

             <div style={{height: "8px"}}></div>
              <img className="template-photourl" src= {contents_2.photourl} style={{width: '300px'}}></img>
              <div style={{display:'flex',flexDirection:'column', width:'300px', paddingLeft:'5px'}}>
                
              <div style={{display: 'flex', flexDirection: 'row', justifyContent:'space-between'}}>
              <div style={{display: 'flex', flexDirection: 'row', marginTop: '10px', width: '280px'}}>
              <img className="template-writerphoto" src= {contents_2.writerphoto} style={{width: '40px', height: '40px',borderRadius:'20px'}}></img>
              <div style={{display: 'flex', flexDirection: 'column',marginLeft: '10px'}}>
              <div className="template-writerintro" style={{fontSize: '10px',color:'gray', height: '15px'}}>{contents_2.writerintro}</div>
              <div style={{fontSize:'10px'}}>{contents_2.writer}</div>
              </div>
              </div>
              <div style={{marginTop:'auto',marginBottom:'auto', color: '#7965f4'}}>
             {contents_2.checkHeart ? 
             <FavoriteIcon />:
             <FavoriteBorderIcon />}
             </div>
              </div>
              <div className="template-content" style={{fontSize:'12px'}}>{contents_2.content}</div>
              <div style={{height: '5px'}}></div>
              <div style={{display:'flex', flexDirection:'row',justifyContent:'left'}}>
                <div className="template-tag">
                {contents_2.tag1}
                </div>
                <div style={{width: '10px'}}>
                </div>
                <div className="template-tag">
                {contents_2.tag2}
                </div>
              </div>
              <div style={{height: '5px'}}></div>
              </div>
              </div>
              <div style={{height: "15px"}}></div>
            </li>
          ))}
      
      </Link>
      <div
        className="textbox"
      >
      </div>
      <div style={{height: '10px'}}></div>
      </ul>
      <BottomNavBar/>
    </div>
   
  );
}

export default MainTemplateGrowth;
