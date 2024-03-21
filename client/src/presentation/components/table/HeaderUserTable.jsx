import { Filter } from '../filter/Filter'
import { ModalUser } from '../modalUser/ModalUser'

import './users-table.css'

export const HeaderUserTable = () => {
    return (
        <div className='header-table-container'>
            <Filter />
            <ModalUser /> {/**modal para crear usuario */}
        </div>
    )
}
