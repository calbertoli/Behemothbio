import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Science() {
  return (
    <section id="science" className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="rounded-3xl overflow-hidden">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1583912086005-ac9abca6c9db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW5ldGljJTIwbGFib3JhdG9yeSUyMHNjaWVuY2V8ZW58MXx8fHwxNzYyNDQ5MDQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Genetic laboratory"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h2 className="text-neutral-900 mb-6">The Science Behind Our Work</h2>
          <p className="text-neutral-600 mb-6">
            Our interdisciplinary team combines expertise in genomics, synthetic biology, and conservation ecology to tackle the biodiversity crisis.
          </p>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-neutral-100 text-neutral-900 flex items-center justify-center">
                1
              </div>
              <div>
                <h4 className="text-neutral-900 mb-1">DNA Sequencing & Analysis</h4>
                <p className="text-neutral-600">Advanced genomic techniques to map and understand genetic diversity.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-neutral-100 text-neutral-900 flex items-center justify-center">
                2
              </div>
              <div>
                <h4 className="text-neutral-900 mb-1">CRISPR Gene Editing</h4>
                <p className="text-neutral-600">Precision tools to restore extinct genetic traits and enhance resilience.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-neutral-100 text-neutral-900 flex items-center justify-center">
                3
              </div>
              <div>
                <h4 className="text-neutral-900 mb-1">Ecosystem Restoration</h4>
                <p className="text-neutral-600">Reintroducing species to rebuild and balance natural habitats.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
