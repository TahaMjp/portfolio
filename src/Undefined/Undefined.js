const Undefined = () => {
  return (
    <div className="flex flex-col bg-slate-900 text-white h-screen">
      <div className="w-10/12 mx-auto bg-white/10 rounded-xl backdrop-blur-md shadow-lg shadow-black/50 p-4  flex mt-10 flex-col tracking-wide space-y-3">
        <h2 className="font-bold text-2xl mx-auto">
          Oops! This page is undefined.
        </h2>
        <br />
        The link you followed may be broken, or the page might have been removed
      </div>
    </div>
  );
};

export default Undefined;
