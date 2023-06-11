import safe from "../../assets/images/icons/teDhenatIcon/kasaf.png";
import krevat from "../../assets/images/icons/teDhenatIcon/bed.png";
import lek from "../../assets/images/icons/teDhenatIcon/money.png";
import leter from "../../assets/images/icons/teDhenatIcon/paper.png";
import trePikat from "../../assets/images/icons/trePikatMenu.png";
import LineChart from "../chart/LineChart";
import RrethorChart from "../chart/RrethorChart";

const Main = ({ shfaqNav }) => {
  return (
    <main className="homeMain">
      <section className="homeMainText">
        <h1>Përshëndetje mirëseerdhe!</h1>
        <h2>Paneli i Hotelit</h2>
      </section>
      <section className="teDhenatCont">
        <section className="firstInfoCont">
          <div className="cardCont">
            <div className="txtIcn">
              {" "}
              <img src={leter} alt="paper icon" />
              <div className="text">
                <h3>{shfaqNav ? "Total rez." : "Rezervime total"}</h3>
                <h2>1,230</h2>
              </div>
            </div>

            <div className="progressBar">
              <div style={{ width: "70%", backgroundColor: "#069715" }}></div>
            </div>
          </div>
          <div className="cardCont">
            <div className="txtIcn">
              <img src={krevat} alt="bed icon" />
              <div className="text">
                <h3>{shfaqNav ? "Dhoma diz." : "Dhoma të lira"}</h3>
                <h2>130</h2>
              </div>
            </div>

            <div className="progressBar">
              <div style={{ width: "96%", backgroundColor: "#9235e8" }}></div>
            </div>
          </div>
          <div className="cardCont">
            <div className="txtIcn">
              <img src={lek} alt="money icon" />
              <div className="text">
                <h3>Fitimet Sot</h3>
                <h2>$1,500</h2>
              </div>
            </div>

            <div className="progressBar">
              <div style={{ width: "60%", backgroundColor: "#e88c35" }}></div>
            </div>
          </div>
          <div className="cardCont">
            <div className="txtIcn">
              <img src={safe} alt="" />
              <div className="text">
                <h3>Fitimi Total</h3>
                <h2>$30,000</h2>
              </div>
            </div>

            <div className="progressBar">
              <div style={{ width: "20%", backgroundColor: "#970606" }}></div>
            </div>
          </div>
        </section>
        <section className="graphCont">
          <div className="graphChart">
            <div className="grChartUp">
              <h3>Grafiku i Fitimeve</h3>
              <img src={trePikat} alt="three doots" />
            </div>
            <div className="grChartDown">
              <LineChart />
            </div>
          </div>
          <div className="secondChart">
            <div>
              <h3>Grafiku i rezervimeve</h3>
              <img src={trePikat} alt="three doots" />
            </div>
            <div className="rrethorChart">
              <RrethorChart />
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Main;
