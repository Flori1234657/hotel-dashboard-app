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
}) => {
  const docRefRezervim = doc(db, "Rezervimet", docsId);
  const docRefhiqDhomat = doc(db, "Dizpozicioni", "1AB8e4ZUcdrQxzEcL50T");
  const dhomaRezervuarStats = doc(db, "Menaxhim", "VbAZSnMRNOcc2trCUdIj");

  const [email, setEmail] = useState("floriandollani15@gmail.com");
  const [updatedDate, setUpdatedDate] = useState({
    ...dataForSpecific,
    pranuar: true,
  });
  const [muaj, setMuaj] = useState(() => {
    if (dataForSpecific.ditaArdjhes.match(/\d+/)[0] == 6) {
      return "qershor";
    } else if (dataForSpecific.ditaArdjhes.match(/\d+/)[0] == 7) {
      return "korrig";
    } else if (dataForSpecific.ditaArdjhes.match(/\d+/)[0] == 8) {
      return "gusht";
    }
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
