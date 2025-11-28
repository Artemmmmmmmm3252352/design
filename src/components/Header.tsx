import { Search, Bell, User } from "lucide-react";
import { Input } from "./ui/input";

const Header = () => {
  return (
    <header className="h-16 bg-card/50 backdrop-blur-sm border-b border-border px-6 flex items-center justify-between">
      {/* Search */}
      <div className="relative w-96">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Поиск..."
          className="pl-10 bg-secondary/50 border-0 rounded-xl h-10"
        />
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2">
        <button className="p-3 hover:bg-secondary rounded-xl transition-colors relative">
          <Bell className="w-5 h-5 text-muted-foreground" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-accent rounded-full" />
        </button>
        <button className="p-3 hover:bg-secondary rounded-xl transition-colors">
          <User className="w-5 h-5 text-muted-foreground" />
        </button>
      </div>
    </header>
  );
};

export default Header;
