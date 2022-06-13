import React from 'react';
import Header from './components/header/header.component'
import HomePage from './pages/homePage/homePage.component';
import {Route, Routes, Redirect, Switch} from 'react-router-dom';
import EmployeeListing from './pages/employee/employeeListing/employeeListing.component';
import EmployeeFilter from './pages/employee/employeeFilter/employeeFilter.component';
import SignInAndSignUp from './pages/signIn-and-signUp/signIn-and-signUp.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.action';

class App extends React.Component {
    // constructor() {
    //     super();
    //
    //     this.state = {
    //         currentUser: null
    //     }
    // }

    unsubcribeFromauth = null;////why??

    componentDidMount() {
        const {setCurrentUser} = this.props;
        this.unsubcribeFromauth = auth.onAuthStateChanged(async userAuth => {
            if(userAuth) {
                const userRef = await createUserProfileDocument(userAuth);
                userRef.onSnapshot(snapShot => {
                    setCurrentUser({
                        current: {
                            id: snapShot.id,
                            ...snapShot.data()
                        }
                    })
                })
            }
            setCurrentUser(userAuth);
        })
    }

    componentWillUnmount() {
        this.unsubcribeFromauth();
    }

    render() {
        return (
            <>
                {/*<Header currentUser={this.state.currentUser}/>*/}
                <Header/>
                <Routes>
                    <Route exact path='/' element={<HomePage />}/>
                    <Route exact path='/employee-listing' element={<EmployeeListing />}/>
                    <Route exact path='/employee-filter' element={<EmployeeFilter />}/>
                    <Route exact path='/sign-in' element={<SignInAndSignUp />}/>
                    {/*<Route exact path='/sign-in'*/}
                    {/*       render={() => this.props.currentUser ? (<Redirect to='/'/>) : (<SignInAndSignUp/>)}/>*/}
                </Routes>
            </>
        );
    }
}

const mapStateToProps = user => ({///used with Redirect
    currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
