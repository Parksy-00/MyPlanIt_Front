import React from "react";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

function Visibility({ visible, setVisible }) {
  const style = {
    marginLeft: "10px",
    color: "CECECE",
  };

  return visible ? (
    <VisibilityOutlinedIcon
      onClick={() => setVisible(!visible)}
      style={style}
    />
  ) : (
    <VisibilityOffOutlinedIcon
      onClick={() => setVisible(!visible)}
      style={style}
    />
  );
}

export default Visibility;
