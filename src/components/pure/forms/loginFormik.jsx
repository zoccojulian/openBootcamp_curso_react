import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const loginSchema = Yup.object().shape(
    {
        email: Yup.string()
            .email('Invalid email format')
            .required('Email is required'),
        password: Yup.string()
            .required('Password is required')
    }
);





export default function LoginFormik() {

    const initialCredentials = {
        email: '',
        password: ''
    }

    const history = useNavigate();


    return (

        <div>
            <h4>Login Formik</h4>
            <Formik
            // Initial values that the form will take
                initialValues={ initialCredentials }
                //Yup validaton Schema
                validationSchema = { loginSchema }
                // onSubmit Event
                onSubmit= {async ( values ) => {
                    await new Promise ( ( r ) => setTimeout(r,1000));
                    alert(JSON.stringify(values, null, 2));
                    //We save the data ub the localStorage
                    await localStorage.setItem('credentials', values);
                    history('/profile');
                }}
            >

                {/**We ontain props form formik */}

                { ({ 
                    values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur}) => {

                        return (
                        <Form>
                            <label htmlFor="email">Email</label>
                            <Field id="email" type='email' name="email" placeholder="example@email.com" />

                            {/**Email errors */}
                            {
                                errors.email && touched.email && 
                                (
                                    <ErrorMessage name='email' component='div'></ErrorMessage>
                                )
                            }

                            <label htmlFor="password">Password</label>
                            <Field
                            id="password"
                            name="password"
                            placeholder="password"
                            type="password"
                            />

                            {/**Passeord errors */}
                            {
                                errors.password && touched.password && 
                                (
                                        <ErrorMessage name='password' component='div'></ErrorMessage>
                                )

                            }

                            <button type="submit">Submit</button>

                            {isSubmitting ? (<p>Login your Credentials...</p>) : null}
                        </Form>
                    )

                }}
            </Formik>
        </div>
        
    )
}
