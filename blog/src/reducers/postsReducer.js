//reducers must be pure
//return only the computation of its args
//immutable: must not mutate state --> 
//if the same state is returned from the reducer, redux is not going to set a new state and re-render the react app
//default state to an empty array
//never return undefined inside a reducer
export default (state = [], action) => {
    switch(action.type) {
        case 'FETCH_POSTS': return action.payload;
        default: return state;
    }
}