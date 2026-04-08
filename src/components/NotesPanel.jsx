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
      <h4 style={{ marginBottom: "8px" }}>Notes</h4>
      <textarea
        value={note}
        onChange={handleChange}
        placeholder="Write monthly notes..."
        style={{
          width: "100%",
          height: "120px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          padding: "8px",
          resize: "none",
        }}
      />
    </div>
  );
}