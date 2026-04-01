import Link from "next/link";
import { ArrowLeft, GraduationCap } from "lucide-react";

export default function LibraryPage() {
  return (
    <main className="min-h-screen p-8 lg:p-16 flex flex-col items-center">
      {/* Header */}
      <div className="w-full max-w-4xl mb-12">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm text-zinc-500 hover:text-white mb-4"
        >
          <ArrowLeft size={16} /> Back to Home
        </Link>
        <h1 className="text-4xl font-bold">Select Your Level</h1>
        <p className="text-zinc-400">
          Choose a curriculum to begin your training.
        </p>
      </div>

      {/* Belt Selection Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        {/* White Belt Card */}
        <Link
          href="/library/white-belt"
          className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 p-8 transition-all hover:border-white"
        >
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white text-black">
            <GraduationCap size={24} />
          </div>
          <h2 className="text-2xl font-bold text-white">White Belt</h2>
          <p className="mt-2 text-zinc-400 font-medium">
            Foundations & Survival
          </p>
          {/* Visual "Belt" Stripe */}
          <div className="absolute bottom-0 left-0 h-2 w-full bg-white"></div>
        </Link>

        {/* Blue Belt Card */}
        <Link
          href="/library/blue-belt"
          className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 p-8 transition-all hover:border-blue-500"
        >
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white">
            <GraduationCap size={24} />
          </div>
          <h2 className="text-2xl font-bold text-white">Blue Belt</h2>
          <p className="mt-2 text-zinc-400 font-medium">
            Evolution & Transitions
          </p>
          {/* Visual "Belt" Stripe */}
          <div className="absolute bottom-0 left-0 h-2 w-full bg-blue-600"></div>
        </Link>
      </div>
    </main>
  );
}
