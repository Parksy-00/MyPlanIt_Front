import { useParams } from "react-router-dom";
import BottomNavBarTodo from "../globalcomponents/bottomnavbartodo.components";
import { PageHeader } from "antd";

function Zapier() {
  const { id } = useParams();
  let route = `/images/zapier/${id}.png`;
  return (
    <>
      <PageHeader title="자피어로 자동화 시스템 만들기" />
      <hr style={{ width: "100%", marginTop: 0, marginBottom: 20 }} />
      <img src={route} width="85%" />
      <br />
      <br />
      <br />
      <br />
      <BottomNavBarTodo />
    </>
  );
}

export default Zapier;
