'use client';

import { useEffect, useRef } from 'react';

interface Props {
  src: string;
  className?: string;
  loop?: boolean;
  stopAt?: number;
  playbackRate?: number;
}

export default function VideoPlayer({
  src,
  className,
  loop = false,
  stopAt,
  playbackRate = 0.7,
}: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hasPlayed = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.playbackRate = playbackRate;

    if (stopAt !== undefined) {
      const handleEnded = () => {
        video.currentTime = stopAt;
      };
      video.addEventListener('ended', handleEnded);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasPlayed.current) {
            video.play().catch(() => {});
            hasPlayed.current = true;
          }
        });
      },
      { threshold: 0.5 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [stopAt, playbackRate]);

  return (
    <video
      ref={videoRef}
      src={src}
      muted
      playsInline
      loop={loop}
      className={className}
    />
  );
}
