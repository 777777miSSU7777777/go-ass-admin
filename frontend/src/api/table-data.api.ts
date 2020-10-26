import axios, { AxiosRequestConfig } from 'axios';
import { LocalStorageKeys, DataActions } from '../enums';
import { TableData } from '../model/db';

const tableDataInstance = axios.create({
    baseURL: `http://127.0.0.1:3000/data`,
    headers: {
        'Content-Type': 'application/json',
    }
});

tableDataInstance.interceptors.request.use((req: AxiosRequestConfig) => {
    req.headers = {
        ...req.headers,
        'Authorization': localStorage.getItem(LocalStorageKeys.accessToken),
    };

    return req;
})

export const TableDataAPI = {
    getData(dataRoute: string) {
        return tableDataInstance.post(`${dataRoute}?action=${DataActions.get}`).then(res => res.data);
    },

    newData(dataRoute: string, data: TableData[]) {
        return tableDataInstance.post(`${dataRoute}?action=${DataActions.create}`, data).then(res => res.data);
    },

    updateData(dataRoute: string, data: TableData[]) {
        return tableDataInstance.post(`${dataRoute}?action=${DataActions.update}`, data).then(res => res.data);
    },

    deleteData(dataRoute: string, data: TableData[]) {
        return tableDataInstance.post(`${dataRoute}?action=${DataActions.delete}`, data).then(res => res.data);
    }
}