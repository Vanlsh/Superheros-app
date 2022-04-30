import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    superhero: {},
    page: 1
}

const superherosSlice = createSlice({
    name: 'superheros',
    initialState,
    reducers: {
        setPage(state,action){
            state.page = action.payload
        },
        setSuperhero(state,action){
            state.superhero = action.payload
        }
    },
})

export default superherosSlice.reducer;
export const {setPage,setSuperhero} = superherosSlice.actions