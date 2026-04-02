import Link from "next/link";
import { ArrowLeft } from "lucide-react"; // This is why we installed lucide-react!

export default function LibraryPage() {
  return (
    <main className="min-h-screen p-8 lg:p-16">
      {/* 1. Header Area */}
      <header className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <div>
          <Link
            href="/"
            className="group mb-4 flex items-center gap-2 text-sm text-zinc-500 hover:text-blue-500"
          >
            <ArrowLeft
              size={16}
              className="transition-transform group-hover:-translate-x-1"
            />
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold">Technique Library</h1>
          <p className="text-zinc-400">
            Master your fundamentals and advanced flows.
          </p>
        </div>

        <button className="rounded-md bg-zinc-800 px-4 py-2 text-sm font-medium hover:bg-zinc-700">
          Filter by Position
        </button>
      </header>

      {/* 2. The Video Grid (Placeholder for now) */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* We will create a real "VideoCard" component for these later */}
        <div className="aspect-video rounded-xl border border-zinc-800 bg-zinc-900/50 flex items-center justify-center">
          <p className="text-zinc-600 italic">Video coming soon...</p>
        </div>
        <div className="aspect-video rounded-xl border border-zinc-800 bg-zinc-900/50 flex items-center justify-center">
          <p className="text-zinc-600 italic">Video coming soon...</p>
        </div>
        <div className="aspect-video rounded-xl border border-zinc-800 bg-zinc-900/50 flex items-center justify-center">
          <p className="text-zinc-600 italic">Video coming soon...</p>
        </div>
      </div>
    </main>
  );
}
