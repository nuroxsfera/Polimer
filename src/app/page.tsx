import { Hero } from "@/components/Hero";
import { Why } from "@/components/Why";
import { Technology } from "@/components/Technology";
import { Process } from "@/components/Process";
import { Applications } from "@/components/Applications";
import { Palette } from "@/components/Palette";
import { Projects } from "@/components/Projects";
import { Quality } from "@/components/Quality";
import { Capacity } from "@/components/Capacity";
import { Reviews } from "@/components/Reviews";
import { Faq } from "@/components/Faq";
import { ContactFooter } from "@/components/ContactFooter";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Why />
      <Technology />
      <Process />
      <Applications />
      <Palette />
      <Projects />
      <Quality />
      <Capacity />
      <Reviews />
      <Faq />
      <ContactFooter />
    </main>
  );
}
