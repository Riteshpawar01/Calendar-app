import CalendarLayout from "./components/CalendarLayout";

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg,#e7eaee,#d7dbe0)", // wall
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        paddingTop: "140px",
        position: "relative",
      }}
    >
      {/* Nail */}
      <div
        style={{
          position: "absolute",
          top: "40px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "18px",
          height: "18px",
          background: "#828282",
          borderRadius: "50%",
          boxShadow: "0 10px 20px rgba(0, 0, 0, 0.6)",
          zIndex: 10,
        }}
      />

      {/* Wire */}
      <div
        style={{
          position: "absolute",
          top: "58px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "2px",
          height: "90px",
          background: "#444",
        }}
      />

      {/* Calendar (with shadow to LEFT/BOTTOM-LEFT) */}
      <div
        style={{
          transform: "rotate(-1deg)",
          animation: "swing 3s ease-in-out infinite alternate",
          boxShadow:
            "-30px 25px 50px rgba(0,0,0,0.25), -10px 10px 20px rgba(0,0,0,0.15)",

        }}
      >
        <CalendarLayout />
      </div>

      <style>
        {`
          @keyframes swing {
            from { transform: rotate(-0.5deg); }
            to { transform: rotate(0.5deg); }
          }
        `}
      </style>
    </div>
  );
}

export default App;