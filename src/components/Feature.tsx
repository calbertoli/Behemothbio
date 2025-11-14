import image_3dc2446cd8945f3670cf5e1058a9ba52f91671ef from 'figma:asset/3dc2446cd8945f3670cf5e1058a9ba52f91671ef.png';
import image_24e310617ff18048e8c8bf64a260ffff1f9003f2 from 'figma:asset/24e310617ff18048e8c8bf64a260ffff1f9003f2.png';
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Feature() {
  return (
    <section className="px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden min-h-[400px] md:min-h-[500px]">
          <ImageWithFallback
            src={image_3dc2446cd8945f3670cf5e1058a9ba52f91671ef}
            alt="Arctic landscape"
            className="w-full h-full object-cover absolute inset-0"
          />
          <div className="relative z-10 h-full flex items-center justify-center md:justify-start p-12">
            <div className="max-w-xl text-center md:text-left">
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
