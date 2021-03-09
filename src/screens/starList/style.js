import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    titleParentView: {
        flexDirection:'row',
        height: 60, 
        paddingBottom: 10, 
        marginBottom: 10, 
        borderColor: '#000', 
        borderBottomWidth: 1,
        justifyContent: 'center', 
        alignItems:'center'
    },
    itemView: {
        borderWidth:1, 
        borderRadius:10, 
        borderColor: '#000', 
        margin:10, 
        padding:10
    }
})

export default style;