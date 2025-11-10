import { Heart, Shield, Microscope } from "lucide-react";

export function Mission() {
  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "Every species has intrinsic value and deserves protection and preservation."
    },
    {
      icon: Shield,
      title: "Conservation",
      description: "Using cutting-edge science to safeguard biodiversity for future generations."
    },
    {
      icon: Microscope,
      title: "Innovation",
      description: "Pioneering genetic techniques to reverse extinction and restore ecosystems."
    }
  ];

  return (
    <section id="mission" className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h2 className="text-neutral-900 dark:text-white mb-4">Our Mission</h2>
        <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
          Through advanced biotechnology and dedicated research, we're working to reverse extinction events and protect endangered species from vanishing forever.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {values.map((value) => (
          <div key={value.title} className="text-center p-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white mb-4">
              <value.icon className="w-8 h-8" />
            </div>
            <h3 className="text-neutral-900 dark:text-white mb-3">{value.title}</h3>
            <p className="text-neutral-600 dark:text-neutral-400">{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
