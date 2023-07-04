import { useEffect, useState } from "react";
import FirstOp from "./shtoRezv/FirstOp";
import SecondOp from "./shtoRezv/SecondOp";
import SubSuccess from "./shtoRezv/SubSuccess";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import { ditQendrimi, fillData, cmimi } from "./shtoRezv/dataObjFill";
import { motion } from "framer-motion";

const SecondPage = () => {
  const [optRendr, setOptRendr] = useState("FirstOp");
  const [returnPage, setReturnPage] = useState(
    <FirstOp setOptRendr={setOptRendr} />
  );

  const dataSot = new Date();

  const [formData, setFormData] = useState({ form1: "", form2: "" });
  const [ditetData, setDitetData] = useState({ ardh: "", ikj: "" });

  const handleSetDate = async () => {
    fillData(
      formData.form1.ditaArdhjes,
      formData.form1.ditaIkjes,
      formData.form2.dhoma
    );

    const objPerDergim = {
      derguarNe: {
        data: `${dataSot.getMonth()}/${dataSot.getDate()}/${dataSot.getFullYear()}`,
        ora: `${dataSot.getHours()}:${dataSot.getMinutes()}`,
      },
      dhoma: formData.form2.dhoma,
      ditaArdjhes: ditetData.ardh,
      ditaIkjes: ditetData.ikj,
      ditetEQendrimitL: ditQendrimi,
      email: formData.form2.email,
      emri: formData.form1.emri,
      idja: `${formData.form1.emri}_${formData.form2.telefon}_${formData.form1.mbiemri}`,
      mbiemri: formData.form1.mbiemri,
      perTuPaguar: cmimi,
      persona: {
        femij: formData.form1.femij,
        teRritur: formData.form1.teRritur,
      },
      pranuar: false,
      telefon: formData.form2.telefon,
    };
    try {
      await addDoc(collection(db, "Rezervimet"), objPerDergim).then(() => {
        setReturnPage(<SubSuccess setOptRendr={setOptRendr} />);
      });
    } catch (error) {
      alert("Pati një problem me serverin");
      setOptRendr("FirstOp");
    }
  };

  useEffect(() => {
    if (optRendr == "FirstOp")
      setReturnPage(
        <FirstOp
          setOptRendr={setOptRendr}
          formData={formData}
          setFormData={setFormData}
          setDitetData={setDitetData}
          ditetData={ditetData}
        />
      );
    if (optRendr == "SecondOp")
      setReturnPage(
        <SecondOp
          setOptRendr={setOptRendr}
          formData={formData}
          setFormData={setFormData}
        />
      );
    if (optRendr == "SuccessOp") {
      handleSetDate();
    }
  }, [optRendr]);

  return (
    <main className="booking_secondPage">
      <section className="homeMainText">
        <motion.h1
          initial={{
            y: "-100%",
            zIndex: -1,
          }}
          animate={{
            y: "0%",
            zIndex: 0,
          }}
        >
          Faqja e rezervimeve
        </motion.h1>
        <motion.h2
          initial={{
            x: "-20%",
            zIndex: -1,
          }}
          animate={{
            x: "0%",
            zIndex: 0,
          }}
          transition={{
            delay: 0.5,
          }}
        >
          Shto revervim
        </motion.h2>
      </section>
      {returnPage}
    </main>
  );
};

export default SecondPage;
