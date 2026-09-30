import type { ReactNode } from "react";
import { NavScrim } from "@/components/sections/nav-scrim";
import { Nav } from "@/components/sections/nav";
import { Hero } from "@/components/sections/hero";
import { CustomerStories } from "@/components/sections/customer-stories";
import { Ground } from "@/components/sections/ground";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Integrations } from "@/components/sections/integrations";
import { Security } from "@/components/sections/security";
import { FinalCta } from "@/components/sections/final-cta";
import { Footer } from "@/components/sections/footer";
import { CookieBanner } from "@/components/sections/cookie-banner";
import { QuoteTooltip } from "@/components/sections/quote-tooltip";

const SECTIONS: Record<string, () => ReactNode> = {
  hero: Hero,
  "customer-stories": CustomerStories,
  ground: Ground,
  "how-it-works": HowItWorks,
  integrations: Integrations,
  security: Security,
  "final-cta": FinalCta,
  footer: Footer,
  nav: Nav,
};

export default async function Home({ searchParams }: PageProps<"/">) {
  const { only } = await searchParams;
  if (typeof only === "string" && SECTIONS[only]) {
    const One = SECTIONS[only];
    return only === "footer" || only === "nav" ? <One /> : <main className="relative z-10 bg-[var(--hd-bg-base)]"><One /></main>;
  }
  return (
    <>
      <NavScrim />
      <Nav />
      <main className="relative z-10 bg-[var(--hd-bg-base)]">
        <Hero />
        <CustomerStories />
        <Ground />
        <HowItWorks />
        <Integrations />
        <Security />
        <FinalCta />
      </main>
      <Footer />
      <CookieBanner />
      <QuoteTooltip />
    </>
  );
}
