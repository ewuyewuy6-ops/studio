import { Section, SectionTitle, SectionSubtitle } from "@/components/ui/section";
import { SkillCard } from "@/components/ui/skill-card";
import { Code, Database, Wind, Server, PenTool, Smartphone, GitBranch, Rocket, Cloud } from 'lucide-react';

const skillsData = [
  { name: "JavaScript", icon: Code },
  { name: "TypeScript", icon: Code },
  { name: "React", icon: Code },
  { name: "Next.js", icon: Code },
  { name: "React Native", icon: Smartphone },
  { name: "Node.js", icon: Server },
  { name: "Express.js", icon: Server },
  { name: "Tailwind CSS", icon: Wind },
  { name: "Figma", icon: PenTool },
  { name: "Firebase", icon: Cloud },
  { name: "Git", icon: GitBranch },
  { name: "SQL & NoSQL", icon: Database },
];

export function SkillsSection() {
  return (
    <Section id="skills">
      <SectionTitle>Technical Skills</SectionTitle>
      <SectionSubtitle>
        My toolbox for building beautiful, fast, and reliable web applications.
      </SectionSubtitle>
      <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {skillsData.map((skill, index) => (
          <SkillCard 
            key={skill.name} 
            name={skill.name} 
            icon={skill.icon} 
            className="animate-in fade-in-0 zoom-in-95" 
            style={{ animationDelay: `${index * 75}ms`, animationFillMode: 'backwards' }}
          />
        ))}
      </div>
    </Section>
  );
}
