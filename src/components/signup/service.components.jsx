import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";
import { List, Typography, Divider, Card } from "antd";

function Service() {
  let navigate = useNavigate();

  return (
    <>
      <div className="header">
        <ArrowBackIosIcon
          className="back-arrow"
          onClick={() => {
            navigate("/signup1");
          }}
          style={{ marginRight: "120px" }}
        />
        <span className="title" style={{ marginRight: "20px" }}>
          약관 동의
        </span>
      </div>
      <Card style={{ width: 327 }}></Card>
    </>
  );
}

export default Service;
