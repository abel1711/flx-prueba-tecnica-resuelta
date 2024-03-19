import { useEffect, useState } from "react"
import { userApi } from "../api/user-api";
import { Button, Tag } from "antd";

const columns = [
    {
        title: 'Usuario',
        dataIndex: 'username',

    },
    {
        title: 'Nombre',
        dataIndex: 'name',

    },
    {
        title: 'Apellido',
        dataIndex: 'lastname',
    },
    {
        title: 'Estado',
        dataIndex: 'status',
        render: (status) => (
            status === 'active' ? (<Tag color='green'>Activo</Tag>) : (<Tag color='red'>Inactivo</Tag>)
        ),
        width: '10%'
    },
    {
        title: 'Acciones',
        render: (item) => (<>
            <Button type="link" onClick={() => console.log(item.id)}>Editar</Button>
            <Button type="link" onClick={() => console.log(item.id)}>Eliminar</Button>
        </>),
        width: '15%'
    },
];


export const useUserTable = () => {

    const [tableParams, setTableParams] = useState({
        pagination: {
            current: 1,
            pageSize: 9,
            total: 0,
        },
    });

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getUsers();
    }, [])

    const handleTableChange = (pagination) => {
        setTableParams((prevParams) => ({
            ...prevParams,
            pagination,
        }));
    };

    const getUsers = async (page = 1) => {

        setLoading(true);
        setTimeout(async () => {


            try {

                const { data } = await userApi.get(`/`);

                setUsers(data);

                setTableParams((prevParams) => ({
                    ...prevParams,
                    pagination: {
                        ...prevParams.pagination,
                        total: data.length,
                        current: page
                    },
                }));

                setLoading(false);
            } catch (error) {
                console.log(error)
                setLoading(false);
            }
        }, 500);
    }
    return {
        users,
        loading,
        columns,
        tableParams,
        handleTableChange,
        getUsers
    }
}

