import { SIGNIN, SIGNOUT } from "../constants/actionTypes";

const AuthReducers = (user = null, action) => {
    switch (action.type) {
        case SIGNIN:
            return user;
        case SIGNOUT:
            return user;
        default:
            return user;
    }
};

export default AuthReducers;