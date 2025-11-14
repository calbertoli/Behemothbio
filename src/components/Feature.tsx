import image_3dc2446cd8945f3670cf5e1058a9ba52f91671ef from 'figma:asset/3dc2446cd8945f3670cf5e1058a9ba52f91671ef.png';
import image_24e310617ff18048e8c8bf64a260ffff1f9003f2 from 'figma:asset/24e310617ff18048e8c8bf64a260ffff1f9003f2.png';
import { LoadingImage } from "./LoadingImage";

export function Feature() {
  return (
    <section className="px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden min-h-[400px] md:min-h-[500px]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover absolute inset-0"
            poster={image_3dc2446cd8945f3670cf5e1058a9ba52f91671ef}
          >
            <source src="https://behemoth.bio/videos/gene-interpolation-loop.mp4" type="video/mp4" />
            {/* Fallback to poster image if video fails */}
          </video>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-b-3xl p-12">
            <div className="max-w-xl">
              <h2 className="text-white mb-6 text-[48px]">
                Gene Interpolation
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
