import React, { useEffect, useState } from "react";
import Layout from '@theme/Layout'

<Layout title="METAR" description="Hello React Page">
export default function MetarViewer() {
  const [icao, setIcao] = useState("KORD");
  const [metar, setMetar] = useState("");
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  async function fetchMetar(currentIcao = icao) {
    if (!currentIcao) return;
    setStatus("loading");
    setError(""); // Clear previous errors
    try {
      const res = await fetch(`https://metar.vatsim.net/${currentIcao}`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const text = (await res.text()).trim();
      setMetar(text);
      setStatus("success");
    } catch (err) {
      setMetar(""); // Clear previous METAR
      setError(err.message);
      setStatus("error");
    }
  }

  useEffect(() => {
    fetchMetar(icao);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div style={{ padding: 20, fontFamily: "sans-serif" }}>
      <h1>METAR Viewer</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          fetchMetar(icao);
        }}
        style={{ marginBottom: 12 }}
      >
        <input
          value={icao}
          onChange={(e) => setIcao(e.target.value.replace(/[^A-Za-z0-9]/g, "").toUpperCase())}
          placeholder="ICAO (e.g. KORD)"
          style={{ marginRight: 8, padding: 6 }}
          maxLength={4}
        />
        <button type="submit" style={{ padding: "6px 12px" }}>
          Get METAR
        </button>
      </form>

      <pre style={{ whiteSpace: "pre-wrap", background: "#f5f5f5", padding: 12 }}>
        {status === "idle"
          ? "Enter an ICAO to fetch a METAR."
          : status === "loading"
          ? "Loading…"
          : status === "error"
          ? `Error: ${error}`
          : metar || "No METAR found."}
      </pre>
    </div>
  );

</Layout>
}