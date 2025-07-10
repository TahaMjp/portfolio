const Skills = () => {
  return (
    <div className="backdrop-blur-md shadow-lg shadow-black/50 bg-white/10 rounded-xl p-6 w-10/12 mx-auto text-center text-white mt-10 border-white/20">
      <h2 className="text-xl font-semibold mb-4">Tech I Work With</h2>
      <div className="grid grid-cols-3 gap-3 text-white/90 tracking-wide">
        <span className="bg-white/10 rounded-md py-2 px-2">React</span>
        <span className="bg-white/10 rounded-md py-2 px-2">Tailwind</span>
        <span className="bg-white/10 rounded-md py-2 px-2">JavaScript</span>
        <span className="bg-white/10 rounded-md py-2 px-2">HTML</span>
        <span className="bg-white/10 rounded-md py-2 px-2">CSS</span>
        <span className="bg-white/10 rounded-md py-2 px-2">GitHub</span>
      </div>
    </div>
  );
};

export default Skills;
