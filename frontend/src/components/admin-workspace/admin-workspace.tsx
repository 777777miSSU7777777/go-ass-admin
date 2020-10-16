import React from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import AdminHeader from './admin-header/admin-header';
import styles from './admin-workspace.module.scss';
import DBTables from './data-tables/data-tables';

interface Props {}

const AdminWorkspace = (props: Props) => {
    const { url } = useRouteMatch();
    return (
        <div className={styles.adminWorkspace}>
            <AdminHeader />
            <div className={styles.workspaceWrapper}>
                <Route path={`${url}/data-tables`} component={DBTables}/>
                <Redirect from={url} to={`${url}/data-tables`} />
            </div>
        </div>
    )
}

export default AdminWorkspace;