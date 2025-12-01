import { Section, SectionTitle, SectionSubtitle } from "@/components/ui/section";
import { ProjectCard } from "@/components/ui/project-card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const allProjectsData = [
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
    {
    title: "Project Alpha",
    description: "An innovative solution for modern problems, built with cutting-edge technology.",
    tags: ["Svelte", "GraphQL", "Rust"],
    image: PlaceHolderImages.find(p => p.id === 'project-1')!,
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Project Beta",
    description: "A mobile-first social networking application with a focus on user engagement.",
    tags: ["React Native", "Firebase", "TypeScript"],
    image: PlaceHolderImages.find(p => p.id === 'project-2')!,
    githubUrl: "#",
    liveUrl: "#",
  },
];

export default function ProjectsPage() {
  return (
    <Section id="all-projects" className="py-24 md:py-32">
        <div className="text-center">
            <SectionTitle>All Projects</SectionTitle>
            <SectionSubtitle>
                Here is a complete list of my work.
            </SectionSubtitle>
        </div>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        {allProjectsData.map((project, index) => (
          <ProjectCard 
            key={project.title} 
            project={project} 
            className="animate-in fade-in-0 zoom-in-95" 
            style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'backwards' }}
          />
        ))}
      </div>
      <div className="mt-16 text-center">
        <Button asChild variant="outline">
          <Link href="/#projects">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>
    </Section>
  );
}
