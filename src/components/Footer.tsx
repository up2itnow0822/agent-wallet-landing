import Link from "next/link";

const products = [
  { name: "ClawPowers Agent", href: "https://github.com/up2itnow0822/ClawPowers-Agent" },
  { name: "ClawPowers Commerce", href: "https://github.com/up2itnow0822/ClawPowers-Commerce" },
  { name: "ClawPowers Skills", href: "https://www.npmjs.com/package/clawpowers" },
];

const developers = [
  { name: "GitHub", href: "https://github.com/up2itnow0822" },
  { name: "npm", href: "https://www.npmjs.com/package/clawpowers" },
  { name: "Documentation", href: "https://github.com/up2itnow0822/ClawPowers-Agent" },
  { name: "x402 Protocol", href: "https://x402.org" },
];

const community = [
  { name: "Discord", href: "https://discord.gg/agentecon" },
  { name: "X (@AgentEconoemy)", href: "https://x.com/AgentEconoemy" },
  {
    name: "Newsletter / blog",
    href: "https://ai-agent-economy.hashnode.dev",
  },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--bg-primary)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-14">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2 no-underline w-fit">
              <span
                className="font-bold text-sm tracking-tight"
                style={{ color: "var(--text-primary)" }}
              >
                AI-AGENT-ECONOMY<span style={{ color: "var(--cyan)" }}>.COM</span>
              </span>
            </Link>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              Payment infrastructure for the autonomous agent economy — non-custodial
              wallets, x402 micropayments, and cross-chain identity.
            </p>
          </div>

          <div>
            <h4
              className="font-semibold text-xs uppercase tracking-widest mb-4"
              style={{ color: "var(--text-primary)" }}
            >
              Products
            </h4>
            <ul className="flex flex-col gap-3 list-none p-0 m-0">
              {products.map((p) => (
                <li key={p.name}>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link text-sm font-mono no-underline"
                  >
                    {p.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className="font-semibold text-xs uppercase tracking-widest mb-4"
              style={{ color: "var(--text-primary)" }}
            >
              Developers
            </h4>
            <ul className="flex flex-col gap-3 list-none p-0 m-0">
              {developers.map((d) => (
                <li key={d.name}>
                  <a
                    href={d.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link text-sm no-underline"
                  >
                    {d.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className="font-semibold text-xs uppercase tracking-widest mb-4"
              style={{ color: "var(--text-primary)" }}
            >
              Community
            </h4>
            <ul className="flex flex-col gap-3 list-none p-0 m-0">
              {community.map((c) => (
                <li key={c.name}>
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link text-sm no-underline"
                  >
                    {c.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="flex flex-col md:flex-row items-center justify-between gap-6 pt-10"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <p className="text-xs font-mono text-center md:text-left" style={{ color: "var(--text-muted)" }}>
            © 2026 AI Agent Economy. All rights reserved. Patent Pending. · AI Agent Economy LLC (formation pending)
          </p>
          <div className="flex gap-5 items-center">
            <a
              href="https://github.com/up2itnow0822"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon-link"
              aria-label="GitHub"
            >
              <GithubIcon />
            </a>
            <a
              href="https://www.npmjs.com/package/clawpowers"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon-link"
              aria-label="npm"
            >
              <NpmIcon />
            </a>
            <a
              href="https://x.com/AgentEconoemy"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon-link"
              aria-label="X (@AgentEconoemy)"
            >
              <XIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function GithubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.4.6.1.82-.26.82-.57v-2c-3.34.72-4.04-1.6-4.04-1.6-.54-1.38-1.33-1.75-1.33-1.75-1.08-.74.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.06 1.82 2.78 1.3 3.46.99.1-.77.41-1.3.75-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 016 0C17.3 4.68 18.3 5 18.3 5c.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.68.82.57C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function NpmIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M0 0v24h24V0H0zm19.2 19.2H12v-9.6h-2.4v9.6H4.8V4.8h14.4v14.4z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.259 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
    </svg>
  );
}
