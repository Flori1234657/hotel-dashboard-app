import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogIn from "./pages/Login";
import Home from "./pages/Home";
import SideNav from "./components/SideNav";
import { useState } from "react";

function App() {
  const [routeHyr, setRouteHyr] = useState("flori");
  const [shfaqNav, setShfaqNav] = useState(false);

  return (
    <div className="homeContainer">
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
