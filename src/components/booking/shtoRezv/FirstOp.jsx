import { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { DayPicker, Footer } from "react-day-picker";
import "react-day-picker/dist/style.css";
import * as Yup from "yup";

const FirstOp = ({ setOptRendr, formData, setFormData }) => {
  useEffect(() => {
    setOptRendr("FrstOp");
  }, []);

  const [datePickerTogle, setDatePickerTogle] = useState(false);
  const [selectedDay, setSelectedDay] = useState();

  const yupSchema = Yup.object().shape({
    emri: Yup.string().required("Mos e ler bosh"),
    mbiemri: Yup.string().required("Mos e ler bosh"),
    ditaArdhjes: Yup.string().required("Mos e ler bosh"),
    ditaIkjes: Yup.string().required("Mos e ler bosh"),
    femij: Yup.number("Ju lutem duhet numër")
      .min(0)
      .max(5, "Maksimumi 5")
      .required("Mos e ler bosh"),
    teRritur: Yup.number("Ju lutem duhet numër")
      .min(1)
      .max(5, "Maksimumi 5")
      .required("Mos e ler bosh"),
  });

  const initialValues = {
    emri: "",
    mbiemri: "",
    ditaArdhjes: "",
    ditaIkjes: "",
    femij: 0,
    teRritur: 0,
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={yupSchema}
      onSubmit={(values) => {
        setFormData({ ...formData, form1: values });
        setOptRendr("SecondOp");
      }}
      //onSubmit={values=>}
    >
      {({
        values,
        dirty,
        isValid,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <Form className="formNje">
          <div className="nameSurname">
            <div className="name">
              <label>Emri</label>
              <Field as="input" type="text" placeholder="Emri" name="emri" />

              <h4>
                <ErrorMessage name="emri" component="span" className="error" />
              </h4>
            </div>
            <div className="surname">
              <label>Mbiemri</label>
              <Field
                as="input"
                type="text"
                placeholder="Mbiemri"
                name="mbiemri"
              />

              <h4>
                <ErrorMessage
                  name="mbiemri"
                  component="span"
                  className="error"
                />
              </h4>
            </div>
          </div>
          <div className="checkinCheckout">
            <div className="checkin">
              <label>Ardhja</label>
              <Field
                as="input"
                type="text"
                placeholder="dd/mm/vvvv"
                name="ditaArdhjes"
                onClick={() => setDatePickerTogle(!datePickerTogle)}
              />
              {datePickerTogle ? (
                <DayPicker
                  mode="single"
                  required
                  selected={selectedDay}
                  onSelect={setSelectedDay}
                  // footer={Footer}
                />
              ) : (
                ""
              )}
              <h4>
                <ErrorMessage
                  name="ditaArdhjes"
                  component="span"
                  className="error"
                />
              </h4>
            </div>
            <div className="checkout">
              <label>Ikja</label>
              <Field
                as="input"
                type="text"
                placeholder="dd/mm/vvvv"
                name="ditaIkjes"
              />

              <h4>
                <ErrorMessage
                  name="ditaIkjes"
                  component="span"
                  className="error"
                />
              </h4>
            </div>
          </div>
          <div className="adultsChildrens">
            <div className="adults">
              <label>Të rritur</label>
              <Field
                as="input"
                type="number"
                min={1}
                max={6}
                placeholder="Numri"
                name="teRritur"
              />

              <h4>
                <ErrorMessage
                  name="teRritur"
                  component="span"
                  className="error"
                />
              </h4>
            </div>
            <div className="childrens">
              <label>Fëmije</label>
              <Field
                as="input"
                type="text"
                min={0}
                max={5}
                placeholder="Numri"
                name="femij"
              />

              <h4>
                <ErrorMessage name="femij" component="span" className="error" />
              </h4>
            </div>
          </div>
          <button type="submit" disabled={dirty && isValid ? false : true}>
            Tjetra
          </button>
          <h5>Faqja 1/2</h5>
        </Form>
      )}
    </Formik>
  );
};

export default FirstOp;
