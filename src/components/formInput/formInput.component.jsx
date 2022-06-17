import React from 'react';

const FormInput = ({handleChange, label, ...otherProps}) => (
    <div>
        {
            label ?
                (<label>
                    {label}
                </label>)
                : null
        }
        <input onChange={handleChange} {...otherProps}/>
    </div>
);

export default FormInput;