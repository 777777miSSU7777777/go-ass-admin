import axios, { AxiosRequestConfig } from 'axios';
import { LocalStorageKeys } from '../enums';
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
        return tableDataInstance.get(`${dataRoute}`).then(res => res.data);
    },

    newData(dataRoute: string, data: TableData[]) {
        return tableDataInstance.post(`${dataRoute}`, data).then(res => res.data);
    },

    updateData(dataRoute: string, data: TableData[]) {
        return tableDataInstance.put(`${dataRoute}`, data).then(res => res.data);
    },

    deleteData(dataRoute: string, data: TableData[]) {
        return tableDataInstance.delete(`${dataRoute}`, { data }).then(res => res.data);
    }
}