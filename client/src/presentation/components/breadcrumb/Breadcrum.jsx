import { Breadcrumb } from 'antd';
import './breadcrumb.css';

export const Breadcrum = ({ items = [] }) => {
    return (
        <Breadcrumb
        className='breadcrumb'
        items={items}
        />
    );
};
