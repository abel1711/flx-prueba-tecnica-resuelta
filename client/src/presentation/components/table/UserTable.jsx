import { Table } from 'antd';
import { useUserTable } from '../../hooks';
import './users-table.css';
import { useEffect } from 'react';
export const UserTable = () => {

    const { columns, users, tableParams, loading, handleTableChange } = useUserTable();
    useEffect(() => {
        console.log(tableParams)
    }, [tableParams])
    return (

        <Table
            columns={columns}
            rowKey={(record) => record.id}
            dataSource={users}
            loading={loading}
            pagination={{ ...tableParams.pagination }}
            onChange={handleTableChange}
            size='small'
        />

    )
}