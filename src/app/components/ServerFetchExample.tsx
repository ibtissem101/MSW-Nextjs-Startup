// Server Component - fetches data on the server
export async function ServerFetchExample() {
  // Note: MSW browser worker does NOT intercept server-side fetches
  // You need to set up MSW Node.js server for SSR mocking
  // For now, this will fail unless you have a real API or set up Node handlers

  let data = null;
  let error = null;

  try {
    // This fetch happens on the server
    // For demo purposes, we'll use a timeout to show it doesn't work with browser MSW
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 1000);

    const res = await fetch("http://localhost:3000/api/user", {
      signal: controller.signal,
      cache: "no-store",
    });

    clearTimeout(timeoutId);

    if (res.ok) {
      data = await res.json();
    } else {
      error = "Failed to fetch from server";
    }
  } catch (err) {
    error = "Server-side fetch not intercepted by MSW browser worker";
  }

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "1.5rem",
      }}
    >
      <h3
        style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "1rem" }}
      >
        Server-Side Fetch Example
      </h3>

      {error ? (
        <div
          style={{
            padding: "1rem",
            background: "#fff3cd",
            borderRadius: "4px",
          }}
        >
          <p style={{ color: "#856404", margin: 0 }}>⚠️ {error}</p>
          <p
            style={{ color: "#666", marginTop: "0.5rem", fontSize: "0.875rem" }}
          >
            To mock server-side requests, you need to set up MSW with Node.js
            handlers. See the README for instructions.
          </p>
        </div>
      ) : (
        <div
          style={{
            padding: "1rem",
            background: "#d4edda",
            borderRadius: "4px",
          }}
        >
          <p style={{ color: "#155724" }}>✅ Server fetch successful:</p>
          <pre
            style={{
              background: "#fff",
              padding: "0.5rem",
              borderRadius: "4px",
              marginTop: "0.5rem",
            }}
          >
            {JSON.stringify(data, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}
