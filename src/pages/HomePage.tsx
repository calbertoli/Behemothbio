import { Hero } from "../components/Hero";
import { Feature } from "../components/Feature";
import { Mission } from "../components/Mission";
import { Projects } from "../components/Projects";
import { Science } from "../components/Science";
import { People } from "../components/People";
import { CallToAction } from "../components/CallToAction";

export function HomePage() {
  return (
    <>
      <Hero />
      <Feature />
      <Mission />
      <Projects />
      <Science />
      <People />
      <CallToAction />
    </>
  );
}
