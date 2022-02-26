import styled from "styled-components";

function Admin() {
  return (
    <Container>
      <input style={{ marginBottom: "10px" }} placeholder="아이디 입력" />
      <input style={{ marginBottom: "10px" }} placeholder="비밀번호 입력" />
      <button>로그인</button>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default Admin;
