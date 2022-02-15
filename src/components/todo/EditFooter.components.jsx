import axios from "axios";
import constants from "../../constants";

function EditFooter({
  current,
  delay,
  accessToken,
  update,
  setUpdate,
  updateMy,
  setUpdateMy,
}) {

  const delayTodo = () => {
    for (let i = 0; i < delay.length; i++) {
      axios
        .post(
          `https://myplanit.link/todos/${current.toLowerCase()}/${
            delay[i]
          }/delay`,
          { token: `Bearer ${accessToken}` },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
          }
        )
        .then(() => {
          current === "PLAN" ? setUpdate(!update) : setUpdateMy(!updateMy);
        });
    }
  };

  const deleteTodo = () => {
    for (let i = 0; i < delay.length; i++) {
      axios
        .delete(`https://myplanit.link/todos/my/${delay[i]}/delete`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then(() => {
          setUpdateMy(!updateMy);
        });
    }
  };
  return (
    <div
      style={{
        right: 0,
        left: 0,
        height: "90px",
        backgroundColor: "#7965f4",
        position: "fixed",
        bottom: 0,
        display: "flex",
        justifyContent: "space-evenly"
      }}
    >
      <img
        src={constants.DO_TOMORROW}
        style={{ width: 35, height: 36, margin: "15px 30px" }}
        onClick={delayTodo}
      />
      {current === "MY" && (
        <img
          src={constants.DELETE}
          style={{ width: 35, height: 36, margin: "15px 30px" }}
          onClick={deleteTodo}
        />
      )}
    </div>
  );
}

export default EditFooter;
