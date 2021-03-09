import * as actionType from '../util/constant';

const initialState = {
    wordDetails: []
}

const saveResults = (state= initialState, action) => {
    switch (action.type) {
        case actionType.STORE_RESULT:
            return {...state, wordDetails: action.payload}
            break;
    
        default:
            return state
            break;
    }
}

export default saveResults;