import { useMemo } from "react";
import { Flame, Footprints, Timer } from "lucide-react";

export default function ActivityTracker() {
  // Mocked stats for demo UI
  const stats = useMemo(
    () => ({
      calories: 520,
      steps: 8342,
      minutes: 46,
      streak: 5,
    }),
    []
  );

  return (
    <section id="activity" className="max-w-6xl mx-auto px-4">
      <div className="grid md:grid-cols-4 gap-4">
        <StatCard
          icon={<Flame className="h-5 w-5" />}
          label="Active calories"
          value={`${stats.calories}`}
          accent="from-orange-500 to-rose-500"
        />
        <StatCard
          icon={<Footprints className="h-5 w-5" />}
          label="Steps"
          value={`${stats.steps.toLocaleString()}`}
          accent="from-emerald-500 to-teal-500"
        />
        <StatCard
          icon={<Timer className="h-5 w-5" />}
          label="Active minutes"
          value={`${stats.minutes}m`}
          accent="from-indigo-500 to-sky-500"
        />
        <div className="bg-white/80 backdrop-blur rounded-2xl border border-slate-200 shadow-sm p-4">
          <p className="text-sm text-slate-500">Streak</p>
          <p className="text-3xl font-semibold mt-1">{stats.streak} days</p>
          <div className="mt-4 flex gap-1.5">
            {Array.from({ length: 7 }).map((_, i) => (
              <div
                key={i}
                className={`h-8 flex-1 rounded-md border ${
                  i < stats.streak ? "bg-slate-900 border-slate-900" : "bg-white border-slate-200"
                }`}
                title={`Day ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ icon, label, value, accent }) {
  return (
    <div className="bg-white/80 backdrop-blur rounded-2xl border border-slate-200 shadow-sm p-4">
      <div className={`h-10 w-10 rounded-xl bg-gradient-to-br ${accent} text-white grid place-items-center mb-3`}>
        {icon}
      </div>
      <p className="text-sm text-slate-500">{label}</p>
      <p className="text-2xl font-semibold mt-1">{value}</p>
    </div>
  );
}
