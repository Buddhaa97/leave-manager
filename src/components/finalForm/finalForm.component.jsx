import React from 'react'
import { render } from 'react-dom'
import { Form, Field, FormSpy } from 'react-final-form'
import RenderCount from './renderCount.component'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
    await sleep(300)
    window.alert(JSON.stringify(values, 0, 2))
}
const required = value => (value ? undefined : 'Required')

const MyForm = ({ subscription }) => (
    <Form
        onSubmit={onSubmit}
        subscription={subscription}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit}>
                {console.log('renders')}
                <RenderCount />
                <Field name="firstName" validate={required}>
                    {({ input, meta }) => (
                        <div>
                            <RenderCount />
                            <label>First Name</label>
                            <input {...input} placeholder="First Name" />
                            {meta.touched && meta.error && <span>{meta.error}</span>}
                        </div>
                    )}
                </Field>
                <Field name="lastName" validate={required}>
                    {({ input, meta }) => (
                        <div>
                            <RenderCount />
                            <label>Last Name</label>
                            <input {...input} placeholder="Last Name" />
                            {meta.touched && meta.error && <span>{meta.error}</span>}
                        </div>
                    )}
                </Field>
                <div className="buttons">
                    <button type="submit" disabled={submitting}>
                        Submit
                    </button>
                    <button
                        type="button"
                        onClick={form.reset}
                        disabled={submitting || pristine}
                    >
                        Reset
                    </button>
                </div>
                {values ? (
                    <pre>
                <RenderCount/>
                        {/*{JSON.stringify(values, 0, 2)}*/}
                    </pre>
                ) : (
                    <FormSpy subscription={{ values: true }}>
                        {({ values }) => (
                            <pre>
                <RenderCount/>
                                {/*{JSON.stringify(values, 0, 2)}*/}
              </pre>
                        )}
                    </FormSpy>
                )}
            </form>
        )}
    />
)

export default MyForm;