import { Dumbbell, Flame, User, Settings } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/60 border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-orange-500 to-pink-500 grid place-items-center text-white shadow">
            <Flame className="h-5 w-5" />
          </div>
          <div>
            <p className="text-lg font-semibold tracking-tight">FitForge</p>
            <p className="text-xs text-slate-500 -mt-0.5">Build your best routine</p>
          </div>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-600">
          <a href="#planner" className="hover:text-slate-900 transition-colors flex items-center gap-2">
            <Dumbbell className="h-4 w-4" /> Planner
          </a>
          <a href="#activity" className="hover:text-slate-900 transition-colors">Activity</a>
          <a href="#progress" className="hover:text-slate-900 transition-colors">Progress</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors">
            <User className="h-4 w-4" />
            <span className="hidden sm:inline">Profile</span>
          </button>
          <button className="p-2 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors">
            <Settings className="h-4 w-4" />
          </button>
        </div>
      </div>
    </header>
  );
}
