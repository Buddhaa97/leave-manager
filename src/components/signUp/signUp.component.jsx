import React from 'react';
import FormInput from '../formInput/formInput.component';
import Button from '../button/button.component';
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;
        if (password !== confirmPassword) {
            alert("password don't match");
            return;
        }

        try {
            const {user} = auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {displayName})
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        } catch (error) {
            console.log(error);
        }
    }
    handleChange = event => {
        const {name, value} = event.target;
         this.setState({[name]: value});
    }

    render() {
        const {displayName, email, password, confirmPassword} = this.state;
        return (
            <div>
                <h2>I don't have account</h2>
                <span>Sign up with email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type='test'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        label='Display Name'
                        required
                    >
                    </FormInput>
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label='Email'
                        required
                    >
                    </FormInput>
                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        label='Password'
                        required
                    >
                    </FormInput>
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label='Confirm Password'
                        required
                    >
                    </FormInput>
                    <Button type='submit'>Sign Up</Button>
                </form>
            </div>
        )
    }
}

export default SignUp;