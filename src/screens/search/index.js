import React, { Component } from 'react';
import { FlatList, TouchableOpacity, View, TextInput, BackHandler, Text,Image } from 'react-native'
import style from './styles';

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            suggestions: [],
            searchWord: "",
        }
    }

    fetchSuggestions = (value) => {
        this.setState({searchWord: value})
        const searchText = `^${value}.[a-z]$` //need to pass lowercase letter
        fetch(`https://wordsapiv1.p.rapidapi.com/words/?letterPattern=%${searchText}%&limit=100`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "561f6baa81msh446727651a2b6a2p12a12ajsndb5c495c0569",
                "x-rapidapi-host": "wordsapiv1.p.rapidapi.com"
            }
        })
            .then(response => response.json())
            .then((res)=>{
                this.setState({suggestions: res.results.data})
            })
            .catch(err => {
                console.error(err);
            });
    }

    componentDidMount = () => {
        BackHandler.addEventListener("hardwareBackPress", this.exitApp)
    }

    componentWillUnmount = () => {
        BackHandler.removeEventListener("hardwareBackPress", this.exitApp)
    }

    exitApp = () => {
        //we can show alert here
        BackHandler.exitApp()
    }

    renderCell = (item, index) => {
        return (
            <TouchableOpacity onPress={()=>this.showMeaning(item)} style={style.suggerstionCellParent}>
                <Text numberOfLines={1} ellipsizeMode="tail">{item}</Text>
            </TouchableOpacity>
        )
    }

    showMeaning = (value) => {
        const word = value && value.length > 0 ? value : this.state.searchWord
        this.props.navigation.navigate("ShowMeaning",{word })
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={style.searchBarView}>
                    <Image
                        source={require('../../assets/search_icon.png')}
                        style={style.searchImage}
                        resizeMode="contain"
                    />
                    <TextInput
                            placeholder="Search Here"
                            placeholderTextColor={"#666"}
                            returnKeyType="search"
                            style={style.searchBarTextSyle}
                            multiline={false}
                            onSubmitEditing={this.showMeaning}
                            onChangeText={(txt) => this.fetchSuggestions(txt.toLowerCase())}
                        />
                </View>
                {this.state.suggestions && this.state.suggestions.length > 0
                    ?
                    <View style={{ flex: 1 }}>
                        <FlatList
                            data={this.state.suggestions}
                            extraData={this.state.suggestions}
                            renderItem={({ item, index }) =>
                                this.renderCell(item)
                            }
                            keyExtractor={(item, index) => item }
                        />
                    </View>
                    :
                    <View style={style.noResultView}>
                        <Text  >Please Enter Word To Check Meaning{''}</Text>
                    </View>
                }
            </View>
        )
    }
}

export default Search;