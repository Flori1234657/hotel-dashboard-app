import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { PageContext } from "../../App";
import { motion } from "framer-motion";

const Variant2 = ({ objProp, setVariant }) => {
  const nav = useNavigate();
  const pages = useContext(PageContext);

  const onOptClick = (e, elm) => {
    if (elm == "par") {
      e.target.style.color = "#f5f5fb";
      e.target.nextElementSibling.style.color = "#8f98a9";
      setVariant("v2");
      pages.setSwitchPagejObj({
        ...pages.switchPageObj,
        bkPg: {
          ...pages.switchPageObj.bkPg,
          fp: "active",
          sp: "pasive",
        },
      });
    } else {
      e.target.style.color = "#f5f5fb";
      e.target.previousElementSibling.style.color = "#8f98a9";
      pages.setSwitchPagejObj({
        ...pages.switchPageObj,
        bkPg: {
          ...pages.switchPageObj.bkPg,
          fp: "pasive",
          sp: "active",
        },
      });
    }
  };

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
        <div
          onClick={() => {
            setVariant("v1");
            nav("/home.userAlbanian%20HD");
          }}
        >
          <img src={objProp.hm} alt="" />
          <h3>Kreu</h3>
        </div>
        <motion.div
          onClick={() => {
            setVariant("v2");
            returnActiveFirstPage();
            nav("/booking.userAlbanian%20HD");
          }}
          animate={{
            backgroundColor: ["#0d1627", "#7a9ffb"],
          }}
          transition={{
            duration: 1,
          }}
        >
          <img src={objProp.bkg} alt="" />
          <h3>Rezervimet</h3>
          <h4>-</h4>
        </motion.div>
        <motion.ul
          initial={{
            y: "-40%",
            display: "none",
            zIndex: -1,
          }}
          animate={{
            y: "0%",
            display: "flex",
            zIndex: 1,
          }}
        >
          <li onClick={(e) => onOptClick(e, "par")}>Rezervimet</li>
          <li onClick={(e) => onOptClick(e, "dyt")}>Shto Rezervim</li>
        </motion.ul>
        <div
          onClick={() => {
            setVariant("v3");
            returnActiveFirstPage();
            nav("/rooms.userAlbanian%20HD");
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
        style={{ marginTop: "7.3em" }}
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

export default Variant2;
