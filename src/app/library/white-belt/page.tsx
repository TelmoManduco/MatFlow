import Link from "next/link";
import {
  ArrowLeft,
  Shield,
  FastForward,
  Move,
  Target,
  Repeat,
} from "lucide-react";

export default function WhiteBeltPage() {
  const categories = [
    {
      title: "Solo Drills & Fundamentals",
      icon: <Repeat size={24} />,
      desc: "Shrimping, bridging, and hip escapes.",
    },
    {
      title: "Escapes",
      icon: <Shield size={24} />,
      desc: "How to get out of bad spots.",
    },
    {
      title: "Guard Passing",
      icon: <FastForward size={24} />,
      desc: "Getting past their legs.",
    },
    {
      title: "Positioning",
      icon: <Move size={24} />,
      desc: "Controls and transitions.",
    },
    {
      title: "Submissions",
      icon: <Target size={24} />,
      desc: "Finishing the fight.",
    },
  ];

  return (
    <main className="min-h-screen p-8 lg:p-16">
      <div className="max-w-5xl mx-auto">
        {/* 1. Header with Breadcrumbs */}
        <header className="mb-12">
          <Link
            href="/library"
            className="flex items-center gap-2 text-sm text-zinc-500 hover:text-white mb-6"
          >
            <ArrowLeft size={16} /> Back to Levels
          </Link>
          <div className="flex items-center gap-4">
            <div className="h-12 w-2 bg-white rounded-full"></div>{" "}
            {/* White Belt visual */}
            <div>
              <h1 className="text-4xl font-bold">White Belt Curriculum</h1>
              <p className="text-zinc-400">
                Master the essential foundations of Jiu-Jitsu.
              </p>
            </div>
          </div>
        </header>

        {/* 2. Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((item) => {
            // 1. We check if the title is our Solo Drills category
            const isSoloDrills = item.title === "Solo Drills & Fundamentals";

            // 2. If it is Solo Drills, use a Link. If not, stay as a button.
            return isSoloDrills ? (
              <Link
                key={item.title}
                href="/library/white-belt/solo-drills"
                className="flex items-start gap-5 p-6 rounded-2xl border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-800 hover:border-zinc-700 transition-all text-left"
              >
                <div className="p-3 bg-zinc-800 rounded-lg text-blue-500">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="text-zinc-400 mt-1">{item.desc}</p>
                </div>
              </Link>
            ) : (
              <button
                key={item.title}
                className="flex items-start gap-5 p-6 rounded-2xl border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-800 hover:border-zinc-700 transition-all text-left opacity-50 cursor-not-allowed"
              >
                <div className="p-3 bg-zinc-800 rounded-lg text-blue-500">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="text-zinc-400 mt-1">
                    {item.desc} (Coming Soon)
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </main>
  );
}
