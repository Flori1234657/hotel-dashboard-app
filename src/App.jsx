import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogIn from "./pages/Login";
import Home from "./pages/Home";
import AllBooking from "./pages/AllBooking";
import Rooms from "./pages/Rooms";
import Kalendar from "./pages/Kalendar";
import SideNav from "./components/SideNav";
import {
  objektiINumritTeDhomaveShto,
  obj,
} from "./components/booking/miniUtils/onImgClickObject";
import { useState, createContext, useEffect } from "react";
import {
  getDocs,
  collection,
  deleteDoc,
  setDoc,
  doc,
} from "firebase/firestore";
import { db } from "./config/firebase";

export const PageContext = createContext();

function App() {
  const dtSot = new Date();
  const [routeHyr, setRouteHyr] = useState("");
  const [shfaqNav, setShfaqNav] = useState(false);
  const [switchPageObj, setSwitchPagejObj] = useState({
    bkPg: {
      pn: "Booking Page",
      fp: "active",
      sp: "pasive",
    },
    rooPg: {
      pn: "Rooms Page",
      fp: "active",
      sp: "pasive",
    },
  });
  const [firestoreData, setFirestoreData] = useState();
  const [firestoreDhomatDat, setFirestoreDhomatDat] = useState();
  const [statsData, setStatsData] = useState();
  const [docsId, setDocsId] = useState("");
  const [statistikat, setStatistikat] = useState("");

  const [regetData, setRegetData] = useState(false);
  const [preloader, setPreloader] = useState(true);
  const [checkIfFirestoreRecived, setCheckIfFirestoreRecived] = useState(false);

  const [switchNavForNotif, setSwitchNavForNotif] = useState({
    initialState: false,
    switchUpdateForUseEffect: false,
  });

  const [variant, setVariant] = useState("v1"); //Variantet e navit InshaaAllah

  const getData = async () => {
    try {
      await getDocs(collection(db, "Rezervimet")).then((dcs) => {
        const dta = dcs.docs.map((doc) => doc.data());
        setFirestoreData(dta);
        const idit = dcs.docs.map((dcsID) => dcsID.id);
        setDocsId(idit);
      });
    } catch (error) {
      alert("Programi pati nje problem ju lutem kontaktoni programuesin");
      console.log(error);
    }
  };

  const getDataDhomat = async () => {
    try {
      await getDocs(collection(db, "Dizpozicioni")).then((dcs) => {
        const dta = dcs.docs.map((doc) => doc.data());
        setFirestoreDhomatDat(dta);
      });
    } catch (error) {
      alert("Programi pati nje problem ju lutem kontaktoni programuesin");
      console.log(error);
    }
  };
  const getDataStats = async () => {
    try {
      await getDocs(collection(db, "Menaxhim")).then((dcs) => {
        const dta = dcs.docs.map((doc) => doc.data());
        setStatsData(dta);
      });
    } catch (error) {
      alert("Programi pati nje problem ju lutem kontaktoni programuesin");
      console.log(error);
    }
  };
  const getStatistikat = async () => {
    try {
      await getDocs(collection(db, "Statistikat")).then((dcs) => {
        const dta = dcs.docs.map((doc) => doc.data());
        setStatistikat(dta);
        setCheckIfFirestoreRecived(true);
      });
    } catch (error) {
      alert("Kemi problem me statistikat ju lutem kontaktoni programuesin");
      console.log(error);
    }
  };
  useEffect(() => {
    if (checkIfFirestoreRecived) {
      deleteFinished();
      setPreloader(false);
    }
  }, [checkIfFirestoreRecived]);

  //InshaaAllah fshim datat qe kan mbaruar
  const deleteFinished = async () => {
    const forMatch = `${
      dtSot.getMonth() + 1
    }${dtSot.getDate()}${dtSot.getFullYear()}`;
    const dtForCpsfArr = [];

    const dcsId = firestoreData.map((el) => {
      const refDtIkja = el.ditaIkjes.match(/\d+/g).join("");
      const refDtArdhja = el.ditaArdjhes.match(/\d+/g).join("");

      if (el.pranuar && Number(refDtIkja) <= Number(forMatch)) {
        dtForCpsfArr.push(el);
        return docsId[firestoreData.indexOf(el)];
      }
      if (!el.pranuar && Number(refDtArdhja) <= Number(forMatch))
        return docsId[firestoreData.indexOf(el)];
    });

    //CRUD for this func.
    if (dcsId < 1) return; //ndalimi nese datat jan ne rregull
    try {
      await dcsId.forEach(async (el) => {
        //Delete finished
        await deleteDoc(doc(db, "Rezervimet", el)).then(() => {
          setRegetData("Delete finished");
        });
      });
      if (dtForCpsfArr.length < 1) return;
      await dtForCpsfArr.forEach(async (el) => {
        let muaj;

        const startObj = el.ditaArdjhes.match(/\d+/)[0];
        if (startObj == 6) muaj = "qershor";
        if (startObj == 7) muaj = "korrig";
        if (startObj == 8) muaj = "gusht";

        objektiINumritTeDhomaveShto(el, muaj, firestoreDhomatDat[0]); //Upadate rooms number
        await setDoc(doc(db, "Dizpozicioni", "1AB8e4ZUcdrQxzEcL50T"), obj, {
          merge: true,
        });

        await setDoc(
          doc(db, "Menaxhim", "VbAZSnMRNOcc2trCUdIj"),
          {
            ...statsData[0],
            Rezervuar: {
              ...statsData[0].Rezervuar,
              [`${el.dhoma}`]: statsData[0].Rezervuar[`${el.dhoma}`] - 1,
            },
          },
          { merge: true }
        ); //Upadate menaxhimi stats
      });
    } catch (error) {
      alert("Kemi rezervime ne pritje te cilave data i ka kaluar");
      console.log(error);
    }
  };

  useEffect(() => {
    getDataStats();
  }, []);
  useEffect(() => {
    if (regetData) {
      getData();
      getDataDhomat();
      getDataStats();
      getStatistikat();
    }
  }, [regetData]);
  return (
    <div className="homeContainer">
      <PageContext.Provider
        value={{
          switchPageObj,
          setSwitchPagejObj,
          firestoreData,
          docsId,
          routeHyr,
          setRegetData,
          firestoreDhomatDat,
          statsData,
          switchNavForNotif,
          setSwitchNavForNotif,
          shfaqNav,
          setShfaqNav,
          statistikat,
          setStatistikat,
          getStatistikat,
          variant,
          setVariant,
        }}
      >
        <BrowserRouter>
          <SideNav shfaqNav={shfaqNav} />
          <Routes>
            <Route
              path="/"
              element={
                <LogIn
                  setRouteHyr={setRouteHyr}
                  setShfaqNav={setShfaqNav}
                  setFirestoreData={setFirestoreData}
                  setDocsId={setDocsId}
                  regetData={regetData}
                  getDataDhomat={getDataDhomat}
                  getDataStats={getDataStats}
                  getStatistikat={getStatistikat}
                  getData={getData}
                  checkIfFirestoreRecived={checkIfFirestoreRecived}
                />
              }
            />
            <Route
              path={`/home.user${routeHyr}`}
              element={
                <Home
                  setShfaqNav={setShfaqNav}
                  shfaqNav={shfaqNav}
                  preloader={preloader}
                />
              }
            />
            <Route
              path={`/booking.user${routeHyr}`}
              element={
                <AllBooking setShfaqNav={setShfaqNav} shfaqNav={shfaqNav} />
              }
            />
            <Route
              path={`/rooms.user${routeHyr}`}
              element={<Rooms setShfaqNav={setShfaqNav} shfaqNav={shfaqNav} />}
            />
            <Route
              path={`/calendar.user${routeHyr}`}
              element={
                <Kalendar
                  setShfaqNav={setShfaqNav}
                  shfaqNav={shfaqNav}
                  firestoreData={firestoreData}
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </PageContext.Provider>
    </div>
  );
}

export default App;
