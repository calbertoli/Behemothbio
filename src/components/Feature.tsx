import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Feature() {
  return (
    <section className="px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden min-h-[400px] md:min-h-[500px]">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1662727247588-e0fc9e1d7d8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmN0aWMlMjB0dW5kcmElMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzYyNDUxMzQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Arctic landscape"
            className="w-full h-full object-cover absolute inset-0"
          />
          <div className="relative z-10 h-full flex items-center justify-center md:justify-end p-12">
            <div className="max-w-xl text-center md:text-right">
              <h2 className="text-white mb-6">
                Rebuilding Ancient Ecosystems
              </h2>
              <p className="text-white/90">
                Through careful genetic reconstruction and ecological planning, we're working to restore the balance of ecosystems that once thrived across our planet, bringing back keystone species that can help reverse environmental degradation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
