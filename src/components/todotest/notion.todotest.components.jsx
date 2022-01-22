import { useParams } from "react-router-dom";
import BottomNavBarTodo from "../globalcomponents/bottomnavbartodo.components";
import { PageHeader } from "antd";

function Notion() {
  const { id } = useParams();
  let route = `/images/notion/${id}.png`;
  return (
    <>
      <PageHeader title="노션 포트폴리오와 퍼스널 브랜딩" />
      <hr style={{ width: "100%", marginTop: 0, marginBottom: 20 }} />
      <img src={route} width="85%" />
      <br />
      <br />
      <br />
      <br />
      <BottomNavBarTodo />
      <div style={{height: "30px", backgroundColor:"white",width:"100vw",position:"fixed", bottom:"0px"}}>.</div>
    </>
  );
}

export default Notion;
