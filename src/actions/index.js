import * as actionType  from '../util/constant';

export const saveSuggestionAction = (suggestionList) => {
    return{
        type: actionType.STORE_SUGGESTION,
        payload: suggestionList
    }
}

export const saveWordDeatilsAction = (wordDetails) => {
    return{
        type: actionType.STORE_RESULT,
        payload: wordDetails
    }
}

export const storeInStarredList = (word) => {
    return{
        type: actionType.STARRED_THE_WORD,
        payload: word
    }
}

export const removeFromStarredList = (word) => {
    return{
        type: actionType.UNSTARRED_THE_WORD,
        payload: word
    }
}