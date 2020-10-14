import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { AppState } from '../../../store/root-reducer';
import styles from './header.module.scss';

interface Props {}

const Header = (props: Props) => {
    const { isAuthenticated } = useSelector((state: AppState) => state.auth);
    const history = useHistory();
    const dispatch = useDispatch();

    const goToSignInPage = () => {
        history.push('/auth/signin');
    }
    
    const signOut = () => {
        dispatch(signOut());
    }

    return (
        <div className={styles.header}>
            Header
            {isAuthenticated ? (<button onClick={signOut}>Sign Out</button>) : (<button onClick={goToSignInPage}>Sign In</button>)}
        </div>
    )
}

export default Header;