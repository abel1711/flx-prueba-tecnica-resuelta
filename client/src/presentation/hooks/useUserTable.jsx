import { Flex, Tag } from "antd";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ModalDelUser, ModalUser } from "@components";
import { getUsersThunks } from "@redux";

const COLUMNS = [
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
        render: (item) => (
            <Flex >
                <ModalUser
                    editMode
                    user={item}
                    labelButton="Editar"
                    typeButton="link"
                />
                <ModalDelUser
                    user={item}
                />
            </Flex>
        ),
        width: '10%'
    },
];


export const useUserTable = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = (page = 0) => {
        dispatch(getUsersThunks(page));
    };

    return {
        COLUMNS,
        getUsers
    };
};