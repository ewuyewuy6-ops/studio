import { Section, SectionTitle, SectionSubtitle } from "@/components/ui/section";
import { ProjectCard } from "@/components/ui/project-card";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const projectsData = [
  {
    title: "E-commerce Platform",
    description: "A full-featured e-commerce site with product listings, cart functionality, and a checkout process.",
    tags: ["Next.js", "React", "Stripe", "Tailwind CSS"],
    image: PlaceHolderImages.find(p => p.id === 'project-1')!,
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Data Analytics Dashboard",
    description: "A responsive dashboard for visualizing complex datasets with interactive charts and filters.",
    tags: ["React", "D3.js", "Node.js", "PostgreSQL"],
    image: PlaceHolderImages.find(p => p.id === 'project-2')!,
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and user authentication.",
    tags: ["React", "Firebase", "Zustand", "Framer Motion"],
    image: PlaceHolderImages.find(p => p.id === 'project-3')!,
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio site to showcase projects and skills, featuring smooth animations.",
    tags: ["Next.js", "TypeScript", "Shadcn/UI", "Vercel"],
    image: PlaceHolderImages.find(p => p.id === 'project-4')!,
    githubUrl: "#",
    liveUrl: "#",
  },
];

export function ProjectsSection() {
  return (
    <Section id="projects" className="bg-secondary/30">
      <SectionTitle>My Projects</SectionTitle>
      <SectionSubtitle>
        A selection of my work. Click to see the code or a live demo.
      </SectionSubtitle>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsData.map((project, index) => (
          <ProjectCard 
            key={project.title} 
            project={project} 
            className="animate-in fade-in-0 zoom-in-95" 
            style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'backwards' }}
          />
        ))}
      </div>
    </Section>
  );
}
