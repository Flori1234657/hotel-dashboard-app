import hmIcon from "../../assets/images/icons/hambgIcon.png";
import notifIcon from "../../assets/images/icons/notification.png";
import provProfil from "../../assets/images/perProv.jpg";

const Header = () => {
  return (
    <header>
      <img src={hmIcon} alt="Hamburger Icon" />

      <div className="headerRight">
        {" "}
        <img src={notifIcon} alt="Notification Icon" />
        <figure>
          <img src={provProfil} alt="Profil Image" />
          <figcaption>Florian Dollani</figcaption>
        </figure>
      </div>
    </header>
  );
};

export default Header;
