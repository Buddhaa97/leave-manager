import React from 'react';
import MyForm from '../../components/finalForm/finalForm.component';
import Styles from './styles'

const formPage = () => (
    <Styles>
        <h1>React Final Form Example</h1>
        <h2>Performance Optimization Through Subscriptions</h2>
        <h3>
            The numbers in the circles are the number of times that
            component has been rendered.
        </h3>
        <p>
            This form, with no specified subscription, rerenders the whole form and
            every input on every change.
        </p>
        <MyForm />
        <p>
            This form subscribes only to the changes it needs to update. By not
            rerendering the whole form on every change
        </p>
        <MyForm subscription={{ submitting: true, pristine: true }} />
    </Styles>
);

export default formPage;
