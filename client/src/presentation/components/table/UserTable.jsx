import { useSelector } from 'react-redux';
import { Table } from 'antd';
import { useUserTable } from '../../hooks';
import './users-table.css';

export const UserTable = () => {

    const {
        users,
        pagination,
        isLoading
    } = useSelector(state => state.appState);

    const {
        COLUMNS,
        getUsers
    } = useUserTable();

    return (
        <Table
            columns={COLUMNS}
            rowKey={(record) => record.id}
            dataSource={users}
            loading={isLoading}
            pagination={{
                ...pagination,
                onChange: (page) => getUsers(page - 1),
            }}
            size='small'
        />

    )
}