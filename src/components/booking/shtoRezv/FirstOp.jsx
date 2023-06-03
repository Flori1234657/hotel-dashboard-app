import { useEffect } from "react";
import { Form } from "react-router-dom";

const FirstOp = ({ setOptRendr }) => {
  useEffect(() => {
    setOptRendr("FrstOp");
  }, []);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setOptRendr("SecondOp");
      }}
      className="formNje"
    >
      <div className="nameSurname">
        <div className="name">
          <label>Emri</label>
          <input type="text" placeholder="Emri" />
          <h4>Error</h4>
        </div>
        <div className="surname">
          <label>Mbiemri</label>
          <input type="text" placeholder="Mbiemri" />
          <h4>Error</h4>
        </div>
      </div>
      <div className="checkinCheckout">
        <div className="checkin">
          <label>Ardhja</label>
          <input type="text" placeholder="dd/mm/vvvv" />
          <h4>Error</h4>
        </div>
        <div className="checkout">
          <label>Ikja</label>
          <input type="text" placeholder="dd/mm/vvvv" />
          <h4>Error</h4>
        </div>
      </div>
      <div className="adultsChildrens">
        <div className="adults">
          <label>Të rritur</label>
          <input type="number" min={1} max={6} placeholder="Numri" />
          <h4>Error</h4>
        </div>
        <div className="childrens">
          <label>Fëmije</label>
          <input type="text" min={0} max={5} placeholder="Numri" />
          <h4>Error</h4>
        </div>
      </div>
      <button type="submit">Tjetra</button>
      <h5>Faqja 1/2</h5>
    </form>
  );
};

export default FirstOp;
