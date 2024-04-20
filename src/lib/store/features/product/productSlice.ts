import { createSlice } from '@reduxjs/toolkit';

export interface ProductState {
    items: string[];
}

const initialState: ProductState = {
    items: [],
};

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        add: (state, action) => {
            // Magic
            // Immer will handle the mutation
            state.items.push(action.payload);
        },
    },
});

// Action creators are generated for each case reducer function
export const { add } = productSlice.actions;

export default productSlice.reducer;
