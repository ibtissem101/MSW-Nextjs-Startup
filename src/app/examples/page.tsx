import { ClientFetchExample } from "../components/ClientFetchExample";
import { ServerFetchExample } from "../components/ServerFetchExample";

export default function ExamplesPage() {
  return (
    <div style={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto" }}>
      <h1
        style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "2rem" }}
      >
        MSW + Next.js Examples
      </h1>

      <div style={{ marginBottom: "3rem" }}>
        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: "600",
            marginBottom: "1rem",
          }}
        >
          Server Component (SSR)
        </h2>
        <p style={{ marginBottom: "1rem", color: "#666" }}>
          This component fetches data on the server. MSW does NOT intercept
          server-side fetches by default. You need to use Node.js handlers for
          SSR.
        </p>
        <ServerFetchExample />
      </div>

      <div style={{ marginBottom: "3rem" }}>
        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: "600",
            marginBottom: "1rem",
          }}
        >
          Client Component (CSR)
        </h2>
        <p style={{ marginBottom: "1rem", color: "#666" }}>
          This component fetches data in the browser. MSW intercepts these
          requests.
        </p>
        <ClientFetchExample />
      </div>
    </div>
  );
}
