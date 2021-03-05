import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
    suggerstionCellParent:{
        padding: 10, 
        borderWidth: 1, 
        borderRadius: 8, 
        margin: 10 
    },
    searchBarView: {
        flexDirection:'row', 
        height: 60, 
        alignItems:'center', 
        flex:0.1, 
        padding: 5, 
        marginBottom: 10, 
        elevation: 10, //weill create shadow in android
        borderBottomWidth: 1 
    },
    searchImage: {
        width: 20, 
        height: 20, 
        marginStart:20
    },
    searchBarTextSyle:{
        padding: 5, 
        fontSize: 20 
    },
    noResultView:{
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center' 
    }
})

export default style;