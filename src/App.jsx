import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogIn from "./pages/Login";
import Home from "./pages/Home";
import AllBooking from "./pages/AllBooking";
import Rooms from "./pages/Rooms";
import Kalendar from "./pages/Kalendar";
import SideNav from "./components/SideNav";
import { useState, createContext, useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "./config/firebase";

export const PageContext = createContext();

function App() {
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

  const [regetData, setRegetData] = useState(false);
  const [preloader, setPreloader] = useState(true);
  const getData = async () => {
    await getDocs(collection(db, "Rezervimet")).then((dcs) => {
      const dta = dcs.docs.map((doc) => doc.data());
      setFirestoreData(dta);
      const idit = dcs.docs.map((dcsID) => dcsID.id);
      setDocsId(idit);
    });
  };

  const getDataDhomat = async () => {
    await getDocs(collection(db, "Dizpozicioni")).then((dcs) => {
      const dta = dcs.docs.map((doc) => doc.data());
      setFirestoreDhomatDat(dta);
    });
  };
  const getDataStats = async () => {
    await getDocs(collection(db, "Menaxhim")).then((dcs) => {
      const dta = dcs.docs.map((doc) => doc.data());
      setStatsData(dta);
    });
  };

  useEffect(() => {
    if (regetData) {
      getData();
      getDataDhomat();
      getDataStats();
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
                  setPreloader={setPreloader}
                  setFirestoreData={setFirestoreData}
                  setDocsId={setDocsId}
                  regetData={regetData}
                  getDataDhomat={getDataDhomat}
                  getDataStats={getDataStats}
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
                <Kalendar setShfaqNav={setShfaqNav} shfaqNav={shfaqNav} />
              }
            />
          </Routes>
        </BrowserRouter>
      </PageContext.Provider>
    </div>
  );
}

export default App;
