import { Navbar } from "@/components/Navbar";
import { HeroDecision } from "@/components/short/HeroDecision";
import { Chamber } from "@/components/short/Chamber";
import { LocationQuote } from "@/components/short/LocationQuote";
import { StickyCta } from "@/components/short/StickyCta";
import { ScrollTop } from "@/components/short/ScrollTop";

export default function Home() {
  return (
    <main className="overflow-x-hidden pb-24 md:pb-0">
      <ScrollTop />
      <Navbar />
      <HeroDecision />
      <Chamber />
      <LocationQuote />
      <StickyCta />
    </main>
  );
}
