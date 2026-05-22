export default function IranLegalBriefingPage() {
  return (
    <main
      style={{
        background: "#f7f8fa",
        color: "#071426",
        minHeight: "100vh",
      }}
    >
      <section
        style={{
          background: "#071426",
          color: "white",
          padding: "80px 24px",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <p
            style={{
              color: "#b5893d",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
            }}
          >
            Trident Risk and Advisory
          </p>

          <h1
            style={{
              fontSize: "48px",
              maxWidth: "850px",
              lineHeight: "1.1",
            }}
          >
            Iran Maritime Legal Risk Briefing 2026
          </h1>

          <p
            style={{
              marginTop: "24px",
              maxWidth: "780px",
              fontSize: "18px",
              lineHeight: "1.7",
              color: "#cbd5e1",
            }}
          >
            Strategic legal and operational analysis covering Iran related
            maritime risk, charterparty disputes, force majeure, unsafe port
            arguments, owners refusal to trade, sanctions exposure, vessel
            affiliation, war risk insurance and Strait of Hormuz disruption.
          </p>
        </div>
      </section>

      <section style={{ padding: "80px 24px" }}>
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gap: "40px",
            gridTemplateColumns: "1fr 1fr",
          }}
        >
          <div>
            <h2 style={{ fontSize: "32px" }}>
              What the briefing covers
            </h2>

            <ul
              style={{
                marginTop: "24px",
                fontSize: "18px",
                lineHeight: "2",
              }}
            >
              <li>Force majeure and frustration risks</li>
              <li>Owners refusal to transit</li>
              <li>Unsafe port legal considerations</li>
              <li>War risk insurance implications</li>
              <li>Sanctions exposure and vessel affiliation</li>
              <li>Vessel targeting analysis</li>
              <li>Case studies and operational trends</li>
            </ul>
          </div>

          <div
            style={{
              background: "white",
              padding: "40px",
              borderRadius: "24px",
              boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
            }}
          >
            <h3 style={{ fontSize: "28px" }}>
              Download Briefing
            </h3>

            <p style={{ color: "#475569" }}>
              Enter your details to request access to the full report.
            </p>

            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              style={{ marginTop: "30px" }}
            >
              <input
                type="hidden"
                name="access_key"
                value="8cc96b46-afd6-440c-8948-e1879af37c25"
              />

              <input
  type="hidden"
  name="subject"
  value="New Iran Maritime Legal Risk Briefing Download"
/>

<input
  type="hidden"
  name="redirect"
  value="http://localhost:5173/Iran-Maritime-Legal-Risk-Briefing-2026.pdf"
/>

<input
  type="hidden"
  name="from_name"
  value="Trident Risk Website"
/>

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                style={{
                  width: "100%",
                  padding: "14px",
                  marginBottom: "14px",
                  border: "1px solid #cbd5e1",
                  borderRadius: "10px",
                }}
              />

              <input
                type="email"
                name="email"
                placeholder="Company Email"
                required
                style={{
                  width: "100%",
                  padding: "14px",
                  marginBottom: "14px",
                  border: "1px solid #cbd5e1",
                  borderRadius: "10px",
                }}
              />

              <input
                type="text"
                name="company"
                placeholder="Company"
                style={{
                  width: "100%",
                  padding: "14px",
                  marginBottom: "20px",
                  border: "1px solid #cbd5e1",
                  borderRadius: "10px",
                }}
              />

              <button
                type="submit"
                style={{
                  width: "100%",
                  background: "#071426",
                  color: "white",
                  padding: "16px",
                  borderRadius: "12px",
                  border: "none",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
              >
                Submit Details
              </button>
            </form>

             </div>
        </div>
      </section>
    </main>
  );
}