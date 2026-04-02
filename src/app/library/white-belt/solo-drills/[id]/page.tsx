import Link from "next/link";
import { ArrowLeft, Info, CheckCircle2 } from "lucide-react";

export default function VideoWatchPage({ params }: { params: { id: string } }) {
  // In a real app, we'd fetch the specific video data using the 'id'
  // For now, let's pretend this is the "Shrimp" data
  const videoData = {
    title: "Hip Escape (Shrimping)",
    youtubeId: "v_mR_V36H8g", // Replace with a real BJJ YouTube ID
    description:
      "The most fundamental movement in Jiu-Jitsu. Essential for creating space and escaping pins.",
    steps: [
      "Keep your feet flat on the mat close to your glutes.",
      "Turn onto your side (do not stay flat on your back).",
      "Drive off your feet to push your hips backward.",
      "Recover your guard or square back up.",
    ],
  };

  return (
    <main className="min-h-screen bg-black text-white p-4 lg:p-12">
      <div className="max-w-5xl mx-auto">
        {/* Navigation */}
        <Link
          href="/library/white-belt/solo-drills"
          className="flex items-center gap-2 text-zinc-500 hover:text-white mb-6"
        >
          <ArrowLeft size={16} /> Back to Solo Drills
        </Link>

        {/* 1. Video Player Container */}
        <div className="aspect-video w-full rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${videoData.youtubeId}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* 2. Video Info */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Info */}
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-bold mb-4">{videoData.title}</h1>
            <p className="text-zinc-400 text-lg leading-relaxed">
              {videoData.description}
            </p>
          </div>

          {/* Coach's Checklist */}
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 h-fit">
            <div className="flex items-center gap-2 mb-4 text-blue-500">
              <CheckCircle2 size={20} />
              <h2 className="font-bold uppercase tracking-wider text-sm">
                Key Details
              </h2>
            </div>
            <ul className="space-y-4">
              {videoData.steps.map((step, index) => (
                <li key={index} className="text-sm text-zinc-300 flex gap-3">
                  <span className="text-zinc-600 font-mono">{index + 1}.</span>
                  {step}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
