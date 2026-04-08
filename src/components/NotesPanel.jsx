import { useState, useEffect } from "react";

export default function NotesPanel() {
  const [note, setNote] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("monthly_note");
    if (saved) setNote(saved);
  }, []);

  const handleChange = (e) => {
    setNote(e.target.value);
    localStorage.setItem("monthly_note", e.target.value);
  };

  return (
    <div>
      <h4 style={{ marginBottom: "8px", fontWeight: "600" }}>
        <textarea
          value={note}
          onChange={handleChange}
          placeholder="Write monthly notes..."
          style={{
            width: "90%",
            height: "100px",
            borderRadius: "10px",
            border: "1px solid  #e5e7eb",
            padding: "10px 10px",
            resize: "none",
            outline: "none",
            fontSize: "14px",
            lineHeight: "24px",

            backgroundImage: `
    linear-gradient(to bottom, transparent 23px, #c4c5c7 24px)
  `,
            backgroundSize: "100% 24px",

            boxShadow: "inset 0 2px 6px rgba(0,0,0,0.05)",
          }}
        />
      </h4>
    </div>
  );
}