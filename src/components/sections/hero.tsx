import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Twitter, MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { Typewriter } from "@/components/ui/typewriter";
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function HeroSection() {
  const profileImage = PlaceHolderImages.find(p => p.id === 'profile-picture');
  
  const socialLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com' },
    { name: 'Twitter', icon: Twitter, url: 'https://twitter.com' },
  ];

  return (
    <Section id="home" className="relative overflow-hidden pt-32 pb-24 md:pt-48 md:pb-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute h-full w-full animate-glow rounded-full bg-primary/10 blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline leading-tight">
              Crafting Digital Experiences with
              <br />
              <span className="text-primary">
                <Typewriter texts={['Code.', 'Motion.', 'Passion.']} cursorClassName="h-10 md:h-12 lg:h-14" />
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              I'm a passionate developer specializing in building modern, responsive, and animated web applications. Welcome to my digital playground.
            </p>

            <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
              <Button asChild size="lg">
                <Link href="#projects">
                  View Projects
                  <MoveRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="#contact">Contact Me</Link>
              </Button>
            </div>
            
            <div className="mt-12 flex items-center justify-center md:justify-start gap-6">
              {socialLinks.map((social) => (
                <Link key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                  <social.icon className="h-6 w-6 text-muted-foreground transition-transform hover:text-accent hover:scale-125" />
                </Link>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center items-center">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl animate-pulse" />
              {profileImage && (
                 <Image
                    src={profileImage.imageUrl}
                    alt={profileImage.description}
                    width={400}
                    height={400}
                    priority
                    data-ai-hint={profileImage.imageHint}
                    className="relative object-cover rounded-full border-4 border-background shadow-2xl"
                  />
              )}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
