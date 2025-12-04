import { Ellipses } from '@/components/ellipses';
import Link from 'next/link';

export const metadata = { title: 'Not Found' };

export default function NotFound() {
  return (
    <div className="fixed left-1/2 top-1/2  -translate-x-1/2 -translate-y-1/2 select-none ">
      <div className="flex flex-col items-center justify-center gap-6 duration-500 animate-in fade-in zoom-in">
        <h1 className="bg-linear-to-r from-neutral-50 to-zinc-600 bg-clip-text text-8xl font-black text-transparent drop-shadow-xl">
          404
        </h1>
        <Link
          className="flex h-9 w-fit items-center justify-center rounded-md border border-zinc-900 bg-zinc-950 px-4 text-sm lowercase text-slate-100 outline-none transition-all hover:bg-neutral-800 hover:ring-1 hover:ring-zinc-600 focus-visible:ring-1 focus-visible:ring-zinc-600 active:scale-90"
          href="/"
        >
          Return Home
        </Link>
      </div>
      <Ellipses />
    </div>
  );
}
