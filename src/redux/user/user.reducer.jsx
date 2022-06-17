import {userActionTypes} from './user.types';

const INITIAl_STATE = {
    currentUser: null
}

const userReducer = (state = INITIAl_STATE, action) => {
    switch (action.type) {
        case userActionTypes:
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;