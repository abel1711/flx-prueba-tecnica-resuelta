import { Input, Select, Space } from 'antd';
import { useFilter } from '../../hooks';
import './filter.css';

export const Filter = () => {

    const {
        handleFilterByName,
        handleFilterByStatus
    } = useFilter();

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
