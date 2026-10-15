'use client';

import React, { useRef, useEffect, useCallback } from 'react';

interface Spark {
  x: number;
  y: number;
  angle: number;
  startTime: number;
}

// ponytail: fixed to the one call site (PageLayout). Re-add props if a second caller needs different values.
const SPARK_COLOR = '#7ddb9f'; // mirrors --color-accent; @theme inline emits no CSS variable to read
const SPARK_SIZE = 10;
const SPARK_RADIUS = 15;
const SPARK_COUNT = 8;
const DURATION = 400;

const ClickSpark: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sparksRef = useRef<Spark[]>([]);
  const animationIdRef = useRef<number | null>(null);

  // Viewport-sized and DPR-scaled: a fixed overlay costs one screen of pixels, not the whole page
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.getContext('2d')?.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationIdRef.current !== null) cancelAnimationFrame(animationIdRef.current);
    };
  }, []);

  // Start animation loop only when sparks exist, stop when empty
  const startAnimation = useCallback(() => {
    if (animationIdRef.current !== null) return; // Already running

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const draw = (timestamp: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      sparksRef.current = sparksRef.current.filter((spark: Spark) => {
        const elapsed = timestamp - spark.startTime;
        if (elapsed >= DURATION) {
          return false;
        }

        const progress = elapsed / DURATION;
        const eased = progress * (2 - progress); // ease-out

        const distance = eased * SPARK_RADIUS;
        const lineLength = SPARK_SIZE * (1 - eased);

        const x1 = spark.x + distance * Math.cos(spark.angle);
        const y1 = spark.y + distance * Math.sin(spark.angle);
        const x2 = spark.x + (distance + lineLength) * Math.cos(spark.angle);
        const y2 = spark.y + (distance + lineLength) * Math.sin(spark.angle);

        ctx.strokeStyle = SPARK_COLOR;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();

        return true;
      });

      if (sparksRef.current.length > 0) {
        animationIdRef.current = requestAnimationFrame(draw);
      } else {
        // No more sparks — stop the loop and clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        animationIdRef.current = null;
      }
    };

    animationIdRef.current = requestAnimationFrame(draw);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    // Pure decoration: the click's real feedback is the link or button it hit
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const now = performance.now();
    const newSparks: Spark[] = Array.from({ length: SPARK_COUNT }, (_, i) => ({
      x: e.clientX,
      y: e.clientY,
      angle: (2 * Math.PI * i) / SPARK_COUNT,
      startTime: now,
    }));

    sparksRef.current.push(...newSparks);
    startAnimation();
  };

  return (
    <div className="h-full w-full" onClick={handleClick}>
      <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-60 size-full" aria-hidden="true" />
      {children}
    </div>
  );
};

export default ClickSpark;
