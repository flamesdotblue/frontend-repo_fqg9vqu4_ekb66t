import { useMemo } from "react";

function Bar({ label, value, max, color }) {
  const pct = Math.min(100, Math.round((value / max) * 100));
  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between text-sm">
        <span className="text-slate-600">{label}</span>
        <span className="font-medium">{value}</span>
      </div>
      <div className="h-3 w-full rounded-full bg-slate-100 overflow-hidden border border-slate-200">
        <div
          className={`h-full ${color}`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

export default function ProgressOverview() {
  const weekly = useMemo(
    () => ({
      workouts: 4,
      targetWorkouts: 5,
      minutes: 210,
      targetMinutes: 300,
      calories: 3400,
      targetCalories: 4200,
    }),
    []
  );

  const completion = Math.round((weekly.workouts / weekly.targetWorkouts) * 100);

  return (
    <section id="progress" className="max-w-6xl mx-auto px-4">
      <div className="bg-white/80 backdrop-blur rounded-2xl border border-slate-200 shadow-sm p-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
          <div>
            <p className="text-sm text-slate-500">This week</p>
            <h3 className="text-2xl font-semibold">Progress overview</h3>
          </div>
          <div className="text-sm text-slate-600">
            Goal completion: <span className="font-semibold">{completion}%</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <div className="space-y-4">
            <Bar label="Workouts" value={weekly.workouts} max={weekly.targetWorkouts} color="bg-slate-900" />
            <Bar label="Minutes" value={weekly.minutes} max={weekly.targetMinutes} color="bg-indigo-500" />
            <Bar label="Calories" value={weekly.calories} max={weekly.targetCalories} color="bg-rose-500" />
          </div>

          <div className="md:col-span-2">
            <ResponsiveTrend />
          </div>
        </div>
      </div>
    </section>
  );
}

function ResponsiveTrend() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const values = [30, 45, 60, 0, 40, 20, 15];
  const max = Math.max(...values, 60);

  return (
    <div className="h-56 bg-gradient-to-b from-slate-50 to-white border border-slate-200 rounded-xl p-4">
      <div className="h-full grid grid-cols-7 items-end gap-3">
        {values.map((v, i) => (
          <div key={i} className="flex flex-col items-center gap-1">
            <div
              className="w-full rounded-md bg-gradient-to-t from-slate-900 to-slate-700"
              style={{ height: `${(v / max) * 100}%` }}
              title={`${days[i]}: ${v} min`}
            />
            <span className="text-xs text-slate-500">{days[i]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
