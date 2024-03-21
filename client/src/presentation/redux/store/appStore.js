import { configureStore } from '@reduxjs/toolkit';
import { usersSlice } from '@redux';

export const store = configureStore({
    reducer: {
        appState: usersSlice.reducer
    },
});

