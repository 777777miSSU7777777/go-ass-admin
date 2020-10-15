import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import AdminHeader from './admin-header/admin-header';
import styles from './admin-workspace.module.scss';
import DBTables from './db-tables/db-tables';

interface Props {}

const AdminWorkspace = (props: Props) => {
    const { url } = useRouteMatch();
    return (
        <div className={styles.adminWorkspace}>
            <AdminHeader />
            <div className={styles.workspaceWrapper}>
                <Route path={`${url}/db-tables`} component={DBTables}/>
            </div>
        </div>
    )
}

export default AdminWorkspace;