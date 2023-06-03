import { useNavigate } from "react-router-dom";
import { PageContext } from "../../App";
import { useContext } from "react";

const Variant4 = ({ objProp, setVariant }) => {
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
        >
          <img src={objProp.bkg} alt="" />
          <h3>Rezervimet</h3>
          <h4>+</h4>
        </div>
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
          style={{ backgroundColor: "#7a9ffb" }}
        >
          <img src={objProp.cl} alt="" />
          <h3>Kalendari</h3>
          <h4>-</h4>
        </div>
      </nav>
      <button>DIL</button>
    </>
  );
};

export default Variant4;
