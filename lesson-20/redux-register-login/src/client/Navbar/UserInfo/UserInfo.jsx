import { useSelector, shallowEqual, useDispatch } from "react-redux";

import {logout} from "../../../redux/auth/auth-operations";

import { getUser } from "../../../redux/auth/auth-selectors";

const UserInfo = ()=> {
    const {name} = useSelector(getUser, shallowEqual);

    const dispatch = useDispatch();

    const handleLogout = ()=> dispatch(logout());

    return (
        <div>
            {name}, <button onClick={handleLogout}>Logout</button>
        </div>
    )
};

export default UserInfo;