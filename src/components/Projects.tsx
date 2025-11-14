import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Projects() {
  const projects = [
    {
      title: "Pleistocene Wolf Revival",
      description: "Utilizing ancient DNA and CRISPR technology to bring back prehistoric lupines and restore Arctic ecosystems.",
      status: "On Hold",
      image: "https://images.unsplash.com/photo-1607346444518-2abde24da0a0?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8"
    },
    {
      title: "Sumatran Tiger Protection",
      description: "Genetic diversity programs to strengthen wild populations and prevent extinction of this critically endangered species.",
      status: "Field Deployment",
      image: "https://images.unsplash.com/photo-1759346673946-0a30a7411a55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aWdlciUyMGVuZGFuZ2VyZWQlMjBhbmltYWx8ZW58MXx8fHwxNzYyNDQ5MDQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "African Elephant Conservation",
      description: "Genomic analysis and breeding programs to ensure long-term survival of elephant populations.",
      status: "Ongoing",
      image: "https://images.unsplash.com/photo-1696251803608-e8893f7fcdf3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVwaGFudCUyMHdpbGRsaWZlJTIwY29uc2VydmF0aW9ufGVufDF8fHx8MTc2MjQ0OTA0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  return (
    <section id="projects" className="bg-white dark:bg-neutral-800 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-neutral-900 dark:text-white mb-4">Active Projects</h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Our groundbreaking initiatives span de-extinction research and endangered species preservation.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="group">
              <div className="rounded-2xl overflow-hidden mb-4">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className={`inline-block px-3 py-1 ${project.status.toLowerCase().includes('hold') ? 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300' : 'bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-white'} rounded-full mb-3 text-sm`}>
                {project.status}
              </div>
              <h3 className="text-neutral-900 dark:text-white mb-2">{project.title}</h3>
              <p className="text-neutral-600 dark:text-neutral-400">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
