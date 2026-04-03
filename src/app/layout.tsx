import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const siteUrl = "https://ai-agent-economy.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "AI Agent Economy — Payment Infrastructure for AI Agents",
  description:
    "Non-custodial payment rails, agent identity, and site protection for the autonomous agent economy. ClawPowers Agent, Commerce, and Skills.",
  keywords: [
    "AI agent payments",
    "x402",
    "agentwallet-sdk",
    "agentpay-mcp",
    "agent economy",
    "blockchain payments",
    "non-custodial wallet",
    "MCP tools",
  ],
  openGraph: {
    title: "AI Agent Economy — Payment Infrastructure for AI Agents",
    description:
      "Non-custodial payment rails, agent identity, and site protection for the autonomous agent economy. ClawPowers Agent, Commerce, and Skills.",
    type: "website",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    site: "@AgentEconoemy",
    title: "AI Agent Economy — Payment Infrastructure for AI Agents",
    description:
      "Non-custodial payment rails, agent identity, and site protection for the autonomous agent economy. ClawPowers Agent, Commerce, and Skills.",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AI Agent Economy",
  url: siteUrl,
  sameAs: [
    "https://github.com/up2itnow0822",
    "https://x.com/AgentEconoemy",
    "https://www.npmjs.com/package/agentwallet-sdk",
  ],
  description:
    "Non-custodial payment infrastructure for AI agents: x402, MCP tools, ERC-8004 identity, multi-chain CCTP.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        {children}
      </body>
    </html>
  );
}
