import safe from "../../assets/images/icons/teDhenatIcon/kasaf.png";
import krevat from "../../assets/images/icons/teDhenatIcon/bed.png";
import lek from "../../assets/images/icons/teDhenatIcon/money.png";
import leter from "../../assets/images/icons/teDhenatIcon/paper.png";
import trePikat from "../../assets/images/icons/trePikatMenu.png";
import LineChart from "../chart/LineChart";
import RrethorChart from "../chart/RrethorChart";
import { useContext, useState } from "react";
import { PageContext } from "../../App";

const Main = ({ shfaqNav }) => {
  const dta = useContext(PageContext);
  const data = new Date();
  const path = dta.statsData[0].NumriDhomave;
  const path2 = dta.statsData[0].Rezervuar;

  const [dhGjithsej, setDhGjithsej] = useState(
    path.dhomTeke + path.dhomCift + path.dhomFamiljare
  );

  const [rzvr, setRzvr] = useState(
    path2.dhomTeke + path2.dhomCift + path2.dhomFamiljare
  );

  const [dhmDizpNr, setDhmDizpNr] = useState(dhGjithsej - rzvr);

  const [allRoomsCost, setAllRoomsCost] = useState(() => {
    const dht = `${path.dhomTeke * 100}`;
    const dhc = `${path.dhomCift * 120}`;
    const dhf = `${path.dhomFamiljare * 150}`;

    return Number(dht) + Number(dhc) + Number(dhf);
  });

  const [ftTotal, setFtTotal] = useState("");

  const [ftmSot, setFtmSot] = useState(() => {
    let perPages = 0;

    dta.firestoreData.forEach((el) => {
      if (
        el.ditaArdjhes ==
          `${data.getMonth() + 1}/${data.getDate()}/${data.getFullYear()}` &&
        el.pranuar
      ) {
        if (el.dhoma === "dhomTeke") perPages += 100;
        if (el.dhoma === "dhomCift") perPages += 120;
        if (el.dhoma === "dhomFamiljare") perPages += 150;
      }
    });

    return perPages;
  });

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
                <h2>{rzvr}</h2>
              </div>
            </div>

            <div className="progressBar">
              <div
                style={{
                  width: `${Math.floor((rzvr * 100) / dhGjithsej)}%`, //e bere *92 pasi duam fitimin max te gjith sezoni nga dhomat
                  backgroundColor: "#069715",
                }}
              ></div>
            </div>
          </div>
          <div className="cardCont">
            <div className="txtIcn">
              <img src={krevat} alt="bed icon" />
              <div className="text">
                <h3>{shfaqNav ? "Dhoma diz." : "Dhoma të lira"}</h3>
                <h2>{dhmDizpNr}</h2>
              </div>
            </div>

            <div className="progressBar">
              <div
                style={{
                  width: `${Math.floor((dhmDizpNr * 100) / dhGjithsej)}%`,
                  backgroundColor: "#9235e8",
                }}
              ></div>
            </div>
          </div>
          <div className="cardCont">
            <div className="txtIcn">
              <img src={lek} alt="money icon" />
              <div className="text">
                <h3>Fitimet Sot</h3>
                <h2>${ftmSot}</h2>
              </div>
            </div>

            <div className="progressBar">
              <div
                style={{
                  width: `${Math.floor((ftmSot * 100) / allRoomsCost)}%`,
                  backgroundColor: "#e88c35",
                }}
              ></div>
            </div>
          </div>
          <div className="cardCont">
            <div className="txtIcn">
              <img src={safe} alt="" />
              <div className="text">
                <h3>Fitimi total/sezon</h3>
                <h2>${ftTotal ? ftTotal : "..."}</h2>
              </div>
            </div>

            <div className="progressBar">
              {ftTotal ? (
                <div
                  style={{
                    width: `${Math.floor(
                      (ftTotal * 100) / (allRoomsCost * 92)
                    )}%`,
                    backgroundColor: "#970606",
                  }}
                ></div>
              ) : (
                ""
              )}
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
              <LineChart
                statistikat={dta.statistikat}
                setFtTotal={setFtTotal}
                ftmSot={ftmSot}
                rrimerStats={dta.setRegetData}
              />
            </div>
          </div>
          <div className="secondChart">
            <div>
              <h3>Grafiku i rezervimeve</h3>
              <img src={trePikat} alt="three doots" />
            </div>
            <div className="rrethorChart">
              <RrethorChart dhomat={dta.statsData} />
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Main;
