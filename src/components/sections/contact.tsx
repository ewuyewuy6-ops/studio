import { Section, SectionTitle, SectionSubtitle } from "@/components/ui/section";
import { ContactForm } from "@/components/forms/contact-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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

      <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <Card className="bg-card/50 backdrop-blur-sm animate-in fade-in zoom-in" style={{ animationDelay: '300ms', animationFillMode: 'backwards' }}>
            <CardHeader>
                <CardTitle className="text-2xl">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
                <ContactForm />
            </CardContent>
        </Card>

        <div className="space-y-8">
            {contactInfo.map((info, index) => (
            <div
                key={info.title}
                className="animate-in fade-in zoom-in"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'backwards' }}
            >
                <Card className="bg-card/50 backdrop-blur-sm group p-0 transition-all duration-300 hover:border-primary hover:-translate-y-1">
                    <CardContent className="p-6 flex items-center gap-6">
                        <div className="bg-primary/10 p-3 rounded-full transition-colors group-hover:bg-primary/20">
                            <info.icon className="h-8 w-8 text-primary" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold font-headline">{info.title}</h3>
                            <p className="text-muted-foreground">{info.content}</p>
                        </div>
                    </CardContent>
                </Card>
            </div>
            ))}
        </div>
      </div>
    </Section>
  );
}
