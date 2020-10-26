import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DataTables } from '../../../enums/data-tables';
import { getDataRouteForTable, getTableDataFields, getTableName } from '../../../helper/table-data.helper';
import { TableData } from '../../../model/db';
import { AppState } from '../../../store/root-reducer';
import { fetchTableData, saveTableData, selectDataTable } from '../../../store/table-data/actions';
import styles from './table-data-editor.module.scss';

interface Props {}

const TableDataEdtior = (props: Props) => {
    const { selectedTable, data: dataFromStore } = useSelector((state: AppState) => state.tableData);
    const dispatch = useDispatch();
    const [tableHeaders, setTableHeaders] = useState<{ db: string[], obj: string[], pk: string[]}>();
    const [tableData, setTableData] = useState<any[]>([]);
    
    const mapTableSelectOptions = () => {
        const tableKeys = Object.values(DataTables).filter(v => typeof v === 'number');
        const tableOptions = tableKeys.map(v => {
            return { 
                option: getTableName(v as DataTables).toUpperCase(), 
                value: v as number,
            }
        });

        return tableOptions;
    }
    
    const onTableChange = (e: any) => {
        dispatch(selectDataTable(e.target.value as DataTables));
    }

    const onRowAdd = () => {
        let newRow = { isNew: true };
        tableHeaders!.obj.forEach((key: string) => {
            newRow = { ...newRow, [key]: '' };
        });

        setTableData([...tableData, newRow]);
    }

    const onCellChange = (index: number, key: string) => (e: any) => {
        const value = e.target.value;
        const updatedData = tableData.map((v, i) => {
            if (index === i) {
                return { ...v, [key]: value, isChanged: true }
            }
            return v;
        });

        setTableData(updatedData);
    }
    
    const onRowDelete = (index: number) => (e: any) => {
        const updatedData = tableData.filter((v, i) => i !== index);
        setTableData(updatedData);
    }

    const onSave = () => {
        let newData = tableData.filter((newObj: any) => !(dataFromStore as any).find((oldObj: any) => {
            return tableHeaders!.pk.every(key => newObj[key] === oldObj[key]);
        }));
        newData = newData.map((v: TableData) => {
            const { isChanged, isNew, ...pure } = v;
            return pure;
        })

        let updatedData = tableData.filter(v => v.isChanged && !v.isNew);
        updatedData = updatedData.map((v: TableData) => {
            const { isChanged, isNew, ...pure } = v;
            return pure;
        })
        
        let deletedData = (dataFromStore as any).filter((oldObj: any) => !tableData.find((newObj: any) => {
            return tableHeaders!.pk.every(key => oldObj[key] === newObj[key]);
        }));
        deletedData = deletedData.map((v: TableData) => {
            const { isChanged, isNew, ...pure } = v;
            return pure;
        })

        if (selectedTable) {
            dispatch(saveTableData(
                getDataRouteForTable(selectedTable),
                newData,
                updatedData,
                deletedData,
            ));
        }
    }

    const onCancel = () => {
        setTableData(dataFromStore);
    }

    useEffect(() => {
        if (selectedTable) {
            setTableHeaders(getTableDataFields(selectedTable));
            const dataRoute = getDataRouteForTable(selectedTable);
            dispatch(fetchTableData(dataRoute));
        }
    }, [selectedTable]);

    useEffect(() => {
        if (dataFromStore) {
            setTableData(dataFromStore);
        }
    }, [dataFromStore]);

    useEffect(() => {
    }, [tableData]);

    return (
        <div className={styles.tableDataEditor}>
        Table Data Editor
            <select onChange={onTableChange}>
                {mapTableSelectOptions().map(v => {
                    return (<option value={v.value} >{v.option}</option>)
                })}
            </select>
            {
                selectedTable && tableHeaders && 
                (<table className={styles.dataTable}>
                    <thead >
                        <tr className={styles.tableHeader}>
                            {tableHeaders.db.map(v => <th className={styles.fieldHeader}>{v.toUpperCase()}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((dataRow, i) => {
                            return (
                                <tr>
                                    {tableHeaders.obj.map(field => {
                                        return (
                                            <td>
                                                <input
                                                    className={styles.fieldCell}
                                                    value={dataRow[field]}
                                                    onChange={onCellChange(i, field)}
                                                    disabled={tableHeaders.pk.includes(field)}
                                                />
                                            </td>
                                        )
                                    })}
                                    <td>
                                        <button onClick={onRowDelete(i)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                    </table>)
            }
            <button onClick={onRowAdd}>Add</button>
            <button onClick={onSave}>Save</button>
            <button onClick={onCancel}>Cancel</button>
        </div>
    )
}

export default TableDataEdtior;