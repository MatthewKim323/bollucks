import type { Metadata } from "next";
import "./site.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bollucks | Control Plane for Agent Reliability",
  description: "We run the knowledge your AI agents answer from, and grade every answer against it.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="overscroll-none" style={{ scrollBehavior: "auto" }}>
      <body className="antialiased overscroll-none">{children}</body>
    </html>
  );
}
