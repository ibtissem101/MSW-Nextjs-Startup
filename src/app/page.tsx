import Link from "next/link";

export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        background: "#fafafa",
      }}
    >
      <main
        style={{
          maxWidth: "800px",
          width: "100%",
          background: "white",
          padding: "3rem",
          borderRadius: "12px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            marginBottom: "1rem",
            color: "#111",
          }}
        >
          🚀 Next.js + MSW Starter Template
        </h1>

        <p
          style={{
            fontSize: "1.125rem",
            color: "#666",
            marginBottom: "2rem",
            lineHeight: "1.6",
          }}
        >
          A perfect boilerplate for building Next.js applications with Mock
          Service Worker (MSW) for API mocking during development and testing.
        </p>

        <div
          style={{
            background: "#f0f8ff",
            padding: "1.5rem",
            borderRadius: "8px",
            marginBottom: "2rem",
          }}
        >
          <h2
            style={{
              fontSize: "1.25rem",
              fontWeight: "600",
              marginBottom: "1rem",
              color: "#0070f3",
            }}
          >
            ✨ What&apos;s Included
          </h2>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              color: "#333",
            }}
          >
            <li style={{ marginBottom: "0.5rem" }}>
              ✅ Next.js 15+ with App Router
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              ✅ MSW v2 configured and ready to use
            </li>
            <li style={{ marginBottom: "0.5rem" }}>✅ TypeScript setup</li>
            <li style={{ marginBottom: "0.5rem" }}>
              ✅ Example API handlers (GET, POST, PUT, DELETE)
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              ✅ Client & Server fetch examples
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              ✅ Comprehensive documentation
            </li>
          </ul>
        </div>

        <div style={{ marginBottom: "2rem" }}>
          <h2
            style={{
              fontSize: "1.25rem",
              fontWeight: "600",
              marginBottom: "1rem",
              color: "#111",
            }}
          >
            📚 Quick Links
          </h2>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link
              href="/examples"
              style={{
                padding: "0.75rem 1.5rem",
                background: "#0070f3",
                color: "white",
                textDecoration: "none",
                borderRadius: "6px",
                fontWeight: "500",
                display: "inline-block",
              }}
            >
              View Examples →
            </Link>

            <a
              href="https://mswjs.io/docs/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "0.75rem 1.5rem",
                background: "#fff",
                color: "#0070f3",
                textDecoration: "none",
                borderRadius: "6px",
                fontWeight: "500",
                border: "2px solid #0070f3",
                display: "inline-block",
              }}
            >
              MSW Docs ↗
            </a>
          </div>
        </div>

        <div
          style={{
            background: "#fff3cd",
            padding: "1rem",
            borderRadius: "6px",
            borderLeft: "4px solid #ffc107",
          }}
        >
          <p style={{ margin: 0, color: "#856404", fontSize: "0.875rem" }}>
            💡 <strong>Development Mode:</strong> MSW is currently running and
            intercepting browser API calls. Check the browser console for the
            confirmation message.
          </p>
        </div>

        <div
          style={{
            marginTop: "2rem",
            paddingTop: "2rem",
            borderTop: "1px solid #eee",
          }}
        >
          <p
            style={{ color: "#999", fontSize: "0.875rem", textAlign: "center" }}
          >
            Read the <strong>README.md</strong> for setup instructions and API
            reference.
          </p>
        </div>
      </main>
    </div>
  );
}
