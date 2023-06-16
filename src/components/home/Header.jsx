import hmIcon from "../../assets/images/icons/hambgIcon.png";
import notifIcon from "../../assets/images/icons/notification.png";
import notifIcon2 from "../../assets/images/icons/notification2.png";
import provProfil from "../../assets/images/perProv.jpg";
import { useContext, useEffect, useState } from "react";
import { PageContext } from "../../App";
import NotifDialog from "./components/NotifDialog";

const Header = ({ setShfaqNav, shfaqNav }) => {
  const pages = useContext(PageContext);
  const [notif, setNotif] = useState(false);
  const [showBox, setShowBox] = useState(false);

  useEffect(() => {
    if (pages.firestoreData != null) {
      pages.firestoreData.forEach((el) => {
        if (el != null) {
          if (!el.pranuar) {
            setNotif(true);
          }
        }
      });
    }
  });

  return (
    <header>
      <img
        style={!shfaqNav ? { width: `3.42%` } : { width: `4%` }}
        src={hmIcon}
        alt="Hamburger Icon"
        onClick={(e) => {
          setShfaqNav(!shfaqNav);

          if (
            e.target.parentNode.nextElementSibling.classList[0] ==
            "bookingFirstPage"
          ) {
            if (
              e.target.parentNode.parentNode.previousElementSibling
                .attributes[0].value == "display: flex;"
            ) {
              e.target.parentNode.nextElementSibling.childNodes[1].style.width =
                "80%";
            } else {
              e.target.parentNode.nextElementSibling.childNodes[1].style.width =
                "95%";
            }
          }
        }}
      />

      <div
        className="headerRight"
        style={!shfaqNav ? { width: `25.65%` } : { width: `30%` }}
      >
        {" "}
        <img
          src={notif ? notifIcon2 : notifIcon}
          alt="Notification Icon"
          onClick={(e) => {
            setShowBox(!showBox);
          }}
        />
        {showBox ? <NotifDialog /> : ""}
        <figure>
          <img src={provProfil} alt="Profil Image" />
          <figcaption>Florian Dollani</figcaption>
        </figure>
      </div>
    </header>
  );
};

export default Header;
