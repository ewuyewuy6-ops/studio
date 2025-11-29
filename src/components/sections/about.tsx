import Image from "next/image";
import { Section, SectionTitle, SectionSubtitle } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PlaceHolderImages } from '@/lib/placeholder-images';

const skills = [
  "React", "Next.js", "TypeScript", "JavaScript", "Node.js", 
  "Tailwind CSS", "Figma", "Firebase", "Git", "Vercel"
];

export function AboutSection() {
  const profileImage = PlaceHolderImages.find(p => p.id === 'profile-picture');

  return (
    <Section id="about" className="bg-secondary/30">
      <SectionTitle>About Me</SectionTitle>
      <SectionSubtitle>
        A brief introduction to who I am and what I do.
      </SectionSubtitle>
      <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        <div className="lg:col-span-1 flex justify-center">
          <Card className="w-full max-w-sm bg-background/50 backdrop-blur-sm border-primary/20 hover:border-primary transition-all duration-300 group">
             <CardContent className="p-6">
              {profileImage && (
                <Image
                  src={profileImage.imageUrl}
                  alt={profileImage.description}
                  width={400}
                  height={400}
                  data-ai-hint={profileImage.imageHint}
                  className="rounded-lg object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              )}
               <h3 className="mt-4 text-xl font-bold font-headline">John Doe</h3>
               <p className="text-sm text-muted-foreground">Full-Stack Developer</p>
             </CardContent>
          </Card>
        </div>
        <div className="lg:col-span-2 space-y-6 text-lg text-muted-foreground">
          <p>
            Hello! I'm John, a developer with a passion for creating beautiful and functional user experiences. My journey into web development started years ago, and I've been hooked ever since. I thrive on solving complex problems and turning ideas into reality.
          </p>
          <p>
            I specialize in the MERN stack but I'm always eager to learn new technologies. From crafting pixel-perfect UIs to building robust back-end systems, I enjoy every aspect of the development process.
          </p>
          <p>
            When I'm not coding, you can find me exploring the latest design trends, contributing to open-source projects, or enjoying a good cup of coffee.
          </p>
          <div className="flex flex-wrap gap-3 pt-4">
            {skills.map((skill, index) => (
              <div
                key={skill}
                className="animate-in fade-in zoom-in"
                style={{ animationDelay: `${index * 50}ms`, animationFillMode: 'backwards' }}
              >
                <Badge 
                  variant="secondary" 
                  className="text-sm py-1 px-3"
                >
                  {skill}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
