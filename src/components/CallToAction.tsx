import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Mail } from "lucide-react";

export function CallToAction() {
  return (
    <section id="contact" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center bg-neutral-900 rounded-3xl overflow-hidden">
          <div className="p-12">
            <h2 className="text-white mb-4">Join Our Mission</h2>
            <p className="text-neutral-300 mb-8">
              Whether you're a researcher, conservationist, or supporter, there are many ways to contribute to preserving Earth's biodiversity.
            </p>
            <button className="px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Get Involved
            </button>
          </div>
          <div className="h-full min-h-[400px]">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1694701478292-3f60eb30c3b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkbmElMjByZXNlYXJjaCUyMG1pY3Jvc2NvcGV8ZW58MXx8fHwxNzYyNDQ5MDQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="DNA research"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
