import { db } from "../../../config/firebase";
import { doc, updateDoc, deleteField } from "firebase/firestore";

const datatQeJaneZero = [];
const refList = doc(db, "Dizpozicioni", "1AB8e4ZUcdrQxzEcL50T");

//Ktu InshaaAllah do datat nese kemi zero dhoma ne nje dat te cakutar
export const kontrrolloNeseKemiDataBosh = (Dizpozicioni, dtQndr, muaj) => {
  //ditetEQendrimitL
  let mj = muaj;
  const path = Dizpozicioni.muajt[mj].datatDhomat;

  for (let i = 0; i < dtQndr.length; i++) {
    if (
      path[`dat${dtQndr[i]}`].dhomCift == 0 &&
      path[`dat${dtQndr[i]}`].dhomTeke == 0 &&
      path[`dat${dtQndr[i]}`].dhomFamiljare == 0
    )
      datatQeJaneZero.push(`muajt.${mj}.${datatDhomat}.dat${dtQndr[i]}`); //path i fieldit qe do fshihet InshaaAllah

    if (muaj === "qershor" && i == 29) mj = "korrig";
    if (muaj === "korrig" && i == 30) mj = "gusht";
  }

  if (datatQeJaneZero.length > 0) fshihDatatQeJanZero();
};

const fshihDatatQeJanZero = () => {
  datatQeJaneZero.forEach(async (el) => {
    try {
      await updateDoc(refList, {
        [el]: deleteField(),
      });
    } catch (error) {
      alert("Patëm një problem në program!");
      console.log(error);
    }
  });
};
