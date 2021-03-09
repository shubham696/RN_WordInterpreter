import * as actionType from "../util/constant";

export const saveWordDetails = (word) => {
    return(dispatch)=>{
        dispatch({type:actionType.WORD_DETAILS_LOADING, payload: true})
        fetch(`https://wordsapiv1.p.rapidapi.com/words/${word}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "561f6baa81msh446727651a2b6a2p12a12ajsndb5c495c0569",
                "x-rapidapi-host": "wordsapiv1.p.rapidapi.com"
            }
        })
            .then(response => response.json())
            .then((res) => {
                if(res.results != null){
                    dispatch({type: actionType.WORD_DETAILS_FETCH_SUCCESS, payload: res})
                }else{
                    dispatch({type: actionType.WORD_DETAILS_FETCH_FAILURE, payload: "Not Found"})
                }
            })
            .catch(err => {
                dispatch({type: actionType.WORD_DETAILS_FETCH_FAILURE, payload: err})
            });
    }
}

