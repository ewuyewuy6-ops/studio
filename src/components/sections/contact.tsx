import { Section, SectionTitle, SectionSubtitle } from "@/components/ui/section";
import { ContactForm } from "@/components/forms/contact-form";

export function ContactSection() {
  return (
    <Section id="contact">
      <SectionTitle>Get In Touch</SectionTitle>
      <SectionSubtitle>
        Have a project in mind or just want to say hello? Feel free to reach out.
      </SectionSubtitle>
      <div className="mt-12 max-w-xl mx-auto">
        <ContactForm />
      </div>
    </Section>
  );
}
