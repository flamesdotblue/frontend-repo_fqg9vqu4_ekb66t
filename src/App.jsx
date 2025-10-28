import Header from "./components/Header";
import WorkoutPlanner from "./components/WorkoutPlanner";
import ActivityTracker from "./components/ActivityTracker";
import ProgressOverview from "./components/ProgressOverview";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
      <Header />

      <main className="space-y-10 sm:space-y-14 py-8">
        <Hero />
        <ActivityTracker />
        <WorkoutPlanner />
        <ProgressOverview />
      </main>

      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-4">
      <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white/70 backdrop-blur p-6 sm:p-10">
        <div className="max-w-2xl">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Build a routine you can actually stick to
          </h1>
          <p className="text-slate-600 mt-3 sm:mt-4 max-w-prose">
            Plan your workouts, track activity, and visualize progress — all in one clean interface.
          </p>
          <div className="mt-5 sm:mt-6 flex gap-3">
            <a href="#planner" className="px-5 py-3 rounded-xl bg-slate-900 text-white hover:bg-slate-800 shadow">
              Start planning
            </a>
            <a href="#progress" className="px-5 py-3 rounded-xl border border-slate-200 hover:bg-slate-50">
              See progress
            </a>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 hidden sm:block">
          <div className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-pink-500/20 blur-3xl" />
          <div className="absolute right-10 bottom-0 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mt-10 border-t border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p>© {new Date().getFullYear()} FitForge. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-slate-900">Privacy</a>
          <a href="#" className="hover:text-slate-900">Terms</a>
          <a href="#" className="hover:text-slate-900">Contact</a>
        </div>
      </div>
    </footer>
  );
}
