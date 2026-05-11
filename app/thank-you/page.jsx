import Link from "next/link";

export const metadata = {
  title: "Thank You — NeonDevTech",
  description: "We received your message and will be in touch within 24 hours.",
};

export default function ThankYouPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "2rem",
        background: "#0a0a0a",
        color: "#fff",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
        Message <span style={{ color: "#00f0ff" }}>Received</span>
      </h1>
      <p
        style={{
          fontSize: "1.1rem",
          color: "#aaa",
          maxWidth: "480px",
          marginBottom: "2rem",
        }}
      >
        Thanks for reaching out. We'll review your project details and get back
        to you within 24 hours.
      </p>
      <Link
        href='/'
        style={{
          color: "#00f0ff",
          textDecoration: "none",
          borderBottom: "1px solid #00f0ff",
          paddingBottom: "2px",
        }}
      >
        ← Back to NeonDevTech
      </Link>
    </main>
  );
}
