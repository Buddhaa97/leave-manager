 import React from 'react';
 import FormInput from '../formInput/formInput.component';
 import Button from '../button/button.component';
 import {auth, SignInWithGoogle} from '../../firebase/firebase.utils';

 class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit = async event => {
        event.preventDefault();
        const { email, password } = this.state;
        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''})
        } catch (err) {
            console.log('ooops',err);
        }
    }
    handleChange = (event) => {
        const {value, name} = event.target;
        this.setState({[name]: value});
    }
    render() {
        return (
            <div>
                <h3>I already have an account</h3>
                <h3>sign in with email and password</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>email</label>
                    <FormInput name="email" type="email" value={this.state.email} required handleChange={this.handleChange} />
                    <label>password</label>
                    <FormInput name="password" type="password" value={this.state.password} required onChange={this.handleChange} />
                    <Button type="submit">Sign in</Button>
                    {/*<Button onClick={SignInWithGoogle}>Sign in with google</Button>*/}
                    <button onClick={SignInWithGoogle}>Sign in with google</button>
                </form>
            </div>
        )
    }
}
export default SignIn;