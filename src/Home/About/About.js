const About = () => {
  return (
    <div className="p-4">
      <p className="text-2xl">About Me</p>
      <p className="text-lg my-1 mx-auto w-10/12 text-pretty flex flex-col gap-y-3 border-s-2 border-black ps-2">
        <span>
          I’m a self-driven front-end developer who loves the mix of beautiful
          UI and solid code.
        </span>
        <span>
          My day-to-day stack is React, Tailwind CSS, Sass, Bootstrap, and a
          dash of jQuery for legacy work.
        </span>
        <span>
          Outside the IDE I’m a musicophile, coffee addict, and article writer
          (English & Persian).
        </span>
      </p>
    </div>
  );
};

export default About;
