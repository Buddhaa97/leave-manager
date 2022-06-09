import React from 'react';
import Header from './components/header/header.component'
import HomePage from './pages/homePage/homePage.component';
import {Route, Routes} from 'react-router-dom';
import EmployeeListing from './pages/employee/employeeListing/employeeListing.component';
import EmployeeFilter from './pages/employee/employeeFilter/employeeFilter.component';
import SignInAndSignUp from './pages/signIn-and-signUp/signIn-and-signUp.component';
import {auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            currentUser: null
        }
    }

    unsubcribeFromauth = null;

    componentDidMount() {
        this.unsubcribeFromauth = auth.onAuthStateChanged(async userAuth => {
            // this.setState({currentUser: user});
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);
                userRef.onSnapshot(snapShot => {
                    this.setState({
                        current: {
                            id: snapShot.id,
                            ...snapShot.data()
                        }
                    })
                })
            }
            this.setState({currentUser: userAuth});
        })
    }

    componentWillUnmount() {
        this.unsubcribeFromauth();
    }

    render() {
        return (
            <>
                <Header currentUser={this.state.currentUser}/>
                <Routes>
                    <Route exact path='/' element={<HomePage/>}/>
                    <Route exact path='/employee-listing' element={<EmployeeListing/>}/>
                    <Route exact path='/employee-filter' element={<EmployeeFilter/>}/>
                    <Route exact path='/sign-in' element={<SignInAndSignUp/>}/>
                </Routes>
            </>
        );
    }
}

export default App;
