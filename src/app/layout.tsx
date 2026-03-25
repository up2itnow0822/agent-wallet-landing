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
  title: "AI Agent Economy — Infrastructure for Agents That Pay",
  description:
    "Your AI agent hits a paid API. It needs to pay — safely, with caps, with human approval. That's what we build. Non-custodial · Open Source · Patent Pending",
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
    title: "AI Agent Economy — Infrastructure for Agents That Pay",
    description:
      "Non-custodial payment infrastructure for AI agents. x402, 17-chain CCTP, ERC-8004, MCP tools.",
    type: "website",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    site: "@AgentEconoemy",
    title: "AI Agent Economy — Infrastructure for Agents That Pay",
    description:
      "Non-custodial payment infrastructure for AI agents. x402, 17-chain CCTP, ERC-8004, MCP tools.",
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
