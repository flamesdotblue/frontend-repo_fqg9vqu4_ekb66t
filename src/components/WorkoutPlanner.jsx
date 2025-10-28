import { useState } from "react";
import { Dumbbell, Plus, Play } from "lucide-react";

const exercisePresets = [
  { name: "Push Ups", type: "Reps" },
  { name: "Squats", type: "Reps" },
  { name: "Plank", type: "Time (sec)" },
  { name: "Jump Rope", type: "Time (sec)" },
  { name: "Running", type: "Distance (km)" },
];

export default function WorkoutPlanner() {
  const [date, setDate] = useState(() => new Date().toISOString().slice(0, 10));
  const [items, setItems] = useState([]);
  const [exercise, setExercise] = useState(exercisePresets[0].name);
  const [metric, setMetric] = useState(15);

  const addItem = () => {
    if (!metric || Number(metric) <= 0) return;
    const preset = exercisePresets.find((p) => p.name === exercise);
    setItems((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        name: exercise,
        amount: Number(metric),
        unit: preset?.type || "Reps",
        completed: false,
      },
    ]);
    setMetric(10);
  };

  const toggleComplete = (id) =>
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, completed: !i.completed } : i)));

  const removeItem = (id) => setItems((prev) => prev.filter((i) => i.id !== id));

  const totalWork = items.reduce((acc, i) => acc + (i.completed ? i.amount : 0), 0);

  return (
    <section id="planner" className="max-w-6xl mx-auto px-4">
      <div className="bg-white/80 backdrop-blur rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-5 sm:p-6 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-slate-900 text-white grid place-items-center">
              <Dumbbell className="h-5 w-5" />
            </div>
            <div>
              <p className="font-semibold">Workout Planner</p>
              <p className="text-sm text-slate-500">Craft a focused routine for today</p>
            </div>
          </div>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="px-3 py-2 rounded-lg border border-slate-200 text-sm"
          />
        </div>

        <div className="p-5 sm:p-6 grid sm:grid-cols-3 gap-4">
          <div className="sm:col-span-2">
            <div className="flex flex-col sm:flex-row gap-3">
              <select
                value={exercise}
                onChange={(e) => setExercise(e.target.value)}
                className="px-3 py-2 rounded-lg border border-slate-200 flex-1"
              >
                {exercisePresets.map((p) => (
                  <option key={p.name} value={p.name}>
                    {p.name} ({p.type})
                  </option>
                ))}
              </select>
              <input
                type="number"
                min="1"
                value={metric}
                onChange={(e) => setMetric(e.target.value)}
                className="px-3 py-2 rounded-lg border border-slate-200 w-full sm:w-40"
              />
              <button
                onClick={addItem}
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow hover:opacity-95"
              >
                <Plus className="h-4 w-4" /> Add
              </button>
            </div>

            <ul className="mt-4 divide-y divide-slate-200">
              {items.length === 0 && (
                <li className="text-sm text-slate-500 py-6 text-center">No exercises yet — add your first one above.</li>
              )}
              {items.map((item) => (
                <li key={item.id} className="py-3 flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={item.completed}
                    onChange={() => toggleComplete(item.id)}
                    className="h-4 w-4 rounded border-slate-300"
                  />
                  <div className="flex-1">
                    <p className="font-medium">
                      {item.name}
                      <span className="ml-2 text-sm font-normal text-slate-500">
                        {item.amount} {item.unit}
                      </span>
                    </p>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-slate-500 hover:text-slate-800 text-sm"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
            <p className="text-sm text-slate-500">Today</p>
            <p className="text-3xl font-bold mt-1">{new Date(date).toLocaleDateString()}</p>
            <div className="mt-4 p-4 rounded-lg bg-white border border-slate-200">
              <p className="text-sm text-slate-500">Completed volume</p>
              <p className="text-2xl font-semibold">{totalWork}</p>
            </div>
            <button className="mt-4 w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800">
              <Play className="h-4 w-4" /> Start Session
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
