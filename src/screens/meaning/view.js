import React, { Component } from 'react';
import { FlatList, View, TextInput, TouchableOpacity, BackHandler, Text, ActivityIndicator } from 'react-native'
import style from './styles';
import FABButton from '../FAB';

class Meaning extends Component {
    constructor(props) {
        super(props)
        this.state = {
            word: '',
            wordDetails: '',
            wordMeanings: [],
            partOfSpeech: [],
            loading: true,
            error: false
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        // if(nextProps.wordDetails && nextProps.wordDetails.length > 0 && nextProps.wordDetails !== prevState.wordDetails){
        //     return ({wordDetails: nextProps.wordDetails})
        // }
        if(nextProps.loading !== prevState.loading && !nextProps.loading){
            if(nextProps.wordDetails && nextProps.wordDetails !== prevState.wordDetails){
                return({wordDetails: nextProps.wordDetails})
            }else{
                return({error: nextProps.error})
            }
        }
        return null;
    }

    componentDidUpdate = (prevProps, prevState) => {
        if(prevProps.wordDetails != this.props.wordDetails){
            this.saveResult(this.props.wordDetails)
        }
    }

    saveResult = (res) => {
        //parsing need to be handle more clearely
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
    }

    getMeaning = () => {
        const {route, saveWordDetails} = this.props;
        const word = route.params.word
        saveWordDetails(word)
    }

    componentDidMount = () => {
        this.setState({word: this.props.route.params.word})
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

    starTheWord = () => {
        const {onStaredClicked, starredList, removeStarredWord} = this.props;
        if(starredList && starredList.indexOf(this.state.word) < 0){
            // this.props.dispatch(storeInStarredList(this.state.wo))
            onStaredClicked(this.state.word);
        }else{
            removeStarredWord(this.state.word);
        }
    }

    showStarList = () => {
        const {navigation} = this.props;
        navigation.navigate("StarredList")
    }



    render() {
        const {starredList,loading,error} = this.props;
        if(loading){
            return(
                <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                    <ActivityIndicator size="large" color="#000"/>
                    <Text>Loading...</Text>
                    <FABButton navigation={this.props.navigation}/>
                </View>
            )
        }else if(error && error.length > 0){
            return(
                <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                    <Text>{error=="Not Found" ? 'Please Search Correct word' : 'Please come again, server under maintainance'}</Text>
                    <FABButton navigation={this.props.navigation}/>
                </View>
            )
        }else{
            return (
                <View style={{ flex: 1 }}>
                    <View style={style.parentView}>
                    <View style={style.titleView}>
                        <Text style={{ fontWeight: 'bold' }}>{this.state.word} {" "}</Text>
                    </View>
                    <TouchableOpacity style={{position:'absolute', right: 10}} onPress={this.starTheWord}>
                        <Text>{starredList && starredList.length > 0 && starredList.indexOf(this.state.word) >= 0 ? "Un-Star It" : "Star It!"}</Text>
                    </TouchableOpacity>
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
                    <FABButton navigation={this.props.navigation}/>
                </View>
            )
        }
    }
}

export default Meaning;
