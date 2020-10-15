import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import styles from './admin-header.module.scss';

interface Props {}

const AdminHeader = (props: Props) => {
    const { path, url } = useRouteMatch();

    console.log('adminheader', `${url}/db-tables`);
    return (
     <div className={styles.adminHeader}>
        <Link to={`${url}/db-tables`} className={styles.link}>DB Tables</Link>
     </div>
 )   
}

export default AdminHeader;