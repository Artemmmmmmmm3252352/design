import { Home, FileText, MessageCircle, Settings, Menu } from "lucide-react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { useState } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { title: "Главная", url: "/", icon: Home },
  { title: "Задачи", url: "/tasks", icon: FileText },
  { title: "Чат", url: "/chat", icon: MessageCircle },
  { title: "Настройки", url: "/settings", icon: Settings },
];

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={cn(
        "h-screen bg-card border-r border-border flex flex-col transition-all duration-300 relative",
        collapsed ? "w-20" : "w-64"
      )}
    >
      {/* Header */}
      <div className="p-4 flex items-center gap-3">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 hover:bg-secondary rounded-lg transition-colors"
        >
          <Menu className="w-5 h-5 text-muted-foreground" />
        </button>
        {!collapsed && (
          <div className="flex items-center gap-3">
            <Logo className="w-12 h-12" />
          </div>
        )}
      </div>

      {!collapsed && (
        <div className="px-6 pb-4">
          <span className="text-sm font-semibold text-foreground">
            Движение Первых
          </span>
        </div>
      )}

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.title}>
              <NavLink
                to={item.url}
                end={item.url === "/"}
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-3 px-4 py-3 rounded-xl text-muted-foreground hover:bg-secondary hover:text-foreground transition-all duration-200",
                    collapsed && "justify-center px-2",
                    isActive && "bg-primary/10 text-primary font-medium"
                  )
                }
              >
                <item.icon className="w-5 h-5 flex-shrink-0" />
                {!collapsed && <span>{item.title}</span>}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Accent line */}
      <div className="absolute left-0 top-1/3 w-1 h-24 bg-primary rounded-r-full" />
    </aside>
  );
};

export default Sidebar;
