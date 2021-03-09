import { connect } from 'react-redux';
import View from './view';
import { getStarredList } from "../../reducers/starred";

const mapStateToProps = (state) => {
    return{
        starredList: getStarredList(state)
    }
}

const mapDispatchToProps = () => {

}

export default connect(mapStateToProps,null)(View);