import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative z-50 mx-auto max-w-4xl overflow-hidden px-4 pt-16 pb-24 md:px-0">
      <p className="text-lg font-semibold">Full Stack Developer</p>
      <h1 className="mb-4 flex flex-col text-6xl leading-none font-semibold uppercase">
        <span>Eduardo</span> <span>Chiaro</span>
      </h1>
      <p className="max-w-lg text-lg">Building scalable web applications with modern tools and technologies.</p>
      <Image
        src="static/sun.svg"
        alt="sun"
        width="400"
        height="400"
        className="absolute top-0 -z-50 w-full animate-spin opacity-40"
        style={{ animationDuration: '15s' }}
      />
    </section>
  );
}
