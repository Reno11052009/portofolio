'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './ScrambledText.css';

interface ScrambledTextProps {
  radius?: number;
  duration?: number;
  speed?: number;
  scrambleChars?: string;
  className?: string;
  style?: React.CSSProperties;
  children: string;
}

const ScrambledText: React.FC<ScrambledTextProps> = ({
  radius = 100,
  duration = 1.2,
  speed = 0.5,
  scrambleChars = '.:',
  className = '',
  style = {},
  children
}) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const charsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    if (!rootRef.current) return;

    const charElements = rootRef.current.querySelectorAll('.char');
    charsRef.current = Array.from(charElements) as HTMLElement[];

    const handleMove = (e: PointerEvent) => {
      charsRef.current.forEach((c) => {
        const original = c.getAttribute('data-content');
        if (!original || original.trim() === '') return;

        const { left, top, width, height } = c.getBoundingClientRect();
        const dx = e.clientX - (left + width / 2);
        const dy = e.clientY - (top + height / 2);
        const dist = Math.hypot(dx, dy);

        if (dist < radius) {
          // If already animating, we skip to avoid visual jittering
          if ((c as any)._isAnimating) return;
          (c as any)._isAnimating = true;

          const obj = { progress: 0 };
          const tweenDuration = duration * (1 - dist / radius);

          (c as any)._gsapTween = gsap.to(obj, {
            progress: 1,
            duration: tweenDuration,
            ease: 'none',
            onUpdate: () => {
              if (Math.random() > obj.progress) {
                c.innerHTML = scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
              } else {
                c.innerHTML = original;
              }
            },
            onComplete: () => {
              c.innerHTML = original;
              (c as any)._isAnimating = false;
              (c as any)._gsapTween = null;
            }
          });
        }
      });
    };

    const el = rootRef.current;
    el.addEventListener('pointermove', handleMove);

    return () => {
      el.removeEventListener('pointermove', handleMove);
      // Clean up running animations
      charsRef.current.forEach((c) => {
        if ((c as any)._gsapTween) {
          (c as any)._gsapTween.kill();
        }
      });
    };
  }, [radius, duration, speed, scrambleChars]);

  const text = children || '';
  const chars = text.split('');

  return (
    <div ref={rootRef} className={`text-block ${className}`} style={style}>
      <p>
        {chars.map((char, index) => (
          <span
            key={index}
            className="char"
            data-content={char}
            style={{ display: char === ' ' ? 'inline' : 'inline-block' }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </p>
    </div>
  );
};

export default ScrambledText;
