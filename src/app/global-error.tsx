"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en-GB">
      <body style={{ margin: 0, padding: "3rem 2rem", fontFamily: "sans-serif", background: "#111E33", color: "#fff", textAlign: "center" }}>
        <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Something went wrong</h1>
        <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: "2rem" }}>
          An unexpected error occurred. Please try again.
        </p>
        <button
          onClick={() => reset()}
          style={{ background: "#C4742A", color: "#fff", border: "none", borderRadius: "9999px", padding: "0.75rem 2rem", fontSize: "0.875rem", fontWeight: 600, cursor: "pointer" }}
        >
          Try again
        </button>
      </body>
    </html>
  );
}
