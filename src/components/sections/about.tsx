import Image from "next/image";
import { Section, SectionTitle, SectionSubtitle } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

const skills = [
  "React", "Next.js", "TypeScript", "JavaScript", "Node.js", 
  "Tailwind CSS", "Figma", "Firebase", "Git", "Vercel"
];

const socialLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com' },
    { name: 'Twitter', icon: Twitter, url: 'https://twitter.com' },
];

export function AboutSection() {
  const profileImage = PlaceHolderImages.find(p => p.id === 'profile-picture');

  return (
    <Section id="about" className="bg-secondary/30">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 flex justify-center">
            <Card className="w-full max-w-md bg-background/30 backdrop-blur-lg border-primary/20 p-6 shadow-2xl transition-all duration-300 hover:shadow-primary/30">
              {profileImage && (
                <div className="aspect-square relative w-full rounded-lg overflow-hidden border-2 border-primary/20">
                  <Image
                    src={profileImage.imageUrl}
                    alt={profileImage.description}
                    fill
                    data-ai-hint={profileImage.imageHint}
                    className="object-cover"
                  />
                </div>
              )}
               <div className="text-center mt-6">
                 <h3 className="text-2xl font-bold font-headline">John Doe</h3>
                 <p className="text-md text-muted-foreground">Full-Stack Developer</p>
                 <div className="mt-4 flex items-center justify-center gap-4">
                    {socialLinks.map((social) => (
                        <Button asChild key={social.name} variant="outline" size="icon">
                            <Link href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                            <social.icon className="h-5 w-5" />
                            </Link>
                        </Button>
                    ))}
                </div>
               </div>
            </Card>
        </div>
        <div className="lg:col-span-7">
          <SectionTitle className="text-left">About Me</SectionTitle>
          <div className="mt-6 space-y-6 text-lg text-muted-foreground">
            <p>
              Hello! I'm John, a developer with a passion for creating beautiful and functional user experiences. My journey into web development started years ago, and I've been hooked ever since. I thrive on solving complex problems and turning ideas into reality.
            </p>
            <p>
              I specialize in the MERN stack but I'm always eager to learn new technologies. From crafting pixel-perfect UIs to building robust back-end systems, I enjoy every aspect of the development process.
            </p>
          </div>
          <div className="mt-8">
            <h4 className="font-headline text-xl font-semibold mb-4">My Toolbox</h4>
            <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                <div
                    key={skill}
                    className="animate-in fade-in zoom-in"
                    style={{ animationDelay: `${index * 50}ms`, animationFillMode: 'backwards' }}
                >
                    <Badge 
                    variant="secondary" 
                    className="text-sm py-1 px-3 border-transparent"
                    >
                    {skill}
                    </Badge>
                </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
