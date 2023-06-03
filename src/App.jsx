import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogIn from "./pages/Login";
import Home from "./pages/Home";
import AllBooking from "./pages/AllBooking";
import Rooms from "./pages/Rooms";
import Kalendar from "./pages/Kalendar";
import SideNav from "./components/SideNav";
import { useState, createContext } from "react";

export const PageContext = createContext();

function App() {
  const [routeHyr, setRouteHyr] = useState("flori");
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

  return (
    <div className="homeContainer">
      <PageContext.Provider value={{ switchPageObj, setSwitchPagejObj }}>
        <BrowserRouter>
          {shfaqNav ? <SideNav /> : ""}
          <Routes>
            <Route
              path="/"
              element={
                <LogIn setRouteHyr={setRouteHyr} setShfaqNav={setShfaqNav} />
              }
            />
            <Route
              path={`/home.user${routeHyr}`}
              element={<Home setShfaqNav={setShfaqNav} />}
            />
            <Route
              path={`/booking.user${routeHyr}`}
              element={<AllBooking setShfaqNav={setShfaqNav} />}
            />
            <Route
              path={`/rooms.user${routeHyr}`}
              element={<Rooms setShfaqNav={setShfaqNav} />}
            />
            <Route
              path={`/calendar.user${routeHyr}`}
              element={<Kalendar setShfaqNav={setShfaqNav} />}
            />
          </Routes>
        </BrowserRouter>
      </PageContext.Provider>
    </div>
  );
}

export default App;
