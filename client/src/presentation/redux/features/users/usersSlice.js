import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoading: false,
    users: [],
    pagination: {
        current: 1,
        pageSize: 9,
        total: 0
    },
    filter: {
        name: '',
        status: '',
    }
};

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        startFetch: (state) => {
            state.isLoading = true;
        },
        setUsers: (state, action) => {
            state.users = action.payload.data;
            state.pagination = {
                current: action.payload.page,
                total: action.payload.total,
            };
            state.isLoading = false;
        },
        setUserEdited: (state, action) => {
            const { payload } = action;
            state.users = state.users.map(user => user.id === payload.id ? payload : user);
        },
        setFilterByName: (state, action) => {
            state.filter.name = action.payload
        },
        setFilterByStatus: (state, action) => {
            state.filter.status = action.payload
        },
    }
});

export const {
    setFilterByName,
    setFilterByStatus,
    setUserEdited,
    setUsers,
    startFetch,
} = usersSlice.actions;