import { useParams } from "react-router-dom";
import BottomNavBarTodo from "../globalcomponents/bottomnavbartodo.components";
import { PageHeader } from "antd";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useEffect, useState } from "react";
import axios from "axios";

function Detail() {
  let accessToken = sessionStorage.getItem("token");
  const [title, setTitle] = useState("");
  const { id } = useParams();
  const [route, setRoute] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    accessToken = sessionStorage.getItem("token");
    const fetchData = async () => {
      try {
        setError(null);
        setRoute(null);
        setLoading(true);
        await axios
          .get(`https://myplanit.link/todos/plan/${id}/detail`, {
            Authorization: `Bearer ${accessToken}`,
            withCredentials: true,
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
          })
          .then((response) => {
            setRoute(response.data.image_url);
            setTitle(response.data.plan_todo_name);
          });
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  if (error) return <div>에러가 발생했습니다</div>;
  if (!route) return null;
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
        <Link to="../main/todoplan">
          <ArrowBackIosIcon style={{ color: "#7965f4" }} />
        </Link>
      </div>

      <PageHeader
        style={{ position: "absolute", top: "0", paddingBottom: 0 }}
        title={title}
      />
      <hr style={{ width: "100%", marginTop: 20, marginBottom: 20 }} />
      <img src={route} width="85%" />
      <br />
      <br />
      <br />
      <br />
      <BottomNavBarTodo />
      <div
        style={{
          height: "33px",
          backgroundColor: "white",
          width: "100vw",
          position: "fixed",
          bottom: "0px",
        }}
      ></div>
    </>
  );
}

export default Detail;
