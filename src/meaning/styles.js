import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
    parentView:{
        height: 60, 
        paddingBottom: 10, 
        marginBottom: 10, 
        justifyContent: 'center', 
        alignItems: 'center', 
        borderColor: '#000', 
        borderBottomWidth: 1
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