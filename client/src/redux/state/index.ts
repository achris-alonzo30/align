import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface InitialStateProps {
    isSidebarCollapsed: boolean;
    isDarkMode: boolean;
}

const initialState: InitialStateProps = {
    isDarkMode: false,
    isSidebarCollapsed: false,
};

export const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers: {
        setIsSidebarCollapsed: (state, action: PayloadAction<boolean>) => {
            state.isSidebarCollapsed = action.payload;
        },
        setIsDarkMode: (state, action: PayloadAction<boolean>) => {
            state.isDarkMode = action.payload;
        },
    }
});

export const { setIsSidebarCollapsed, setIsDarkMode } = globalSlice.actions;

export default globalSlice.reducer;