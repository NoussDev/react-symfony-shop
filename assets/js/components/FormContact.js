import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const FormContact = () =>{
    const formik = useFormik({
        initialValues:{
            name:'',
            email:'',
            message:''
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .max(10, 'Must be 10 characters or less.')
                .required('Required'),
            email: Yup.string()
                .email('Invalid email adress')
                .required("Required"),
            message: Yup.string()
                .max(500, "Must be 500 characters max.")
                .required("Required")
        }),
        onSubmit: values => {
            alert(JSON.stringify(values,null,2))
        }
    })

    return(
        <form onSubmit={formik.handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="name" 
                    aria-describedby="emailHelp" 
                    placeholder="Enter name" 
                    required 
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                />
                {
                formik.touched.name && formik.errors.name ? (
                    <p className="help-block text-danger">{formik.errors.name}</p>
                ) : null
                }
            </div>
            <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input 
                    type="email" 
                    className="form-control" 
                    id="email" 
                    aria-describedby="emailHelp" 
                    placeholder="Enter email" 
                    required 
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                />
                {
                formik.touched.email && formik.errors.email ? (
                    <p className="help-block text-danger">{formik.errors.email}</p>
                ) : null
                }
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                    className="form-control"
                    id="message" 
                    rows="6" 
                    required
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.message}
                >   
                </textarea>
                {
                formik.touched.message && formik.errors.message ? (
                    <p className="help-block text-danger">{formik.errors.message}</p>
                ) : null
                }
            </div>
            <div className="mx-auto text-center">
                <button type="submit" className="btn btn-primary text-right">Submit</button>
            </div>
        </form>
    )
}

export default FormContact