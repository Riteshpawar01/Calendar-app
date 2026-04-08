import { useState } from "react";

export default function CalendarGrid() {
  const days = ["MON","TUE","WED","THU","FRI","SAT","SUN"];

  // Each date now has month type
  const dates = [
    {day:30, type:"prev"}, {day:31, type:"prev"},
    {day:1, type:"current"}, {day:2, type:"current"}, {day:3, type:"current"}, {day:4, type:"current"}, {day:5, type:"current"},
    {day:6, type:"current"}, {day:7, type:"current"}, {day:8, type:"current"}, {day:9, type:"current"}, {day:10, type:"current"}, {day:11, type:"current"}, {day:12, type:"current"},
    {day:13, type:"current"}, {day:14, type:"current"}, {day:15, type:"current"}, {day:16, type:"current"}, {day:17, type:"current"}, {day:18, type:"current"}, {day:19, type:"current"},
    {day:20, type:"current"}, {day:21, type:"current"}, {day:22, type:"current"}, {day:23, type:"current"}, {day:24, type:"current"}, {day:25, type:"current"}, {day:26, type:"current"},
    {day:27, type:"current"}, {day:28, type:"current"}, {day:29, type:"current"}, {day:30, type:"current"},
    {day:1, type:"next"}, {day:2, type:"next"}, {day:3, type:"next"}, {day:4, type:"next"}
  ];

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleClick = (item) => {
    if (item.type !== "current") return; 

    const day = item.day;

    if (!startDate || (startDate && endDate)) {
      setStartDate(day);
      setEndDate(null);
    } else {
      if (day < startDate) {
        setEndDate(startDate);
        setStartDate(day);
      } else {
        setEndDate(day);
      }
    }
  };

  const isInRange = (day) =>
    startDate && endDate && day > startDate && day < endDate;

  return (
    <div>
      {/* Day Names */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(7,1fr)",
        fontSize: "11px",
        marginBottom: "6px",
        color: "#555",
      }}>
        {days.map((d) => <div key={d}>{d}</div>)}
      </div>

      {/* Dates */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(7,1fr)",
        gap: "6px",
        fontSize: "13px",
      }}>
        {dates.map((item, i) => {
          const isStart = item.day === startDate && item.type === "current";
          const isEnd = item.day === endDate && item.type === "current";
          const inRange = item.type === "current" && isInRange(item.day);

          const isWeekend = (i % 7 === 5 || i % 7 === 6);

          return (
            <div
              key={i}
              onClick={() => handleClick(item)}
              style={{
                textAlign: "center",
                padding: "8px",
                borderRadius: "8px",
                cursor: item.type === "current" ? "pointer" : "default",

                background: isStart
                  ? "#2563eb"
                  : isEnd
                  ? "#2563eb"
                  : inRange
                  ? "#bfdbfe"
                  : isWeekend && item.type === "current"
                  ? "#fee2e2"
                  : "transparent",

                color: isStart || isEnd
                  ? "white"
                  : item.type !== "current"
                  ? "#bbb"
                  : "#111",

                opacity: item.type !== "current" ? 0.5 : 1,

                transition: "0.2s",
              }}
              onMouseEnter={(e) => {
                if (item.type === "current")
                  e.target.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
              }}
            >
              {item.day}
            </div>
          );
        })}
      </div>
    </div>
  );
}