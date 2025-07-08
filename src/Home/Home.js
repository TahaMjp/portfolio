import About from "./About/About";
import Accounts from "./Accounts/Accounts";
import Header from "./Header/Header";
import Services from "./Services/Services";
import Skills from "./Skills/Skills";

const Home = () => {
  return (
    <div className="flex flex-col font-[sfPro] tracking-wide gap-y-2">
      <Header />
      <About />
      <Skills />
      <Services />
      <Accounts />
    </div>
  );
};

export default Home;
