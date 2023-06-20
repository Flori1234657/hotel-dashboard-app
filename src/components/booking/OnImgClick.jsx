import { useEffect, useState } from "react";
import { doc, setDoc, deleteDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import {
  objektiINumritTeDhomave,
  obj,
  objektiINumritTeDhomaveShto,
} from "./miniUtils/onImgClickObject";

const OnImgClick = ({
  pozicioniOpti,
  dataForSpecific,
  docsId,
  setDataForSpecific,
  rrimerrTeDhenat,
  setShowOptions,
  dhomatFirebase,
  statsData,
  merrStatistikat,
}) => {
  const docRefRezervim = doc(db, "Rezervimet", docsId);
  const docRefhiqDhomat = doc(db, "Dizpozicioni", "1AB8e4ZUcdrQxzEcL50T");
  const dhomaRezervuarStats = doc(db, "Menaxhim", "VbAZSnMRNOcc2trCUdIj");
  const docForDayStats = doc(db, "Statistikat", "Gdl50e3i9nMNtWGy47mD");

  const dtSot = new Date();
  const [email, setEmail] = useState("floriandollani15@gmail.com");
  const [updatedDate, setUpdatedDate] = useState({
    ...dataForSpecific,
    pranuar: true,
  });

  const [newStatsObj, setNewStatsObj] = useState(() => {
    if (
      dataForSpecific.ditaArdjhes !=
      `${dtSot.getMonth() + 1}/${dtSot.getDate()}/${dtSot.getFullYear()}`
    )
      return false;
    let muaj;
    let cmimiPerDit;
    if (dtSot.getMonth() === 5) muaj = "qershor";
    if (dtSot.getMonth() === 6) muaj = "korrig";
    if (dtSot.getMonth() === 7) muaj = "gusht";

    if (dataForSpecific.dhoma === "dhomTeke") cmimiPerDit = 100;
    if (dataForSpecific.dhoma === "dhomCift") cmimiPerDit = 120;
    if (dataForSpecific.dhoma === "dhomFamiljare") cmimiPerDit = 150;

    let newStatObj = JSON.parse(JSON.stringify(merrStatistikat[0])); //kjo quhet Deep Copy
    newStatObj[`fitimetSezon${dtSot.getFullYear()}`][muaj][
      dtSot.getDate() - 1
    ] += Number(cmimiPerDit);
    return newStatObj;
  });

  const [muaj, setMuaj] = useState(() => {
    const startObj = dataForSpecific.ditaArdjhes.match(/\d+/)[0];
    if (startObj == 6) return "qershor";
    if (startObj == 7) return "korrig";
    if (startObj == 8) return "gusht";
  });

  const [dhomatRezvData, setDhomatRezvData] = useState(() => {
    if (dataForSpecific.pranuar) {
      return {
        ...statsData[0],
        Rezervuar: {
          ...statsData[0].Rezervuar,
          [`${dataForSpecific.dhoma}`]:
            statsData[0].Rezervuar[`${dataForSpecific.dhoma}`] - 1,
        },
      };
    } else {
      return {
        ...statsData[0],
        Rezervuar: {
          ...statsData[0].Rezervuar,
          [`${dataForSpecific.dhoma}`]:
            statsData[0].Rezervuar[`${dataForSpecific.dhoma}`] + 1,
        },
      };
    }
  });

  const [newDhomatData, setNewDhomatData] = useState(() => {
    if (dataForSpecific.pranuar) {
      objektiINumritTeDhomaveShto(dataForSpecific, muaj, dhomatFirebase[0]);
    } else {
      objektiINumritTeDhomave(dataForSpecific, muaj, dhomatFirebase[0]);
    }
    return obj;
  });

  const setStateTrueOnFirebase = async () => {
    try {
      await setDoc(docRefRezervim, updatedDate, { merge: true }).then(() => {
        alert("Rezervimi u pranua me sukses!");
      });
      await setDoc(docRefhiqDhomat, newDhomatData, { merge: true });
      await setDoc(dhomaRezervuarStats, dhomatRezvData, { merge: true });
      if (newStatsObj)
        await setDoc(docForDayStats, newStatsObj, { merge: true });
    } catch (error) {
      console.log(error);
      alert("pati nje problem");
    }
    setDataForSpecific(updatedDate);
    rrimerrTeDhenat(true);
    setShowOptions(false);
  };

  return (
    <div className="openedDialog" style={pozicioniOpti}>
      <ul>
        {!dataForSpecific.pranuar ? (
          <li
            onClick={() => {
              setStateTrueOnFirebase();
            }}
          >
            Prano
          </li>
        ) : (
          ""
        )}
        <li
          onClick={async () => {
            try {
              if (dataForSpecific.pranuar) {
                //dmth nese e kemi pranuar si fillim ne momentinqe e heqim shtojme numrin e dhomave
                await setDoc(docRefhiqDhomat, newDhomatData, { merge: true });
                await setDoc(dhomaRezervuarStats, dhomatRezvData, {
                  merge: true,
                });
              }

              await deleteDoc(docRefRezervim).then(() => {
                rrimerrTeDhenat(true);
                setShowOptions(false);
              });
            } catch (error) {
              console.log(error);
            }
          }}
        >
          Refuzo
        </li>
        <li>
          <a href={`mailto:${email}`}>Bisedo</a>
        </li>
      </ul>
    </div>
  );
};

export default OnImgClick;
