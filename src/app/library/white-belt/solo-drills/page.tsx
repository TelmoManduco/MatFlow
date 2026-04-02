"use client"; // We need this because we are adding "Click" features now!

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, PlayCircle, CheckCircle2 } from "lucide-react";

export default function VideoWatchPage() {
  // 1. This is our data for the "Shrimping" page
  const playlist = [
    {
      id: 1,
      title: "Basic Hip Escape (Backward)",
      youtubeId: "ifW5IXMzNNs",
      duration: "2:15",
    },
    {
      id: 2,
      title: "Forward Shrimp (Reverse)",
      youtubeId: "v9-f_pBfT-Y",
      duration: "1:45",
    },
    {
      id: 3,
      title: "Side-to-Side (In Place)",
      youtubeId: "00P-T58a8uE",
      duration: "3:00",
    },
  ];

  // 2. This "State" remembers which video is currently playing
  const [activeVideo, setActiveVideo] = useState(playlist[0]);

  return (
    <main className="min-h-screen bg-black text-white p-4 lg:p-12">
      <div className="max-w-7xl mx-auto">
        {/* Navigation */}
        <Link
          href="/library/white-belt"
          className="flex items-center gap-2 text-zinc-500 hover:text-white mb-6"
        >
          <ArrowLeft size={16} /> Back to Solo Drills
        </Link>

        {/* Layout Grid: Video on Left, Playlist on Right */}
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
          {/* LEFT SIDE: The Video Player & Info */}
          <div className="xl:col-span-3">
            <div className="aspect-video w-full rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1`}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <div className="mt-8">
              <h1 className="text-3xl font-bold">{activeVideo.title}</h1>
              <p className="mt-4 text-zinc-400 text-lg">
                Focus on the details in this variation. Remember: your hips are
                the engine of your defense.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE: The Playlist Sidebar */}
          <div className="xl:col-span-1">
            <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-4">
              Playlist: Variations
            </h2>
            <div className="space-y-3">
              {playlist.map((video) => (
                <button
                  key={video.id}
                  onClick={() => setActiveVideo(video)} // This is the "Swap" magic
                  className={`w-full flex flex-col gap-1 p-4 rounded-xl border transition-all text-left ${
                    activeVideo.id === video.id
                      ? "border-blue-600 bg-blue-600/10"
                      : "border-zinc-800 bg-zinc-900/50 hover:bg-zinc-800"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <PlayCircle
                      size={16}
                      className={
                        activeVideo.id === video.id
                          ? "text-blue-500"
                          : "text-zinc-500"
                      }
                    />
                    <span
                      className={`font-semibold ${activeVideo.id === video.id ? "text-white" : "text-zinc-300"}`}
                    >
                      {video.title}
                    </span>
                  </div>
                  <span className="text-xs text-zinc-500 ml-6">
                    {video.duration}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
