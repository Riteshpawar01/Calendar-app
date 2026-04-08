import CalendarGrid from "./CalendarGrid";
import NotesPanel from "./NotesPanel";
export default function CalendarLayout() {
    return (
        <div
            style={{
                width: "520px",        // bigger
                maxWidth: "95vw",      // responsive
                background: "white",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "5px 55px 100px rgba(0,0,0,0.25)",
                animation: "fadeIn 0.8s ease",
            }}
        >
            {/* Top Image Section */}
            <div style={{ position: "relative", height: "250px" }}>
                <img
                    src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
                    alt="calendar"
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                    }}
                />


                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background:
                            "linear-gradient(to bottom, rgba(0,0,0,0) 55%, rgba(30,136,182,0.85) 100%)",
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        bottom: "-1px",
                        width: "100%",
                        height: "20px",
                        background: "#ffffff",
                        borderTopLeftRadius: "60% 40%",
                        borderTopRightRadius: "60% 40%",
                    }}
                />

                {/* Month Text */}
                <div
                    style={{
                        position: "absolute",
                        bottom: "60px",
                        right: "25px",
                        color: "white",
                        textAlign: "right",
                        textShadow: "0 4px 15px rgba(0,0,0,0.5)",
                    }}
                >
                    <div style={{ fontSize: "20px" }}>2026</div>
                    <div style={{ fontSize: "40px", fontWeight: "bold" }}>
                        APRIL
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div style={{ padding: "24px" }}>
                <div
                    style={{
                        display: "flex",
                        gap: "15px",
                        flexWrap: "wrap",
                    }}
                >
                    {/* Notes */}
                    <div style={{ flex: "1 1 200px" }}>                        <NotesPanel />
                    </div>

                    {/* Calendar */}
                    <div style={{ flex: "2 1 300px" }}>                        <CalendarGrid />
                    </div>
                </div>
            </div>

            {/* Animation */}
            <style>
                {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(50px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
            </style>
        </div>
    );
}