'use client';

import { AnimationEventHandler, ElementType, ReactNode } from 'react';
import { useReveal } from '../hooks/useReveal';

type RevealProps = {
  children: ReactNode;
  /** ms delay before the fade-up begins. Use `i * 80` for stagger in grids. */
  delay?: number;
  as?: ElementType;
  className?: string;
};

export default function Reveal({
  children,
  delay = 0,
  as: Tag = 'div',
  className = '',
}: RevealProps) {
  const { ref, isInView } = useReveal<HTMLDivElement>();
  const state = isInView ? 'reveal-in' : 'reveal-init';

  // Drop the composited layer once the fade-up finishes — otherwise the
  // `will-change: opacity, transform` hint sticks around forever and the
  // compositor keeps repainting through dozens of stale layers on scroll.
  const onAnimationEnd: AnimationEventHandler<HTMLElement> = (e) => {
    if (e.animationName === 'revealFadeUp') {
      (e.currentTarget as HTMLElement).style.willChange = 'auto';
    }
  };

  return (
    <Tag
      ref={ref}
      className={`${state} ${className}`.trim()}
      style={delay ? { animationDelay: `${delay}ms` } : undefined}
      onAnimationEnd={onAnimationEnd}
    >
      {children}
    </Tag>
  );
}
