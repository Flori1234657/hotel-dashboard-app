import SearchIcon from "../../assets/images/icons/search.png";
import GoBckArr from "../../assets/images/icons/goBackArr.png";
import Add from "../../assets/images/icons/plus.png";
import Veprimet from "../../assets/images/icons/materialiconsround_24px.png";
import { guestObj } from "../Data";

const FirstPage = () => {
  return (
    <main className="bookingFirstPage">
      <section className="bookingFirstPage_txt">
        <h1>Faqja e rezervimeve</h1>
        <h2>Të gjitha rezervimet</h2>
      </section>
      <section className="bookingPanel">
        <section className="panelUp">
          <div className="optLeft">
            <h3>Paneli Rezervimit</h3>
            <div className="searchField">
              <input type="text" placeholder="Kërko" />
              <img src={SearchIcon} alt="" />
            </div>
          </div>
          <div className="optRight">
            <div>
              <img src={Add} alt="" />
            </div>
            <div>
              <img src={GoBckArr} alt="" />
            </div>
          </div>
        </section>
        <section className="panelDown">
          <div className="table">
            <div className="tHead">
              <div className="tRow">
                <h5 className="emrh5">Emri</h5>
                <h5>Telefoni</h5>
                <h5>Email</h5>
                <h5>Mbërrin</h5>
                <h5>Ikën</h5>
                <h5>Dhoma</h5>
                <h5>Vizitorët</h5>
              </div>
            </div>

            <div className="tBody">
              {guestObj.map((el) => (
                <div className="tr" key={el.numri}>
                  <h5 className="tdEmr">{el.emri}</h5>
                  <h5>{el.numri}</h5>
                  <h5>{el.email}</h5>
                  <h5>{el.ardhja}</h5>
                  <h5>{el.ikja}</h5>
                  <h5>{el.dhoma}</h5>
                  <h5>{el.vizitor}</h5>
                  <h5>
                    <img src={Veprimet} alt="" />
                  </h5>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};

export default FirstPage;
