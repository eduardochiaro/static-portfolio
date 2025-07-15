import { FC, useEffect, useState } from 'react';

const SideScroll: FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div className="bg-retro-text/10 dark:bg-dark-text/10 fixed top-1/2 left-10 z-10 hidden h-3/5 w-2 -translate-y-1/2 rounded-sm md:block"></div>
      <div className="fixed top-1/2 left-10 z-50 hidden h-3/5 w-2 -translate-y-1/2 md:block">
        <div
          className="bg-retro-orange dark:bg-dark-orange absolute -mt-6 -ml-0.5 h-12 w-3 rounded-sm transition-all duration-100 ease-linear"
          style={{
            top: `${scrollProgress}%`,
          }}
        />
      </div>
    </>
  );
};

export default SideScroll;
