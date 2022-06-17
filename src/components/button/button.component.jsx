import React from 'react';

const Button = ({children, ...otherProps}) => (
    <button>
        {children}
    </button>
);

export default Button;