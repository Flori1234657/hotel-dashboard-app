const Variant3 = ({ objProp, setVariant }) => {
  const onOptClick = (e, elm) => {
    if (elm == "par") {
      e.target.style.color = "#f5f5fb";
      e.target.nextElementSibling.style.color = "#8f98a9";
    } else {
      e.target.style.color = "#f5f5fb";
      e.target.previousElementSibling.style.color = "#8f98a9";
    }
  };

  return (
    <>
      <img src={objProp.log} alt="Logo" />
      <h2>MAIN</h2>
      <nav>
        <div onClick={() => setVariant("v1")}>
          <img src={objProp.hm} alt="" />
          <h3>Kreu</h3>
        </div>
        <div onClick={() => setVariant("v2")}>
          <img src={objProp.bkg} alt="" />
          <h3>Rezervimet</h3>
          <h4>+</h4>
        </div>

        <div
          onClick={() => setVariant("v3")}
          style={{ backgroundColor: "#7a9ffb" }}
        >
          <img src={objProp.rm} alt="" />
          <h3>Dhomat</h3>
          <h4>-</h4>
        </div>
        <ul>
          <li onClick={(e) => onOptClick(e, "par")}>Fshi Dhom</li>
          <li onClick={(e) => onOptClick(e, "dyt")}>Shto Dhom</li>
        </ul>
        <div onClick={() => setVariant("v4")}>
          <img src={objProp.cl} alt="" />
          <h3>Kalendari</h3>
          <h4>+</h4>
        </div>
      </nav>
      <button style={{ marginTop: "9.4em" }}>DIL</button>
    </>
  );
};

export default Variant3;
