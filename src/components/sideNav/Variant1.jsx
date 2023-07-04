import { useNavigate } from "react-router-dom";
import { PageContext } from "../../App";
import { useContext } from "react";
import { motion } from "framer-motion";

const Variant1 = ({ objProp, setVariant }) => {
  const nav = useNavigate();
  const pages = useContext(PageContext);

  const returnActiveFirstPage = () => {
    pages.setSwitchPagejObj({
      ...pages.switchPageObj,
      bkPg: {
        ...pages.switchPageObj.bkPg,
        fp: "active",
        sp: "pasive",
      },
      rooPg: {
        ...pages.switchPageObj.rooPg,
        fp: "active",
        sp: "pasive",
      },
    });
  };

  return (
    <>
      <img src={objProp.log} alt="Logo" />
      <h2>MAIN</h2>
      <nav>
        <motion.div
          onClick={() => {
            setVariant("v1");
            nav("/home.userAlbanian%20HD");
          }}
          animate={{
            backgroundColor: ["#0d1627", "#7a9ffb"],
          }}
          transition={{
            duration: 1,
          }}
        >
          <img src={objProp.hm} alt="" />
          <h3>Kreu</h3>
        </motion.div>
        <div
          onClick={() => {
            setVariant("v2");
            nav("/booking.userAlbanian%20HD");
            returnActiveFirstPage();
          }}
        >
          <img src={objProp.bkg} alt="" />
          <h3>Rezervimet</h3>
          <h4>+</h4>
        </div>
        <div
          onClick={() => {
            setVariant("v3");
            nav("/rooms.userAlbanian%20HD");
            returnActiveFirstPage();
          }}
        >
          <img src={objProp.rm} alt="" />
          <h3>Dhomat</h3>
          <h4>+</h4>
        </div>
        <div
          onClick={() => {
            setVariant("v4");
            nav("/calendar.userAlbanian%20HD");
          }}
        >
          <img src={objProp.cl} alt="" />
          <h3>Kalendari</h3>
          <h4>+</h4>
        </div>
      </nav>
      <button
        onClick={() => {
          nav("/");
          location.reload();
        }}
      >
        DIL
      </button>
    </>
  );
};

export default Variant1;
