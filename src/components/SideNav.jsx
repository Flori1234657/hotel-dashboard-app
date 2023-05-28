import Logo from ".././assets/images/Logo.png";
import homeIc from ".././assets/images/icons/asidenv/home.png";
import booking from ".././assets/images/icons/asidenv/booking.png";
import rooms from ".././assets/images/icons/asidenv/roomsIcon.png";
import calendar from ".././assets/images/icons/asidenv/calendar.png";

const SideNav = () => {
  return (
    <aside>
      <img src={Logo} alt="Logo" />
      <h2>MAIN</h2>
      <nav>
        <div>
          <img src={homeIc} alt="" />
          <h3>Kreu</h3>
        </div>
        <div>
          <img src={booking} alt="" />
          <h3>Rezervimet</h3>
          <h4>+</h4>
        </div>
        <div>
          <img src={rooms} alt="" />
          <h3>Dhomat</h3>
          <h4>+</h4>
        </div>
        <div>
          <img src={calendar} alt="" />
          <h3>Kalendari</h3>
          <h4>+</h4>
        </div>
      </nav>
      <button>DIL</button>
    </aside>
  );
};

export default SideNav;
