import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 text-center">
      {/* 1. The Big Headline */}
      <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl">
        MAT<span className="text-blue-600">FLOW</span>
      </h1>

      {/* 2. The Sub-headline */}
      <p className="mt-6 max-w-lg text-lg text-zinc-400 sm:text-xl">
        The official digital technique library. Built by coaches, designed for
        students.
      </p>

      {/* 3. The Call to Action (Button) */}
      <div className="mt-10">
        <Link
          href="/library"
          className="rounded-full bg-blue-600 px-8 py-4 text-lg font-bold transition-all hover:bg-blue-500 hover:scale-105 active:scale-95 inline-block"
        >
          Enter the Library
        </Link>
      </div>

      {/* 4. A small footer for the gym */}
      <p className="mt-20 text-sm text-zinc-600 uppercase tracking-widest font-semibold">
        Academy Internal Resource
      </p>
    </main>
  );
}
