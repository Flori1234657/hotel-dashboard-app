import { useEffect } from "react";
import Header from "../components/home/Header";
import Main from "../components/home/Main";

const Home = ({ setShfaqNav }) => {
  useEffect(() => {
    setShfaqNav(true);
  }, []);

  return (
    <div className="conRight">
      <Header />
      <Main />
    </div>
  );
};

export default Home;
