import { LoadingImage } from "./LoadingImage";
import { Briefcase } from "lucide-react";

export function CallToAction() {
  return (
    <section id="contact" className="bg-white dark:bg-neutral-800 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center bg-neutral-900 dark:bg-neutral-950 rounded-3xl overflow-hidden">
          <div className="p-12">
            <h2 className="text-white dark:text-neutral-100 mb-4 text-[40px]">Join Our Mission</h2>
            <p className="text-neutral-300 dark:text-neutral-400 mb-8">
              Whether you're a researcher, conservationist, or supporter, there are many ways to contribute to preserving Earth's biodiversity.
            </p>
            <button className="px-6 py-3 border-2 border-white dark:border-neutral-300 text-white dark:text-neutral-100 rounded-lg hover:bg-white/10 dark:hover:bg-neutral-800 transition-colors flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              Get Involved
            </button>
          </div>
          <div className="h-full min-h-[400px]">
            <LoadingImage
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
