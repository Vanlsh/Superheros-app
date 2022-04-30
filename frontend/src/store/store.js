import superherosSlice from "./reducers/superherosSlice";
import {configureStore, combineReducers} from "@reduxjs/toolkit";
import {superheroAPI} from "../services/superheroService"

const rootReducer = combineReducers({
    superheros: superherosSlice,
    [superheroAPI.reducerPath]: superheroAPI.reducer,
})
export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware => getDefaultMiddleware().concat(superheroAPI.middleware))
    })
}
