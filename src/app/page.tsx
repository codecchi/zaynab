import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Marquee } from "@/components/marquee";
import { Work } from "@/components/work";
import { Process } from "@/components/process";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <Marquee />
        <Work />
        <Process />
      </main>
      <Contact />
    </>
  );
}
