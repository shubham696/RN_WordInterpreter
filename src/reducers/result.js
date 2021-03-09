import * as actionType from '../util/constant';

const initialState = {
    wordDetails: [],
    loading: null,
    error: null
}

const getSavedResults = (state= initialState, action) => {
    switch (action.type) {
        case actionType.STORE_RESULT:
            return {...state, wordDetails: action.payload}
            break;
        case actionType.WORD_DETAILS_LOADING:
            return{...state, loading: true}
        case actionType.WORD_DETAILS_FETCH_SUCCESS:
            return{...state, loading: false, wordDetails: action.payload, error: null}
        case actionType.WORD_DETAILS_FETCH_FAILURE:
            return {...state, loading: false, error: action.payload, wordDetails: null}
        default:
            return state
            break;
    }
}

export const selectWordDetails = (state) =>{
    return state.SaveResults.wordDetails
}

export const selectLoadingState = (state) => {
    return state.SaveResults.loading
}

export const selectErrorState = (state) => {
    return state.SaveResults.error
}

export default getSavedResults;