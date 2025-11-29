"use client";

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface TypewriterProps {
  texts: string[];
  speed?: number;
  delay?: number;
  className?: string;
  cursorClassName?: string;
}

export function Typewriter({ texts, speed = 100, delay = 2000, className, cursorClassName }: TypewriterProps) {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!texts || texts.length === 0) return;

    const handleTyping = () => {
      const fullText = texts[textIndex];
      if (isDeleting) {
        if (charIndex > 0) {
          setCurrentText(fullText.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      } else {
        if (charIndex < fullText.length) {
          setCurrentText(fullText.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          // Pause at the end of the word
          const timeout = setTimeout(() => setIsDeleting(true), delay);
          return () => clearTimeout(timeout);
        }
      }
    };

    const timeout = setTimeout(handleTyping, isDeleting ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts, speed, delay]);

  return (
    <span className={className}>
      {currentText}
      <span className={cn("ml-2 inline-block w-1 animate-pulse bg-accent", cursorClassName)}>
        &nbsp;
      </span>
    </span>
  );
}
