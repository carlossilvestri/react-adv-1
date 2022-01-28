import {  FormEvent } from 'react';
import { useForm } from '../hooks/useForm';
import "../styles/styles.css";

export const RegisterPage = () => {
    const { isValidEmail, resetForm, formData, onChange, name, email, password1, password2 } = useForm(
        {
            name: '',
            email: '',
            password1: '',
            password2: ''
        }
    );
    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formData);
    }

  return (
      <>
        <div>
            <h1>Register Page</h1>
            <form action="" noValidate onSubmit={onSubmit}>
                <input type="text" name="name" id="" placeholder="Name" value={name} onChange={onChange} className={`${ name.trim().length <= 0 && "has-error"}`} />
                { name.trim().length <= 0 && <span>Este campo es necesario</span>}
                <input type="email" name="email" id="" placeholder="Email" value={email} onChange={onChange} className={`${ !isValidEmail(email) && "has-error"}`} />
                { !isValidEmail(email) && <span>Este campo es necesario</span>}
                <input type="password" name="password1" id="" placeholder="Password" value={password1} onChange={ (ev)=> onChange(ev)} />
                { password1.trim().length <= 0 && <span>Este campo es necesario</span>}
                { (password1.trim().length < 6 && password1.trim().length > 0) && <span>La contraseña tiene que tener 6 caracteres</span>}
                <input type="password" name="password2" id="" placeholder="Repeat Password" value={password2} onChange={onChange} />
                { password2.trim().length <= 0 && <span>Este campo es necesario</span>}
                { (password2.trim().length > 0 && password1 !== password2) && <span>Las contraseñas deben ser iguales</span>}
                <button type="submit">Create</button>
                <button type="button" onClick={resetForm}>Reset</button>
            </form>
        </div>
      </>
  );
};
