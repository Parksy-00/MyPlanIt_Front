import Calendar from "./Calendar.components";
import LinkToMyPlan from "./LinkToMyPlan.components";

function TodoHeader({
  selectedDate,
  setSelectedDate,
  edit,
  setEdit,
  current,
  setCurrent,
}) {
  const headerContainer = {
    position: "fixed",
    top: 0,
    zIndex: 999,
    backgroundColor: "#fbfbfb",
    height: "110px",
  };

  const upperHeader = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const linkStyle = (text) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "20px",
    marginTop: "0px",
    background: "#fbfbfb",
    borderRadius: "0",
    borderWidth: "0px 0px 0px",
    fontFamily: "SFProDisplay",
    fontSize: "16px",
    marginRight: 15,
    padding: "0 0 1px",
    boxSizing: "border-box",

    color: current===text? "black": "gray",
    borderBottom: current===text ? " 2px solid #8977F4": "none",
    paddingBottom: current===text ? "4px": "6px",
  });

  const lowerHeader = {
    display: "flex",
    fontSize: "16px",
    fontWeight: "bold",
    position: "relative"
  };

  const linkText = ["PLAN", "MY"];

  return (
    <div style={headerContainer}>
      <div style={upperHeader}>
        <Calendar
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
        <LinkToMyPlan />
      </div>

      <div style={lowerHeader}>
        {linkText.map((item, i) =>
          <button
            key={i}
            style={linkStyle(item)}
            onClick={() => setCurrent(item)}
          >
            {item}
          </button>
        )}
          <p
            style={{
              marginTop: 0,
              position: "absolute",
              right: 0,
              fontSize: "12px",
              color: edit ? "#8977F7" : "#929292",
              fontFamily: "Pretendard-Medium",
            }}
            onClick={() => {
              setEdit(!edit);
            }}
          >
            {edit && (
              <img
                src="/images/purpletick.png"
                style={{ width: "12px", marginRight: 4 }}
              />
            )}
            {edit ? "편집완료" : "편집하기"}
          </p>
        </div>
    </div>
  );
}

export default TodoHeader;