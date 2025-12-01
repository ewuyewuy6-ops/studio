import { Section, SectionTitle, SectionSubtitle } from "@/components/ui/section";
import { ContactForm } from "@/components/forms/contact-form";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    content: "+1 (234) 567-890",
  },
  {
    icon: Mail,
    title: "Email",
    content: "john.doe@example.com",
  },
  {
    icon: MapPin,
    title: "Location",
    content: "San Francisco, CA",
  },
];

export function ContactSection() {
  return (
    <Section id="contact">
      <SectionTitle>Get In Touch</SectionTitle>
      <SectionSubtitle>
        Have a project in mind or just want to say hello? Feel free to reach out.
      </SectionSubtitle>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {contactInfo.map((info, index) => (
          <div
            key={info.title}
            className="animate-in fade-in zoom-in"
            style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'backwards' }}
          >
            <Card className="bg-card/50 backdrop-blur-sm group h-full flex flex-col items-center text-center p-8 transition-all duration-300 hover:border-primary hover:-translate-y-1">
              <CardContent className="p-0 flex flex-col items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <info.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold font-headline">{info.title}</h3>
                <p className="text-muted-foreground">{info.content}</p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      <div className="max-w-xl mx-auto">
        <ContactForm />
      </div>
    </Section>
  );
}
