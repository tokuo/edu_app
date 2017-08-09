import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import {
    Actions,
} from 'react-native-router-flux';
import styles from '../styles/style';

const PageA = () => (
    <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
        <TouchableOpacity onPress={Actions.PageB}>
            <Text>Link</Text>
        </TouchableOpacity> 
    </View>
);

export default PageA;