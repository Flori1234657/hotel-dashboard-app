import { useEffect, useState } from "react";
import Header from "../components/home/Header";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { DayPicker } from "react-day-picker";
import { sq } from "date-fns/locale";
import { motion } from "framer-motion";

const Kalendar = ({ setShfaqNav, shfaqNav, firestoreData }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [objekti, setObjekti] = useState("");
  const [numriRezv, setNumriRezv] = useState(0);
  const [teDhenat2, setTeDhenat2] = useState();
  const [i, setI] = useState(1);
  const date = new Date();

  const handleDaySelect = (dt) => {
    setSelectedDate(`${dt.getMonth()}/${dt.getDate()}/${dt.getFullYear()}`);

    setObjekti(() => {
      const teDhenat = firestoreData.filter((el) => {
        if (
          el.ditaArdjhes ==
          `${dt.getMonth() + 1}/${dt.getDate()}/${dt.getFullYear()}`
        ) {
          return el;
        }
      });

      if (teDhenat.length > 0) {
        if (teDhenat.length >= 1) {
          setTeDhenat2(teDhenat);
          setNumriRezv(teDhenat.length);
          return {
            emri: `${teDhenat[0].emri} ${teDhenat[0].mbiemri}`,
            ikja: `${teDhenat[0].ditaIkjes}`,
            dtQndr: teDhenat[0].ditetEQendrimitL.length,
            femij: `${teDhenat[0].persona.femij}`,
            teRR: `${teDhenat[0].persona.teRritur}`,
            dhom: `${teDhenat[0].dhoma}`,
            pag: `${teDhenat[0].perTuPaguar}`,
          };
        }
      } else {
        setTeDhenat2({});
        setNumriRezv(0);
        return false;
      }
    });
  };
  const setObj = () => {
    //e cova kte per mos te therritur dy her te njejtin func
    setObjekti({
      emri: `${teDhenat2[i].emri} ${teDhenat2[i].mbiemri}`,
      ikja: `${teDhenat2[i].ditaIkjes}`,
      dtQndr: teDhenat2[i].ditetEQendrimitL.length,
      femij: `${teDhenat2[i].persona.femij}`,
      teRR: `${teDhenat2[i].persona.teRritur}`,
      dhom: `${teDhenat2[i].dhoma}`,
      pag: `${teDhenat2[i].perTuPaguar}`,
    });
  };
  const changeRezerv = () => {
    if (i == numriRezv - 1) {
      setI(0);
      setObj();
      return;
    }
    setObj();
    setI(i + 1);
  };

  useEffect(() => {
    setShfaqNav(true);
  }, []);

  return (
    <div className="conRight">
      <Header setShfaqNav={setShfaqNav} shfaqNav={shfaqNav} />
      <main className="calendar">
        <section className="calendar_txt">
          <motion.h1
            initial={{
              y: "100%",
              zIndex: -1,
              rotate: -60,
              transformOrigin: "bottom left",
            }}
            animate={{
              y: "0%",
              zIndex: 0,
              rotate: 0,
            }}
          >
            Kalendari
          </motion.h1>
          <motion.h2
            initial={{
              y: "-20%",
              zIndex: -1,
              rotate: -60,
              transformOrigin: "top right",
            }}
            animate={{
              y: "0%",
              zIndex: 0,
              rotate: 0,
            }}
            transition={{
              delay: 0.5,
            }}
          >
            Shiko Rezerimet
          </motion.h2>
        </section>

        <div className="shikoRezerv_cont">
          <motion.div
            className="calendar-cont"
            initial={{
              x: "60%",
              scale: "5%",
            }}
            animate={{
              x: "0%",
              scale: "100%",
            }}
            transition={{
              duration: 0.5,
            }}
          >
            <h3>Zgjidh një datë</h3>
            <h5>Data</h5>
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={handleDaySelect}
              showOutsideDays
              fromMonth={
                new Date(`${date.getFullYear()},${date.getMonth() + 1}`)
              }
              toDate={new Date(`${date.getFullYear()},8,31`)}
              modifiersClassNames={{
                today: "calendar_component",
              }}
              locale={sq}
              weekStartsOn={1}
              //  onDayClick={}
              disabled={{
                from: new Date(`${date.getFullYear()}, 6, 1`),
                to: new Date(
                  `${date.getFullYear()}, ${
                    date.getMonth() + 1
                  }, ${date.getDate()}`
                ),
              }}
            />
          </motion.div>
          <motion.div
            className="dateInformat"
            initial={{
              x: "-30%",
              opacity: 0,
              zIndex: -1,
            }}
            animate={{
              x: "0%",
              opacity: 1,
              zIndex: 0,
            }}
            transition={{
              delay: 0.5,
            }}
          >
            <h3>Rezervimet</h3>
            <h5 style={objekti ? { color: "#19cb2a" } : { color: "#cb1919" }}>
              {objekti
                ? `*Kjo datë ka ${numriRezv} rezervim${
                    numriRezv > 1 ? "e" : ""
                  } `
                : "*Kjo datë nuk ka rezervim"}
              {numriRezv > 1 ? (
                <span
                  style={{
                    color: "#f5f5fb",
                    cursor: "pointer",
                    marginLeft: "10em",
                    padding: "0.5em 1em",
                    borderRadius: "0.4em",
                    backgroundColor: "#7a9ffb",
                  }}
                  onClick={changeRezerv}
                >
                  Tjetri
                </span>
              ) : (
                ""
              )}
            </h5>
            <div className="lista">
              <ul>
                <li>Emri-mbiemri:</li>
                <li>Data e ikjes:</li>
                <li>Ditët e qëndrimit:</li>
                <li>Fëmij:</li>
                <li>Të rritur:</li>
                <li>Lloji i dhomës:</li>
                <li>Pagesa:</li>
              </ul>
              {objekti ? (
                <ul>
                  <li>{objekti.emri}</li>
                  <li>{objekti.ikja}</li>
                  <li>{objekti.dtQndr}</li>
                  <li>{objekti.femij}</li>
                  <li>{objekti.teRR}</li>
                  <li>{objekti.dhom}</li>
                  <li>{objekti.pag}</li>
                </ul>
              ) : (
                ""
              )}
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Kalendar;
