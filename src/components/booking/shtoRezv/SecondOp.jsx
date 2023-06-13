import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SecondOp = ({ setOptRendr, formData, setFormData }) => {
  const initialValues = {
    dhoma: "",
    email: "",
    telefon: "",
  };

  const yupSchema = Yup.object().shape({
    dhoma: Yup.string().required("Mos e lër bosh"),
    email: Yup.string()
      .email("Vendosni formatin e saktë")
      .required("Mos e lër bosh"),
    telefon: Yup.number("Ju lutem duhet numër").required("Mos e lër bosh"),
  });
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={yupSchema}
      onSubmit={(values) => {
        setFormData({ ...formData, form2: values });
        setOptRendr("SuccessOp");
      }}
    >
      {({
        values,
        errors,
        touched,
        isValid,
        dirty,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <Form className="formDy">
          <div className="roomType">
            <label>Dhoma</label>
            <Field name="dhoma" as="select">
              <option value="" disabled></option>
              <option value="dhomTeke">Dhom Teke</option>
              <option value="dhomCift">Dhom Çift</option>
              <option value="dhomFamiljare">Dhom Familjare</option>
            </Field>
            <h4>
              {" "}
              <ErrorMessage name="dhoma" component="span" />
            </h4>
          </div>
          <div className="email">
            <label>Emaili</label>
            <Field as="input" type="email" placeholder="Emaili" name="email" />
            <h4>
              {" "}
              <ErrorMessage name="email" component="span" />
            </h4>
          </div>
          <div className="telNr">
            <label>Numri Telefonit</label>
            <Field
              as="input"
              type="tel"
              placeholder="Telefoni"
              name="telefon"
            />
            <h4>
              {" "}
              <ErrorMessage name="telefon" component="span" />
            </h4>
          </div>

          <div className="cmimiText">
            <h3>Çmimi</h3>
            <h4>$1820</h4>
          </div>
          <div className="btnCon">
            <button
              onClick={() => {
                setOptRendr("FirstOp");
              }}
              type="reset"
            >
              Mbrapa
            </button>
            <button type="submit" disabled={dirty && isValid ? false : true}>
              Dorëzo
            </button>
          </div>
          <h5>Faqja 2/2</h5>
        </Form>
      )}
    </Formik>
  );
};

export default SecondOp;
