import { FormEvent } from "react";
import { useForm } from "../hooks/useForm";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import "../styles/styles.css";
import { MyTextInput } from "../components";

export const RegisterFormikPage = () => {
  /*
        {
            name: '',
            email: '',
            password1: '',
            password2: ''
        }
        */

  return (
    <>
      <div>
        <h1>Register FormikPage</h1>
        <Formik
          initialValues={{
            name: "",
            email: "",
            password1: "",
            password2: "",
          }}
          onSubmit={(values) => {
            console.log("values ", values);
          }}
          validationSchema={Yup.object({
            name: Yup.string()
              .min(2, "El nombre debe ser de 3 caracteres o mas")
              .max(15, 'El nombre debe de ser menor de 15 caracteres')
              .required("Requerido"),
            email: Yup.string()
              .email("Revise el formato del correo")
              .required("Requerido"),
            password1: Yup.string()
              .required("Requerido")
              .min(6, "Minimo 6 caracteres"),
            password2: Yup.string()
              .oneOf([Yup.ref("password1")], "Las contrasena no son iguales")
              .required("Requerido"),
          })}
        >
          {
            ({ handleReset}) => (
                <Form>
                <MyTextInput label="Nombre" name="name" placeholder="Carlos"></MyTextInput>
                <MyTextInput label="Email" name="email" placeholder="john@google.com"></MyTextInput>
                <MyTextInput label="Password" name="password1" type="password"></MyTextInput>
                <MyTextInput label="Confirm Password" name="password2" type="password"></MyTextInput>
                <button type="submit">Create</button>
                <button type="button" onClick={handleReset}>
                    Reset
                </button>
                </Form>
            )
          }
        </Formik>
      </div>
    </>
  );
};
