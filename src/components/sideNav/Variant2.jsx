import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { PageContext } from "../../App";

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
            nav("/home.userflori");
          }}
        >
          <img src={objProp.hm} alt="" />
          <h3>Kreu</h3>
        </div>
        <div
          onClick={() => {
            setVariant("v2");
            returnActiveFirstPage();
            nav("/booking.userflori");
          }}
          style={{ backgroundColor: "#7a9ffb" }}
        >
          <img src={objProp.bkg} alt="" />
          <h3>Rezervimet</h3>
          <h4>-</h4>
        </div>
        <ul>
          <li onClick={(e) => onOptClick(e, "par")}>Rezervimet</li>
          <li onClick={(e) => onOptClick(e, "dyt")}>Shto Rezervim</li>
        </ul>
        <div
          onClick={() => {
            setVariant("v3");
            returnActiveFirstPage();
            nav("/rooms.userflori");
          }}
        >
          <img src={objProp.rm} alt="" />
          <h3>Dhomat</h3>
          <h4>+</h4>
        </div>
        <div
          onClick={() => {
            setVariant("v4");
            nav("/calendar.userflori");
          }}
        >
          <img src={objProp.cl} alt="" />
          <h3>Kalendari</h3>
          <h4>+</h4>
        </div>
      </nav>
      <button style={{ marginTop: "7.3em" }}>DIL</button>
    </>
  );
};

export default Variant2;
