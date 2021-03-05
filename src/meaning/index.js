import React, { Component } from 'react';
import { FlatList, View, TextInput, TouchableOpacity, BackHandler, Text } from 'react-native'
import style from './styles';

class Meaning extends Component {
    constructor(props) {
        super(props)
        this.state = {
            wordDetails: '',
            wordMeanings: [],
            partOfSpeech: [],
            loading: true,
            error: false
        }
    }

    getMeaning = () => {
        const word = this.props.route.params.word
        fetch(`https://wordsapiv1.p.rapidapi.com/words/${word}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "your api key here",
                "x-rapidapi-host": "wordsapiv1.p.rapidapi.com"
            }
        })
            .then(response => response.json())
            .then((res) => {
                //we can parse the result properly and create proper dictionary app
                var meanigs = [], usagesAs = []
                if (res.results && res.results.length > 0) {
                    res.results.forEach(result => {
                        meanigs.push(result.definition)
                        if (result.partOfSpeech)
                            usagesAs.push(result.partOfSpeech)
                    })
                    this.setState({ wordDetails: res.results, wordMeanings: meanigs, partOfSpeech: usagesAs, loading: false })
                } else {
                    this.setState({ loading: false, error: true })
                }
            })
            .catch(err => {
                this.setState({ loading: false, error: true })
            });
    }

    componentDidMount = () => {
        this.getMeaning()
        BackHandler.addEventListener("hardwareBackPress", this.showSearchPage)
    }

    componentWillUnmount = () => {
        BackHandler.removeEventListener("hardwareBackPress", this.showSearchPage)
    }

    showSearchPage = () => {
        this.props.navigation.goBack()
        return true
    }



    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={style.parentView}>
                    <Text style={{ fontWeight: 'bold' }}>Meaning {" "}</Text>
                </View>
                {!this.state.loading && !this.state.error && [this.state.wordMeanings && this.state.wordMeanings.length > 3 ? <View>
                    <View style={style.meaningView}>
                        <Text>1. {this.state.wordMeanings[0]} {" "}<Text>{'\n\t\t'}<Text style={{fontWeight:"bold"}}>Type: </Text>{this.state.partOfSpeech[0]}</Text></Text>
                        <Text>2. {this.state.wordMeanings[1]} {" "}<Text>{'\n\t\t'}<Text style={{fontWeight:"bold"}}>Type: </Text>{this.state.partOfSpeech[1]}</Text></Text>
                        <Text>3. {this.state.wordMeanings[2]} {" "}<Text>{'\n\t\t'}<Text style={{fontWeight:"bold"}}>Type: </Text>{this.state.partOfSpeech[2]}</Text></Text>
                    </View>
                </View>
                    :
                    <View style={style.oneResultView}>
                        <Text>1. {this.state.wordMeanings[0]} {" "}<Text>{'\n\t\t'}<Text style={{fontWeight:"bold"}}>Type: </Text>{this.state.partOfSpeech[0]}</Text></Text>
                    </View>
                ]}
                {this.state.loading && <Text>Loading...</Text>}
                {this.state.error && <Text>Sorry Couldnt found the word</Text>}
            </View>
        )
    }
}

export default Meaning;
