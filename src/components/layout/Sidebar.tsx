import { Link, useLocation } from "react-router-dom";
import { BarChart3, Rocket } from "lucide-react";
import { navigationItems, adminNavigationItems } from "@/config/navigation";
import { cn } from "@/utils/cn";
import { Button } from "@/components/ui/Button";

export const Sidebar = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <aside className="w-64 min-h-screen bg-slate-50 dark:bg-slate-700 border-r border-slate-100 dark:border-slate-600 flex flex-col fixed left-0 top-0 z-50">
      {/* Brand */}
      <div className="flex items-center gap-3 px-6 py-6">
        <div className="bg-primary p-2 rounded-lg text-white">
          <BarChart3 className="w-6 h-6" color="black" />
        </div>
        <div>
          <h1 className="text-slate-900 dark:text-white text-base font-bold leading-tight">
            SaaS Metric
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-xs font-normal">
            Real-time Hub
          </p>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col gap-1 px-4 flex-1">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.path);

          return (
            <Link
              key={item.id}
              to={item.path}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all",
                active
                  ? "bg-primary text-blue-500"
                  : "text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600 hover:text-slate-900 dark:hover:text-white",
              )}
            >
              <Icon className="w-5 h-5" />
              <span>{item.label}</span>
            </Link>
          );
        })}

        {/* Admin Section */}
        <div className="pt-4 pb-2">
          <p className="px-3 text-[10px] font-bold uppercase tracking-wider text-slate-400">
            Administration
          </p>
        </div>

        {adminNavigationItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.path);

          return (
            <Link
              key={item.id}
              to={item.path}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all",
                active
                  ? "bg-primary text-white"
                  : "text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600 hover:text-slate-900 dark:hover:text-white",
              )}
            >
              <Icon className="w-5 h-5" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Sidebar Bottom - Usage Plan */}
      <div className="flex flex-col gap-4 p-4">
        <div className="bg-white dark:bg-slate-600 p-4 rounded-xl border border-slate-200 dark:border-slate-500">
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">
            Usage Plan
          </p>
          <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-500 rounded-full overflow-hidden">
            <div className="h-full bg-primary w-3/4"></div>
          </div>
          <p className="text-[10px] text-slate-600 dark:text-slate-300 mt-2">
            75% of Enterprise Plan used
          </p>
        </div>
        <Button
          variant="primary"
          size="md"
          className="w-full bg-blue-500 hover:bg-blue-600"
        >
          <Rocket className="w-4 h-4" color="white" />
          Upgrade Now
        </Button>
      </div>
    </aside>
  );
};
