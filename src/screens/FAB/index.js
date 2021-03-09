import React, { Component } from 'react';
import {  TouchableOpacity, Image } from 'react-native'

class FABButton extends Component {
    render() {
        const {navigation} = this.props;
        return (
            <TouchableOpacity onPress={() => navigation.navigate("StarredList")} style={{justifyContent:'center',alignItems:'center', position: 'absolute', bottom: 10, right: 10, backgroundColor: '#666', height: 50, width: 50, borderRadius: 25 }}>
                <Image source={require('../../assets/star.png')} style={{height:20, width:20, tintColor: 'yellow'}} resizeMode="contain" />
            </TouchableOpacity>
        )
    }
}

export default FABButton;
