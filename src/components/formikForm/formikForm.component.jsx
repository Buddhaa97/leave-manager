// import React, { useEffect } from "react";
// import { Formik, Form, useField, useFormikContext } from "formik";
// import * as Yup from "yup";
// import "./styles.css";
// import "./styles-custom.css";
// import MyTextInput from "./inputField.component";
// import MyCheckbox from "./checkBox.component";
// import MySelect from "./selectOption.component";
//
//
// const FormikFormComponent = () => {
//     return (
//         <>
//             <h1>Formik Form Example!</h1>
//             <Formik
//                 initialValues={{
//                     firstName: "",
//                     lastName: "",
//                     email: "",
//                     acceptedTerms: false, // added for our checkbox
//                     jobType: "" // added for our select
//                 }}
//                 validationSchema={Yup.object({
//                     firstName: Yup.string()
//                         .max(15, "Must be 15 characters or less")
//                         .required("Required"),
//                     lastName: Yup.string()
//                         .max(20, "Must be 20 characters or less")
//                         .required("Required"),
//                     email: Yup.string()
//                         .email("Invalid email addresss`")
//                         .required("Required"),
//                     acceptedTerms: Yup.boolean()
//                         .required("Required")
//                         .oneOf([true], "You must accept the terms and conditions."),
//                     jobType: Yup.string()
//                         // specify the set of valid values for job type
//                         // @see http://bit.ly/yup-mixed-oneOf
//                         .oneOf(
//                             ["designer", "development", "product", "other"],
//                             "Invalid Job Type"
//                         )
//                         .required("Required")
//                 })}
//                 // onSubmit={async (values, { setSubmitting }) => {
//                 //     await new Promise(r => setTimeout(r, 500));
//                 //     setSubmitting(false);
//                 // }}
//                 onSubmit={(values, { setSubmitting }) => {
//                     setTimeout(() => {
//                         alert(JSON.stringify(values, null, 2));
//                         setSubmitting(false);
//                     }, 400);
//                     console.log('====', values);
//                 }}
//             >
//                 <Form>
//                     <MyTextInput
//                         label="First Name"
//                         name="firstName"
//                         type="text"
//                         placeholder="First Name"
//                     />
//                     <MyTextInput
//                         label="Last Name"
//                         name="lastName"
//                         type="text"
//                         placeholder="Last Name"
//                     />
//                     <MyTextInput
//                         label="Email Address"
//                         name="email"
//                         type="email"
//                         placeholder="Email"
//                     />
//                     <MySelect label="Job Type" name="jobType">
//                         <option value="">Select a job type</option>
//                         <option value="designer">Designer</option>
//                         <option value="development">Developer</option>
//                         <option value="product">Product Manager</option>
//                         <option value="other">Other</option>
//                     </MySelect>
//                     <MyCheckbox name="acceptedTerms">
//                         I accept the terms and conditions
//                     </MyCheckbox>
//
//                     <button type="submit">Submit</button>
//                 </Form>
//             </Formik>
//         </>
//     );
// };
//
// export default FormikFormComponent;

import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const FormikFormComponent = () => {
    return (
        <Formik
            initialValues={{ firstName: '', lastName: '', email: '' }}
            validationSchema={Yup.object({
                firstName: Yup.string()
                    .max(15, 'Must be 15 characters or less')
                    .required('Required'),
                lastName: Yup.string()
                    .max(20, 'Must be 20 characters or less')
                    .required('Required'),
                email: Yup.string().email('Invalid email address').required('Required'),
            })}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            <Form>
                <label htmlFor="firstName">First Name</label>
                <Field name="firstName" type="text" />
                <ErrorMessage name="firstName" />

                <label htmlFor="lastName">Last Name</label>
                <Field name="lastName" type="text" />
                <ErrorMessage name="lastName" />

                <label htmlFor="email">Email Address</label>
                <Field name="email" type="email" />
                <ErrorMessage name="email" />

                <button type="submit">Submit</button>
            </Form>
        </Formik>
    );
};

export default FormikFormComponent;
