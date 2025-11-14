import { LoadingImage } from "./LoadingImage";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

export function Hero() {
  const extinctSpecies = [
    "passenger pigeons",
    "pleistocene wolves",
    "white rhinos",
    "woolly mammoths",
    "dodo birds",
    "tasmanian tigers",
    "quaggas",
    "caribbean monk seals",
    "golden toads",
    "pyrenean ibex",
    "great auks",
    "steller's sea cows"
  ];

  const [currentSpeciesIndex, setCurrentSpeciesIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentSpecies = extinctSpecies[currentSpeciesIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayedText.length < currentSpecies.length) {
          setDisplayedText(currentSpecies.slice(0, displayedText.length + 1));
        } else {
          // Finished typing, wait a bit then start deleting
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        // Deleting
        if (displayedText.length > 0) {
          setDisplayedText(displayedText.slice(0, -1));
        } else {
          // Finished deleting, move to next species
          setIsDeleting(false);
          setCurrentSpeciesIndex((prevIndex) => (prevIndex + 1) % extinctSpecies.length);
        }
      }
    }, isDeleting ? 50 : 80); // Faster deletion, slower typing

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentSpeciesIndex, extinctSpecies]);
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="mb-6 text-[clamp(32px,8vw,75px)]" style={{ lineHeight: '0.8' }}>
            <span className="text-neutral-900 dark:text-white">because </span>
            <span className="text-neutral-900 dark:text-white" style={{ fontWeight: 600 }}>
              {displayedText}<span className="animate-pulse inline-block" style={{ fontWeight: 300, width: '0.3em' }}>|</span>
            </span>
            <span className="text-neutral-900 dark:text-white">deserve a second chance.</span>
          </div>
          <h1 className="text-neutral-900 dark:text-white mb-6">
            Restoring Life, Preserving the Future
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400 mb-8">
            We're pioneering advanced genetic technologies to bring extinct species back to life and protect endangered populations from disappearing forever.
          </p>
          <div className="flex gap-4">
            <button className="px-6 py-3 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-lg hover:bg-neutral-900/90 dark:hover:bg-white/90 transition-colors flex items-center gap-2">
              Learn More
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="px-6 py-3 border border-neutral-300 dark:border-neutral-600 text-neutral-700 dark:text-neutral-300 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
              Our Research
            </button>
          </div>
        </div>
        <div className="rounded-3xl overflow-hidden">
          <video
            src="https://player.vimeo.com/external/371433846.hd.mp4?s=c6c4b0c5b5b0e6b4c8e5d8c8f8f8c8c8&profile_id=175"
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      </div>
    </section>
  );
}
