import { combineReducers } from "redux";
import SaveResults from './result';
import SaveSuggestions from "./suggetionList";
import StarredList from "./starred";
import { persistReducer } from "redux-persist";
import AsyncStorage from '@react-native-community/async-storage';

const reducer = combineReducers({
    SaveResults,
    SaveSuggestions,
    StarredList
})

const persistedConfig = {
    key: 'root',
    storage: AsyncStorage,
    blacklist: ['StarredList']
}

export default reducer //persistReducer(persistedConfig,reducer)