import { cn } from '@/utils/styling';

export const StatusIndicator = ({
  available = false,
}: {
  available?: boolean;
}) => (
  <div className="absolute right-7 top-8 z-50">
    <div className="flex select-none items-center space-x-2 rounded-lg border border-zinc-800 bg-zinc-950/50 py-1.5 px-4 text-sm lowercase animate-in fade-in zoom-in">
      <div className="relative flex size-2.5">
        <span
          className={cn(
            'absolute size-full animate-ping rounded-full bg-red-500 opacity-75',
            { 'bg-green-500': available }
          )}
        />
        <span
          className={cn('relative size-2.5 rounded-full bg-red-500', {
            'bg-green-500': available,
          })}
        />
      </div>
      <span>{available ? 'available' : 'unavailable'}</span>
    </div>

    <DrawnArrow show={available} />
  </div>
);

const DrawnArrow = ({ show }: { show: boolean }) => {
  if (!show) return null;

  return (
    <div className="hand-drawn-arrow absolute -bottom-16 -left-24 scale-75 text-zinc-500 transition-transform duration-300 md:-bottom-20 md:-left-28 md:scale-100">
      <svg width="118" height="55" viewBox="0 0 118 55" fill="none">
        <path d="M2 46.756c5.043-3.269 10.435-6.153 15.664-9.082 3.068-1.718 6.134-3.44 9.226-5.116 2.238-1.212 8.299-5.401 6.897-3.276-2.108 3.197-9.238 6.45-12.1 8.45-4.398 3.072-7.555 5.318-11.553 8.823-1.737 1.523-4.623 2.952-4.513 5.26.158 3.319 22.011-7.72 23.08-8.306 6.152-3.379 12.328-6.62 18.882-9.169 2.1-.817 11.99-4.914 4.599.517-5.426 3.987-11.074 7.745-15.75 12.647-.804.842-5.128 5.378-.805 5.403 4.07.023 8.711-1.9 12.416-3.277 9.655-3.588 18.696-8.491 27.505-13.795 11.528-6.942 26.158-17.935 37.079-25.776" />
        <path d="M92.016 14.681c6.075-1.195 12.214-3.073 17.877-5.575 1.477-.653 3.407-1.577 4.756-2.902m0 0c.959-.942 1.624-2.086 1.624-3.479 0-1.986-.793.416-1.624 3.479m0 0c-.628 2.314-1.803 5.336-2.149 6.796-.998 4.215-1.887 8.814-.825 13.063ZM2 46.756c5.043-3.269 10.435-6.153 15.664-9.082 3.068-1.718 6.134-3.44 9.226-5.116 2.238-1.212 8.299-5.401 6.897-3.276-2.108 3.197-9.238 6.45-12.1 8.45-4.398 3.072-7.555 5.318-11.553 8.823-1.737 1.523-4.623 2.952-4.513 5.26.158 3.319 22.011-7.72 23.08-8.306 6.152-3.379 12.328-6.62 18.882-9.169 2.1-.817 11.99-4.914 4.599.517-5.426 3.987-11.074 7.745-15.75 12.647-.804.842-5.128 5.378-.805 5.403 4.07.023 8.711-1.9 12.416-3.277 9.655-3.588 18.696-8.491 27.505-13.795 11.528-6.942 27.24-18.784 38.161-26.625" />
      </svg>
    </div>
  );
};
