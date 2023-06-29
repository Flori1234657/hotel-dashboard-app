import Logo from ".././assets/images/Logo.png";
import homeIc from ".././assets/images/icons/asidenv/home.png";
import booking from ".././assets/images/icons/asidenv/booking.png";
import rooms from ".././assets/images/icons/asidenv/roomsIcon.png";
import calendar from ".././assets/images/icons/asidenv/calendar.png";
import Variant1 from "./sideNav/Variant1";
import Variant2 from "./sideNav/Variant2";
import Variant3 from "./sideNav/Variant3";
import Variant4 from "./sideNav/Variant4";
import { useContext, useEffect, useState } from "react";
import { PageContext } from "../App";

const SideNav = ({ shfaqNav }) => {
  const context = useContext(PageContext);
  const props = {
    cl: calendar,
    rm: rooms,
    bkg: booking,
    hm: homeIc,
    log: Logo,
  };
  const [sdNv, setSdNv] = useState(
    <Variant1 objProp={props} setVariant={context.setVariant} />
  );

  useEffect(() => {
    if (context.switchNavForNotif.initialState !== false) {
      context.setVariant(context.switchNavForNotif.initialState);
    }
  }, [context.switchNavForNotif]);

  useEffect(() => {
    setSdNv(() => {
      switch (context.variant) {
        case "v1":
          return <Variant1 objProp={props} setVariant={context.setVariant} />;
        case "v2":
          return <Variant2 objProp={props} setVariant={context.setVariant} />;

        case "v3":
          return <Variant3 objProp={props} setVariant={context.setVariant} />;

        case "v4":
          return <Variant4 objProp={props} setVariant={context.setVariant} />;

        default:
          return <Variant1 objProp={props} setVariant={context.setVariant} />;
      }
    });
  }, [context.variant]);

  return (
    <aside style={shfaqNav ? { display: "flex" } : { display: "none" }}>
      {sdNv}
    </aside>
  );
};

export default SideNav;
