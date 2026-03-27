import { useState } from "react";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=DM+Sans:wght@300;400;500&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; }

  .signup-root {
    --cream:   #faf8f4;
    --dark:    #0e0e0e;
    --ink:     #1a1a2e;
    --accent:  #d4541a;
    --accent2: #f0a500;
    --muted:   #888;
    --border:  #e0dbd2;
    --white:   #ffffff;
    --radius:  12px;
    font-family: 'DM Sans', sans-serif;
    min-height: 100vh;
    background: var(--cream);
    color: var(--ink);
    -webkit-font-smoothing: antialiased;
  }

  .split-layout {
    display: flex;
    min-height: 100vh;
  }

  /* LEFT PANEL */
  .left-panel {
    position: relative;
    width: 42%;
    background: var(--ink);
    color: var(--white);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 48px;
    overflow: hidden;
  }

  .brand {
    display: flex;
    align-items: center;
    gap: 10px;
    z-index: 2;
    position: relative;
  }

  .logo {
    font-size: 28px;
    color: var(--accent);
    line-height: 1;
  }

  .brand-name {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 22px;
    font-weight: 700;
    letter-spacing: 0.02em;
    color: var(--white);
  }

  .left-content {
    z-index: 2;
    position: relative;
  }

  .headline {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: clamp(32px, 4vw, 52px);
    font-weight: 700;
    line-height: 1.15;
    margin-bottom: 20px;
    color: var(--white);
  }

  .headline em {
    font-style: italic;
    color: var(--accent);
  }

  .subtext {
    font-size: 15px;
    font-weight: 300;
    line-height: 1.7;
    color: rgba(255,255,255,0.6);
    max-width: 340px;
    margin-bottom: 36px;
  }

  .perks {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .perks li {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 14px;
    color: rgba(255,255,255,0.75);
  }

  .check {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 22px;
    height: 22px;
    background: var(--accent);
    color: var(--white);
    border-radius: 50%;
    font-size: 11px;
    font-weight: 700;
    flex-shrink: 0;
  }

  .left-footer {
    font-size: 14px;
    color: rgba(255,255,255,0.4);
    z-index: 2;
    position: relative;
  }

  .left-footer a {
    color: var(--accent2);
    text-decoration: none;
    font-weight: 500;
  }

  .left-footer a:hover { text-decoration: underline; }

  .deco {
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
  }

  .deco-circle {
    width: 320px; height: 320px;
    background: radial-gradient(circle, rgba(212,84,26,0.25) 0%, transparent 70%);
    bottom: -80px; right: -80px;
  }

  .deco-ring {
    width: 200px; height: 200px;
    border: 40px solid rgba(240,165,0,0.08);
    top: 80px; right: -60px;
  }

  /* RIGHT PANEL */
  .right-panel {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 60px 48px;
    background: var(--cream);
  }

  .form-container {
    width: 100%;
    max-width: 420px;
  }

  .form-title {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 30px;
    font-weight: 700;
    color: var(--ink);
    margin-bottom: 6px;
  }

  .form-sub {
    font-size: 14px;
    color: var(--muted);
    margin-bottom: 32px;
  }

  /* FIELDS */
  .name-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 14px;
    margin-bottom: 20px;
  }

  .field {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }

  .field label {
    font-size: 12px;
    font-weight: 500;
    color: var(--ink);
    text-transform: uppercase;
    letter-spacing: 0.07em;
    margin-bottom: 8px;
  }

  .field input {
    border: 1.5px solid var(--border);
    border-radius: var(--radius);
    padding: 12px 16px;
    font-size: 15px;
    font-family: 'DM Sans', sans-serif;
    color: var(--ink);
    background: var(--white);
    outline: none;
    transition: border-color 0.2s, box-shadow 0.2s;
    width: 100%;
  }

  .field input::placeholder { color: #bbb; }

  .field input:focus {
    border-color: var(--accent);
    box-shadow: 0 0 0 3px rgba(212,84,26,0.12);
  }

  .field input.has-error {
    border-color: #e74c3c;
  }

  .error-msg {
    font-size: 11px;
    color: #e74c3c;
    margin-top: 4px;
  }

  /* PASSWORD */
  .password-wrap { position: relative; }
  .password-wrap input { padding-right: 44px; }

  .toggle-pw {
    position: absolute;
    right: 14px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    cursor: pointer;
    color: var(--muted);
    display: flex;
    align-items: center;
    padding: 0;
    transition: color 0.2s;
  }

  .toggle-pw:hover { color: var(--ink); }

  .strength-bar {
    height: 3px;
    background: var(--border);
    border-radius: 99px;
    margin-top: 8px;
    overflow: hidden;
  }

  .strength-fill {
    height: 100%;
    border-radius: 99px;
    transition: width 0.4s ease, background 0.4s ease;
  }

  .strength-label {
    font-size: 11px;
    font-weight: 500;
    margin-top: 4px;
    display: block;
    text-align: right;
    letter-spacing: 0.04em;
    min-height: 16px;
  }

  /* CHECKBOX */
  .checkbox-label {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    font-size: 13px;
    color: var(--muted);
    line-height: 1.5;
    cursor: pointer;
    margin-bottom: 24px;
    user-select: none;
  }

  .checkbox-label input { display: none; }

  .custom-checkbox {
    width: 18px;
    height: 18px;
    border: 1.5px solid var(--border);
    border-radius: 5px;
    flex-shrink: 0;
    margin-top: 1px;
    background: var(--white);
    transition: background 0.2s, border-color 0.2s;
    position: relative;
    display: inline-block;
  }

  .custom-checkbox.checked {
    background: var(--accent);
    border-color: var(--accent);
  }

  .custom-checkbox.checked::after {
    content: '';
    position: absolute;
    left: 4px; top: 2px;
    width: 6px; height: 9px;
    border: 2px solid white;
    border-top: none;
    border-left: none;
    transform: rotate(45deg);
  }

  .checkbox-label a {
    color: var(--accent);
    text-decoration: none;
    font-weight: 500;
  }

  .checkbox-label a:hover { text-decoration: underline; }

  /* SUBMIT */
  .submit-btn {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 15px 24px;
    background: var(--ink);
    color: var(--white);
    font-size: 15px;
    font-weight: 500;
    font-family: 'DM Sans', sans-serif;
    border: none;
    border-radius: var(--radius);
    cursor: pointer;
    transition: background 0.2s, transform 0.15s, opacity 0.2s;
    margin-bottom: 28px;
    letter-spacing: 0.01em;
  }

  .submit-btn:hover:not(:disabled) {
    background: var(--accent);
    transform: translateY(-1px);
  }

  .submit-btn:active:not(:disabled) { transform: translateY(0); }
  .submit-btn:disabled { opacity: 0.65; cursor: not-allowed; }

  /* SUCCESS STATE */
  .success-state {
    text-align: center;
    padding: 40px 0;
    animation: fadeIn 0.5s ease;
  }

  .success-icon {
    width: 64px; height: 64px;
    background: var(--accent);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 20px;
    font-size: 28px;
  }

  .success-state h3 {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 24px;
    margin-bottom: 8px;
    color: var(--ink);
  }

  .success-state p {
    font-size: 14px;
    color: var(--muted);
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(12px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* DIVIDER */
  .divider {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 20px;
    color: var(--muted);
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  .divider::before, .divider::after {
    content: '';
    flex: 1;
    height: 1px;
    background: var(--border);
  }

  /* OAUTH */
  .oauth-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }

  .oauth-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 12px;
    background: var(--white);
    border: 1.5px solid var(--border);
    border-radius: var(--radius);
    font-size: 14px;
    font-weight: 500;
    font-family: 'DM Sans', sans-serif;
    color: var(--ink);
    cursor: pointer;
    transition: border-color 0.2s, box-shadow 0.2s;
  }

  .oauth-btn:hover {
    border-color: var(--accent);
    box-shadow: 0 2px 12px rgba(212,84,26,0.1);
  }

  /* RESPONSIVE */
  @media (max-width: 820px) {
    .split-layout { flex-direction: column; }
    .left-panel { width: 100%; padding: 36px 32px; min-height: auto; }
    .left-content { margin: 40px 0 32px; }
    .headline { font-size: 36px; }
    .right-panel { padding: 48px 24px; }
    .form-container { max-width: 100%; }
  }

  @media (max-width: 480px) {
    .name-row { grid-template-columns: 1fr; }
    .oauth-row { grid-template-columns: 1fr; }
  }
`;

function getStrength(pw) {
  if (!pw) return { score: 0, label: "", color: "" };
  let score = 0;
  if (pw.length >= 8) score++;
  if (/[A-Z]/.test(pw)) score++;
  if (/[0-9]/.test(pw)) score++;
  if (/[^A-Za-z0-9]/.test(pw)) score++;
  const map = ["", "Weak", "Fair", "Good", "Strong"];
  const colors = ["", "#e74c3c", "#e67e22", "#f1c40f", "#2ecc71"];
  const widths = ["0%", "25%", "50%", "75%", "100%"];
  return {
    score,
    label: map[score],
    color: colors[score],
    width: widths[score],
  };
}

function EyeIcon({ open }) {
  return open ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 48 48"
    >
      <path
        fill="#4285F4"
        d="M24 9.5c3.14 0 5.95 1.08 8.17 2.85l6.1-6.1C34.36 3.04 29.43 1 24 1 14.82 1 7.02 6.48 3.6 14.28l7.1 5.52C12.38 13.54 17.73 9.5 24 9.5z"
      />
      <path
        fill="#34A853"
        d="M46.4 24.5c0-1.56-.14-3.06-.4-4.5H24v8.52h12.6c-.55 2.9-2.2 5.36-4.68 7.02l7.2 5.6C43.1 37.08 46.4 31.28 46.4 24.5z"
      />
      <path
        fill="#FBBC05"
        d="M10.7 28.52A14.6 14.6 0 0 1 9.5 24c0-1.58.27-3.1.75-4.52l-7.1-5.52A23.96 23.96 0 0 0 0 24c0 3.86.92 7.5 2.54 10.72l8.16-6.2z"
      />
      <path
        fill="#EA4335"
        d="M24 47c5.43 0 9.99-1.8 13.32-4.88l-7.2-5.6c-1.8 1.2-4.1 1.98-6.12 1.98-6.27 0-11.62-4.04-13.3-9.5l-8.16 6.2C7.02 41.52 14.82 47 24 47z"
      />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.6-4.04-1.6-.54-1.38-1.33-1.75-1.33-1.75-1.08-.74.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.06 1.82 2.78 1.3 3.46.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02.005 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.82.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

export default function SignupPage() {
  const [form, setForm] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });
  const [showPw, setShowPw] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const strength = getStrength(form.password);

  function validate() {
    const e = {};
    if (!form.fname.trim()) e.fname = "Required";
    if (!form.lname.trim()) e.lname = "Required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email";
    if (form.password.length < 8) e.password = "Minimum 8 characters";
    if (!agreed) e.terms = "You must agree to continue";
    return e;
  }

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    setErrors((err) => ({ ...err, [e.target.name]: undefined }));
  }

  async function handleSubmit() {
    const e = validate();
    if (Object.keys(e).length) {
      setErrors(e);
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1600));
    setLoading(false);
    setSuccess(true);
  }

  return (
    <div className="signup-root">
      <style>{styles}</style>

      <div className="split-layout">
        {/* LEFT */}
        <div className="left-panel">
          <div className="brand">
            <span className="logo">⬡</span>
            <span className="brand-name">Volta</span>
          </div>

          <div className="left-content">
            <h1 className="headline">
              The future
              <br />
              <em>starts here.</em>
            </h1>
            <p className="subtext">
              Join thousands building something that actually matters. No fluff,
              just momentum.
            </p>
            <ul className="perks">
              <li>
                <span className="check">✓</span> Free 14-day trial, no card
                needed
              </li>
              <li>
                <span className="check">✓</span> Instant access to all features
              </li>
              <li>
                <span className="check">✓</span> Cancel any time, no questions
              </li>
            </ul>
          </div>

          <div className="left-footer">
            Already have an account? <a href="#">Sign in</a>
          </div>

          <div className="deco deco-circle" />
          <div className="deco deco-ring" />
        </div>

        {/* RIGHT */}
        <div className="right-panel">
          <div className="form-container">
            {success ? (
              <div className="success-state">
                <div className="success-icon">🎉</div>
                <h3>You're in!</h3>
                <p>Welcome to Volta. Check your inbox to verify your email.</p>
              </div>
            ) : (
              <>
                <h2 className="form-title">Create your account</h2>
                <p className="form-sub">Get started in under 2 minutes.</p>

                {/* Name row */}
                <div className="name-row">
                  <div className="field">
                    <label>First name</label>
                    <input
                      name="fname"
                      value={form.fname}
                      onChange={handleChange}
                      placeholder="Jane"
                      className={errors.fname ? "has-error" : ""}
                      autoComplete="given-name"
                    />
                    {errors.fname && (
                      <span className="error-msg">{errors.fname}</span>
                    )}
                  </div>
                  <div className="field">
                    <label>Last name</label>
                    <input
                      name="lname"
                      value={form.lname}
                      onChange={handleChange}
                      placeholder="Smith"
                      className={errors.lname ? "has-error" : ""}
                      autoComplete="family-name"
                    />
                    {errors.lname && (
                      <span className="error-msg">{errors.lname}</span>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div className="field">
                  <label>Email address</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@company.com"
                    className={errors.email ? "has-error" : ""}
                    autoComplete="email"
                  />
                  {errors.email && (
                    <span className="error-msg">{errors.email}</span>
                  )}
                </div>

                {/* Password */}
                <div className="field">
                  <label>Password</label>
                  <div className="password-wrap">
                    <input
                      name="password"
                      type={showPw ? "text" : "password"}
                      value={form.password}
                      onChange={handleChange}
                      placeholder="At least 8 characters"
                      className={errors.password ? "has-error" : ""}
                      autoComplete="new-password"
                    />
                    <button
                      type="button"
                      className="toggle-pw"
                      onClick={() => setShowPw((v) => !v)}
                    >
                      <EyeIcon open={showPw} />
                    </button>
                  </div>
                  <div className="strength-bar">
                    <div
                      className="strength-fill"
                      style={{
                        width: form.password ? strength.width : "0%",
                        background: strength.color,
                      }}
                    />
                  </div>
                  <span
                    className="strength-label"
                    style={{ color: strength.color }}
                  >
                    {form.password ? strength.label : ""}
                  </span>
                  {errors.password && (
                    <span className="error-msg">{errors.password}</span>
                  )}
                </div>

                {/* Checkbox */}
                <label
                  className="checkbox-label"
                  onClick={() => {
                    setAgreed((v) => !v);
                    setErrors((e) => ({ ...e, terms: undefined }));
                  }}
                >
                  <span
                    className={`custom-checkbox ${agreed ? "checked" : ""}`}
                  />
                  I agree to the{" "}
                  <a href="#" onClick={(e) => e.stopPropagation()}>
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" onClick={(e) => e.stopPropagation()}>
                    Privacy Policy
                  </a>
                </label>
                {errors.terms && (
                  <div
                    className="error-msg"
                    style={{ marginTop: -16, marginBottom: 12 }}
                  >
                    {errors.terms}
                  </div>
                )}

                {/* Submit */}
                <button
                  className="submit-btn"
                  onClick={handleSubmit}
                  disabled={loading}
                >
                  <span>
                    {loading ? "Creating account…" : "Create account"}
                  </span>
                  {!loading && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  )}
                </button>

                <div className="divider">
                  <span>or sign up with</span>
                </div>

                <div className="oauth-row">
                  <button className="oauth-btn">
                    <GoogleIcon /> Google
                  </button>
                  <button className="oauth-btn">
                    <GitHubIcon /> GitHub
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
