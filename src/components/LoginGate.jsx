import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { SITE } from "../constants/config";

export function LoginGate() {
  const { login, loading, error } = useAuth();
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(password);
  };

  return (
    <div className="auth-gate">
      <div className="auth-gate__card">
        <div className="auth-gate__brand">
          <span className="pm-brand__icon">◆</span>
          <div>
            <strong>{SITE.name}</strong>
            <span>{SITE.tagline}</span>
          </div>
        </div>

        <h1>Sign in to CupBet</h1>
        <p className="auth-gate__sub">
          Secure access to World Cup 2026 prediction markets. Enter your invite password to continue.
        </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="site-password">Password</label>
          <input
            id="site-password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Your access password"
            autoComplete="current-password"
            disabled={loading}
          />

          {error && <p className="auth-gate__error">{error}</p>}

          <button type="submit" className="btn btn-primary btn-block" disabled={loading}>
            {loading ? "Signing in…" : "Sign In"}
          </button>
        </form>

        <p className="auth-gate__note muted">
          18+ · Crypto prediction markets · {SITE.hosts}
        </p>
      </div>
    </div>
  );
}
