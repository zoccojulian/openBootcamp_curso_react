import React from 'react'
import { Formik, Field, ErrorMessage, Form} from 'formik'
import * as Yup from 'yup';
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';



export default function TaskFormik( { add }) {


    const initialValues = {
        name: '',
        description: '',

        level: ''
    }

    const taskSchema = Yup.object().shape(
        {
            name: Yup.string()
                .min(6, 'El nombre es muy corto')
                .max(12, 'El nombre es muy largo')
                .required('El nombre es requerido'),
            description: Yup.string()
            .min(6, 'La descripcion es muy corta')
            .required('La descripción es requerida'),
            level: Yup.string()
            .oneOf( [ LEVELS.URGENTE, LEVELS.NORMAL, LEVELS.BLOCKING ], 'Tiene que elegir entre normal / urgent / blocking')
            .required('Role is required'),
        }
    )

    const submit = ( values ) => {
        
        const newTask = new Task(values.name, values.description, false, values.level);
        add(newTask);
    }

    return (
        <div>
            <h4>New Task</h4>
            <Formik
            initialValues={ initialValues }
            validationSchema = { taskSchema }
            onSubmit = { (values) => submit(values) }
            >

                { ({ 
                    values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur}) => (
                        <Form>
                            <label htmlFor="name">TaskName</label>
                            <Field id="name" type='text' name="name" placeholder="TaskName" />

                            {/**name errors */}
                            {
                                errors.name && touched.name && 
                                (
                                    <ErrorMessage name='name' component='div'></ErrorMessage>
                                )
                            }

                            <label htmlFor="description">Description</label>
                            <Field id="description" type='text' name="description" placeholder="Description" />

                            {/**name errors */}
                            {
                                errors.description && touched.description && 
                                (
                                    <ErrorMessage name='description' component='div'></ErrorMessage>
                                )
                            }

                            <label htmlFor="level">TaskName</label>
                            <Field id="level" type='text' name="level" placeholder="Level" />

                            {/**name errors */}
                            {
                                errors.level && touched.level && 
                                (
                                    <ErrorMessage name='level' component='div'></ErrorMessage>
                                )
                            }

                            <button type="submit">Crear Task</button>

                        </Form>
                    )
                }


            </Formik>
        </div>
    )
}
