import customText from "../constants/index";
import logo from ".././assets/images/darkLogo.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LogIn = ({ setRouteHyr, setShfaqNav }) => {
  const [usr, setusr] = useState("flori"); //useri qe do marrim nga google inshaaAllah
  const nav = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setRouteHyr(usr);
    nav(`/home.user${usr}`);
  };

  useEffect(() => {
    setShfaqNav(false);
  }, []);

  return (
    <div className="login">
      <h1>{customText.Login[0].titulli}</h1>
      <form onSubmit={handleFormSubmit}>
        <div>
          <img src={logo} alt="Hotel Logo" />
          <h1>Kyçu</h1>
        </div>
        <div className="loginBtns">
          <button>Vazhdo me Google</button>
          <button>Dil</button>
        </div>
        <p>
          Nëse nuk keni akses tek llogaria e google ju lutem kontaktoni me
          <a href="#"> programuesin</a>.
        </p>
      </form>
    </div>
  );
};

export default LogIn;
