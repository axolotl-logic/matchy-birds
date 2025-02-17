import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          Bird Matcher
        </h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl border border-solid border-black p-4 hover:bg-rose-900/10"
            href="/play"
          >
            <h3 className="text-2xl font-bold">Play →</h3>
            <div className="text-lg">
              Click on pairs of the same species of bird. This will train your
              brain to recognize and "chunk" the combination of features that
              makes a bird unique.
            </div>
          </Link>
          <div className="flex max-w-xs flex-col gap-4 rounded-xl p-4">
            <h3 className="text-2xl font-bold">Your Scores</h3>
            <div className="grid grid-cols-3 text-lg">
              <div>24453</div>
              <div>1123</div>
              <div>223</div>
              <div>25</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
