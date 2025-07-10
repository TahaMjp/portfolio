import Description from "./Description/Description";
import Header from "./Header/Header";
import Skills from "./Skills/Skills";

const Home = () => {
  return (
    <div className="flex flex-col h-screen bg-slate-900 text-white ">
      <Header />
      <Description />
      <Skills />
    </div>
  );
};

export default Home;
