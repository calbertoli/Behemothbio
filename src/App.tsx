import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Feature } from "./components/Feature";
import { Mission } from "./components/Mission";
import { Projects } from "./components/Projects";
import { Science } from "./components/Science";
import { CallToAction } from "./components/CallToAction";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />
      <Hero />
      <Feature />
      <Mission />
      <Projects />
      <Science />
      <CallToAction />
      <Footer />
    </div>
  );
}
