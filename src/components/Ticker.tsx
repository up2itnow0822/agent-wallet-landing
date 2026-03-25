"use client";

const items = [
  "NVIDIA NeMo · ecosystem integration",
  "879+ weekly npm downloads",
  "17 chains · CCTP",
  "x402 protocol native",
  "ERC-8004 on-chain identity",
  "Base mainnet live",
];

export default function Ticker() {
  const doubled = [...items, ...items];

  return (
    <div className="ticker-wrapper py-3 md:py-3.5" aria-label="Highlights">
      <div className="ticker-track">
        {doubled.map((item, i) => (
          <span key={`${item}-${i}`} className="ticker-item">
            <span className="ticker-dot" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
