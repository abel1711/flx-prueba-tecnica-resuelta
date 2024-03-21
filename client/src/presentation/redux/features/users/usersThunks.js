import { userApi } from "@config";
import { setUsers, startFetch } from "@redux";

export const getUsersThunks = (page = 0) => {

    const url = `/users?_start=${page * 9}&_limit=9`;

    return async (dispatch, getState) => {

        dispatch(startFetch());

        const { filter } = getState().appState;

        let urlFilter = '';
        if (filter.status !== '' && filter.status !== undefined) urlFilter += `&status=${filter.status}`;
        if (filter.name !== '') urlFilter += `&q=${filter.name}`;

        setTimeout(async () => {
            try {

                /**
                 * se realizan dos consultas a la api para poder saber el total de documentos para poder hacer el paginado,
                 * ya que json-server no devuelve este dato, se utiliza Promise.all para disparar las dos promesas juntas.
                 */

                const [{ data: total }, { data }] = await Promise.all([
                    userApi.get(`/users?${urlFilter}`),
                    userApi.get(`${url}${urlFilter}`)
                ])
                dispatch(setUsers({ data, total: total.length, page: page + 1 }));
            } catch (error) {
                console.log(error);
            };
        }, 1000);
    };
};