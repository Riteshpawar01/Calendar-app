import { useState } from "react";

export default function CalendarGrid() {
  const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

  // Each date now has month type
  const generateCalendar = () => {
    const year = 2026;
    const month = 3; // April (0-based index)

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const prevMonthDays = new Date(year, month, 0).getDate();

    let calendar = [];

    const start = firstDay === 0 ? 6 : firstDay - 1;

    // Previous month
    for (let i = start - 1; i >= 0; i--) {
      calendar.push({ day: prevMonthDays - i, type: "prev" });
    }

    // Current month
    for (let i = 1; i <= daysInMonth; i++) {
      calendar.push({ day: i, type: "current" });
    }

    // Next month
    let nextDay = 1;
    while (calendar.length % 7 !== 0) {
      calendar.push({ day: nextDay++, type: "next" });
    }

    return calendar;
  };

  const dates = generateCalendar();

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

          const today = new Date().getDate();

          return (
            <div
              key={i}
              onClick={() => handleClick(item)}
              style={{
                border: item.day === today && item.type === "current"
                  ? "2px solid #2563eb"
                  : "none",

                textAlign: "center",
                padding: "10px",

                borderRadius: isStart
                  ? "10px 0 0 10px"
                  : isEnd
                    ? "0 10px 10px 0"
                    : "6px",

                cursor: item.type === "current" ? "pointer" : "default",

                background: isStart || isEnd
                  ? "linear-gradient(135deg,#2563eb,#3b82f6)"
                  : inRange
                    ? "#dbeafe"
                    : isWeekend && item.type === "current"
                      ? "#fee2e2"
                      : "transparent",

                color: isStart || isEnd
                  ? "white"
                  : item.type !== "current"
                    ? "#bbb"
                    : "#111",

                boxShadow: isStart || isEnd
                  ? "0 4px 12px rgba(37,99,235,0.4)"
                  : "none",

                opacity: item.type !== "current" ? 0.5 : 1,

                transition: "all 0.5s ease",
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