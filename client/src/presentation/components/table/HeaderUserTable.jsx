import { ModalUser, Filter } from '@components';

import './users-table.css';

export const HeaderUserTable = () => {
    return (
        <div className='header-table-container'>
            <Filter />
            <ModalUser /> {/**modal para crear usuario */}
        </div>
    );
};
