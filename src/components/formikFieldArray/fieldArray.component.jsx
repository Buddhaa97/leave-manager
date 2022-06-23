import React from "react";
import { Formik, Field, FieldArray } from "formik";

const validate = values => {debugger
    let errors = {
        error_items: []
    };

    if (values.items.length > 0) {
        values.items.forEach(item => {
            const error = {};
            if (item.value.length > 5) {
                error.value = "Too many characters!";
            }
            errors.error_items.push(error);
        });
    }

    return errors;
};

const FriendList = () => {
    return (
        <div>
            <h3>Add to the list...</h3>
            <p>5 characters long are invalid.</p>

            <Formik initialValues={{ items: [] }} validate={validate}>
                {({ values, errors }) => (
                    <form>
                        {console.log('=====>', errors)}
                        <FieldArray
                            name="items"
                            render={arrayHelpers => (
                                <div>
                                    {values.items.map((item, index) => (
                                        <div key={index}>
                                            <Field name={`items[${index}].value`} />
                                            <button
                                                type="button"
                                                onClick={() => arrayHelpers.remove(index)}
                                            >
                                                Remove
                                            </button>
                                            {errors.error_items &&
                                                errors.error_items[index] &&
                                                errors.error_items[index].value && (
                                                    <span>{errors.error_items[index].value}</span>
                                                )}
                                        </div>
                                    ))}
                                    <button
                                        type="button"
                                        onClick={() => arrayHelpers.push({ value: "" })}
                                    >
                                        Add
                                    </button>
                                </div>
                            )}
                        />
                    </form>
                )}
            </Formik>
        </div>
    );
}

export default FriendList;
