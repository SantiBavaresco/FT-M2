import { ADD_PRODUCT, DELETE_PRODUCT } from "../actions/types"

const initialState = {
  list: []
}

// REDUCE
function rootReducer(state = initialState, action){
    switch(action.type){
        case ADD_PRODUCT:
        {
            const updateList = [...state.list, action.payload];
            return { 
                ...state,
                 list: updateList,
            }
        }
        case DELETE_PRODUCT:
        {
            const filterList = state.list.filter(product => product.id !== action.payload);
            return { 
                ...state,
                 list: filterList,
            }
        }
        default:
            return state;
    }
}

export default rootReducer
