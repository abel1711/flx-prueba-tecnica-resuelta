import { userApi } from "../../../api/user-api";
import { setUsers, startFetch } from "./usersSlice"



export const getUsersThunks = (page = 0) => {

    const url = `/users?_start=${page * 10}&_limit=10`;

    return async (dispatch, getState) => {

        dispatch(startFetch());

        const { filter } = getState().appState;

        let urlFilter = '';
        if (filter.status !== '' && filter.status !== undefined) urlFilter += `&status=${filter.status}`;
        if (filter.name !== '') urlFilter += `&q=${filter.name}`;

        setTimeout(async () => {
            try {

                const [{ data: total }, { data }] = await Promise.all([
                    userApi.get(`/users?${urlFilter}`),
                    userApi.get(`${url}${urlFilter}`)
                ])
                dispatch(setUsers({ data, total: total.length, page: page + 1 }));
            } catch (error) {
                console.log(error)
            }
        }, 500);
    }
}