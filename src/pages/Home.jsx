import { useEffect } from "react";
import Header from "../components/home/Header";
import Main from "../components/home/Main";
import Preloader from "../components/Preloader";

const Home = ({ setShfaqNav, shfaqNav, preloader }) => {
  useEffect(() => {
    {
      preloader ? setShfaqNav(false) : setShfaqNav(true);
    }
  }, []);

  return (
    <div className="conRight">
      {preloader ? <Preloader preloader={preloader} /> : ""}

      <Header setShfaqNav={setShfaqNav} shfaqNav={shfaqNav} />
      <Main shfaqNav={shfaqNav} />
    </div>
  );
};

export default Home;
