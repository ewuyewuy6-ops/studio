import Link from "next/link";
import { MoveRight, Eye, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { Typewriter } from "@/components/ui/typewriter";

export function HeroSection() {
  return (
    <Section id="home" className="relative overflow-hidden pt-32 pb-24 md:pt-48 md:pb-32 text-center">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute h-full w-full animate-glow rounded-full bg-primary/10 blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-headline leading-tight">
            Crafting Digital Experiences with
            <br />
            <span className="text-primary">
              <Typewriter texts={['Code.', 'Motion.', 'Passion.']} cursorClassName="h-10 md:h-12 lg:h-16" />
            </span>
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground md:text-xl">
            I'm a passionate developer specializing in building modern, responsive, and animated web applications. Welcome to my digital playground where ideas come to life.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="#projects">
                View My Work
                <MoveRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/resume.pdf" target="_blank">
                <Eye className="mr-2 h-5 w-5" />
                Preview Resume
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/resume.pdf" download>
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
