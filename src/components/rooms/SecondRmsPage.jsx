import BarChart from "../chart/BarChart";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../../config/firebase";
import { datForUpdat, updateData } from "./miniFunc/fillObjDat";
import { motion } from "framer-motion";

const SecondRmsPage = ({ dhomatDat, menaxhimDT, setRegetData }) => {
  const validationSchema = Yup.object().shape({
    llojiDhomes: Yup.string().required("Ju lutem zgjidhni dhomën"),
    numri: Yup.number("Ju lutem vendosni numër")
      .min(1, "Minimumi 1 dhom")
      .max(5, "Maksimumi 5 dhoma")
      .required("Ju lutem mos e lini bosh"),
  });

  const initialValues = {
    llojiDhomes: "",
    numri: "",
  };

  const updateOnServer = async (nr, dhoma) => {
    const docRefNrDhomave = doc(db, "Dizpozicioni", "1AB8e4ZUcdrQxzEcL50T");
    const docRefMenaxhim = doc(db, "Menaxhim", "VbAZSnMRNOcc2trCUdIj");

    const menaxhimNewDataPlus = {
      NumriDhomave: {
        ...menaxhimDT[0].NumriDhomave,
        [dhoma]: menaxhimDT[0].NumriDhomave[dhoma] + nr,
      },
      Rezervuar: { ...menaxhimDT[0].Rezervuar },
    };
    try {
      await setDoc(docRefNrDhomave, datForUpdat, { merge: true }).then(() => {
        setRegetData(true);
      });
      await setDoc(docRefMenaxhim, menaxhimNewDataPlus, {
        merge: true,
      }).then(() => {
        alert("Veprimi u krye me sukses");
      });
    } catch (error) {
      alert("Pati një problem");
    }
  };
  return (
    <main className="shtoRoom">
      <section className="shtoRoom_sp_txt">
        <motion.h1
          initial={{
            y: "100%",
            zIndex: -1,
            scale: "10%",
          }}
          animate={{
            y: "0%",
            zIndex: 0,
            scale: "100%",
          }}
        >
          Faqja e dhomave
        </motion.h1>
        <motion.h2
          initial={{
            y: "-20%",
            zIndex: -1,
            scale: "10%",
          }}
          animate={{
            y: "0%",
            zIndex: 0,
            scale: "100%",
          }}
          transition={{
            delay: 0.5,
          }}
        >
          Shto një dhomë
        </motion.h2>
      </section>
      <div className="funcContainer">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(dt) => {
            updateData(dt, dhomatDat, "+");
            updateOnServer(dt.numri, dt.llojiDhomes);
          }}
        >
          {(formik) => {
            const { isValid, dirty } = formik;
            return (
              <Form className="shtoRomForm">
                <div>
                  <label>Lloji i dhomës</label>
                  <Field as="select" name="llojiDhomes">
                    <option value=""></option>
                    <option value="Dhom Familjare">Dhom Familjare</option>
                    <option value="Dhom Teke">Dhom Teke</option>
                    <option value="Dhom Çif">Dhom Çift</option>
                  </Field>
                  <h4>
                    <ErrorMessage name="llojiDhomes" component="span" />
                  </h4>
                </div>
                <div className="quantityDiv">
                  <label>Numri</label>
                  <Field
                    as="input"
                    type="number"
                    name="numri"
                    min={1}
                    max={5}
                  />
                  <h4>
                    <ErrorMessage name="numri" component="span" />
                  </h4>
                </div>
                <button className="shtojeBtn" disabled={!(dirty && isValid)}>
                  Shtoje
                </button>
              </Form>
            );
          }}
        </Formik>
        <div className="barchart">
          <BarChart menaxhimDT={menaxhimDT} />
        </div>
      </div>
    </main>
  );
};

export default SecondRmsPage;
