import { Formik, Form } from "formik";
import * as Yup from "yup";
import { MySelect, MyTextInput } from "../components";
import formJSON from "../data/custom-form.json";

const initialValues: { [key: string]: any } = {};
const requiredFields: { [key: string]: any } = {};

for (const input of formJSON) {
  initialValues[input.name] = input.value;
  if(!input.validations) continue;
  let schema = Yup.string();
  for (const rule of input.validations) {
  let errorMessage = rule.errorMessage || '';
    if(rule.type === 'required'){
      schema = schema.required(errorMessage)
    }
    if(rule.type === 'minLength'){
      schema = schema.min((rule as any).value || 1, errorMessage)
    }
    if(rule.type === 'email'){
      schema = schema.email(errorMessage)
    }
  }
  requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({...requiredFields});

export const DynamicForms = () => {
  return (
    <div>
      <h1>Dynamic Forms</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log("values ", values);
        }}
        validationSchema={validationSchema}
      >
        {(formik) => (
          <Form noValidate>
            {formJSON.map(({ type, name, placeholder, label, options }) => {
              if (type === "input" || type === "password" || type === "email") {
                return (
                  <MyTextInput
                    key={`key-${name}`}
                    label={label}
                    name={name}
                    type={type as any}
                    placeholder={placeholder}
                  />
                );
              } else if (type === "select") {
                return (
                  <MySelect key={`key-${name}`} label={label} name={name}>
                    <option value="">Select an option</option>
                    {
                      options?.map((opt) => 
                        (
                          <option key={`options-${opt.id}`}  value={opt.id} >{opt.value} </option>
                        )
                      )
                    }
                  </MySelect>
                );
              }
              throw new Error(`Type: ${type} no es soportado.`);
            })}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
