import customText from "../constants/index";
import logo from ".././assets/images/darkLogo.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";

const LogIn = ({
  setRouteHyr,
  setShfaqNav,
  getDataDhomat,
  getDataStats,
  getStatistikat,
  getData,
}) => {
  const nav = useNavigate();

  const sgninWthGoogl = async (e) => {
    e.preventDefault();
    const sgn = await signInWithPopup(auth, provider);
    const user = sgn.user;
    {
      user.uid != "Ea77pcP1fLOJ1sJNB2Przh03EoL2"
        ? location.reload()
        : setRouteHyr(user.displayName);
      nav(`/home.user${user.displayName}`);
    }

    const waitForAnimat = setTimeout(() => {
      getData();
      getDataDhomat();
      getDataStats();
      getStatistikat();
    }, 3000);
  };
  useEffect(() => {
    setShfaqNav(false);
  }, []);

  return (
    <div className="login">
      <h1>{customText.Login[0].titulli}</h1>
      <form>
        <div>
          <img src={logo} alt="Hotel Logo" />
          <h1>Kyçu</h1>
        </div>
        <div className="loginBtns">
          <button onClick={sgninWthGoogl}>Vazhdo me Google</button>
          <button onClick={() => location.reload()}>Dil</button>
        </div>
        <p>
          Nëse nuk keni akses tek llogaria e google ju lutem kontaktoni me
          <a href="tel:+355688393968"> programuesin</a>.
        </p>
      </form>
    </div>
  );
};

export default LogIn;
