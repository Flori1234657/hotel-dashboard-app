import { useEffect, useState, useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { DayPicker, Footer } from "react-day-picker";
import { sq } from "date-fns/locale";
import "react-day-picker/dist/style.css";
import {
  disabledDates,
  setDisabledDays,
  disableDaysBasedOnClick,
} from "./jsDatepicker";
import { PageContext } from "../../../App";
import * as Yup from "yup";

const FirstOp = ({
  setOptRendr,
  formData,
  setFormData,
  setDitetData,
  ditetData,
}) => {
  const context = useContext(PageContext);

  useEffect(() => {
    setOptRendr("FrstOp");
    setDisabledDays(context.firestoreDhomatDat[0].muajt);
  }, []);

  const [datePickerTogle, setDatePickerTogle] = useState(false);
  const [dayPicker2Togle, setDayPicker2Togle] = useState(false);
  const [selectedDay, setSelectedDay] = useState();
  const [selectedDayIkj, setSelectedDayIkj] = useState();
  const [inputValue, setInputValue] = useState();
  const [inputIkjValue, setInputIkjValue] = useState();

  const [updatedBefore, setUpdatedBefore] = useState(false);
  // me posht gjeni funksionet per inputet
  const handleInputChange = (e) => {
    const dt = e.currentTarget.value;
    if (/\d+\W\d+\W\d+/.test(dt)) {
      setInputValue(e.currentTarget.value);
      setSelectedDay(e.currentTarget.value);
    } else {
      setInputValue("");
      setSelectedDay(undefined);
    }
  };

  const handleDaySelect = (date) => {
    setSelectedDay(date);
    if (date) {
      setInputValue(
        `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
      );
      if (!updatedBefore) {
        //dmth nese disabledDates nuk jane updatuar me par i fusim tani
        disableDaysBasedOnClick(date);
        setUpdatedBefore(true);
      }
    } else {
      setInputValue("");
    }
  };
  const handleInputIkjChange = (e) => {
    const dt = e.currentTarget.value;
    if (/\d+\W\d+\W\d+/.test(dt)) {
      setInputIkjValue(e.currentTarget.value);
      setSelectedDayIkj(e.currentTarget.value);
    } else {
      setInputIkjValue("");
      setSelectedDayIkj(undefined);
    }
  };

  const handleDayIkjSelect = (date) => {
    setSelectedDayIkj(date);
    if (date) {
      setInputIkjValue(
        `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
      );
      setDitetData({
        ardh: inputValue,
        ikj: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`,
      });
    } else {
      setInputIkjValue("");
    }
  };
  //mbaruan funksionet per imputet e diteve ---------------------------------------

  const date = new Date();

  const yupSchema = Yup.object().shape({
    emri: Yup.string().required("Mos e ler bosh"),
    mbiemri: Yup.string().required("Mos e ler bosh"),
    femij: Yup.number("Ju lutem duhet numër")
      .min(0)
      .max(5, "Maksimumi 5")
      .required("Mos e ler bosh"),
    teRritur: Yup.number("Ju lutem duhet numër")
      .min(1, "Duhet të paktën 1")
      .max(5, "Maksimumi 5")
      .required("Mos e ler bosh"),
  });

  const [initialValues, setInitialValues] = useState({
    emri: "",
    mbiemri: "",
    femij: 0,
    teRritur: 0,
  });

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
      {({ dirty, isValid }) => (
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
              <input
                type="text"
                placeholder="dd/mm/vvvv"
                name="ditaArdhjes"
                id="dtArdhjs"
                onClick={(e) => {
                  setDatePickerTogle(!datePickerTogle);
                  if (updatedBefore) {
                    //dmth nese datat jan updejtuar i heqim per te cuar te rejat
                    disabledDates.pop();
                    setUpdatedBefore(false);
                    console.log(disabledDates);
                  }
                }}
                onChange={handleInputChange}
                value={inputValue}
                required
              />
              {datePickerTogle ? (
                <DayPicker
                  mode="single"
                  selected={selectedDay}
                  onSelect={handleDaySelect}
                  required
                  showOutsideDays
                  fromMonth={
                    new Date(`${date.getFullYear()},${date.getMonth() + 1}`)
                  }
                  toDate={new Date(`${date.getFullYear()},8,31`)}
                  modifiersClassNames={{
                    today: "my-today",
                  }}
                  locale={sq}
                  weekStartsOn={1}
                  onDayClick={(val) => {
                    setDatePickerTogle(!datePickerTogle);
                    setInputIkjValue("");
                  }}
                  disabled={disabledDates}
                />
              ) : (
                ""
              )}
            </div>
            <div className="checkout">
              <label>Ikja</label>
              <input
                type="text"
                placeholder="dd/mm/vvvv"
                name="ditaIkjes"
                onChange={handleInputIkjChange}
                value={inputIkjValue}
                onClick={() => setDayPicker2Togle(!dayPicker2Togle)}
                required
              />
              {dayPicker2Togle ? (
                <DayPicker
                  mode="single"
                  selected={selectedDayIkj}
                  onSelect={handleDayIkjSelect}
                  required
                  showOutsideDays
                  fromMonth={
                    new Date(`${date.getFullYear()},${date.getMonth() + 1}`)
                  }
                  toDate={new Date(`${date.getFullYear()},8,31`)}
                  modifiersClassNames={{
                    today: "my-today",
                  }}
                  locale={sq}
                  weekStartsOn={1}
                  onDayClick={(val) => {
                    setDayPicker2Togle(!dayPicker2Togle);
                  }}
                  disabled={disabledDates}
                />
              ) : (
                ""
              )}
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
