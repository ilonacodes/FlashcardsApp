import React from "react";
import {StyleSheet, Text, View} from "react-native";

import {counterReducer, translateReducer} from "./reducers";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import {Flashcard} from "./Flashcard";

let store = createStore(translateReducer);

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <View style={styles.container}>
                    <Flashcard />
                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
