import React, { useRef, useEffect, useCallback } from 'react';

interface Spark {
  x: number;
  y: number;
  angle: number;
  startTime: number;
}

// ponytail: fixed to the one call site (PageLayout). Re-add props if a second caller needs different values.
const SPARK_COLOR = '#7ddb9f';
const SPARK_SIZE = 10;
const SPARK_RADIUS = 15;
const SPARK_COUNT = 8;
const DURATION = 400;

const ClickSpark: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sparksRef = useRef<Spark[]>([]);
  const animationIdRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const parent = canvas.parentElement;
    if (!parent) return;

    const resizeCanvas = () => {
      const { width, height } = parent.getBoundingClientRect();
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }
    };

    const ro = new ResizeObserver(resizeCanvas);
    ro.observe(parent);

    resizeCanvas();

    return () => ro.disconnect();
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

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (animationIdRef.current !== null) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const now = performance.now();
    const newSparks: Spark[] = Array.from({ length: SPARK_COUNT }, (_, i) => ({
      x,
      y,
      angle: (2 * Math.PI * i) / SPARK_COUNT,
      startTime: now,
    }));

    sparksRef.current.push(...newSparks);
    startAnimation();
  };

  return (
    <div className="relative h-full w-full" onClick={handleClick}>
      <canvas ref={canvasRef} className="pointer-events-none absolute inset-0" aria-hidden="true" />
      {children}
    </div>
  );
};

export default ClickSpark;
