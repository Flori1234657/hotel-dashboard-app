const Variant4 = ({ objProp, setVariant }) => {
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
        <div onClick={() => setVariant("v3")}>
          <img src={objProp.rm} alt="" />
          <h3>Dhomat</h3>
          <h4>+</h4>
        </div>
        <div
          onClick={() => setVariant("v4")}
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
