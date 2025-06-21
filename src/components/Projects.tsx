import ProjectCard from './ProjectCard';

const projects = [
  {
    title: "It's Nothing",
    description: 'Pebble Watchface',
    imageUrl: 'https://picsum.photos/seed/nothing/200/300',
    buttonText: 'Check it on GitHub',
    buttonUrl: 'https://project-url.com',
    isDownload: false,
  },
  {
    title: 'Impact (v2.0.0)',
    description: 'Ghost blog theme using TailwindCSS',
    imageUrl: 'https://picsum.photos/seed/impact/200/300',
    buttonText: 'Check it on GitHub',
    buttonUrl: '/path/to/resume.pdf',
    isDownload: true,
  },
  {
    title: 'CompactLine',
    description: 'Oh My Zsh theme',
    imageUrl: 'https://picsum.photos/seed/compact/200/300',
    buttonText: 'Check it on GitHub',
    buttonUrl: '/path/to/resume.pdf',
    isDownload: true,
  },
];

export default function Projects() {
  return (
    <section className="mx-auto my-16 max-w-4xl px-4 md:px-0">
      <h2 className="border-retro-magenta dark:border-dark-magenta mb-6 -ml-6 border-l-4 pl-4 text-xl font-bold uppercase">Featured Projects</h2>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            buttonText={project.buttonText}
            buttonUrl={project.buttonUrl}
            isDownload={project.isDownload}
          />
        ))}
      </div>
    </section>
  );
}
