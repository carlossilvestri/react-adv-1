import { ErrorMessage, useField } from "formik";

interface Props {
    label: string;
    name: string;
    type?: 'text' | 'email' | 'password';
    placeholder?: string;
    [x: string]: any;
}

export const MyTextInput = ({ label, ...props }: Props) => {
  // const [ field, meta] = useField(props);
  const [ field ] = useField(props);
  console.log('field ', field);
  return (
    <>
        <label htmlFor={ props.id || props.name } >{ label }</label>
        <input className="" type="text" { ...field } { ...props} />
        <ErrorMessage name={props.name} component={"span"} className="" />
        {
          // meta.touched && meta.error && 
          // ( <span className="error">{meta.error}</span> )
        }
    </>
  );
};
