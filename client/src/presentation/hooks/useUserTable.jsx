import { Button, Tag } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersThunks } from "../redux/features/users/usersThunks";

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

    const dispatch = useDispatch();
    const { filter } = useSelector(state => state.appState);

    
    useEffect(() => {
        getUsers();
    }, [])

    useEffect(() => {
        getUsers()
    }, [filter]);

    const getUsers = (page = 0) => {
        dispatch(getUsersThunks(page));
    };

    return {
        columns,
        getUsers
    };
};

