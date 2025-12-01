
import { Section, SectionTitle, SectionSubtitle } from "@/components/ui/section";
import { Briefcase, GraduationCap, Star, Code } from 'lucide-react';

const experienceData = [
  {
    type: 'Job',
    icon: Briefcase,
    date: '2021 - Present',
    title: 'Senior Frontend Developer',
    company: 'Tech Solutions Inc.',
    description: 'Leading the development of complex user interfaces and mentoring junior developers. Specialized in React and Next.js, focusing on performance and scalability.',
  },
  {
    type: 'Freelance',
    icon: Code,
    date: '2019 - 2021',
    title: 'Freelance Web Developer',
    company: 'Self-employed',
    description: 'Partnered with various clients to build modern websites and web applications, from concept to deployment. Gained extensive experience in project management and client communication.',
  },
  {
    type: 'Internship',
    icon: GraduationCap,
    date: 'Summer 2018',
    title: 'Software Engineer Intern',
    company: 'Innovate Co.',
    description: 'Contributed to the core product team by developing new features and fixing bugs. Worked in an Agile environment and learned to collaborate effectively with a fast-paced team.',
  },
  {
    type: 'Achievement',
    icon: Star,
    date: '2022',
    title: 'Developer of the Year Award',
    company: 'Tech Solutions Inc.',
    description: 'Recognized for outstanding contributions to the flagship product, resulting in a 20% performance increase and a significant improvement in user satisfaction.',
  },
];

export function ExperienceSection() {
  return (
    <Section id="experience">
      <SectionTitle>Experience & Timeline</SectionTitle>
      <SectionSubtitle>
        My professional journey, from internships to senior roles and achievements.
      </SectionSubtitle>
      <div className="mt-16">
        <div className="relative border-l-2 border-primary/20">
          {experienceData.map((item, index) => (
            <div 
              key={index}
              className="mb-12 ml-10 animate-in fade-in-0 slide-in-from-left-8"
              style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'backwards' }}
            >
              <span className="absolute -left-[1.30rem] flex items-center justify-center w-10 h-10 bg-primary/10 rounded-full ring-8 ring-background">
                <item.icon className="w-5 h-5 text-primary" />
              </span>
              <div className="p-6 bg-card/50 backdrop-blur-sm rounded-lg border border-border transition-all hover:border-primary/50 hover:shadow-lg">
                <time className="block mb-2 text-sm font-normal leading-none text-muted-foreground">{item.date}</time>
                <h3 className="flex items-center mb-1 text-xl font-semibold font-headline text-foreground">
                  {item.title}
                  {item.type === 'Achievement' && <Star className="w-4 h-4 text-amber-400 ml-2" />}
                </h3>
                <p className="mb-4 text-base font-normal text-muted-foreground">{item.company}</p>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
