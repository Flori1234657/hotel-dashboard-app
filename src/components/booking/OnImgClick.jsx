import { useEffect, useState } from "react";
import {
  doc,
  setDoc,
  deleteDoc,
  getDocs,
  collection,
} from "firebase/firestore";
import { db } from "../../config/firebase";
import {
  objektiINumritTeDhomave,
  obj,
  objektiINumritTeDhomaveShto,
} from "./miniUtils/onImgClickObject";
import { kontrrolloNeseKemiDataBosh } from "./miniUtils/ifRoomsEnd";

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

  const [muajMapping, setMuajMapping] = useState({
    6: "qershor",
    7: "korrig",
    8: "gusht",
  });

  //Pasi objektet ruhen me referenc InshaaAllah per siguri i bejm nje
  //deep copy qe mos te ndryshohet objekti orgjinal
  const [statsDtDeepCopy, setStatsDtDeepCopy] = useState(
    JSON.parse(JSON.stringify(statsData[0]))
  );

  const dtSot = new Date();
  const [email, setEmail] = useState("floriandollani15@gmail.com");
  const [updatedDate, setUpdatedDate] = useState({
    ...dataForSpecific,
    pranuar: true,
  });

  const [muajSot, setMuajSot] = useState(
    muajMapping[`${Number(dtSot.getMonth()) + Number(1)}`]
  );

  const [cmimiPerDit, setCmimiPerDit] = useState(() => {
    if (dataForSpecific.dhoma === "dhomTeke") return 100;
    if (dataForSpecific.dhoma === "dhomCift") return 120;
    if (dataForSpecific.dhoma === "dhomFamiljare") return 150;
  });

  const [newStatsObj, setNewStatsObj] = useState(() => {
    if (
      dataForSpecific.ditaArdjhes !=
      `${dtSot.getMonth() + 1}/${dtSot.getDate()}/${dtSot.getFullYear()}`
    )
      return false;

    let newStatObj = JSON.parse(JSON.stringify(merrStatistikat[0])); //kjo quhet Deep Copy
    newStatObj[`fitimetSezon${dtSot.getFullYear()}`][muajSot][
      dtSot.getDate() - 1
    ] += Number(cmimiPerDit);
    return newStatObj;
  });

  const [muaj, setMuaj] = useState(
    muajMapping[dataForSpecific.ditaArdjhes.match(/\d+/)[0]]
  );

  const [newStatsObjMinus, setNewStatsObjMinus] = useState(() => {
    if (!newStatsObj) return false;

    if (
      newStatsObj[`fitimetSezon${dtSot.getFullYear()}`][muaj][
        dtSot.getDate() - 1
      ] == 0
    )
      return "";
    let newStatObj = JSON.parse(JSON.stringify(merrStatistikat[0]));
    newStatObj[`fitimetSezon${dtSot.getFullYear()}`][muajSot][
      dtSot.getDate() - 1
    ] -= Number(cmimiPerDit);
    return newStatObj;
  });

  const [dhomatRezvData, setDhomatRezvData] = useState({
    ...statsDtDeepCopy,
    Rezervuar: {
      ...statsDtDeepCopy.Rezervuar,
      [`${dataForSpecific.dhoma}`]: dataForSpecific.pranuar
        ? statsDtDeepCopy.Rezervuar[`${dataForSpecific.dhoma}`] - 1
        : statsDtDeepCopy.Rezervuar[`${dataForSpecific.dhoma}`] + 1,
    },
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
      if (!newDhomatData) {
        alert("Skemi dhoma në diz. për të gjitha datat");
        return;
      }
      await setDoc(docRefRezervim, updatedDate, { merge: true }).then(() => {
        alert("Rezervimi u pranua me sukses!");
      });
      await setDoc(docRefhiqDhomat, newDhomatData, { merge: true });
      await setDoc(dhomaRezervuarStats, dhomatRezvData, { merge: true });
      if (newStatsObj)
        await setDoc(docForDayStats, newStatsObj, { merge: true });

      //ktu posht InshaaAllah heqim datat nëse nuk kemi më dhoma në dizp
      await getDocs(collection(db, "Dizpozicioni")).then((dcs) => {
        const dta = dcs.docs.map((doc) => doc.data());
        kontrrolloNeseKemiDataBosh(
          dta[0],
          dataForSpecific.ditetEQendrimitL,
          muaj
        );
      });
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
                }).then(() => {
                  rrimerrTeDhenat(`Refuzo ${dataForSpecific.idja} pranuar`);
                });
                if (newStatsObjMinus)
                  await setDoc(docForDayStats, newStatsObjMinus, {
                    merge: true,
                  }); //ktu InshaaAllah heqim statsat e fitimeve
              }

              await deleteDoc(docRefRezervim).then(() => {
                rrimerrTeDhenat(`Refuzo ${dataForSpecific.idja} jo pranuar`);
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
