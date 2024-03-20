import { Input, Select, Space } from 'antd';
import './filter.css';
import { useDispatch } from 'react-redux';
import { setFilterByName, setFilterByStatus } from '../../redux/features/users/usersSlice';

export const Filter = () => {

    const dispatch = useDispatch();

    const handleFilterByStatus = (value) => {
        dispatch(setFilterByStatus(value));
    };

    const handleFilterByName = (value = '') => {
        dispatch(setFilterByName(value.trim()))
    };

    return (
        <div>
            <Space className='filter-container'>
                <Input.Search
                    autoComplete='off'
                    placeholder="Buscar usuarios"
                    allowClear
                    onSearch={handleFilterByName}
                    name='name'
                    style={{
                        width: 290,
                    }}
                />
                <Select
                    placeholder='Filtrar por estado'
                    style={{
                        width: '210px',
                    }}
                    onChange={handleFilterByStatus}
                    allowClear
                    options={[
                        {
                            value: 'active',
                            label: 'Activo',
                        },
                        {
                            value: 'inactive',
                            label: 'Inactivo',
                        },
                    ]}
                />

            </Space>
        </div>
    )
}
