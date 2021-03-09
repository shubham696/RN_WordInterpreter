import { connect } from "react-redux";
import { storeInStarredList, removeFromStarredList } from "../../actions/index";
import {saveWordDetails} from '../../actions/wordDetails';
import { getStarredList } from "../../reducers/starred";
import { selectWordDetails, selectErrorState, selectLoadingState } from "../../reducers/result";
import View from './view';

const mapStateToProps = (state) => {
    return{
        starredList: getStarredList(state),
        wordDetails: selectWordDetails(state),
        loading: selectLoadingState(state),
        error: selectErrorState(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        onStaredClicked: (word) => {
            dispatch(storeInStarredList(word))
        },
        removeStarredWord: (word) => {
            dispatch(removeFromStarredList(word))
        },
        saveWordDetails: (word) => {
            dispatch(saveWordDetails(word))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(View);
