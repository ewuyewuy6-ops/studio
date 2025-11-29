import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

interface SkillCardProps {
  icon: LucideIcon;
  name: string;
  className?: string;
  style?: React.CSSProperties;
}

export function SkillCard({ icon: Icon, name, className, style }: SkillCardProps) {
  return (
    <Card 
      className={cn("bg-card/50 backdrop-blur-sm group transition-all duration-300 hover:border-primary hover:-translate-y-1", className)}
      style={style}
    >
      <CardContent className="flex flex-col items-center justify-center p-6 gap-4">
        <Icon className="h-10 w-10 text-muted-foreground group-hover:text-primary transition-colors" />
        <p className="font-semibold text-center text-sm">{name}</p>
      </CardContent>
    </Card>
  );
}
