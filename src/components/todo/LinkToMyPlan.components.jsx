import { Link } from "react-router-dom";
import { Button } from "antd";

function LinkToMyPlan() {
  return (
    <Link to="../main/buytemplate">
      <Button
        style={{
          marginLeft: 20,
          height: 25,
          width: 73,
          fontSize: 9,
          marginTop: 10,
          fontFamily: "SFProDisplay",
        }}
      >
        MY PLAN
      </Button>
    </Link>
  );
}

export default LinkToMyPlan;
