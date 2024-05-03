const About = () => {
  return (
    <div className="my-20 text-center max-w-screen-lg mx-auto p-2">
      <p className="text-sm mb-2 text-neutral-500  uppercase font-bold tracking-[10px]">
        About Me
      </p>
      <h2 className="text-6xl text-neutral-500 font-bold uppercase">
        Who <span className="text-white">am</span> I? <br /> And{" "}
        <span className="text-white">What</span> I do?
      </h2>
      <p className="text-neutral-500 text-xl leading-9 font-semibold mt-10 ">
        I am a Frontend Developer with a passion for building beautiful and
        functional user interfaces. I have experience working with modern
        technologies such as React, Next.js, and Tailwind CSS. I am always
        looking to learn new things and improve my skills.
      </p>
    </div>
  );
};

export default About;
