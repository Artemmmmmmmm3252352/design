import { MessageCircle, Trophy, Award } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface ActivityCardProps {
  icon: "chat" | "trophy" | "award";
  title: string;
  subtitle: string;
  buttonText: string;
  className?: string;
}

const icons = {
  chat: MessageCircle,
  trophy: Trophy,
  award: Award,
};

const ActivityCard = ({
  icon,
  title,
  subtitle,
  buttonText,
  className,
}: ActivityCardProps) => {
  const Icon = icons[icon];

  return (
    <div
      className={cn(
        "bg-card p-5 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 animate-fade-in",
        className
      )}
      style={{ animationDelay: "0.1s" }}
    >
      <div className="flex items-start gap-3 mb-4">
        <div className="p-2 bg-primary/10 rounded-xl">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-foreground truncate">{title}</h3>
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        </div>
      </div>
      <Button
        variant="outline"
        className="w-full rounded-xl border-primary text-primary hover:bg-primary hover:text-primary-foreground"
      >
        {buttonText}
      </Button>
    </div>
  );
};

export default ActivityCard;
