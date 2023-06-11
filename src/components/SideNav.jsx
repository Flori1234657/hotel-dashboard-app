import Logo from ".././assets/images/Logo.png";
import homeIc from ".././assets/images/icons/asidenv/home.png";
import booking from ".././assets/images/icons/asidenv/booking.png";
import rooms from ".././assets/images/icons/asidenv/roomsIcon.png";
import calendar from ".././assets/images/icons/asidenv/calendar.png";
import Variant1 from "./sideNav/Variant1";
import Variant2 from "./sideNav/Variant2";
import Variant3 from "./sideNav/Variant3";
import Variant4 from "./sideNav/Variant4";
import { useEffect, useState } from "react";

const SideNav = ({ shfaqNav }) => {
  const [variant, setVariant] = useState("v1");
  const props = {
    cl: calendar,
    rm: rooms,
    bkg: booking,
    hm: homeIc,
    log: Logo,
  };
  const [sdNv, setSdNv] = useState(
    <Variant1 objProp={props} setVariant={setVariant} />
  );

  useEffect(() => {
    setSdNv(() => {
      switch (variant) {
        case "v1":
          return <Variant1 objProp={props} setVariant={setVariant} />;
        case "v2":
          return <Variant2 objProp={props} setVariant={setVariant} />;

        case "v3":
          return <Variant3 objProp={props} setVariant={setVariant} />;

        case "v4":
          return <Variant4 objProp={props} setVariant={setVariant} />;

        default:
          return <Variant1 objProp={props} setVariant={setVariant} />;
      }
    });
  }, [variant]);

  return (
    <aside style={shfaqNav ? { display: "flex" } : { display: "none" }}>
      {sdNv}
    </aside>
  );
};

export default SideNav;
