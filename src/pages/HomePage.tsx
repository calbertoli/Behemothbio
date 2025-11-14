import { useEffect } from "react";
import { Hero } from "../components/Hero";
import { Feature } from "../components/Feature";
import { Mission } from "../components/Mission";
import { Projects } from "../components/Projects";
import { Science } from "../components/Science";
import { People } from "../components/People";
import { CallToAction } from "../components/CallToAction";

export function HomePage() {
  useEffect(() => {
    document.title = "Behemoth - For a Wild Future";
  }, []);

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
