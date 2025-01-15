import { configureStore } from "@reduxjs/toolkit";
import venueReducer from './slices/venueSlice';
import avReducer from './slices/avSlice';
import mealsReducer from './slices/mealsSlice';

export default configureStore({
    reducer: {
        venue: venueReducer,
        av: avReducer,
        meals: mealsReducer
    }
});