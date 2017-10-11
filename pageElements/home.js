import React from 'react';
import {
    AsyncStorage,
    ActivityIndicator,
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    ListView
} from 'react-native';
import styles from '../styles/style';
import {
    Actions,
} from 'react-native-router-flux';
import ScrollableTabView, {
    DefaultTabBar, 
} from 'react-native-scrollable-tab-view';



class home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            demo: ['tokuo'],
            dataSource: null,
            _data: null,
            isLoading: true,
            isLoadingMore: false,
        }
        //this.getProtectedQuote = this.getProtectedQuote.bind(this);
        this.demo_function = this.demo_function.bind(this);
        this._moreData = this._moreData.bind(this);
    }

    /*
    getProtectedQuote() {
        AsyncStorage.getItem('id_token').then((token) => {
            fetch('http://127.0.0.1/api/v1/verify', {
                method: 'GET',
                headers: { 'Authorization': 'Bearer ' + token }
            })
            .then((response) => response.text())
            .then((quote) => {
                Alert.alert('Chuck Norris Quote', quote)
            })
            .done();
            }
    )}
    */

    componentDidMount(){
        let ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2,
        });
        const data = ['aaa','bbb','ccc','aaa','bbb','ccc','aaa','bbb','ccc','aaa','bbb','ccc','aaa','bbb','ccc','aaa','bbb','ccc','aaa','bbb','ccc','aaa','bbb','ccc','aaa','bbb','ccc','aaa','bbb','ccc'];
        this.setState({
            dataSource: ds.cloneWithRows(data),
            _data: data,
            isLoading: false,
            isLoadingMore: false,
        });
    }

    _moreData() {
        let temp = this.state._data.concat('push');
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(temp),
            _data: temp,
            isLoadingMore: true
        })
    }

    demo_function() {
        let temp = this.state.demo;
        temp.push('tokuo');
        this.setState({ demo: temp });
    }
                                                                              
    render(){
        if (this.state.isLoading) {
            return (
                <View style={styles.container}>
                    <ActivityIndicator size="large" />
                </View>
            );
        } else {
            return(
                <ScrollableTabView>
                    <ScrollView tabLabel="1">
                        <Text>{this.state.demo}</Text>
                        <TouchableOpacity onPress={this.demo_function}>
                            <Text> {'\n'}demo_function </Text>
                        </TouchableOpacity>
                    </ScrollView>
                    <ListView tabLabel="2"
                        dataSource={this.state.dataSource}
                        renderRow={rowData => {
                            return (
                                <View>
                                    <Text>{rowData}</Text>
                                </View>
                            );
                        }}
                        onEndReached = {() => {
                            this.setState({isLoadingMore: true}, () => this._moreData())
                        }}
                        renderFooter = {() => {
                            return(
                                this.state.isLoadingMore &&
                                <View>
                                    <ActivityIndicator size='small'/>
                                </View>
                            );
                        }}
                    />
                </ScrollableTabView>
            );
        }
    }
}

export default home;