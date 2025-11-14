"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { X } from "lucide-react";

interface Person {
  id: string;
  name: string;
  role: string;
  age: number;
  image: string;
  bio: string;
  videoUrl?: string;
}

export function People() {
  const [expandedPerson, setExpandedPerson] = useState<string | null>(null);

  const people: Person[] = [
    {
      id: "bess-santos",
      name: "Dr. Bess Santos",
      role: "Chief Revival Scientist",
      age: 55,
      image: "https://images.unsplash.com/photo-1623376550324-d406ae677c04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHNjaWVudGlzdCUyMGdsYXNzZXMlMjBjcmV3JTIwY3V0fGVufDF8fHx8MTc2MjU3NTg4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: "Dr. Santos pioneered the revolutionary genetic sequencing techniques that made de-extinction possible. With over 30 years of experience in molecular biology and conservation genetics, she leads our team in developing ethical frameworks for species revival. Her groundbreaking research on ancient DNA preservation has been published in over 150 peer-reviewed journals.",
      videoUrl: "/videos/bess-santos-work.mp4"
    },
    {
      id: "lupe-ramirez",
      name: "Dr. Lupe Ramirez",
      role: "Geneticist",
      age: 35,
      image: "https://images.unsplash.com/photo-1754715203698-70c7ad3a879d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXRpbmElMjBzY2llbnRpc3QlMjB3b21hbiUyMGxhYiUyMGNvYXR8ZW58MXx8fHwxNzYyNTc1ODgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: "Specializing in CRISPR gene editing and cellular regeneration, Dr. Ramirez has successfully led the genetic reconstruction of three extinct species. Her innovative approach to minimizing off-target effects has set new standards in the field. She combines deep technical expertise with a passion for biodiversity conservation.",
      videoUrl: "/videos/lupe-ramirez-work.mp4"
    },
    {
      id: "jiang-wen",
      name: "Jiang Wen",
      role: "Software Engineer",
      age: 32,
      image: "https://images.unsplash.com/photo-1726662399379-4b72b2e95d63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMHdvbWFuJTIwc2NpZW50aXN0JTIwcG9ueXRhaWx8ZW58MXx8fHwxNzYyNTc1ODgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: "Jiang developed our proprietary AI-driven genome analysis platform that processes petabytes of genetic data in real-time. Her machine learning algorithms can predict genetic compatibility and species viability with 99.7% accuracy. Before joining behemoth, she worked on computational biology projects at leading tech companies.",
      videoUrl: "/videos/jiang-wen-work.mp4"
    },
    {
      id: "chris-marcos",
      name: "Chris Marcos",
      role: "Mammal Behaviorist",
      age: 29,
      image: "https://images.unsplash.com/photo-1696082600718-c8a585306acd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbnRpc3QlMjBtYW4lMjBtdXN0YWNoZSUyMGN1cmx5JTIwaGFpcnxlbnwxfHx8fDE3NjI1NzU4ODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: "Chris specializes in understanding and rehabilitating mammal social structures for reintroduction programs. His work on Pleistocene wolf revival, derived from studying modern wolf pack dynamics, has been crucial to our revival efforts. He's passionate about ensuring revived species can thrive in contemporary ecosystems.",
      videoUrl: "/videos/chris-marcos-work.mp4"
    }
  ];

  const handlePersonClick = (personId: string) => {
    setExpandedPerson(expandedPerson === personId ? null : personId);
  };

  const expanded = people.find(p => p.id === expandedPerson);

  return (
    <section id="people" className="bg-white dark:bg-neutral-800 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-neutral-900 dark:text-white mb-4">Our People</h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Meet the brilliant minds behind our groundbreaking work in de-extinction and conservation.
          </p>
        </div>

        {/* People Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {people.map((person) => (
            <button
              key={person.id}
              onClick={() => handlePersonClick(person.id)}
              className="group flex flex-col items-center gap-4 transition-transform hover:scale-105"
            >
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-neutral-100 dark:border-neutral-700 group-hover:border-neutral-300 dark:group-hover:border-neutral-500 transition-colors">
                <ImageWithFallback
                  src={person.image}
                  alt={person.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="text-neutral-900 dark:text-white">{person.name}</h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">{person.role}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Expanded Panel */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="bg-neutral-50 dark:bg-neutral-900 rounded-3xl p-8 md:p-12 mt-8 relative">
                <button
                  onClick={() => setExpandedPerson(null)}
                  className="absolute top-6 right-6 p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5 text-neutral-600 dark:text-neutral-400" />
                </button>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                  {/* Left: Bio */}
                  <div>
                    <div className="flex items-center gap-6 mb-6">
                      <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white dark:border-neutral-800">
                        <ImageWithFallback
                          src={expanded.image}
                          alt={expanded.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-neutral-900 dark:text-white mb-1">{expanded.name}</h3>
                        <p className="text-neutral-600 dark:text-neutral-400">{expanded.role}</p>
                      </div>
                    </div>
                    <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                      {expanded.bio}
                    </p>
                  </div>

                  {/* Right: Video */}
                  <div className="rounded-2xl overflow-hidden bg-neutral-200 dark:bg-neutral-700">
                    <div className="aspect-video flex items-center justify-center">
                      {expanded.videoUrl ? (
                        <video
                          controls
                          autoPlay
                          className="w-full h-full object-cover"
                          poster={expanded.image}
                        >
                          <source src={expanded.videoUrl} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      ) : (
                        <div className="text-center p-8">
                          <p className="text-neutral-500 dark:text-neutral-400">Video embed placeholder</p>
                          <p className="text-sm text-neutral-400 dark:text-neutral-500 mt-2">
                            {expanded.name} - {expanded.role}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
