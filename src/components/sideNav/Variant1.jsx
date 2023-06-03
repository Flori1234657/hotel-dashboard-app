import { useNavigate } from "react-router-dom";
import { PageContext } from "../../App";
import { useContext } from "react";

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
        <div
          onClick={() => {
            setVariant("v1");
            nav("/home.userflori");
          }}
          style={{ backgroundColor: "#7a9ffb" }}
        >
          <img src={objProp.hm} alt="" />
          <h3>Kreu</h3>
        </div>
        <div
          onClick={() => {
            setVariant("v2");
            nav("/booking.userflori");
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
            nav("/rooms.userflori");
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
            nav("/calendar.userflori");
          }}
        >
          <img src={objProp.cl} alt="" />
          <h3>Kalendari</h3>
          <h4>+</h4>
        </div>
      </nav>
      <button>DIL</button>
    </>
  );
};

export default Variant1;
