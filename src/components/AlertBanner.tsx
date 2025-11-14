import { useState } from "react";
import { Info, X, ChevronDown, ChevronUp } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { LoadingImage } from "./LoadingImage";

export function AlertBanner() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (isCollapsed) {
    return (
      <div className="bg-red-50 dark:bg-neutral-900 border-b border-red-200 dark:border-neutral-700">
        <div className="max-w-7xl mx-auto px-6 py-2">
          <button
            onClick={() => setIsCollapsed(false)}
            className="flex items-center gap-2 text-red-800 dark:text-neutral-300 hover:text-red-900 dark:hover:text-white transition-colors w-full justify-center"
          >
            <ChevronDown className="w-4 h-4" />
            <span className="text-sm">In Memoriam: Founder Gareth Valmont</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="bg-red-50 dark:bg-neutral-900 border-b border-red-200 dark:border-neutral-700">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-start gap-4">
            <Info className="w-5 h-5 text-red-800 dark:text-neutral-400 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="text-red-900 dark:text-neutral-200">
                <strong>Important Update:</strong> We are heartbroken to share the passing of our founder and guiding voice, Gareth Valmont. His vision for a restored planet and his tireless curiosity shaped every part of Behemoth.{" "}
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="underline hover:text-red-700 dark:hover:text-white transition-colors"
                >
                  Read full statement
                </button>
              </p>
            </div>
            <button
              onClick={() => setIsCollapsed(true)}
              className="text-red-800 dark:text-neutral-400 hover:text-red-900 dark:hover:text-white transition-colors flex-shrink-0"
              aria-label="Collapse alert"
            >
              <ChevronUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Modal Dialog */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          {/* Memorial Image */}
          <div className="w-full relative mb-4">
            <LoadingImage 
              src="https://behemoth.bio/images/remembering-gareth.jpg" 
              alt="Memorial for Dr. Gareth Valmont" 
              className="w-full h-auto rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-b-lg p-6 pb-8">
              <DialogHeader className="text-center">
                <DialogTitle className="text-2xl text-white">
                  In Memory of Gareth Valmont
                </DialogTitle>
                <DialogDescription className="text-white/90 mt-2">
                  Founder & Visionary Leader of Behemoth
                </DialogDescription>
              </DialogHeader>
            </div>
          </div>
          
          <div className="space-y-4 text-neutral-700 dark:text-neutral-300 leading-relaxed mt-4">
            <p>
              It is with profound sadness that we announce the passing of Dr. Gareth Valmont, founder and chief executive of Behemoth Biotech, on October 3rd, 2029. Dr. Valmont's life was dedicated to the ambitious mission of reversing extinction and restoring balance to our planet's ecosystems.
            </p>
            
            <p>
              The incident occurred during a routine behavioral assessment of our Pleistocene wolf pack at our primary research facility. Despite comprehensive safety protocols, one of the wolves exhibited unexpected aggression that resulted in a fatal attack. Dr. Valmont was doing what he loved most—working directly with the species he fought so hard to bring back.
            </p>
            
            <p>
              Dr. Valmont's vision transformed the field of reverse extinction from theoretical possibility to tangible reality. Under his leadership, Behemoth successfully revived three extinct species and pioneered ethical frameworks that balanced scientific ambition with ecological responsibility. His passion for conservation and unwavering belief in humanity's ability to correct past mistakes inspired everyone who worked alongside him.
            </p>
            
            <p>
              In the wake of this tragedy, we have conducted a comprehensive review of all safety protocols. The welfare of our team members and the ethical treatment of revived species remain our highest priorities. We are committed to continuing Dr. Valmont's work with the rigor, care, and vision he embodied.
            </p>
            
            <p>
              The Pleistocene wolf program has been temporarily suspended pending a full investigation and implementation of enhanced safety measures. We remain dedicated to Dr. Valmont's mission while ensuring such an incident never occurs again.
            </p>
            
            <p className="italic border-l-4 border-neutral-300 dark:border-neutral-600 pl-4">
              "We don't play God by bringing back what was lost. We acknowledge our responsibility for what was taken, and we work to restore what can be restored."
              <br />
              <span className="text-sm text-neutral-600 dark:text-neutral-400">— Dr. Gareth Valmont, 2019</span>
            </p>
            
            <p>
              Dr. Valmont is survived by his wife, Claire, and their two children. Memorial services will be held privately. In lieu of flowers, the family requests donations be made to the Valmont Conservation Fund, which supports emerging scientists in the field of ecological restoration.
            </p>

            <p>For media inquiries: press@behemoth.bio</p>
              
            <p>For condolences: legacy@behemoth.bio</p>

            <p>— The Behemoth Team</p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
