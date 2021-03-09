import { connect } from "react-redux";
import { storeInStarredList, removeFromStarredList } from "../../actions/index";
import { getStarredList } from "../../reducers/starred";
import View from './view';

const mapStateToProps = (state) => {
    return{
        starredList: getStarredList(state),
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        onStaredClicked: (word) => {
            dispatch(storeInStarredList(word))
        },
        removeStarredWord: (word) => {
            dispatch(removeFromStarredList(word))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(View);
