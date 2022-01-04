import "./onboard2.components.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Progress } from "antd";
import { Grid, Row, Text, Card } from "@nextui-org/react";

function Onboard2() {
  let navigate = useNavigate();

  const [check, setCheck] = useState(false);
  const [activated, setActivated] = useState([false, false, false, false]);
  const [name, setName] = useState([
    "unselected",
    "unselected",
    "unselected",
    "unselected",
  ]);

  const list = [
    {
      title: "대학생",
    },
    {
      title: "취준생",
    },
    {
      title: "주니어 직장인",
    },
    {
      title: "시니어 직장인",
    },
  ];
  return (
    <>
      <div className="text1">회원님의 직업은 무엇인가요?</div>
      <div>(복수선택 가능)</div>
      <br />
      <div className="text2">회원님을 위한 템플릿 추천에 도움이 돼요!</div>
      <Grid.Container
        gap={2.5}
        justify="flex-end"
        style={{ marginTop: "49px", width: "363px" }}
      >
        {list.map((item, index) => (
          <Grid xs={6} sm={6} key={index}>
            <Card
              shadow={false}
              animated={false}
              width="152px"
              height="130px"
              className={name[index]}
              onClick={() => {
                let temp = [...activated];
                if (!temp[index]) {
                  let tempName = [...name];
                  tempName[index] = "selected";
                  setName(tempName);
                } else {
                  let tempName = [...name];
                  tempName[index] = "unselected";
                  setName(tempName);
                }
                temp[index] = !temp[index];
                setActivated(temp);
              }}
            >
              <Card.Body css={{ p: 0, color: "white" }}></Card.Body>
              <Card.Footer
                justify="flex-start"
                style={{
                  backgroundColor: "black",
                  opacity: "0.5",
                  height: "28px",
                  borderBottomLeftRadius: "4px",
                  borderBottomRightRadius: "4px",
                }}
              >
                <Row justify="space-between">
                  <Text style={{ color: "white", fontSize: "12px" }} b>
                    {item.title}
                  </Text>
                </Row>
              </Card.Footer>
            </Card>
          </Grid>
        ))}
      </Grid.Container>
      <div className="check" style={{ marginTop: "100px" }}>
        {!check ? (
          <img
            src="/images/check1.png"
            onClick={() => {
              setCheck(!check);
            }}
            style={{
              width: "18px",
              height: "18px",
              marginRight: "8px",
            }}
          />
        ) : (
          <img
            src="/images/check2.png"
            onClick={() => {
              setCheck(!check);
            }}
            style={{
              width: "18px",
              height: "18px",
              marginRight: "8px",
            }}
          />
        )}

        <p style={{ marginTop: 0, marginBottom: 0, color: "#C4C4C4" }}>
          다음에 할래요
        </p>
      </div>
      <Progress
        percent={66}
        strokeColor="black"
        showInfo={false}
        size="small"
        style={{ width: "325px", marginTop: "25px", marginBottom: "30px" }}
      />
      <button
        onClick={() => {
          navigate("/onboard3");
        }}
        className="login-button"
        style={{ marginTop: 0 }}
      >
        다음
      </button>
    </>
  );
}

export default Onboard2;
