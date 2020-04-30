import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

class LoginContainer extends Component {
    render() {
        return (
            <View  style={styles.container}>
                <Text>{'Hello World!'}</Text>
                <Text>{'Here is login.'}</Text>
                <Text onPress={() => { Actions.push('Main'); }}>{'Go to main.'}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'yellow',
    },
});

export default LoginContainer;
