const SecondOp = ({ setOptRendr }) => {
  return (
    <form className="formDy">
      <div className="roomType">
        <label>Dhoma</label>
        <select>
          <option value="" disabled></option>
          <option value="DhomTeke">Dhom Teke</option>
          <option value="DhomCift">Dhom Çift</option>
          <option value="DhomFamiljare">Dhom Familjare</option>
        </select>
        <h4>Error</h4>
      </div>
      <div className="email">
        <label>Emaili</label>
        <input type="email" placeholder="Emaili" />
        <h4>Error</h4>
      </div>
      <div className="telNr">
        <label>Numri Telefonit</label>
        <input type="tel" placeholder="Telefoni" />
        <h4>Error</h4>
      </div>

      <div className="cmimiText">
        <h3>Çmimi</h3>
        <h4>$1820</h4>
      </div>
      <div className="btnCon">
        <button
          onClick={(e) => {
            e.preventDefault();
            setOptRendr("FirstOp");
          }}
        >
          Mbrapa
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            setOptRendr("SuccessOp");
          }}
        >
          Dorëzo
        </button>
      </div>
      <h5>Faqja 2/2</h5>
    </form>
  );
};

export default SecondOp;
