import Accounts from "./Accounts/Accounts";
import Description from "./Description/Description";
import Header from "./Header/Header";
import Hire from "./Hire/Hire";
import Skills from "./Skills/Skills";

const Home = () => {
  return (
    <div className="flex flex-col bg-slate-900 text-white ">
      <Header />
      <Description />
      <Skills />
      <Hire />
      <Accounts />
    </div>
  );
};

export default Home;
