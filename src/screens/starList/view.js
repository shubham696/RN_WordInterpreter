import React,{ Component } from "react";
import { View, Text, FlatList } from "react-native";
import style from './style';

class StarredList extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }

    render(){
        const {starredList} = this.props;
        return(
            <View style={{flex: 1}}>
                <View style={style.titleParentView}>
                        <Text style={{ fontWeight: 'bold' }}>Starred Words {" "}</Text>
                    </View>
                <FlatList
                    data={starredList}
                    renderItem={(item,index)=>
                        <View style={style.itemView}>
                            <Text>{item.item}</Text>
                        </View>
                    }
                    keyExtractor={(item,index)=>`${index}`}
                />
            </View>
        )
    }
}

export default StarredList;