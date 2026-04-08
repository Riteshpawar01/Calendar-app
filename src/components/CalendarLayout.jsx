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
                boxShadow: "5 55px 100px rgba(0,0,0,0.25)",
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

                {/* Blue Shape */}
                <div
                    style={{
                        position: "absolute",
                        bottom: "-30px",
                        width: "100%",
                        height: "140px",
                        clipPath: "polygon(0 35%, 30% 60%, 70% 60%, 100% 35%, 100% 100%, 0% 100%)",
                        background: "linear-gradient(to right, #1e88b6, #38bdf8)"
                    }}
                />



                {/* Month Text */}
                <div
                    style={{
                        position: "absolute",
                        bottom: "20px",
                        right: "20px",
                        color: "white",
                        textAlign: "right",
                    }}
                >
                    <div style={{ fontSize: "14px" }}>2026</div>
                    <div style={{ fontSize: "20px", fontWeight: "bold" }}>
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
                    }}
                >
                    {/* Notes */}
                    <div style={{ flex: 1 }}>
                        <NotesPanel />
                    </div>

                    {/* Calendar */}
                    <div style={{ flex: 2 }}>
                        <CalendarGrid />
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