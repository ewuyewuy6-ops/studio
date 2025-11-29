import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

const Section = React.forwardRef<HTMLElement, SectionProps>(({ className, children, ...props }, ref) => (
  <section ref={ref} className={cn("py-20 md:py-32", className)} {...props}>
    <div className="container mx-auto px-4 md:px-6">
      {children}
    </div>
  </section>
));
Section.displayName = 'Section';

const SectionTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(({ className, children, ...props }, ref) => (
  <h2 ref={ref} className={cn("text-3xl font-bold tracking-tight text-center sm:text-4xl md:text-5xl font-headline", className)} {...props}>
    {children}
  </h2>
));
SectionTitle.displayName = 'SectionTitle';

const SectionSubtitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(({ className, children, ...props }, ref) => (
  <p ref={ref} className={cn("mt-4 max-w-2xl mx-auto text-center text-lg text-muted-foreground", className)} {...props}>
    {children}
  </p>
));
SectionSubtitle.displayName = 'SectionSubtitle';

export { Section, SectionTitle, SectionSubtitle };
