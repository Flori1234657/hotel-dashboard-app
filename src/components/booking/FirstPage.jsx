import SearchIcon from "../../assets/images/icons/search.png";
import GoBckArr from "../../assets/images/icons/goBackArr.png";
import Add from "../../assets/images/icons/plus.png";
import Veprimet from "../../assets/images/icons/materialiconsround_24px.png";
import { PageContext } from "../../App";
import { useContext, useEffect, useState } from "react";
import OnImgClick from "./OnImgClick";

const FirstPage = () => {
  const dta = useContext(PageContext);
  const [data, setData] = useState(dta.firestoreData);
  const [dcsId, setDcsId] = useState("");
  const [showOptions, setShowOptions] = useState(false);
  const [sameId, setSameID] = useState("");
  const [pozicioniOpti, setPozicioniOpt] = useState({
    top: 0,
  });
  const [dataForSpecific, setDataForSpecific] = useState();
  const [search, setSearch] = useState("");
  useEffect(() => {
    const refr = [...document.getElementById("bkfpID").childNodes];
    //marrim ato qe jan te pranuar per ti ndryshuar stilimet InshaaAllah
    const elems = refr.map((el, i) => {
      if (data[i] != null) {
        if (
          el.childNodes[0].innerText == `${data[i].emri} ${data[i].mbiemri}`
        ) {
          if (data[i].pranuar === true) {
            return el;
          }
        }
        return;
      }
      return;
    });
    elems.forEach((el) => {
      if (el != undefined) {
        el.childNodes.forEach((il) => {
          il.style.color = "#069715";
        });
      }
    });
  }, [data]);

  useEffect(() => {
    setData(dta.firestoreData);
  }, [dta]);

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
              <input
                type="text"
                placeholder="Kërko"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setTimeout(() => {
                    console.log("cuar");
                    setData([...dta.firestoreData]);
                  }, 3000);
                }}
              />
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

            <div className="tBody" id="bkfpID">
              {data
                .filter((il) => {
                  //searchfunc
                  if (search === "") {
                    return il;
                  } else if (
                    il.emri.toLowerCase().includes(search.toLowerCase())
                  ) {
                    return il;
                  }
                })
                .map((el) => (
                  <div className="tr" key={`${el.idja}${el.mbiemri}`}>
                    <h5 className="tdEmr">{`${el.emri} ${el.mbiemri}`}</h5>
                    <h5>{el.telefon}</h5>
                    <h5>{el.email}</h5>
                    <h5>{el.ditaArdjhes}</h5>
                    <h5>{el.ditaIkjes}</h5>
                    <h5>{el.dhoma}</h5>
                    <h5>{`${
                      Number(el.persona.femij) + Number(el.persona.teRritur)
                    }`}</h5>
                    <h5>
                      <img
                        src={Veprimet}
                        alt="icon"
                        onClick={(e) => {
                          setShowOptions(!showOptions);
                          setSameID(`${el.telefon}/${el.emri}`);
                          setPozicioniOpt({
                            top: `${e.target.offsetTop + 4}px`,
                          });
                          setDataForSpecific(el);
                          setDcsId(dta.docsId[data.indexOf(el)]);
                        }}
                      />
                    </h5>
                  </div>
                ))}
              {showOptions ? (
                <OnImgClick
                  pozicioniOpti={pozicioniOpti}
                  dataForSpecific={dataForSpecific}
                  docsId={dcsId}
                  setDataForSpecific={setDataForSpecific}
                  rrimerrTeDhenat={dta.setRegetData}
                  setShowOptions={setShowOptions}
                  dhomatFirebase={dta.firestoreDhomatDat}
                  statsData={dta.statsData}
                />
              ) : (
                ""
              )}
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};

export default FirstPage;
