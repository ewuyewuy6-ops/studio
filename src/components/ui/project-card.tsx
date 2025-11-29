import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ImagePlaceholder } from "@/lib/placeholder-images";

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    tags: string[];
    image: ImagePlaceholder;
    githubUrl: string;
    liveUrl: string;
  };
  className?: string;
  style?: React.CSSProperties;
}

export function ProjectCard({ project, className, style }: ProjectCardProps) {
  return (
    <Card 
      className={cn("overflow-hidden group bg-card/50 backdrop-blur-sm transition-all duration-300 hover:shadow-primary/20 hover:shadow-lg hover:-translate-y-2", className)}
      style={style}
    >
      <CardHeader className="p-0">
        <div className="aspect-video overflow-hidden">
          <Image
            src={project.image.imageUrl}
            alt={project.image.description}
            width={600}
            height={400}
            data-ai-hint={project.image.imageHint}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <CardTitle className="text-xl font-bold font-headline mb-2">{project.title}</CardTitle>
        <p className="text-muted-foreground text-sm mb-4 h-20">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary">{tag}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex justify-end gap-4">
        <Button asChild variant="ghost" size="sm">
          <Link href={project.githubUrl} target="_blank">
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </Link>
        </Button>
        <Button asChild variant="default" size="sm">
          <Link href={project.liveUrl} target="_blank">
            <ExternalLink className="mr-2 h-4 w-4" />
            Live Demo
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
