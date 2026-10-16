import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto w-full max-w-2xl px-6 py-14">
      <h1 className="text-3xl font-semibold tracking-tight">Page not found</h1>
      <p className="mt-4 text-[15px] leading-7 text-zinc-700">
        That page is not published here.
      </p>
      <p className="mt-6">
        <Link href="/" className="text-sm font-medium underline underline-offset-4">
          Back to PlaystackInteractive
        </Link>
      </p>
    </main>
  );
}
