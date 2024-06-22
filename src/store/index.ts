import { configureStore } from '@reduxjs/toolkit';
import customPackageReducer from './slice';

export const store = configureStore({
    reducer: {
        customPackage: customPackageReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
