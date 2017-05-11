import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Alert,
    NetInfo,
    Platform,
    ToastAndroid,
    Image,
    Dimensions,
    TouchableOpacity,
} from 'react-native';
import MenuPopWindow from './component/menuPopwWindow'

const { width, height } = Dimensions.get('window');

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPop: false,
        }
    }

    render() {
        return (
            <View >
                <View style={{ justifyContent: 'center', alignSelf: 'flex-end', height: 50 }}>
                    <TouchableOpacity onPress={() => { this.setState({ showPop: !this.state.showPop }) }}>
                        <Text style={{ fontSize: 20, }}>
                            点我显示
                        </Text>
                    </TouchableOpacity>

                </View>
                <View style={{ position: 'absolute', top: 0, left: 0, width: width, height: height }}>
                    <MenuPopWindow width={60} height={100} show={this.state.showPop} closeModal={(show) => { this.setState({ showPop: show }) }} dataArray={['第一!!', '第二!!', '第三!!']} />
                </View>
                <Image source={require('./res/bg.png')} />
            </View>
        );
    }
}
