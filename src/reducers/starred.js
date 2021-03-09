import * as actionType from "../util/constant";
const initialState = {
    starredList: []
}

export default saveWordInStarredList = (state=initialState, action) => {
    switch (action.type) {
        case actionType.STARRED_THE_WORD:
            return{...state, starredList: [...state.starredList,action.payload]}
            break;
        case actionType.UNSTARRED_THE_WORD:
            const list = state.starredList.filter(item => item !== action.payload)
            return{...state, starredList: list}
        default:
            return state
            break;
    }
}

//selector
export const getStarredList = (state) => {
    return state.StarredList.starredList
}