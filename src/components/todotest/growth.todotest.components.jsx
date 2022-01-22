import { useParams } from "react-router-dom";
import BottomNavBarTodo from "../globalcomponents/bottomnavbartodo.components";
import { PageHeader } from "antd";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
function Growth() {
  const { id } = useParams();
  let route = `/images/growth/${id}.png`;
  return (
    <>
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
        <Link to="../main">
          <ArrowBackIosIcon style={{ color: "#7965f4" }} />
        </Link>
       
      </div>
      
      <PageHeader style={{position: "absolute",
          top: "0",}} title="한 달 동안 200% 성장하기" />
      <hr style={{ width: "100%", marginTop: 20, marginBottom: 20 }} />
      <img src={route} width="85%" />
      <br />
      <br />
      <br />
      <br />
      <BottomNavBarTodo />
      <div style={{height: "33px", backgroundColor:"white",width:"100vw",position:"fixed", bottom:"0px"}}></div>
    </>
  );
}

export default Growth;
