import React from 'react'
import { Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';
//Models
import { User } from '../../../models/user.class';
import { ROLES } from '../../../models/roles.enum';

export default function RegiterFormik() {

    let user = new User();

    const initialValues = {
        userName: '',
        email: '',
        password: '',
        confirm: '',
        role: ROLES.USER

    }

    const registerSchema = Yup.object().shape(

        {
            userName: Yup.string()
                .min(6, 'UserName must be to short')
                .max(12, 'UserName to long')
                .required( 'UserName required'),
            email: Yup.string()
                .email('Invalid email format')
                .required('Email is required'),
            role: Yup.string()
                .oneOf( [ROLES.USER, ROLES.ADMIN], 'You must select a Role: User / Admin')
                .required('Role is required'),
            password: Yup.string()
                .required('Password is required')
                .min(8, 'Password to short'),
            confirm: Yup.string()
                .when('password', {
                    is: value => (value && value.length > 0 ? true : false),
                    then: Yup.string().oneOf(
                        [Yup.ref('password')],
                        'Password must match!'
                    )
                }).required('You must confirm the password')

        }
    );

    const submit = (values) => {
        alert('Register user');
    }



    return (
        <div>
            <h4>Register Formik</h4>
            <Formik
            initialValues={initialValues}
            validationSchema = { registerSchema }
            onSubmit= {async ( values ) => {
                    await new Promise ( ( r ) => setTimeout(r,1000));
                    alert(JSON.stringify(values, null, 2));
                }}
            >

            { ({ 
                    values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur}) => (
                        
                        <Form>

                            <label htmlFor="userName">UserName</label>
                            <Field id="userName" type='text' name="userName" placeholder="Your username" />

                            {/**UserName errors */}
                            {
                                errors.userName && touched.userName && 
                                (
                                    <ErrorMessage name='userName' component='div'></ErrorMessage>
                                )
                            }
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

                            <label htmlFor="confirm">Password</label>
                            <Field
                            id="confirm"
                            name="confirm"
                            placeholder="Confirm Password"
                            type="password"
                            />

                            {/**Password errors */}
                            {
                                errors.confirm && touched.confirm && 
                                (
                                        <ErrorMessage name='confirm' component='div'></ErrorMessage>
                                )

                            }

                            <button type="submit">RegisterAccount</button>
                            {isSubmitting ? (<p>Sending your credentials...</p>) : null}

                        </Form>
                    )  
                    
            }

            </Formik>
        </div>
    )
}
