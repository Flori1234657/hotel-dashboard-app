import { useContext, useState } from "react";
import { PageContext } from "../../../App";
import { useNavigate } from "react-router-dom";

const NotifDialog = () => {
  const data = useContext(PageContext);
  const nav = useNavigate();
  const [rezervFiltr, setRezervFiltr] = useState(() => {
    if (data.firestoreData != undefined) {
      return data.firestoreData.filter((el) => {
        if (!el.pranuar) return el;
      });
    } else {
      return [];
    }
  });

  return (
    <section className="notificationBox" style={{ zIndex: 1 }}>
      <h1>Rezervimet e reja</h1>
      {rezervFiltr.length >= 1 ? (
        <ul>
          {rezervFiltr.map((el) => (
            <li key={`${el.emri}/${el.telefon}`}>
              <div>
                {" "}
                <h2>{`${el.emri} ${el.mbiemri}`}</h2>
              </div>
              <div>
                {" "}
                <h2>Dërguar: {`${el.derguarNe.data} ${el.derguarNe.ora}`}</h2>
              </div>

              <button
                onClick={() => {
                  !data.shfaqNav ? data.setShfaqNav(true) : "";
                  nav(`/booking.user${data.routeHyr}`);
                  data.setSwitchNavForNotif({
                    initialState: "v2",
                    switchUpdateForUseEffect:
                      !data.switchNavForNotif.switchUpdateForUseEffect,
                  });
                }}
              >
                SHIKO
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <h4>Nuk ka rezervime të reja</h4>
      )}
    </section>
  );
};

export default NotifDialog;
