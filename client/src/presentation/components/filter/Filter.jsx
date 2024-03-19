import { AutoComplete, Input, Select, Space } from 'antd';
import './filter.css';

export const Filter = () => {
    return (
        <div>
            <Space className='filter-container'>
                <Input.Search
                    placeholder="Buscar usuarios"
                    onSearch={() => { }}
                    style={{
                        width: 290,
                    }}
                />
                <Select placeholder='Filtrar por estado' style={{
                    width: '210px'
                }}>
                    <Select.Option value='active'>Activo</Select.Option>
                    <Select.Option value='inactive'>Inactivo</Select.Option>
                </Select>
            </Space>
        </div>
    )
}
