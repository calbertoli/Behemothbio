import { LoadingImage } from "../components/LoadingImage";
import { Heart, Shield, Microscope, Globe, Users, Target } from "lucide-react";

export function MissionPage() {
  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "Every species has intrinsic value and deserves protection and preservation.",
      expanded: "We believe that all life on Earth is interconnected and sacred. Our approach to de-extinction and conservation is rooted in deep respect for the natural world and a commitment to minimizing suffering while maximizing biodiversity."
    },
    {
      icon: Shield,
      title: "Conservation",
      description: "Using cutting-edge science to safeguard biodiversity for future generations.",
      expanded: "Our conservation efforts go beyond simply preserving existing species. We work to restore entire ecosystems, reintroduce keystone species, and create sustainable habitats that can support thriving populations for centuries to come."
    },
    {
      icon: Microscope,
      title: "Innovation",
      description: "Pioneering genetic techniques to reverse extinction and restore ecosystems.",
      expanded: "We push the boundaries of what's scientifically possible while maintaining rigorous ethical standards. Our team develops breakthrough technologies in genomics, synthetic biology, and conservation ecology that are shared openly with the global scientific community."
    }
  ];

  const principles = [
    {
      icon: Globe,
      title: "Ecosystem First",
      description: "We prioritize holistic ecosystem health over individual species revival, ensuring any reintroduction supports broader environmental balance."
    },
    {
      icon: Users,
      title: "Community Partnership",
      description: "We work closely with local communities, indigenous peoples, and conservation organizations to ensure our work benefits both wildlife and humanity."
    },
    {
      icon: Target,
      title: "Evidence-Based Action",
      description: "Every decision is grounded in peer-reviewed research, extensive testing, and transparent data sharing with the scientific community."
    }
  ];

  const impact = [
    {
      number: "12",
      label: "Species Projects",
      description: "Active de-extinction and conservation initiatives"
    },
    {
      number: "50+",
      label: "Research Partners",
      description: "Collaborating institutions worldwide"
    },
    {
      number: "500K+",
      label: "Hectares Protected",
      description: "Land secured for species reintroduction"
    },
    {
      number: "98%",
      label: "Genetic Accuracy",
      description: "Precision in genome reconstruction"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-neutral-900 dark:text-white mb-6">Our Mission</h1>
          <p className="text-neutral-600 dark:text-neutral-400 text-lg">
            To reverse the tide of extinction through advanced biotechnology while fostering a deeper understanding of our responsibility to protect Earth's biodiversity for all future generations.
          </p>
        </div>
        <div className="rounded-3xl overflow-hidden">
          <LoadingImage
            src="https://images.unsplash.com/photo-1516298773066-c48f8e9bd92b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aWxkbGlmZSUyMGVjb3N5c3RlbSUyMG5hdHVyZXxlbnwxfHx8fDE3NjI1NzYzMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Wildlife ecosystem"
            className="w-full h-[400px] md:h-[500px] object-cover"
          />
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-white dark:bg-neutral-800 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-neutral-900 dark:text-white mb-4">Our Core Values</h2>
            <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              These principles guide every decision we make and every project we undertake.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-white mb-6">
                  <value.icon className="w-10 h-10" />
                </div>
                <h3 className="text-neutral-900 dark:text-white mb-3">{value.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-4">{value.description}</p>
                <p className="text-neutral-500 dark:text-neutral-500 text-sm leading-relaxed">{value.expanded}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-3xl overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1591608971362-f08b2a75731a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmRhbmdlcmVkJTIwYW5pbWFscyUyMGNvbnNlcnZhdGlvbnxlbnwxfHx8fDE3NjI1NzYzMzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Conservation challenge"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-neutral-900 dark:text-white mb-6">The Challenge We Face</h2>
            <p className="text-neutral-600 dark:text-neutral-400 mb-4">
              We are living through the sixth mass extinction event in Earth's history. Species are disappearing at a rate 1,000 times faster than natural background extinction rates. Climate change, habitat loss, and human activity have pushed countless species to the brink.
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 mb-4">
              But unlike previous mass extinctions, this one is within our power to stop. We have the scientific knowledge, technological capability, and ethical responsibility to act.
            </p>
            <p className="text-neutral-600 dark:text-neutral-400">
              behemoth exists at the intersection of cutting-edge science and urgent conservation need. We're not just studying the problem—we're actively working to reverse it.
            </p>
          </div>
        </div>
      </section>

      {/* Operating Principles */}
      <section className="bg-white dark:bg-neutral-800 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-neutral-900 dark:text-white mb-4">How We Work</h2>
            <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Our operating principles ensure that our work is responsible, collaborative, and effective.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {principles.map((principle) => (
              <div key={principle.title} className="bg-neutral-50 dark:bg-neutral-900 rounded-2xl p-8">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 mb-4">
                  <principle.icon className="w-6 h-6" />
                </div>
                <h3 className="text-neutral-900 dark:text-white mb-3">{principle.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-neutral-900 dark:text-white mb-4">Our Impact</h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Measurable progress toward a more biodiverse future.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {impact.map((stat) => (
            <div key={stat.label} className="text-center p-6 bg-neutral-50 dark:bg-neutral-800 rounded-2xl">
              <div className="text-4xl md:text-5xl text-neutral-900 dark:text-white mb-2">{stat.number}</div>
              <div className="text-neutral-900 dark:text-white mb-2">{stat.label}</div>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Vision Statement */}
      <section className="bg-neutral-900 dark:bg-neutral-950 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-white dark:text-neutral-100 mb-6">Our Vision for the Future</h2>
          <p className="text-neutral-300 dark:text-neutral-400 text-lg mb-8">
            We envision a world where extinction is no longer irreversible. Where damaged ecosystems can be restored. Where future generations inherit a planet as rich in biodiversity as the one we received—or richer still.
          </p>
          <p className="text-neutral-300 dark:text-neutral-400 text-lg">
            This is not science fiction. This is the work we do every day, guided by compassion, powered by innovation, and driven by an unwavering commitment to life on Earth.
          </p>
        </div>
      </section>
    </div>
  );
}
