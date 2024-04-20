import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface CartState {
    items: string[];
}

const initialState: CartState = {
    items: [],
};

export const cartSlice = createSlice({
    name: 'cart',
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
export const { add } = cartSlice.actions;

export default cartSlice.reducer;
