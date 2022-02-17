import { useState } from "react";
import axios from "axios";
import { Input } from "antd";
import Sheet from "react-modal-sheet";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

function NewMyTodo({
  selectedDate,
  accessToken,
  updateMy,
  setUpdateMy,
}) {
  const [isOpen, setOpen] = useState(false);
  const [todo, setTodo] = useState([]);
  return (
    <>
      <Button
        style={{
          backgroundColor: "#7965f4",
          position: "absolute",
          bottom: "110px",
          right: "-10px",
        }}
        onClick={() => {
          setOpen(true);
        }}
        size="large"
        type="primary"
        shape="circle"
        icon={<PlusOutlined />}
      />

      <Sheet isOpen={isOpen} onClose={() => setOpen(false)} snapPoints={[250]}>
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Content>
            <Input
              className="email-input"
              size="large"
              placeholder="오늘 할 일을 입력해주세요.."
              onChange={(e) => {
                setTodo(e.target.value);
              }}
              value={todo}
              style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                width: "350px",
                fontFamily: "PretendardRegular",
                fontSize: "16px",
                color: "black",
              }}
            />
            <button
              onClick={() => {
                axios
                  .post(
                    `https://myplanit.link/todos/my/${selectedDate.getFullYear()}-${(
                      "0" +
                      (selectedDate.getMonth() + 1)
                    ).slice(-2)}-${("0" + selectedDate.getDate()).slice(-2)}`,
                    {
                      todo_name: todo,
                    },
                    {
                      headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${accessToken}`,
                      },
                    }
                  )
                  .then(() => {
                    setUpdateMy(!updateMy);
                    setOpen(false);
                    setTodo("");
                  });
              }}
              className="todo-add-button"
              style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              추가하기
            </button>
          </Sheet.Content>
        </Sheet.Container>

        <Sheet.Backdrop />
      </Sheet>
    </>
  );
}

export default NewMyTodo;
