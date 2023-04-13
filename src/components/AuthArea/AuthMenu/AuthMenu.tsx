import React, { FC } from 'react';
import styles from './AuthMenu.module.scss';
import { logout } from '../../../auth/authSlice';
import { useAppSelector, useAppDispatch } from '../../../hooks';
import { NavLink } from 'react-router-dom';
 
interface AuthMenuProps {}

const AuthMenu: FC<AuthMenuProps> = () => {
    const dispatch = useAppDispatch();
    const { user } = useAppSelector((state) => state.authState);

    const logoutHandler = () => {
        dispatch(logout());
    }

    const renderContent = () => {
        if(user){
            return (
                <>
                    <span>Hello { user.firstName } { user.lastName } | </span>
                    <NavLink onClick={logoutHandler} to="#">Logout</NavLink>
                </>
            )
        }

        return (
            <>
                <span>Hello Guest | </span>
                <NavLink to="/login">Login</NavLink>
                <span> | </span>
                <NavLink to="/register">Register</NavLink>
            </>
        )
    }

    return(
        <div className={styles.AuthMenu}>
            {renderContent()}
        </div>
    );
}


export default AuthMenu;
