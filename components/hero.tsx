const Hero = () => {
  return (
    <section className="w-screen h-screen relative -z-[1]">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="object-cover w-full h-full"
        src="/hero.webm"
        preload="none" // This helps in delaying the loading until needed
        aria-describedby="hero-description" // Accessibility improvement
      />
      <div className="absolute z-10 top-0 left-0 gap-2 flex-col w-full h-full flex items-center justify-center">
        <h1 className="text-white/70 text-8xl tracking-[10px] uppercase font-black">
          Stefan Rotari
        </h1>
        <p
          id="hero-description"
          className="text-neutral-200/80 uppercase text-lg tracking-[20px] font-semibold"
        >
          Frontend Developer
        </p>
      </div>
      <div className="absolute bg-gradient-to-t from-[#121212] to-transparent bottom-0 left-0 w-full h-2/3" />
    </section>
  );
};

export default Hero;
