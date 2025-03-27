'use client';

import { getRandomInRange } from '@/utils/math';
import React from 'react';

type Star = {
  id: number;
  top: string;
  left: string;
  size: number;
  duration: number;
};

export const Stars = () => {
  const [stars, setStars] = React.useState<Star[]>([]);

  React.useEffect(() => {
    const generateStar = (id: number): Star => {
      const top = `${getRandomInRange(0, 100)}%`;
      const left = `${getRandomInRange(0, 100)}%`;
      const size = getRandomInRange(0.5, 2);
      const duration = getRandomInRange(3, 9);

      return {
        id,
        top,
        left,
        size,
        duration,
      };
    };

    const stars = Array.from({ length: 92 }, (_, i) => generateStar(i));
    setStars(stars);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden duration-1000 animate-in fade-in">
      {stars.map(({ id, duration, top, left, size }) => (
        <div
          key={id}
          className="absolute animate-twinkle rounded-full bg-slate-100"
          style={{
            top,
            left,
            width: size,
            height: size,
            animationDuration: `${duration}s`,
          }}
        />
      ))}
    </div>
  );
};
