import { useId } from 'react';
import { Breadcrumb } from 'antd';
import './breadcrumb.css';

export const Breadcrum = ({ labels = [] }) => {

    return (
        <Breadcrumb className='breadcrumb'>
            {
                labels.map(label => (
                    <Breadcrumb.Item key={useId()}>{label}</Breadcrumb.Item>
                ))
            }
        </Breadcrumb>
    )
}
