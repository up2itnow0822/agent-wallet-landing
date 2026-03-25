# Website Build Task: ai-agent-economy.com

## Goal
Build a cutting-edge, production-ready Next.js website for AI Agent Economy that grabs visitors' attention and compels them to learn about our products. This is NOT a generic template — it should feel like a top-tier Web3/AI startup's launch page.

## Reference Designs
The `reference/` directory contains Google Stitch-generated HTML mockups and screenshots. Use these as design inspiration:

- `reference/landing_page_dark_theme/` — PRIMARY reference for the main landing page (dark theme, cyan accents)
- `reference/project_family_payment_gateways/` — Reference for the payments/architecture section energy
- `reference/project_family_smart_wallets/` — Reference for wallet product cards
- `reference/taskbridge_agentic_orchestration_landing_page/` — Reference for TaskBridge section

## Design System

### Colors
- Background: Deep navy `#101f22` (dark) / `#f5f8f8` (light, optional)
- Primary: Cyan `#0dccf2`
- Cards: `rgba(13, 204, 242, 0.05)` with backdrop blur
- Text: `#f1f5f9` (headings), `#94a3b8` (body)
- Borders: `rgba(13, 204, 242, 0.1)`

### Typography
- Font: Inter (Google Fonts) — weights 400, 500, 600, 700, 800, 900
- H1: 5xl-7xl, font-black, tracking-tighter
- H2: 3xl-4xl, font-bold
- Body: text-lg, text-slate-400

### Effects (CRITICAL for the design language)
- Glass cards: `backdrop-filter: blur(12px)` with semi-transparent bg
- Glow accents: `box-shadow: 0 0 20px rgba(13, 204, 242, 0.3)`
- Floating animations on hero graphics
- Radial fade masks on decorative images
- Lightning/energy dividers between sections (animated cyan glow strip)
- Particle canvas or subtle animated background
- Scroll-triggered reveals on sections

### Layout
- Max width: 7xl (1280px)
- Generous whitespace between sections (py-24 to py-32)
- Responsive: mobile-first, cards stack on mobile

## Page Sections (in order)

### 1. Navbar (sticky, glass-blur)
- Logo: "AI-AGENT-ECONOMY" with ".COM" in cyan
- Nav links: Products, Developers, GitHub, npm
- CTA: "Get Started" button with glow

