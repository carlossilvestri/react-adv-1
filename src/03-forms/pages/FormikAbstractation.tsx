import { Formik, Form } from "formik";
import * as Yup from "yup";
import { MyCheckbox, MySelect, MyTextInput } from "../components";

import "../styles/styles.css";

export const FormikAbstractation = () => {
  return (
    <div>
      <h1>Formik Abstractation</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobType: "",
        }}
        onSubmit={(values) => {
          console.log("values ", values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Debe de tener 15 caracteres o menos")
            .required("Requerido"),
          lastName: Yup.string()
            .max(15, "Debe de tener 15 caracteres o menos")
            .required("Requerido"),
          email: Yup.string()
            .email("El correo no tiene un formato valido")
            .required("Requerido"),
          terms: Yup.boolean().oneOf([true], "Debe de aceptar las condiciones"),
          /*
             oneOf([]) El valor debe cumplir con alguna de los valor colocados en el arreglo de 
          */
          jobType: Yup.string()
            .required("Requerido")
            .notOneOf(["it-jr"], "Esta opcion no es permitida"),
        })}
      >
        {(formik) => (
          <Form>
            <MyTextInput
              label={"First Name"}
              name={"firstName"}
              placeholder="First Name"
            />
            <MyTextInput
              label={"Last Name"}
              name={"lastName"}
              placeholder="Last Name"
            />
            <MyTextInput
              label={"Email"}
              name={"email"}
              placeholder="Email"
              type="email"
            />
            <MySelect label={"Job type"} name="jobType">
              <option value="">Pick something</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">It Senior</option>
              <option value="it-jr">IT Jr</option>
            </MySelect>
            <MyCheckbox label={"Terms and conditions"} name={"terms"} />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
