export default function HeaderImage() {
  return (
    <div style={{ width: "100%", height: "180px", marginBottom: "10px" }}>
      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
        alt="calendar"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "12px",
        }}
      />
    </div>
  );
}   