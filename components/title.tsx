'use client';

import { useEffect, useState } from 'react';

const headers = ['Bryan Pothon', 'bryanpth.dev'];

const TYPING_SPEED = 150;
const DELETING_SPEED = 100;
const PAUSE_BEFORE_DELETING = 2000;
const PAUSE_AFTER_DELETING = 500;

export const TypingName = () => {
  const [header, setHeader] = useState(headers[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(TYPING_SPEED);

  useEffect(() => {
    const currentText = headers[currentIndex % headers.length];

    const timeoutId = setTimeout(() => {
      if (!isDeleting && header === currentText) {
        setTimeout(() => setIsDeleting(true), PAUSE_BEFORE_DELETING);
        return;
      }

      if (isDeleting && header === '') {
        setIsDeleting(false);
        setCurrentIndex((prev) => prev + 1);
        setTypingSpeed(PAUSE_AFTER_DELETING);
        return;
      }

      setHeader((prev) =>
        isDeleting
          ? currentText.substring(0, prev.length - 1)
          : currentText.substring(0, prev.length + 1)
      );

      setTypingSpeed(isDeleting ? DELETING_SPEED : TYPING_SPEED);
    }, typingSpeed);

    return () => clearTimeout(timeoutId);
  }, [header, currentIndex, isDeleting, typingSpeed]);

  return (
    <h1 className="font-sans text-lg font-black tracking-wider">
      <span className="sr-only">Bryan Pothon</span>
      <span aria-hidden="true">
        {header}
        <span className="animate-blink font-normal">_</span>
      </span>
    </h1>
  );
};
