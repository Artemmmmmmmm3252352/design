import { Clock, MapPin } from "lucide-react";
import { Progress } from "./ui/progress";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface TaskCardProps {
  title: string;
  progress?: number;
  deadline?: string;
  location?: string;
  badge?: string;
  buttonText: string;
  buttonVariant?: "accent" | "outline";
  className?: string;
}

const TaskCard = ({
  title,
  progress,
  deadline,
  location,
  badge,
  buttonText,
  buttonVariant = "outline",
  className,
}: TaskCardProps) => {
  return (
    <div
      className={cn(
        "bg-card p-5 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 animate-fade-in flex flex-col gap-3",
        className
      )}
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-semibold text-foreground leading-tight">{title}</h3>
        {badge && (
          <span className="text-xs px-2 py-1 bg-secondary rounded-lg text-muted-foreground whitespace-nowrap">
            {badge}
          </span>
        )}
      </div>

      {progress !== undefined && (
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-accent font-semibold">{progress}%</span>
            <span className="text-xs text-muted-foreground">ОПЫТ</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      )}

      {deadline && (
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="w-4 h-4" />
          <span>Остаётся: {deadline}</span>
        </div>
      )}

      {location && (
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="w-4 h-4" />
          <span>{location}</span>
        </div>
      )}

      <Button
        variant={buttonVariant === "accent" ? "default" : "outline"}
        className={cn(
          "mt-auto rounded-xl",
          buttonVariant === "accent" &&
            "bg-accent hover:bg-accent/90 text-accent-foreground"
        )}
      >
        {buttonText}
      </Button>
    </div>
  );
};

export default TaskCard;
