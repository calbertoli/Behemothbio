import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-neutral-900 mb-6">
            Restoring Life, Preserving the Future
          </h1>
          <p className="text-neutral-600 mb-8">
            We're pioneering advanced genetic technologies to bring extinct species back to life and protect endangered populations from disappearing forever.
          </p>
          <div className="flex gap-4">
            <button className="px-6 py-3 bg-neutral-900 text-white rounded-lg hover:bg-neutral-900/90 transition-colors flex items-center gap-2">
              Learn More
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="px-6 py-3 border border-neutral-300 text-neutral-700 rounded-lg hover:bg-neutral-100 transition-colors">
              Our Research
            </button>
          </div>
        </div>
        <div className="rounded-3xl overflow-hidden">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1672586658825-e653341241fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmRhbmdlcmVkJTIwc3BlY2llcyUyMHdpbGRsaWZlfGVufDF8fHx8MTc2MjQ0OTAzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Wildlife conservation"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
