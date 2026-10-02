import { Navbar } from "@/components/Navbar";
import { HeroDecision } from "@/components/short/HeroDecision";
import { Chamber } from "@/components/short/Chamber";
import { LocationQuote } from "@/components/short/LocationQuote";
import { StickyCta } from "@/components/short/StickyCta";

/**
 * Короткая главная (v2) — mobile-first, ~3 экрана.
 * Длинный лендинг: см. page-long.tsx.archive и ROLLBACK.md
 */
export default function Home() {
  return (
    <main className="overflow-x-hidden pb-20 md:pb-0">
      <Navbar />
      <HeroDecision />
      <Chamber />
      <LocationQuote />
      <StickyCta />
    </main>
  );
}
