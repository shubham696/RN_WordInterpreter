import * as actionType from '../util/constant';

const initialState = {
    wordSuggestions: []
}

const saveSuggestions = (state= initialState, action) => {
    switch (action.type) {
        case actionType.STORE_SUGGESTION:
            return {...state, wordSuggestions: action.payload}
            break;
    
        default:
            return state
            break;
    }
}

export default saveSuggestions;