### 2. Hero Section
- Left column: Badge ("AUTONOMOUS AGENT PAYMENTS"), headline, subtext, two CTAs
- Right column: Animated crystal/network graphic with radial fade mask and floating animation
- Headline: "The Future of **Autonomous Commerce**" (gradient text on "Autonomous Commerce")
- Subtext: "Empowering AI agents with non-custodial wallets, x402 payments, and spending controls. The infrastructure for agents that actually pay for things."
- CTAs: "Get Started" (filled cyan), "View on GitHub" (ghost button linking to https://github.com/up2itnow0822)

### 3. Stats Ticker (animated, horizontal scroll)
- NVIDIA NeMo Integration ✓
- 879+ weekly npm downloads
- 17-chain CCTP support
- x402 protocol native
- ERC-8004 identity
- Base mainnet live

### 4. Stats Bar (3 columns)
- "3 Production Packages" — agentwallet-sdk, agentpay-mcp, clawpowers
- "17 Chains Supported" — via CCTP cross-chain bridging
- "1 Patent Filed" — USPTO provisional, March 2026

### 5. Lightning Divider (animated cyan glow strip)

### 6. Products Section ("Built for Agents. Powered by Crypto.")
Three product cards with icons, each linking to npm:

**agentwallet-sdk** (https://www.npmjs.com/package/agentwallet-sdk)
- Icon: wallet/shield
- "Non-custodial AI agent wallets with on-chain spending limits. ERC-6551 TBA, ERC-8004 identity, x402 payments, 17-chain CCTP bridging, Uniswap V3 swaps."
- Tags: npm, 879/wk downloads

**agentpay-mcp** (https://www.npmjs.com/package/agentpay-mcp)
- Icon: payment terminal
- "Drop-in MCP payment server for Claude Code, Cursor, and any MCP-compatible agent. Non-custodial x402 payments with spending limits."
- Tags: npm, 232/wk downloads

**clawpowers** (https://www.npmjs.com/package/clawpowers)
- Icon: lightning/skills
- "27 production skills for coding agents. Runtime execution, persistent memory, self-improvement, and autonomous payments."
- Tags: npm, 626/wk downloads

### 7. Lightning Divider

### 8. Features Section ("Why Agents Need Their Own Wallets")
Feature grid (2x3 or 3x2):
- **Non-Custodial** — "Agents hold their own keys via ERC-4337 smart accounts. No pooled funds."
- **Spending Controls** — "Per-task budgets, session limits, allowlisted recipients. Fail-closed by default."
- **x402 Native** — "HTTP 402 Payment Required becomes machine-negotiable. 75M+ mainnet transactions."
- **Cross-Chain** — "17 chains via CCTP. Bridge USDC from Base to Arbitrum, Solana, and more."
- **Identity & Reputation** — "ERC-8004 on-chain identity. Agents build reputation through verified transactions."
- **Framework Agnostic** — "Works with Claude Code, Cursor, OpenCode, LangChain, AutoGen, smolagents."

### 9. Lightning Divider

### 10. Architecture Section ("How It Works")
- Energy bridge lightning bolt graphic above
- Sequence diagram or code block showing the x402 flow:
  1. Agent → HTTP Request → Service
  2. Service → 402 Payment Required
  3. Agent → check_spending() → Budget OK
  4. Agent → send_payment() → Transaction signed
  5. Agent → Retry request → 200 OK + response
- Use a styled code block with syntax highlighting
- Show the MCP config JSON as a "drop-in" example

### 11. Social Proof / Integrations Section
- "Trusted by the Ecosystem"
- NVIDIA NeMo Agent Toolkit — PR #17 merged (official x402 payment tool)
- Platform submissions: AutoGen, smolagents, Agent Control
- Framework logos or badges

### 12. Lightning Divider

### 13. CTA Section
- Neural brain graphic as subtle background (7% opacity, blurred)
- "Start Building with Agent Payments"
- "npm install agentwallet-sdk" (copyable code block)
- Buttons: "Read the Docs" → GitHub, "Join Discord" → discord link
- Discord: https://discord.gg/agentecon (placeholder)

### 14. Footer
- Logo + tagline: "Infrastructure for the autonomous economy"
- Products column: agentwallet-sdk, agentpay-mcp, clawpowers
- Developers column: GitHub, npm, Documentation, x402 Protocol
- Community column: Discord, X (@AgentEconoemy), Newsletter
- Legal: © 2026 AI Agent Economy. All rights reserved. Patent Pending.
- Social icons: GitHub (https://github.com/up2itnow0822), X (https://x.com/AgentEconoemy)

## Technical Requirements
- Next.js 15 with App Router (already scaffolded)
- Tailwind CSS v4
- Framer Motion for animations (scroll reveals, floating effects, parallax)
- TypeScript
- All images/graphics as inline SVGs or CSS art — NO external image dependencies
- Responsive: looks great on mobile, tablet, and desktop
- Performance: target 90+ Lighthouse score
- SEO: proper meta tags, Open Graph, structured data

## Content Tone
- Technical but accessible
- Confident, not salesy
- Developer-focused: show code, show npm commands
- Emphasize "production-ready" and "already shipping"

## Real URLs to Link
- GitHub: https://github.com/up2itnow0822
- npm agentwallet-sdk: https://www.npmjs.com/package/agentwallet-sdk
- npm agentpay-mcp: https://www.npmjs.com/package/agentpay-mcp
- npm clawpowers: https://www.npmjs.com/package/clawpowers
- x402 protocol: https://x402.org
- NVIDIA PR: https://github.com/NVIDIA/NeMo-Agent-Toolkit-Examples/pull/17
- X/Twitter: https://x.com/AgentEconoemy

## DO NOT
- Use fake metrics ($420M, 12,542 agents — these were placeholder)
- Reference TaskBridge as a live product (it's a future project)
- Use stock photos or placeholder images
- Make it look generic or template-like
- Include a pricing section (we don't have pricing yet)
