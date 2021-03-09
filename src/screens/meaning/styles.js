import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
    parentView:{
        flexDirection:'row',
        height: 60, 
        paddingBottom: 10, 
        marginBottom: 10, 
        borderColor: '#000', 
        borderBottomWidth: 1,
        justifyContent: 'center', 
        alignItems:'center'
    },
    titleView: {
        // marginStart: '50%',
        alignItems: 'center', 
    },
    meaningView: {
        flex: 1, 
        marginHorizontal: 20, 
        marginTop: 20, 
        marginBottom: 30
    },
    oneResultView:{
        flex: 1, 
        marginHorizontal: 20, 
        marginTop: 20, 
        marginBottom: 30
    }
})

export default style;