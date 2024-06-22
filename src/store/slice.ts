import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CustomPackageState {
    selections: string[];
}

const initialState: CustomPackageState = {
    selections: [],
};

const customPackageSlice = createSlice({
    name: 'customPackage',
    initialState,
    reducers: {
        addSelection: (state, action: PayloadAction<string>) => {
            state.selections.push(action.payload);
        },
        removeSelection: (state, action: PayloadAction<string>) => {
            state.selections = state.selections.filter(item => item !== action.payload);
        },
    },
});

export const { addSelection, removeSelection } = customPackageSlice.actions;
export default customPackageSlice.reducer;
export type CustomPackageActions = typeof customPackageSlice.actions;
