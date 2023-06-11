import { useEffect, useState } from "react";
import Header from "../components/home/Header";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker, { Calendar } from "react-modern-calendar-datepicker";

const Kalendar = ({ setShfaqNav, shfaqNav }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    setShfaqNav(true);
  }, []);

  return (
    <div className="conRight">
      <Header setShfaqNav={setShfaqNav} shfaqNav={shfaqNav} />
      <main className="calendar">
        <section className="calendar_txt">
          <h1>Kalendari</h1>
          <h2>Shiko Rezervimet</h2>
        </section>

        <div className="shikoRezerv_cont">
          <div className="calendar-cont">
            <h3>Zgjidh një datë</h3>
            <h5>Data</h5>
            <Calendar
              value={selectedDate}
              onChange={setSelectedDate}
              calendarClassName="calendar_component"
              colorPrimary="#e88c35"
              calendarSelectedDayClassName="selectedDayCalendar"
              calendarTodayClassName="CalendarToday"
            />
          </div>
          <div className="dateInformat">
            <h3>Rezervimet</h3>
            <h5>*Kjo datë ka rezervim</h5>
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
              <ul>
                <li>Ismail Haruni</li>
                <li>29 Qershor</li>
                <li>12</li>
                <li>3</li>
                <li>2</li>
                <li>Dhomë Familjare</li>
                <li>$1800</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Kalendar;
